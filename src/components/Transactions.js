import React from 'react'
import Transaction from './Transaction'

const Transactions = ({ transactions}) => {
    return (
        <div>
            {transactions.map((transaction, index) => {
                return <Transaction key={index} transaction={transaction} index={index}/>
            })}
        </div>
    )
}

export default Transactions;