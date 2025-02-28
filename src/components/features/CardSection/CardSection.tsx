import Card from './Card'
import { useNavigate } from 'react-router'
import { cardsData } from '../../../utils/constants'

const CardSection = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full">
      <div className="flex justify-between items-center md:mr-0 mr-4">
        <h2 className="font-bold text-lg text-primary">My Cards</h2>
        <p
          aria-label="View all cards"
          className="text-primary cursor-pointer font-medium hover:text-blue hover:underline hover:scale-105 transition-transform duration-200"
          onClick={() => navigate('/cards')}
        >
          See All
        </p>
      </div>
      <div className="relative overflow-x-auto scrollbar-hide">
        <div className="flex gap-7 mt-4 md:justify-between w-[350px] md:h-[100%] h-[180px]">
          {cardsData.slice(0, 2).map((item, index) => (
            <div className="flex-shrink-0 w-265px md:w-[350px]">
              <Card
                key={item.id}
                balance={item.balance}
                isPrimary={index === 0}
                validThru={item.validity}
                cardNumber={item.cardNumber}
                cardHolder={item.holderName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardSection
