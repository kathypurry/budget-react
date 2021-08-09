import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { apiURL } from "./util/apiURL";
import axios from "axios";
import NavBar from "./components/NavBar.js";
import Show from "./pages/Show.js";
import New from "./pages/New.js";
import Pokemon from "./images/Pokemon.png";
import TransactionIndex from "./components/TransactionIndex";

const API_BASE = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    axios.post(`${API_BASE}/transactions/`, newTransaction).then((response) => {
      setTransactions([...transactions, newTransaction]);
    });
  };

  const deleteTransaction = (index) => {
    axios.delete(`${API_BASE}/transactions/${index}`).then((response) => {
      const updateArray = [...transactions];
      updateArray.splice(index, 1);
      setTransactions(updateArray);
    });
  };

  const updateTransaction = (updatedTransaction, index) => {
    axios.put(`${API_BASE}/transactions/${index}`).then((response) => {
      const updateArray = [...transactions];
      updateArray[index] = updatedTransaction;
      setTransactions(updateArray);
    });
  };

  useEffect(() => {
    axios.get(`${API_BASE}/transactions`).then((response) => {
      const { data } = response;
      setTransactions(data);
    });
  }, []);

  return (
    <div className="App" style={{ backgroundImage: Pokemon }}>
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/transactions">
              <Show
                transactions={transactions}
              />
            </Route>
            {/* <Route exact path="/transactions/:id">
              <TransactionIndex />
            </Route> */}
            <Route path="/transactions/new">
              <New addTransaction={addTransaction} />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
