import Transactions from '../components/Transactions.js'
import React from 'react'

export default function Show ({transactions}) {
    return (
        <div>
        <h2>Transaction Log</h2>
        <Transactions transactions={transactions}/>
        </div>
    )
}