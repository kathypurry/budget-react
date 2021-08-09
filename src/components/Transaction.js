import React from "react";
import { Link } from "react-router-dom";

export default function Transaction({ transaction, index }) {

  return (
    <div className="logTable">
      <Link to={`/transactions/${index}`}>{transaction.date}</Link>{" "}
      {transaction.name} : ${transaction.amount} : {transaction.from}{" "}
    </div>
  );
}
