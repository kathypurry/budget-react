import React from 'react'
import TransactionNew from '../components/TransactionNew.js'

export default function New({addTransaction}) {
    return (
        <div>
            <TransactionNew addTransaction={addTransaction}/>
        </div>
    )
}
