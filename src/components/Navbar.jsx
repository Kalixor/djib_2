import { usePeriod } from '../context/PeriodContext'
import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const { period, togglePeriod } = usePeriod()
  const [colorIndex, setColorIndex] = useState(0)
  const [currentTime, setCurrentTime] = useState(getFormattedTime())
  const animationFrameRef = useRef()

  const buttonColors = [
    'bg-[#1a2548] hover:bg-[#222f5a]',
    'bg-[#24305c] hover:bg-[#2c3a6e]',
    'bg-[#2e3b70] hover:bg-[#364682]',
    'bg-[#384694] hover:bg-[#1a2548]'
  ]

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

  const handlePeriodToggle = () => {
    togglePeriod()
    setColorIndex((prevIndex) => (prevIndex + 1) % buttonColors.length)
  }

  return (
    <nav className="bg-brand-800 shadow p-3 relative mx-1">
      <div className="w-full flex justify-between items-center">
        <div className="ml-2">
          <h1 className="text-2xl font-semibold text-white">
            Activités des Douanes
            <p className="text-sm font-medium text-card-text mt-1">Au {currentTime}</p>
          </h1>
        </div>

        <div className="mr-2">
          <button
            onClick={handlePeriodToggle}
            className={`px-6 py-1.5 rounded-full text-sm font-medium transition-all duration-300
              ${buttonColors[colorIndex]}
              text-pastel-yellow border-current
              hover:scale-105 active:scale-95 w-36 text-center
              shadow-lg hover:shadow-xl flex items-center justify-center`}
          >
            {period}
          </button>
        </div>
      </div>
    </nav>
  )
}
