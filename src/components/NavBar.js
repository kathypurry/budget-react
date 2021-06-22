import { Link } from "react-router-dom";
import React from 'react'

export default function NavBar() {
  return (
    <nav>
      <h1>Welcome to KathyPurry's Pokemon Trainer Budget App!</h1>
      <h3>What would you like to see?</h3>

      <button>
        <Link to="/">Home</Link>
      </button>

      <button>
        <Link to="/transactions">Transactions</Link>
      </button>

      <button>
        <Link to="/transactions/new">New Transactions</Link>
      </button>
    </nav>
  );
}
