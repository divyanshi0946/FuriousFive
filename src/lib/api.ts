export const BASE_URL = "https://optimistic-focus-flow-prime.base44.app";

export function getToken() {
  return localStorage.getItem("token");
}

export async function authFetch(url: string, options: RequestInit = {}) {
  const token = getToken();

  return fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });
}

// Helper for public data integration
export async function publicFetch(endpoint: string) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);
    if (!res.ok) throw new Error(`Fetch failed: ${res.statusText}`);
    return await res.json();
  } catch (err) {
    console.error(`Public fetch error (${endpoint}):`, err);
    return null;
  }
}
