import { PieChart as RePieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts'
import { useState } from 'react'

const COLORS = ['#00c2ff', '#0038ff', '#cb3cff']

export default function PaymentTypePieChart({ data }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const total = data.reduce((sum, item) => sum + item.value, 0)

  const onPieEnter = (_, index) => {
    setActiveIndex(index)
  }

  const onPieLeave = () => {
    setActiveIndex(null)
  }

  const getOpacity = (index) => {
    return activeIndex === null ? 0.3 : (activeIndex === index ? 1 : 0.1)
  }

  const renderCenterLabel = () => {
    const activeItem = activeIndex !== null ? data[activeIndex] : null
    const labelText = activeItem ? activeItem.name : 'Total'
    const valueText = activeItem ? activeItem.value : total.toLocaleString()

    return (
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="#aeb9e1"
        dominantBaseline="middle"
      >
        <tspan x="50%" dy="-2.0em" fontSize="20" fontWeight="700">
          {valueText}
        </tspan>
      </text>
    )
  }

  return (
    <div className="bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f] transition-all duration-300 relative">
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

      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <i className="fas fa-money-bill-wave text-lg text-gray-300 dark:text-card-text" />
            <h3 className="text-sm font-semibold text-gray-900 dark:text-card-text">
              Répartition des Paiements
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-[70%] h-96">
          <ResponsiveContainer width="100%" height="100%">
            <RePieChart margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                startAngle={180}
                endAngle={0}
                innerRadius={110}
                outerRadius={170}
                paddingAngle={1}
                dataKey="value"
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                activeIndex={activeIndex}
                activeShape={{
                  outerRadius: 175,
                  innerRadius: 105,
                  fillOpacity: 1
                }}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]}
                    stroke={COLORS[index % COLORS.length]}
                    strokeWidth={activeIndex === index ? 2 : 1}
                    fillOpacity={getOpacity(index)}
                  />
                ))}
                <Label
                  content={renderCenterLabel}
                  position="center"
                />
              </Pie>
            </RePieChart>
          </ResponsiveContainer>
        </div>

        <div className="w-[22rem] flex flex-col justify-center mt-[-8rem]">
          <div className="space-y-4">
            {data.map((entry, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center"
                onMouseEnter={() => onPieEnter(null, index)}
                onMouseLeave={onPieLeave}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full transition-opacity" 
                    style={{ 
                      backgroundColor: COLORS[index % COLORS.length],
                      opacity: getOpacity(index)
                    }}
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
