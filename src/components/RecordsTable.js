import React, { useState } from 'react'
import { Table } from 'reactstrap'
import { tableSort } from '../utils'
import SortArrows from './SortArrows'

const RecordsTable = (data) => {
    const [currentSort, setCurrentSort] = useState('customerDown');

    const sortCustomer = () => {
        let nextSort

        if (currentSort === 'customerDown') nextSort = 'customerUp'
        else nextSort = 'customerDown'

        setCurrentSort(nextSort);
    }

    const sortPurchases = () => {
        let nextSort

        if (currentSort === 'purchasesDown') nextSort = 'purchasesUp'
        else nextSort = 'purchasesDown'

        setCurrentSort(nextSort);
    }

    const sortPurchaseTotal = () => {
        let nextSort

        if (currentSort === 'purchaseTotalDown') nextSort = 'purchaseTotalUp'
        else nextSort = 'purchaseTotalDown'

        setCurrentSort(nextSort);
    }

    const sortRewards = () => {
        let nextSort

        if (currentSort === 'rewardsDown') nextSort = 'rewardsUp'
        else nextSort = 'rewardsDown'

        setCurrentSort(nextSort);
    }

        return (
            <Table>
                <thead>
                    <tr>
                        <th onClick={sortCustomer}>
                            Customer
                            <SortArrows column={'customer'} currentSort={currentSort} />
                        </th>
                        <th onClick={sortPurchases}>
                            Purchases
                            <SortArrows column={'purchases'} currentSort={currentSort} />
                        </th>
                        <th onClick={sortPurchaseTotal}>
                            Purchase Total
                            <SortArrows column={'purchaseTotal'} currentSort={currentSort} />
                        </th>
                        <th onClick={sortRewards}>
                            Total Rewards
                            <SortArrows column={'rewards'} currentSort={currentSort} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.sort(tableSort[currentSort].fn).map((row, i) => {
                        return (
                            <tr key={i}>
                                <td>{row.customer}</td>
                                <td>{row.purchases}</td>
                                <td>${row.purchaseTotal}</td>
                                <td>{row.rewards}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    
}

export default RecordsTable