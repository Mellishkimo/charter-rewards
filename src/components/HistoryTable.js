import React from 'react'
import { Table } from 'reactstrap'
import { salesRecords } from '../data/SalesRecords'
import { calculateRewards } from '../components/RewardsCalculator'

class HistoryTable extends React.Component {
    render () {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Customer</th>
                        <th>Purchase Amount</th>
                        <th>Rewards Earned</th>
                    </tr>
                </thead>
                <tbody>
                    {salesRecords.map((row, i) => {
                        return (
                            <tr key={i}>
                                <td>{row.date}</td>
                                <td>{row.customer}</td>
                                <td>${row.purchaseAmount}</td>
                                <td>{calculateRewards(row.purchaseAmount)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}

export default HistoryTable