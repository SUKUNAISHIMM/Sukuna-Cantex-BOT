import React, { useEffect, useState } from "react";
import { getAccounts } from "../lib/api";
import AccountCard from "../components/AccountCard";

export default function AccountsPage() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAccounts().then(setAccounts);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Accounts</h1>
      <div className="grid grid-cols-3 gap-4">
        {accounts.map((acc) => (
          <AccountCard key={acc.id} account={acc} />
        ))}
      </div>
    </div>
  );
}
