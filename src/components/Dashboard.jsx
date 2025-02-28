import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
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
        <div className="w-3/4 bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f]">
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={areaChartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
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
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
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

        <div className="w-1/4">
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
