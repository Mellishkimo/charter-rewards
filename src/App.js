import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import { calculateMonthlyRewards, calculateTotalRewards } from './components/RewardsCalculator'
import RecordsTable from './components/RecordsTable'
import HistoryTable from './components/HistoryTable'

function App() {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get("/transactions").then(res => {
      setTransactions(res.data.transactions);
      setLoading(false);
    })
  }, [])

  return (
    <div className='tablesContainer'>
      {loading ? (
        <h1>Loading...</h1>
      )
      : (
          <React.Fragment>
            <h1>Transaction History</h1>
            <HistoryTable />
            <h1>June Rewards</h1>
            <RecordsTable data={calculateMonthlyRewards(6, transactions)} />
            <h1>July Rewards</h1>
            <RecordsTable data={calculateMonthlyRewards(7, transactions)} />
            <h1>August Rewards</h1>
            <RecordsTable data={calculateMonthlyRewards(8, transactions)} />
            <h1>Total Rewards</h1>
            <RecordsTable data={calculateTotalRewards(transactions)} />
          </React.Fragment>
      )
      }
    </div>
  )
}

export default App;
