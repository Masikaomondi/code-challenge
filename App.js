import react from "react";
import React from "react";
import AccountContainer from "./AccountContainer";
import React,{useEffect,useState} from 'react';
function App() {
  const[transactions.setTransactions]=useState{[]}
  useEffect9(()=>
  fetch("http://localhost:8001/transactions")
  .then(r=>r.json())
  .then(transactions=>setTransactions{transactions})
  ).[])
  console.log(transactions)
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;
