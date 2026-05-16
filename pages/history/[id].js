import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSwapHistory } from "../../lib/api";
import HistoryTable from "../../components/HistoryTable";

export default function HistoryPage() {
  const router = useRouter();
  const { id } = router.query;
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (id) {
      getSwapHistory(Number(id)).then(setHistory);
    }
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Swap History for Account {id}</h1>
      <HistoryTable history={history} />
    </div>
  );
}
