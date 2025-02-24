// src/components/Dashboard/QuickTransfer/QuickTransfer.tsx
import React, { useState, FormEvent } from 'react'

const QuickTransfer: React.FC = () => {
  const [amount, setAmount] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Perform transfer logic or API call
    console.log(`Transferring $${amount}...`)
  }

  return (
    <div className="quick-transfer">
      <h2>Quick Transfer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Transfer</button>
      </form>
    </div>
  )
}

export default QuickTransfer
