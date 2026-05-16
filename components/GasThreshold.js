import React, { useEffect, useState } from "react";
import { getGasThreshold } from "../lib/api";

export default function GasThreshold() {
  const [threshold, setThreshold] = useState(null);

  useEffect(() => {
    getGasThreshold().then(setThreshold);
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h3 className="text-md font-semibold">Global Gas Threshold</h3>
      <p>{threshold ? `${threshold.threshold} CC` : "Loading..."}</p>
    </div>
  );
}
