import { usePeriod } from '../context/PeriodContext'
import { useState } from 'react'

export default function Navbar() {
  const { period, togglePeriod } = usePeriod()
  const [colorIndex, setColorIndex] = useState(0)

  const buttonColors = [
    'bg-[#1a2548] hover:bg-[#222f5a]',
    'bg-[#24305c] hover:bg-[#2c3a6e]',
    'bg-[#2e3b70] hover:bg-[#364682]',
    'bg-[#384694] hover:bg-[#1a2548]'
  ]

  const handlePeriodToggle = () => {
    togglePeriod()
    setColorIndex((prevIndex) => (prevIndex + 1) % buttonColors.length)
  }

  const getCurrentDate = () => {
    const now = new Date()
    const day = String(now.getDate()).padStart(2, '0')
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const year = now.getFullYear()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    return `${day}/${month}/${year} ${hours}:${minutes}`
  }

  return (
    <nav className="bg-brand-800 shadow p-5 relative">
      <div className="w-full flex justify-between items-center">
        <div className="ml-2">
          <h1 className="text-2xl font-semibold text-white">
            Activités des Douanes
            <p className="text-sm text-card-text mt-1">Au {getCurrentDate()}</p>
          </h1>
        </div>

        <div className="mr-2">
          <button
            onClick={handlePeriodToggle}
            className={`px-6 py-1.5 rounded-full text-sm font-medium transition-all duration-300
              ${buttonColors[colorIndex]}
              text-pastel-yellow border-current
              hover:scale-105 active:scale-95 w-36 text-center whitespace-nowrap
              shadow-lg hover:shadow-xl`}
          >
            {period}
          </button>
        </div>
      </div>
    </nav>
  )
}
