import Card from './Card'
import { cardsData } from '../../utils/constants'

const CardSection = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg text-[#343C6A]">My Cards</h2>
        <p className="text-[#343C6A] cursor-pointer font-medium">See All</p>
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-4 mt-4">
        {cardsData.map((item, index) => (
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

export default CardSection;
