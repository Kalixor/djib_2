import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import BarChart from './charts/BarChart'
import PieChartOffice from './charts/PieChartOffice'
import PaymentTableCard from './charts/PaymentTableCard'
import EvolutionAreaChart from './charts/EvolutionAreaChart'
import KPI from './KPI'
import CustomDatePicker from './CustomDatePicker'
import NotificationPopup from './NotificationPopup'

// Génération des données pour une année complète
const generateYearData = () => {
  const startDate = new Date('2023-12-01')
  const endDate = new Date('2024-12-01')
  const data = []

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    data.push({
      date: new Date(d).toISOString().split('T')[0],
      prevues: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000,
      effectives: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000
    })
  }

  return data
}

const allData = generateYearData()

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-brand-800/95 backdrop-blur-sm p-3 rounded-lg border border-[#cb3cff]/50 shadow-lg">
        <p className="text-xs text-card-text mb-2">{new Date(label).toLocaleDateString('fr-FR')}</p>
        <div className="flex flex-col gap-1">
          {payload.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs text-card-text">
                {item.name}: <span className="font-medium">{item.value}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}

export default function Dashboard({ filters, setFilters }) {
  const [activeKPI, setActiveKPI] = useState(null)
  const [startDate, setStartDate] = useState('2023-12-01')
  const [endDate, setEndDate] = useState('2024-01-01')
  const [notification, setNotification] = useState(null)

  const handleDateChange = (type, date) => {
    const newStart = type === 'start' ? date : startDate
    const newEnd = type === 'end' ? date : endDate

    // Vérification des limites
    const minDate = new Date('2023-12-01')
    const maxDate = new Date('2024-12-01')

    if (new Date(newStart) < minDate || new Date(newEnd) > maxDate) {
      setNotification({
        type: 'error',
        message: 'La période doit être comprise entre 01/12/2023 et 01/12/2024'
      })
      return
    }

    if (new Date(newStart) > new Date(newEnd)) {
      setNotification({
        type: 'error',
        message: 'La date de début ne peut pas être postérieure à la date de fin'
      })
      return
    }

    if (type === 'start') {
      setStartDate(date)
    } else {
      setEndDate(date)
    }
  }

  // Filtrage des données selon la période sélectionnée
  const filteredData = allData.filter(d => {
    const currentDate = new Date(d.date)
    return currentDate >= new Date(startDate) && currentDate <= new Date(endDate)
  })

  // Calcul du nombre de jours sélectionnés
  const daysDifference = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24))

  // Configuration de l'axe X en fonction du nombre de jours
  const xAxisConfig = {
    interval: Math.max(0, Math.floor(daysDifference / 10)),
    angle: daysDifference > 50 ? -45 : 0,
    fontSize: daysDifference > 50 ? 10 : 12,
    tickFormatter: (date) => {
      const d = new Date(date)
      return daysDifference > 50 ?
        `${d.getDate()}/${d.getMonth() + 1}` :
        d.toLocaleDateString('fr-FR')
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
        border ${isPositive
          ? 'border-green-500/50'
          : 'border-red-500/50'
        }
        bg-${isPositive
          ? 'green-500/10'
          : 'red-500/10'
        }
        backdrop-blur-sm
        shadow-sm
        flex items-center gap-1
        text-xs font-medium
        ${isPositive
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
      {notification && (
        <NotificationPopup
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 relative" style={{ gridAutoRows: '1fr' }}>
        <KPI
          title="Paiements"
          value="12.52B"
          isActive={activeKPI === 'Paiements'}
          onClick={() => setActiveKPI(activeKPI === 'Paiements' ? null : 'Paiements')}
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
          title="Recettes Prévues"
          value="8.2M"
          isActive={activeKPI === 'Recettes Prévues'}
          onClick={() => setActiveKPI(activeKPI === 'Recettes Prévues' ? null : 'Recettes Prévues')}
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

          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <i className="fas fa-chart-area text-lg text-gray-300 dark:text-card-text" />
                <h3 className="text-sm font-semibold text-gray-900 dark:text-card-text">
                  Recettes Douanières
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  20.7M
                </p>
                {renderVariationBadge(4.2, 'up')}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-card-text">Du :</span>
                <CustomDatePicker
                  value={startDate}
                  onChange={(date) => handleDateChange('start', date)}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-card-text">Au :</span>
                <CustomDatePicker
                  value={endDate}
                  onChange={(date) => handleDateChange('end', date)}
                />
              </div>
            </div>
          </div>

          <div className="h-96">
            <EvolutionAreaChart
              data={filteredData}
              xAxisConfig={xAxisConfig}
            />
          </div>
        </div>

        <div className="w-[40%]">
          <BarChart filters={filters} setFilters={setFilters} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <PieChartOffice filters={filters} setFilters={setFilters} />
        <PaymentTableCard />
      </div>
    </main>
  )
}
