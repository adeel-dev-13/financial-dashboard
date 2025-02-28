import React from 'react'
import Card from '../CardSection/Card'
import { useNavigate } from 'react-router-dom'
import { cardsData } from '../../utils/constants'

const CardsPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="max-w-[1110px] mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Cards</h1>
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:underline"
        >
          Back to Dashboard
        </button>
      </div>

      <div className="flex flex-wrap gap-1 w-full">
        {cardsData.map((card, index) => (
          <Card
            isPrimary={index % 2 === 0}
            balance={card.balance}
            cardHolder={card.holderName}
            cardNumber={card.cardNumber}
            validThru={card.validity}
          />
        ))}
      </div>
    </div>
  )
}

export default CardsPage
