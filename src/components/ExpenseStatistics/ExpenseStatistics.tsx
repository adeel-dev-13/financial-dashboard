import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { expensesData } from "../../utils/constants";



const ExpenseStatistics: React.FC = () => {
  return (
    <div className="customchart flex flex-col items-center justify-center bg-white p-4 rounded-xl  md:w-[350px] h-[322px]">
      <PieChart width={250} height={250}>
        <Pie
          data={expensesData}
          cx="50%"
          cy="50%"
          innerRadius={1}
          outerRadius={110} 
          startAngle={160}
          endAngle={-200}
          paddingAngle={2} 
          dataKey="value"
          label={({ cx, cy, midAngle, outerRadius, percent, index }) => {
            const RADIAN = Math.PI / 180;
            const adjustedRadius = outerRadius *0.6
            const x = cx + adjustedRadius * Math.cos(-midAngle * RADIAN);
            const y = cy + adjustedRadius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill="white"
                fontSize={14}
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="central"
              >
                {`${(percent * 100).toFixed(0)}%`}
                <tspan x={x} dy="1.2em" fontSize={10}>
                  {expensesData[index].name}
                </tspan>
              </text>
            );
          }}
        >
          {expensesData.map((entry, index) => (
          <Cell
          key={`cell-${index}`}
          fill={entry.color}
          transform={
            index === 0 ? "scale(1.01, 1.01)" : 
            index === 1 ? "scale(1.05, 0.99)" :  
            index === 2 ? "scale(1.0, 1.0)" :      
            index === 3 ? "scale(0.99, 0.96)" : 
            "scale(1, 1)"
          }
        />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};
export default ExpenseStatistics;
