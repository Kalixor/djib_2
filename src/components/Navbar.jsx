import { usePeriod } from '../context/PeriodContext'
import { useState } from 'react'

export default function Navbar() {
  const { period, togglePeriod } = usePeriod()
  const [greenToneIndex, setGreenToneIndex] = useState(0)

  const greenTones = [
    'bg-green-700 hover:bg-green-600 border-green-700 text-green-200',
    'bg-emerald-700 hover:bg-emerald-600 border-emerald-700 text-emerald-200',
    'bg-lime-700 hover:bg-lime-600 border-lime-700 text-lime-200',
    'bg-teal-700 hover:bg-teal-600 border-teal-700 text-teal-200'
  ]

  const handlePeriodToggle = () => {
    togglePeriod()
    setGreenToneIndex((prevIndex) => (prevIndex + 1) % greenTones.length)
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
    <nav className="bg-gray-800 shadow p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-36"></div>

        <h1 className="text-xl font-bold text-white text-center absolute left-1/2 transform -translate-x-1/2">
          Activités des Douanes
          <p className="text-sm text-gray-400"> Au {getCurrentDate()}</p>
        </h1>
        
        <div className="flex items-center gap-4">
          <button
            onClick={handlePeriodToggle}
            className={`px-6 py-1.5 rounded-full text-sm font-medium transition-all duration-300
              ${greenTones[greenToneIndex]}
              hover:scale-105 active:scale-95 w-36 text-center whitespace-nowrap`}
          >
            {period}
          </button>
        </div>
      </div>
    </nav>
  )
}
