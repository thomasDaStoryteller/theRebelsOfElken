import { Redis } from "@upstash/redis";
import { CampaignState } from "../src/types";

// Support both KV_* (Upstash standard) and UPSTASH_REDIS_* naming conventions
const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

const STATE_KEY = "campaign-state";

// Enable CORS
function setCorsHeaders(res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req: any, res: any) {
  setCorsHeaders(res);

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    if (req.method === "GET") {
      // Fetch current state from Upstash
      const state = await redis.get<CampaignState>(STATE_KEY);

      if (!state) {
        // Return null if no state exists (client will use initial state)
        return res.status(200).json({ state: null });
      }

      return res.status(200).json({ state });
    }

    if (req.method === "PUT") {
      // Update state in Upstash
      const { state } = req.body;

      if (!state || typeof state !== "object") {
        return res.status(400).json({ error: "Invalid state data" });
      }

      // Basic validation - check for required fields
      if (
        typeof state.turn !== "number" ||
        !Array.isArray(state.deck) ||
        !Array.isArray(state.completed)
      ) {
        return res.status(400).json({ error: "Invalid state structure" });
      }

      await redis.set(STATE_KEY, state);

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
}

