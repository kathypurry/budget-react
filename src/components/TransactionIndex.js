import { useState, useEffect } from "react";
import React from "react";
import { useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API = apiURL();

function TransactionIndex() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        const { data } = response;
        setTransaction(data);
      })
      .catch((e) => {
        history.push("/page-not-found");
      });
  }, [index, history]);

  return (
    <div>
      <h2>{transaction.date}</h2>
      <h3>{transaction.name}</h3>
      <h3>{transaction.amount}</h3>
      <h3>{transaction.from}</h3>
    </div>
  );
}

export default withRouter(TransactionIndex);
