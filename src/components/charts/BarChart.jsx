import { BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function BarChart() {
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
    <div className="bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f]">
      <div className="flex items-start justify-between mb-4">
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

      <div className="h-64">
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
              cursor={false}
              contentStyle={{
                background: '#0b1739',
                border: '1px solid #cb3cff50',
                borderRadius: '8px',
                backdropFilter: 'blur(4px)'
              }}
            />
            <Bar 
              dataKey="value"
              fill="#8884d8"
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
          </ReBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
