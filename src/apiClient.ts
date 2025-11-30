import { CampaignState } from "./types";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || window.location.origin;

const REQUEST_TIMEOUT = 10000; // 10 seconds

async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeout: number
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("Request timeout");
    }
    throw error;
  }
}

export async function fetchState(): Promise<CampaignState | null> {
  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/api/state`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      REQUEST_TIMEOUT
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch state: ${response.statusText}`);
    }

    const data = await response.json();
    return data.state;
  } catch (error) {
    console.error("Error fetching state:", error);
    throw error;
  }
}

export async function updateState(
  state: CampaignState
): Promise<CampaignState> {
  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/api/state`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ state }),
      },
      REQUEST_TIMEOUT
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.error || `Failed to update state: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.state;
  } catch (error) {
    console.error("Error updating state:", error);
    throw error;
  }
}


