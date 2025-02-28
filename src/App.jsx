import { useState } from 'react'
import { PeriodProvider } from './context/PeriodContext'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'

function App() {
  const [filters, setFilters] = useState({
    period: 'month',
    office: 'all',
    payment: 'all'
  })

  return (
    <PeriodProvider>
      <div className="min-h-screen bg-[#081028] text-white">
        <Navbar />
        <Dashboard filters={filters} setFilters={setFilters} />
      </div>
    </PeriodProvider>
  )
}

export default App
