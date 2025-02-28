import React from 'react'
import { PolarArea } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { expenseChartdata, options } from '../../../utils/constants'
import {
  Legend,
  Tooltip,
  ArcElement,
  Chart as ChartJS,
  RadialLinearScale
} from 'chart.js'

ChartJS.register(
  Tooltip,
  Legend,
  ArcElement,
  ChartDataLabels,
  RadialLinearScale
)

const PolarChart: React.FC = () => {
  return (
    <div className="w-full pt-12 mx-auto  bg-white max-w-[350px] h-[322px] rounded-[25px] flex items-center justify-center">
      <PolarArea data={expenseChartdata} options={options} />
    </div>
  )
}

export default PolarChart
