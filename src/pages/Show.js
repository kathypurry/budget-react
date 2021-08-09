import Transactions from "../components/Transactions.js";
import { useState, useEffect } from 'react';
import React from 'react'

export default function Show({ transactions }) {
  let [balance, setBalance] = useState(10000);

  useEffect(() => {
    let tranArray = transactions
      .map((transaction) => Number(transaction.amount))
      .reduce((a, b) => a + b, 10000);
    setBalance(tranArray);
  }, [transactions]);

  return (
    <div className="Show">
      <h2>Transaction Log</h2>
      {
      balance > 0
      ? <h3 style={{ color: "green" }}>{`Account Balance: $${balance.toLocaleString("en-US")}`}</h3>
      :
      <h3 style={{ color: "red" }}>{`Account Balance: $${balance.toLocaleString("en-US")}`}</h3>}
      <Transactions transactions={transactions} />
    </div>
  );
}
