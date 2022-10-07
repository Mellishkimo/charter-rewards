import React, { useState } from 'react'
import { Table } from 'reactstrap'
import { salesRecords } from '../data/SalesRecords'
import { calculateRewards } from '../components/RewardsCalculator'
import { tableSort } from '../utils'
import SortArrows from './SortArrows'

const HistoryTable = () => {
    const [currentSort, setCurrentSort] = useState('dateDown');

    const sortDate = () => {
        let nextSort

        if (currentSort === 'dateDown') nextSort = 'dateUp'
        else nextSort = 'dateDown'

        setCurrentSort(nextSort);
    }

    const sortCustomer = () => {
        let nextSort

        if (currentSort === 'customerDown') nextSort = 'customerUp'
        else nextSort = 'customerDown'

        setCurrentSort(nextSort);
    }

    const sortPurchaseAmount = () => {
        let nextSort

        if (currentSort === 'purchaseAmountDown') nextSort = 'purchaseAmountUp'
        else nextSort = 'purchaseAmountDown'

        setCurrentSort(nextSort);
    }

    const sortReward = () => {
        let nextSort

        if (currentSort === 'rewardDown') nextSort = 'rewardUp'
        else nextSort = 'rewardDown'

        setCurrentSort(nextSort);
    }

        return (
            <Table>
                <thead>
                    <tr>
                        <th onClick={sortDate}>
                            Date
                            <SortArrows column={'date'} currentSort={currentSort} />
                        </th>
                        <th onClick={sortCustomer}>
                            Customer
                            <SortArrows column={'customer'} currentSort={currentSort} />
                        </th>
                        <th onClick={sortPurchaseAmount}>
                            Purchase Amt
                            <SortArrows column={'purchaseAmount'} currentSort={currentSort} />
                        </th>
                        <th onClick={sortReward}>
                            Reward
                            <SortArrows column={'reward'} currentSort={currentSort} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {salesRecords.sort(tableSort[currentSort].fn).map((row, i) => {
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

export default HistoryTable