export async function getAccounts() {
  const res = await fetch("http://localhost:8000/accounts");
  return res.json();
}

export async function getSwapHistory(accountId: number) {
  const res = await fetch(`http://localhost:8000/swap-history/${accountId}`);
  return res.json();
}

export async function getGasThreshold() {
  const res = await fetch("http://localhost:8000/gas-threshold");
  return res.json();
}
