import React from "react";

export default function HistoryTable({ history }) {
  return (
    <table className="min-w-full border-collapse border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2">Direction</th>
          <th className="border px-4 py-2">Input</th>
          <th className="border px-4 py-2">Output</th>
          <th className="border px-4 py-2">Status</th>
          <th className="border px-4 py-2">Executed At</th>
        </tr>
      </thead>
      <tbody>
        {history.map((swap, idx) => (
          <tr key={idx}>
            <td className="border px-4 py-2">{swap.direction}</td>
            <td className="border px-4 py-2">{swap.input_amount}</td>
            <td className="border px-4 py-2">{swap.output_amount}</td>
            <td className="border px-4 py-2">{swap.status}</td>
            <td className="border px-4 py-2">{swap.executed_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
