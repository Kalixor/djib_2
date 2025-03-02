import { useState } from 'react'
import { BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-brand-800/95 backdrop-blur-sm p-3 rounded-lg border border-[#cb3cff]/50 shadow-lg">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-card-text mb-1">{label}</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white font-medium">
              {payload[0].value}
            </span>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default function BarChart() {
  const [period, setPeriod] = useState('Mois')
  const data = [
    { name: 'Jan', value: 4200 },
    { name: 'Fév', value: 3800 },
    { name: 'Mar', value: 4500 },
    { name: 'Avr', value: 4100 },
    { name: 'Mai', value: 4700 },
    { name: 'Juin', value: 4900 },
    { name: 'Juil', value: 5100 },
    { name: 'Août', value: 4800 },
    { name: 'Sep', value: 4600 },
    { name: 'Oct', value: 4400 },
    { name: 'Nov', value: 4300 },
    { name: 'Déc', value: 5000 },
  ]

  const handlePeriodChange = (newPeriod) => {
    if (newPeriod !== period) {
      setPeriod(newPeriod)
    }
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
    <div className="group bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f] transition-all duration-300 relative">
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

      {/* Period Selector */}
      <div className="absolute top-4 right-4 z-20 bg-brand-800/50 backdrop-blur-sm p-2 rounded-lg border border-[#00c2ff]/50">
        <div className="flex gap-1">
          {['Jour', 'Sem', 'Mois', 'Année'].map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => handlePeriodChange(p)}
              className={`
                px-2 py-1 rounded-md
                text-xs font-medium
                transition-colors
                focus:outline-none
                focus:ring-2
                focus:ring-[#00c2ff]/50
                ${
                  period === p
                    ? 'bg-[#00c2ff]/10 text-[#00c2ff] border border-[#00c2ff]/50'
                    : 'text-card-text hover:text-[#00c2ff] hover:bg-[#00c2ff]/10'
                }
              `}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <i className="fas fa-chart-line text-lg text-gray-300 dark:text-card-text" />
            <h3 className="text-sm font-medium text-gray-500 dark:text-card-text">
              Évolution des recettes
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              20.7M
            </p>
            {renderVariationBadge(4.2, 'up')}
          </div>
        </div>
      </div>

      <div className="h-48 relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <ReBarChart
            data={data}
            margin={{ top: 5, right: 20, left: 0, bottom: 20 }}
          >
            <XAxis 
              dataKey="name"
              tick={{ fill: '#aeb9e1', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={40}
            />
            <YAxis 
              tick={{ fill: '#aeb9e1', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              content={<CustomTooltip />}
              cursor={false}
            />
            <Bar 
              dataKey="value"
              stroke="#00c2ff"
              fill="transparent"
              strokeWidth={2}
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
          </ReBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
