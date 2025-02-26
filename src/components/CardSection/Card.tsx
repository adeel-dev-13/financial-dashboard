import { CardProps } from '../../utils/types'
import { Chip } from '../Icons'



const Card: React.FC<CardProps> = ({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  isPrimary = false
}) => {
  return (
<div
  className={`rounded-2xl w-[350px] h-[235px] flex flex-col justify-between ${
    isPrimary
      ? 'bg-gradient-to-r from-[#5B5A6F] to-black text-white'
      : 'bg-white border border-gray-300'
  }`}
>
  <div className="p-5 flex flex-col justify-between gap-7">
    <div className="flex justify-between">
      <div>
        <p className={`font-normal text-xs ${isPrimary ? 'text-white' : 'text-[#718EBF]'}`}>
          Balance
        </p>
        <p className={`font-semibold text-lg ${isPrimary ? 'text-white' : 'text-[#343C6A]'}`}>
          ${balance.toLocaleString()}
        </p>
      </div>
      <div className={isPrimary ? "" : "invert"}>
        <Chip />
      </div>
    </div>

    <div className="flex text-xs gap-20">
      <div>
        <p className={`font-normal text-xs ${isPrimary ? 'text-white/70' : 'text-[#718EBF]'}`}>
          CARD HOLDER
        </p>
        <p className={`font-semibold text-[15px] ${isPrimary ? 'text-white' : 'text-[#343C6A]'}`}>
          {cardHolder}
        </p>
      </div>
      <div>
        <p className={`font-normal text-xs ${isPrimary ? 'text-white/70' : 'text-[#718EBF]'}`}>
          VALID THRU
        </p>
        <p className={`font-semibold text-[15px] ${isPrimary ? 'text-white' : 'text-[#343C6A]'}`}>
          {validThru}
        </p>
      </div>
    </div>
  </div>

  <div className={`relative p-5 rounded-b-2xl ${isPrimary ? 'bg-gradient-to-r from-[#626170] to-[#0f0f0f]' : 'border-t border-[#DFEAF2]'}`}>
    <div className="flex justify-between items-center">
      <p className={`text-[22px] font-semibold ${isPrimary ? 'text-white' : 'text-[#343C6A]'}`}>
        {cardNumber}
      </p>
    <div className="relative w-8 h-5 flex">
  <div className={`w-5 h-5 rounded-full ${isPrimary ? 'bg-white/50' : 'bg-[#9199AF80]'}`}></div>
  <div className={`w-5 h-5 rounded-full opacity-40 -ml-2 ${isPrimary ? 'bg-white/50' : 'bg-[#9199AF80]'}`}></div>
</div>

    </div>
  </div>
</div>
  )
}

export default Card
