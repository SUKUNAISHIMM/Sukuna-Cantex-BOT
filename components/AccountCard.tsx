import React from "react";

export default function AccountCard({ account }) {
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-bold">{account.name}</h2>
      <p>ID: {account.id}</p>
      <p>Status: {account.auto_swap_enabled ? "Active" : "Disabled"}</p>
    </div>
  );
}
