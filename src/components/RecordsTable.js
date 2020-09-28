import React from 'react'
import { Table } from 'reactstrap'

class RecordsTable extends React.Component {
    render () {
        return (
            <Table>
                <thead>
                    <tr>
                        <th style={{ width: '115px' }}>Customer</th>
                        <th>Purchases</th>
                        <th>Purchase Total</th>
                        <th>Total Rewards</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((row, i) => {
                        return (
                            <tr key={i}>
                                <td>{row.name}</td>
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