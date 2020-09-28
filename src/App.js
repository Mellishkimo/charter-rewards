import React from 'react';
import './App.css';

import { calculateMonthlyRewards, calculateTotalRewards } from './components/RewardsCalculator'
import { salesRecords } from './data/SalesRecords'
import RecordsTable from './components/RecordsTable'
import HistoryTable from './components/HistoryTable'

function App() {
  return (
    <div>
        <h1>Instructions</h1>
        <p>A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.</p>
        <p>A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50
           in each transaction.</p>
        <p>(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points)</p>
        <p>Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.</p>
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
