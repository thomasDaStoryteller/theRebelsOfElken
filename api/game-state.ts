import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const GAME_KEY = "game:global";

export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {
    try {
      const state = await redis.get(GAME_KEY);
      return res.status(200).json({ state: state ?? null });
    } catch (error) {
      console.error("Failed to fetch game state:", error);
      return res.status(500).json({ error: "Failed to fetch game state" });
    }
  }

  if (req.method === "POST") {
    try {
      await redis.set(GAME_KEY, req.body);
      return res.status(200).json({ ok: true });
    } catch (error) {
      console.error("Failed to save game state:", error);
      return res.status(500).json({ error: "Failed to save game state" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
