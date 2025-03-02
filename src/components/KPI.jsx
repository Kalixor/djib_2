import React, { useEffect, useRef, useState, useCallback } from 'react'
import { usePeriod } from '../context/PeriodContext'

const KPI = ({ title, isActive, onClick, style }) => {
  const { period } = usePeriod()
  const [displayValue, setDisplayValue] = useState('0')
  const targetValue = useRef(0)
  const animationRef = useRef(null)
  const startTimeRef = useRef(null)

  // Fonction getIcon
  const getIcon = useCallback(() => {
    switch(title) {
      case 'Imports': return 'fas fa-boxes-packing'
      case 'Exports': return 'fas fa-truck-fast'
      case 'Bureaux': return 'fas fa-clipboard-list'
      case 'Recettes Totales': return 'fas fa-coins'
      default: return 'fas fa-circle-info'
    }
  }, [title])

  // Données générées en fonction de la période
  const getKpiData = useCallback(() => {
    const baseValues = {
      'Imports': { value: 12520000000, suffix: '', trend: 'up' },
      'Exports': { value: 8200000, suffix: '', trend: 'down' },
      'Bureaux': { value: 1200, suffix: '', trend: 'up' },
      'Recettes Totales': { value: 20700000, suffix: '', trend: 'up' }
    }

    const periodFactors = {
      'Journalières': 1,
      'Hebdomadaires': 7,
      'Mensuelles': 30,
      'Annuelles': 365
    }

    const factor = periodFactors[period] || 1
    const variation = Math.random() * 0.05 // Variation jusqu'à 5%

    return {
      ...baseValues[title],
      value: Math.round(baseValues[title].value * factor * (1 + variation))
    }
  }, [period, title])

  // Initialisation et mise à jour des valeurs
  useEffect(() => {
    const { value } = getKpiData()
    targetValue.current = value
    startTimeRef.current = null
    setDisplayValue('0')
    animationRef.current = requestAnimationFrame(animateValue)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [getKpiData])

  // Animation des valeurs
  const animateValue = useCallback((timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp
    const progress = timestamp - startTimeRef.current
    const duration = 800
    
    if (progress < duration) {
      const easedProgress = easeOutQuad(progress / duration)
      const currentDisplay = Math.floor(easedProgress * targetValue.current)
      setDisplayValue(currentDisplay.toLocaleString())
      animationRef.current = requestAnimationFrame(animateValue)
    } else {
      setDisplayValue(targetValue.current.toLocaleString())
    }
  }, [])

  const easeOutQuad = useCallback((t) => t * (2 - t), [])

  // Affichage de la variation
  const renderVariationBadge = useCallback(() => {
    const { trend } = getKpiData()
    const isPositive = trend === 'up'
    const arrowClass = isPositive 
      ? 'fas fa-arrow-up rotate-45' 
      : 'fas fa-arrow-down rotate-[-35deg]'

    const variationValue = Math.round(Math.random() * 5) // Variation entre 0% et 5%

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
        <span>{variationValue}%</span>
        <i className={`${arrowClass} text-[0.6rem]`} />
      </div>
    )
  }, [getKpiData])

  return (
    <div 
      className="group bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f] transition-all duration-300 relative"
      style={style}
      onClick={onClick}
    >
      <div className="absolute inset-0 rounded-lg pointer-events-none"
           style={{
             background: `radial-gradient(circle at 17% -3%, #ce68fd 0%, #ce68fd 10%, transparent 30%)`,
             mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
             WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
             maskComposite: 'exclude',
             WebkitMaskComposite: 'xor',
             padding: '1px'
           }}>
        <div className="bg-white dark:bg-card w-full h-full rounded-lg" />
      </div>
      
      <div className="flex flex-col w-full min-h-[60px] space-y-4 relative z-10">
        <div className="flex items-center gap-2">
          <i className={`${getIcon()} text-sm text-gray-300 dark:text-card-text`} />
          <h3 className="text-sm font-medium text-gray-500 dark:text-card-text">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            {displayValue}
          </p>
          {renderVariationBadge()}
        </div>
      </div>
    </div>
  )
}

export default React.memo(KPI)
