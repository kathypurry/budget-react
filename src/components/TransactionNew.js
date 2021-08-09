import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const TransactionEntry = (props) => {
  const [newTransaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
  });

  const handleText = (e) => {
    setTransaction({
      ...newTransaction,
      [e.target.id]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTransaction(newTransaction);
    props.history.push("/transactions");
  };

  return (
    <div>
      <h1>Add a New Transaction</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          value={newTransaction.date}
          type="text"
          onChange={handleText}
          placeholder="Date"
          required
        />
        <br/>
        <label htmlFor="name">Income or Expense?</label>
        <input
          id="name"
          value={newTransaction.name}
          type="text"
          onChange={handleText}
          placeholder="Income/Expense"
        />
        <br/>
        <label htmlFor="amount">Amount</label>
        <textarea
          id="amount"
          value={newTransaction.amount}
          type="number"
          onChange={handleText}
          p
        />
        <br/>
        <input
          id="from"
          value={newTransaction.from}
          type="text"
          onChange={handleText}
          placeholder="From"
        />
        <br/>
        <input type="submit" />
      </form>
    </div>
  );
};

export default withRouter(TransactionEntry);
