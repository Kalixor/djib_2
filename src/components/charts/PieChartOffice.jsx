import { PieChart as RePieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import CustomDatePicker from '../CustomDatePicker'
import { useState } from 'react'

const COLORS = ['#00c2ff', '#cb3cff', '#00ff88']

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-brand-800/95 backdrop-blur-sm p-3 rounded-lg border border-[#cb3cff]/50 shadow-lg">
        <div className="flex flex-col gap-1">
          {payload.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-xs text-card-text">
                {item.name}: <span className="font-medium text-white">{item.value}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}

export default function PieChartOffice({ filters, setFilters }) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [activeIndex, setActiveIndex] = useState(null)
  
  const data = [
    { name: 'Paiements recouvrés', value: 400 },
    { name: 'Paiements en relance', value: 300 },
    { name: 'Paiement contentieux', value: 200 },
  ]

  const total = data.reduce((sum, item) => sum + item.value, 0)

  const onPieEnter = (_, index) => {
    setActiveIndex(index)
  }

  const onPieLeave = () => {
    setActiveIndex(null)
  }

  const renderActiveShape = (props) => {
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
    } = props

    const sin = Math.sin(-midAngle * (Math.PI / 180))
    const cos = Math.cos(-midAngle * (Math.PI / 180))
    const sx = cx + (outerRadius + 5) * cos
    const sy = cy + (outerRadius + 5) * sin
    const mx = cx + (outerRadius + 15) * cos
    const my = cy + (outerRadius + 15) * sin

    return (
      <g>
        <path
          d={`
            M${cx},${cy}
            L${cx + outerRadius * Math.cos(-startAngle * (Math.PI / 180))},
            ${cy + outerRadius * Math.sin(-startAngle * (Math.PI / 180))}
            A${outerRadius},${outerRadius} 0 0,1
            ${cx + outerRadius * Math.cos(-endAngle * (Math.PI / 180))},
            ${cy + outerRadius * Math.sin(-endAngle * (Math.PI / 180))}
            L${cx},${cy}
            Z
          `}
          fill={fill}
          fillOpacity={1}
        />
        <path
          d={`
            M${sx},${sy}
            L${mx},${my}
          `}
          stroke={fill}
          strokeWidth={2}
        />
      </g>
    )
  }

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
              {total.toLocaleString()}
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

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center gap-2">
       
        {/* Chart */}
        <div className="w-2/3 h-96">
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
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]}
                    stroke={COLORS[index % COLORS.length]}
                    strokeWidth={2}
                    fillOpacity={activeIndex === index ? 1 : 0.3}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} cursor={false} />
            </RePieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="w-[22rem] flex flex-col justify-center mt-[-30%]">
          <div className="space-y-2">
            {data.map((entry, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm font-medium text-card-text">
                    {entry.name}
                  </span>
                </div>
                <span className="text-sm font-medium text-white">
                  {entry.value.toLocaleString()} ({((entry.value/total)*100).toFixed(1)}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
