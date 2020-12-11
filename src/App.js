import React from 'react';
import './App.css';

import { calculateMonthlyRewards, calculateTotalRewards } from './components/RewardsCalculator'
import { salesRecords } from './data/SalesRecords'
import RecordsTable from './components/RecordsTable'
import HistoryTable from './components/HistoryTable'

function App() {
  return (
    <div className='tablesContainer'>
          <h1>Transaction History</h1>
          <HistoryTable />
          <h1>June Rewards</h1>
          <RecordsTable data={calculateMonthlyRewards(6, salesRecords)} />
          <h1>July Rewards</h1>
          <RecordsTable data={calculateMonthlyRewards(7, salesRecords)} />
          <h1>August Rewards</h1>
          <RecordsTable data={calculateMonthlyRewards(8, salesRecords)} />
          <h1>Total Rewards</h1>
          <RecordsTable data={calculateTotalRewards(salesRecords)} />
    </div>
  )
}

export default App;
