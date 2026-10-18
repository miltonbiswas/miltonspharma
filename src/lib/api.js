const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || import.meta.env?.VITE_API_URL || "https://miltons-pharma-api.vercel.app/api";

export async function fetchFromAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}