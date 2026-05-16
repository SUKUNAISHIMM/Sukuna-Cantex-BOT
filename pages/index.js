import React, { useEffect, useState } from "react";
import { getAccounts } from "../lib/api";
import AccountCard from "../components/AccountCard";
import GasThreshold from "../components/GasThreshold";

export default function Home() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAccounts().then(setAccounts);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Cantex Trading Bot Dashboard</h1>
      <GasThreshold />
      <div className="grid grid-cols-3 gap-4 mt-6">
        {accounts.map((acc) => (
          <AccountCard key={acc.id} account={acc} />
        ))}
      </div>
    </div>
  );
  }
