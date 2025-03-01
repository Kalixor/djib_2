import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import BarChart from './charts/BarChart'
import PieChartOffice from './charts/PieChartOffice'
import PieChartPayment from './charts/PieChartPayment'
import KPI from './KPI'

const areaChartData = [
  { name: 'Jan', prevues: 4000, effectives: 2400 },
  { name: 'Fév', prevues: 3000, effectives: 1398 },
  { name: 'Mar', prevues: 2000, effectives: 9800 },
  { name: 'Avr', prevues: 2780, effectives: 3908 },
  { name: 'Mai', prevues: 1890, effectives: 4800 },
  { name: 'Juin', prevues: 2390, effectives: 3800 },
  { name: 'Juil', prevues: 3490, effectives: 4300 },
  { name: 'Août', prevues: 4000, effectives: 2400 },
  { name: 'Sep', prevues: 3000, effectives: 1398 },
  { name: 'Oct', prevues: 2000, effectives: 9800 },
  { name: 'Nov', prevues: 2780, effectives: 3908 },
  { name: 'Déc', prevues: 1890, effectives: 4800 },
]

export default function Dashboard({ filters, setFilters }) {
  const [activeKPI, setActiveKPI] = useState(null)

  const renderVariationBadge = (value, trend) => {
    const isPositive = trend === 'up'
    const arrowClass = isPositive 
      ? 'fas fa-arrow-up rotate-45' 
      : 'fas fa-arrow-down rotate-[-35deg]'

    return (
      <div className={`
        px-2 py-1 rounded-full
        border ${
          isPositive 
            ? 'border-green-500/50' 
            : 'border-red-500/50'
        }
        bg-${
          isPositive 
            ? 'green-500/10' 
            : 'red-500/10'
        }
        backdrop-blur-sm
        shadow-sm
        flex items-center gap-1
        text-xs font-medium
        ${
          isPositive 
            ? 'text-green-500' 
            : 'text-red-500'
        }
      `}>
        <span>{value}%</span>
        <i className={`${arrowClass} text-[0.6rem]`} />
      </div>
    )
  }

  return (
    <main className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 relative" style={{ gridAutoRows: '1fr' }}>
        <KPI 
          title="Imports" 
          value="12.52B" 
          isActive={activeKPI === 'Imports'}
          onClick={() => setActiveKPI(activeKPI === 'Imports' ? null : 'Imports')}
          style={{ gridRow: 'span 2' }}
        />
        <KPI 
          title="Exports" 
          value="8.2M" 
          isActive={activeKPI === 'Exports'}
          onClick={() => setActiveKPI(activeKPI === 'Exports' ? null : 'Exports')}
          style={{ gridRow: 'span 2' }}
        />
        <KPI 
          title="Bureaux" 
          value="1.2K" 
          isActive={activeKPI === 'Bureaux'}
          onClick={() => setActiveKPI(activeKPI === 'Bureaux' ? null : 'Bureaux')}
          style={{ gridRow: 'span 2' }}
        />
        <KPI 
          title="Recettes Totales" 
          value="20.7M" 
          isActive={activeKPI === 'Recettes Totales'}
          onClick={() => setActiveKPI(activeKPI === 'Recettes Totales' ? null : 'Recettes Totales')}
          style={{ gridRow: 'span 2' }}
        />
      </div>

      <div className="flex gap-5 mb-6">
        <div className="w-[60%] bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f] relative">
          {/* Border gradient */}
          <div className="absolute inset-0 rounded-lg pointer-events-none"
               style={{
                 background: `radial-gradient(circle at 17% -25%, #00c2ff 0%, #00c2ff 10%, transparent 30%)`,
                 mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                 WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                 maskComposite: 'exclude',
                 WebkitMaskComposite: 'xor',
                 padding: '1px'
               }}>
            <div className="bg-white dark:bg-card w-full h-full rounded-lg" />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <i className="fas fa-chart-area text-lg text-gray-300 dark:text-card-text" />
                <h3 className="text-sm font-semibold text-gray-900 dark:text-card-text">
                  Recettes Douanières
                </h3>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#00c2ff]" />
                  <span className="text-sm font-medium text-gray-900 dark:text-card-text">Prévues</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#cb3cff]" />
                  <span className="text-sm font-medium text-gray-900 dark:text-card-text">Effectives</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                20.7M
              </p>
              {renderVariationBadge(4.2, 'up')}
            </div>
          </div>

          <div className="h-96 -mx-4 translate-x-[-8px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={areaChartData}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="prevuesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00c2ff" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#00c2ff" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="effectivesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#cb3cff" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#cb3cff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#aeb9e1', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fill: '#aeb9e1', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="prevues" 
                  stroke="#00c2ff" 
                  fillOpacity={1} 
                  fill="url(#prevuesGradient)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="effectives" 
                  stroke="#cb3cff" 
                  fillOpacity={1} 
                  fill="url(#effectivesGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="w-[40%]">
          <BarChart filters={filters} setFilters={setFilters} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PieChartOffice filters={filters} setFilters={setFilters} />
        <PieChartPayment filters={filters} setFilters={setFilters} />
      </div>
    </main>
  )
}
