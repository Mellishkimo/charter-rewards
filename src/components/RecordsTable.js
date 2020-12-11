import React from 'react'
import { Table } from 'reactstrap'
import { tableSort } from '../utils'
import SortArrows from './SortArrows'

class RecordsTable extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            currentSort: 'customerDown'
        }
    }

    sortCustomer = () => {
        const { currentSort } = this.state
        let nextSort

        if (currentSort === 'customerDown') nextSort = 'customerUp'
        else nextSort = 'customerDown'

        this.setState({ currentSort: nextSort })
    }

    sortPurchases = () => {
        const { currentSort } = this.state
        let nextSort

        if (currentSort === 'purchasesDown') nextSort = 'purchasesUp'
        else nextSort = 'purchasesDown'

        this.setState({ currentSort: nextSort })
    }

    sortPurchaseTotal = () => {
        const { currentSort } = this.state
        let nextSort

        if (currentSort === 'purchaseTotalDown') nextSort = 'purchaseTotalUp'
        else nextSort = 'purchaseTotalDown'

        this.setState({ currentSort: nextSort })
    }

    sortRewards = () => {
        const { currentSort } = this.state
        let nextSort

        if (currentSort === 'rewardsDown') nextSort = 'rewardsUp'
        else nextSort = 'rewardsDown'

        this.setState({ currentSort: nextSort })
    }

    render () {
        const { data } = this.props
        const { currentSort } = this.state

        return (
            <Table>
                <thead>
                    <tr>
                        <th onClick={this.sortCustomer}>
                            Customer
                            <SortArrows column={'customer'} currentSort={currentSort} />
                        </th>
                        <th onClick={this.sortPurchases}>
                            Purchases
                            <SortArrows column={'purchases'} currentSort={currentSort} />
                        </th>
                        <th onClick={this.sortPurchaseTotal}>
                            Purchase Total
                            <SortArrows column={'purchaseTotal'} currentSort={currentSort} />
                        </th>
                        <th onClick={this.sortRewards}>
                            Total Rewards
                            <SortArrows column={'rewards'} currentSort={currentSort} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.sort(tableSort[currentSort].fn).map((row, i) => {
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
}

export default RecordsTable