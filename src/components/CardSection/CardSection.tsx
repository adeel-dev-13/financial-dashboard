import Card from './Card'
import { useNavigate } from 'react-router'
import { cardsData } from '../../utils/constants'

const CardSection = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg text-primary">My Cards</h2>
        <p
          className="text-primary cursor-pointer font-medium hover:text-blue hover:underline hover:scale-105 transition-transform duration-200"
          onClick={() => navigate('/cards')}
        >
          See All
        </p>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between gap-4 mt-4">
        {cardsData.slice(0, 2).map((item, index) => (
          <Card
            key={item.id}
            balance={item.balance}
            isPrimary={index === 0}
            validThru={item.validity}
            cardNumber={item.cardNumber}
            cardHolder={item.holderName}
          />
        ))}
      </div>
    </div>
  )
}

export default CardSection
