// src/components/Dashboard/CardSection/CardSection.tsx
import React from 'react'
import Card from './Card'
import { CardType } from '../../../types'

interface CardSectionProps {
  cards: CardType[]
}

const CardSection: React.FC<CardSectionProps> = ({ cards }) => {
  return (
    <div className="card-section">
      <h2>My Cards</h2>
      <div className="cards-wrapper">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <button className="see-all-button">See All</button>
    </div>
  )
}

export default CardSection
