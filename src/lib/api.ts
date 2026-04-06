export const BASE_URL = "https://optimistic-focus-flow-prime.base44.app";

export function getToken() {
  return localStorage.getItem("token");
}

export async function authFetch(url: string, options: any = {}) {
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
