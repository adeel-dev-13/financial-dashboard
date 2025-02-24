// src/components/Dashboard/CardSection/Card.tsx
import React from 'react'
import { CardType } from '../../../types'

interface CardProps {
  card: CardType
}

const Card: React.FC<CardProps> = ({ card }) => {
  const { cardNumber, balance, holderName } = card

  return (
    <div className="card">
      <div className="card-number">{cardNumber}</div>
      <div className="card-holder">{holderName}</div>
      <div className="card-balance">${balance.toLocaleString()}</div>
    </div>
  )
}

export default Card
