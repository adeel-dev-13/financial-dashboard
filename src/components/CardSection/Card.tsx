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
      className={`rounded-2xl w-[265px] min-h-[170px] md:w-[350px] md:h-[235px] flex flex-col justify-between ${
        isPrimary
          ? 'bg-gradient-to-r from-dark-grey to-black text-white'
          : 'bg-white border border-gray-300'
      }`}
    >
      <div className="p-4 md:p-5 flex flex-col justify-between gap-5 md:gap-7">
        {/* Top Section */}
        <div className="flex justify-between">
          <div>
            <p
              className={`font-normal text-[10px] ${isPrimary ? 'text-white' : 'text-grey'}`}
            >
              Balance
            </p>
            <p
              className={`font-semibold text-[16px] md:text-lg ${isPrimary ? 'text-white' : 'text-primary'}`}
            >
              ${balance.toLocaleString()}
            </p>
          </div>
          <div className={`w-[29px] h-[29px] ${isPrimary ? '' : 'invert'}`}>
            <Chip />
          </div>
        </div>

        {/* Card Holder & Valid Thru */}
        <div className="flex text-[10px] md:text-xs gap-10 md:gap-20">
          <div>
            <p
              className={`font-normal text-[10px] ${isPrimary ? 'text-white/70' : 'text-grey'}`}
            >
              CARD HOLDER
            </p>
            <p
              className={`font-semibold text-[13px] md:text-[15px] ${isPrimary ? 'text-white' : 'text-primary'}`}
            >
              {cardHolder}
            </p>
          </div>
          <div>
            <p
              className={`font-normal text-[10px] ${isPrimary ? 'text-white/70' : 'text-grey'}`}
            >
              VALID THRU
            </p>
            <p
              className={`font-semibold text-[13px] md:text-[15px] ${isPrimary ? 'text-white' : 'text-primary'}`}
            >
              {validThru}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className={`relative p-4 md:p-5 rounded-b-2xl ${
          isPrimary
            ? 'bg-gradient-to-r from-grey-default to-black-default'
            : 'border-t border-offwhite'
        }`}
      >
        <div className="flex justify-between items-center">
          <p
            className={`text-[13px] md:text-[22px] font-semibold ${isPrimary ? 'text-white' : 'text-primary'}`}
          >
            {cardNumber}
          </p>
          <div className="relative w-8 md:h-5 flex">
            <div
              className={`w-5 h-5 rounded-full ${isPrimary ? 'bg-white/50' : 'bg-light-black'}`}
            ></div>
            <div
              className={`w-5 h-5 rounded-full opacity-40 -ml-2 ${isPrimary ? 'bg-white/50' : 'bg-light-black'}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
