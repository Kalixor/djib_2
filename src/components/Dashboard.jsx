import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import BarChart from './charts/BarChart'
import PieChartOffice from './charts/PieChartOffice'
import PieChartPayment from './charts/PieChartPayment'
import KPI from './KPI'

const areaChartData = [
  { name: 'Jan', imports: 4000, exports: 2400 },
  { name: 'Fév', imports: 3000, exports: 1398 },
  { name: 'Mar', imports: 2000, exports: 9800 },
  { name: 'Avr', imports: 2780, exports: 3908 },
  { name: 'Mai', imports: 1890, exports: 4800 },
  { name: 'Juin', imports: 2390, exports: 3800 },
  { name: 'Juil', imports: 3490, exports: 4300 },
  { name: 'Août', imports: 4000, exports: 2400 },
  { name: 'Sep', imports: 3000, exports: 1398 },
  { name: 'Oct', imports: 2000, exports: 9800 },
  { name: 'Nov', imports: 2780, exports: 3908 },
  { name: 'Déc', imports: 1890, exports: 4800 },
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 relative" style={{ gridAutoRows: '1fr' }}>
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

      <div className="flex gap-8 mb-8">
        <div className="w-[60%] bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f]">
          {/* Barre de légende */}
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <i className="fas fa-chart-area text-sm text-gray-300 dark:text-card-text" />
                <h3 className="text-sm font-medium text-gray-500 dark:text-card-text">
                  Recettes Douanières
                </h3>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#8884d8]" />
                  <span className="text-sm text-gray-500 dark:text-card-text">Importations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#82ca9d]" />
                  <span className="text-sm text-gray-500 dark:text-card-text">Exportations</span>
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
                  <linearGradient id="importsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="exportsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#aeb9e1', fontSize: 12 }}
                  axisLine={{ stroke: '#aeb9e1' }}
                />
                <YAxis 
                  tick={{ fill: '#aeb9e1', fontSize: 12 }}
                  axisLine={{ stroke: '#aeb9e1' }}
                />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="imports" 
                  stroke="#8884d8" 
                  fillOpacity={1} 
                  fill="url(#importsGradient)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="exports" 
                  stroke="#82ca9d" 
                  fillOpacity={1} 
                  fill="url(#exportsGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="w-[40%]">
          <BarChart filters={filters} setFilters={setFilters} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PieChartOffice filters={filters} setFilters={setFilters} />
        <PieChartPayment filters={filters} setFilters={setFilters} />
      </div>
    </main>
  )
}
