import React from 'react'
import { Table } from 'reactstrap'
import { salesRecords } from '../data/SalesRecords'
import { calculateRewards } from '../components/RewardsCalculator'
import { tableSort } from '../utils'
import SortArrows from './SortArrows'

class HistoryTable extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            currentSort: 'dateDown'
        }
    }

    sortDate = () => {
        const { currentSort } = this.state
        let nextSort

        if (currentSort === 'dateDown') nextSort = 'dateUp'
        else nextSort = 'dateDown'

        this.setState({ currentSort: nextSort })
    }

    sortCustomer = () => {
        const { currentSort } = this.state
        let nextSort

        if (currentSort === 'customerDown') nextSort = 'customerUp'
        else nextSort = 'customerDown'

        this.setState({ currentSort: nextSort })
    }

    sortPurchaseAmount = () => {
        const { currentSort } = this.state
        let nextSort

        if (currentSort === 'purchaseAmountDown') nextSort = 'purchaseAmountUp'
        else nextSort = 'purchaseAmountDown'

        this.setState({ currentSort: nextSort })
    }

    sortReward = () => {
        const { currentSort } = this.state
        let nextSort

        if (currentSort === 'rewardDown') nextSort = 'rewardUp'
        else nextSort = 'rewardDown'

        this.setState({ currentSort: nextSort })
    }

    render () {
        const { currentSort } = this.state
        return (
            <Table>
                <thead>
                    <tr>
                        <th onClick={this.sortDate}>
                            Date
                            <SortArrows column={'date'} currentSort={currentSort} />
                        </th>
                        <th onClick={this.sortCustomer}>
                            Customer
                            <SortArrows column={'customer'} currentSort={currentSort} />
                        </th>
                        <th onClick={this.sortPurchaseAmount}>
                            Purchase Amt
                            <SortArrows column={'purchaseAmount'} currentSort={currentSort} />
                        </th>
                        <th onClick={this.sortReward}>
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
}

export default HistoryTable