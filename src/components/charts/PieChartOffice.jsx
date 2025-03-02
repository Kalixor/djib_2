import { PieChart as RePieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import CustomDatePicker from '../CustomDatePicker'
import { useState } from 'react'

const COLORS = ['#00c2ff80', '#cb3cff80', '#00ff8880']

export default function PieChartOffice({ filters, setFilters }) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  
  const data = [
    { name: 'Paiements recouvrés', value: 400 },
    { name: 'Paiements en relance', value: 300 },
    { name: 'Paiement contentieux', value: 200 },
  ]

  const renderVariationBadge = (value, trend) => {
    const isPositive = trend === 'up'
    const arrowClass = isPositive 
      ? 'fas fa-arrow-up rotate-45' 
      : 'fas fa-arrow-down rotate-[-35deg]'

    return (
      <div className={`
        px-2 py-1 rounded-full
        border ${isPositive ? 'border-green-500/50' : 'border-red-500/50'}
        bg-${isPositive ? 'green-500/10' : 'red-500/10'}
        backdrop-blur-sm
        shadow-sm
        flex items-center gap-1
        text-xs font-medium
        ${isPositive ? 'text-green-500' : 'text-red-500'}
      `}>
        <span>{value}%</span>
        <i className={`${arrowClass} text-[0.6rem]`} />
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f] transition-all duration-300 relative">
      {/* Border gradient */}
      <div className="absolute inset-0 rounded-lg pointer-events-none"
           style={{
             background: `radial-gradient(circle at 17% -3%, #00c2ff 0%, #00c2ff 10%, transparent 30%)`,
             mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
             WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
             maskComposite: 'exclude',
             WebkitMaskComposite: 'xor',
             padding: '1px'
           }}>
        <div className="bg-white dark:bg-card w-full h-full rounded-lg" />
      </div>

      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <i className="fas fa-coins text-lg text-gray-300 dark:text-card-text" />
            <h3 className="text-sm font-semibold text-gray-900 dark:text-card-text">
              Réalisation des Recettes
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              20.7M
            </p>
            {renderVariationBadge(4.2, 'up')}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-card-text">Le :</span>
          <CustomDatePicker 
            value={selectedDate}
            onChange={setSelectedDate}
          />
        </div>
      </div>

      {/* Chart Container */}
      <div className="h-96 mt-8">
        <ResponsiveContainer width="100%" height="100%">
          <RePieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={0}
              innerRadius={120}
              outerRadius={180}
              paddingAngle={1}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  stroke={COLORS[index % COLORS.length].replace('80', '')}
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip />
          </RePieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-0 right-0 px-4 z-10">
        <div className="flex flex-col gap-3">
          {data.map((entry, index) => (
            <div key={index} className="flex justify-between items-center">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-sm font-medium text-card-text flex-1 ml-4">
                {entry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
