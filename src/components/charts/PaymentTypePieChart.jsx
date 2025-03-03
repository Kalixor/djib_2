import { PieChart as RePieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts'
import { useMemo } from 'react'

const COLORS = ['#00c2ff', '#0038ff', '#cb3cff']

export default function PaymentTypePieChart({ data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  
  const renderCenterLabel = () => {
    return (
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="#aeb9e1"
        dominantBaseline="middle"
      >
        <tspan x="50%" dy="-2.0em" fontSize="20" fontWeight="700">
          {total.toLocaleString()}
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

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RePieChart margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={0}
              innerRadius={80}
              outerRadius={120}
              paddingAngle={1}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  stroke={COLORS[index % COLORS.length]}
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
    </div>
  )
}
