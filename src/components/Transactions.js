import React from 'react'
import Transaction from './Transaction'

const Transactions = ({ transactions}) => {

    return (
        <div>
            {transactions.map((transaction, id) => {
                return <Transaction key={id} transaction={transaction} index={id}/>
            })}
        </div>
    )
}

export default Transactions;