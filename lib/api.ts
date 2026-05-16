

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

export async function getAccounts() {
  const res = await fetch(`${API_BASE}/accounts`);
  return res.json();
}

export async function getSwapHistory(accountId: number) {
  const res = await fetch(`${API_BASE}/swap-history/${accountId}`);
  return res.json();
}

export async function getGasThreshold() {
  const res = await fetch(`${API_BASE}/gas-threshold`);
  return res.json();
}
