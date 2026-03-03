const UPSTASH_URL =
  process.env.KV_REST_API_URL ||
  process.env.UPSTASH_REDIS_REST_URL ||
  "";
const UPSTASH_TOKEN =
  process.env.KV_REST_API_TOKEN ||
  process.env.UPSTASH_REDIS_REST_TOKEN ||
  "";
const STATE_KEY = "campaign-state";

async function redisGet(key) {
  const res = await fetch(`${UPSTASH_URL}/get/${encodeURIComponent(key)}`, {
    headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
  });
  if (!res.ok) throw new Error(`Redis GET failed: ${res.status}`);
  const data = await res.json();
  if (data.result === null || data.result === undefined) return null;
  return typeof data.result === "string" ? JSON.parse(data.result) : data.result;
}

async function redisSet(key, value) {
  const res = await fetch(`${UPSTASH_URL}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(["SET", key, JSON.stringify(value)]),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Redis SET failed: ${res.status} - ${text}`);
  }
}

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

module.exports = async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    return res.status(500).json({ error: "Missing Redis env vars" });
  }

  try {
    if (req.method === "GET") {
      const state = await redisGet(STATE_KEY);
      return res.status(200).json({ state: state ?? null });
    }

    if (req.method === "PUT") {
      const { state } = req.body;

      if (!state || typeof state !== "object") {
        return res.status(400).json({ error: "Invalid state data" });
      }

      if (
        typeof state.turn !== "number" ||
        !Array.isArray(state.deck) ||
        !Array.isArray(state.completed)
      ) {
        return res.status(400).json({ error: "Invalid state structure" });
      }

      await redisSet(STATE_KEY, state);
      return res.status(200).json({ success: true, state });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({
      error: "Internal server error",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
