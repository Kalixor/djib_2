import { usePeriod } from '../context/PeriodContext'
import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const { period, togglePeriod } = usePeriod()
  const [currentTime, setCurrentTime] = useState(getFormattedTime())
  const animationFrameRef = useRef()

  const periods = ['Annuelles', 'Mensuelles', 'Hebdomadaires', 'Journalières']

  const updateTime = () => {
    setCurrentTime(getFormattedTime())
    animationFrameRef.current = requestAnimationFrame(updateTime)
  }

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(updateTime)
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  function getFormattedTime() {
    const now = new Date()
    const day = String(now.getDate()).padStart(2, '0')
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const year = now.getFullYear()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
  }

  return (
    <nav className="bg-brand-800 shadow p-3 relative mx-1">
      <div className="w-full flex justify-between items-center mt-3">
        <div className="ml-2">
          <h1 className="text-2xl font-semibold text-white">
            Activités des Douanes
            <p className="text-sm font-medium text-card-text mt-1">Au {currentTime}</p>
          </h1>
        </div>

        <div className="mr-2">
          <div className="grid grid-cols-2 gap-2">
            {periods.map((p) => (
              <label 
                key={p}
                className={`
                  flex items-center gap-2 
                  px-4 py-2 rounded-lg
                  transition-all duration-200
                  ${
                    period === p
                      ? 'border-[#cb3cff]'
                      : 'border-brand-800 hover:border-[#cb3cff]/50'
                  }
                  border-2
                  bg-brand-800/50
                  cursor-pointer
                `}
              >
                <input
                  type="radio"
                  name="period"
                  value={p}
                  checked={period === p}
                  onChange={() => togglePeriod(p)}
                  className="w-4 h-4 appearance-none rounded-full border-2 border-[#cb3cff] checked:bg-[#cb3cff] checked:border-[#cb3cff]"
                />
                <span className="text-sm font-medium text-card-text">{p}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
