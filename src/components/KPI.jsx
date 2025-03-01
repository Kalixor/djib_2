import React, { useEffect, useRef, useState } from 'react'

const KPI = ({ title, value }) => {
  const [displayValue, setDisplayValue] = useState('0')
  const targetValue = parseFloat(value.replace(/[^0-9.]/g, ''))
  const suffix = value.replace(/[0-9.]/g, '')
  const animationRef = useRef(null)
  const startTimeRef = useRef(null)

  const getIcon = () => {
    switch(title) {
      case 'Imports': return 'fas fa-boxes-packing'
      case 'Exports': return 'fas fa-truck-fast'
      case 'Bureaux': return 'fas fa-clipboard-list'
      case 'Recettes Totales': return 'fas fa-coins'
      default: return 'fas fa-circle-info'
    }
  }

  const variations = {
    'Imports': { value: 2.5, trend: 'up' },
    'Exports': { value: 1.8, trend: 'down' },
    'Bureaux': { value: 0.3, trend: 'up' },
    'Recettes Totales': { value: 4.2, trend: 'up' }
  }

  const animateValue = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp
    const progress = timestamp - startTimeRef.current
    const duration = 800
    
    if (progress < duration) {
      const easedProgress = easeOutQuad(progress / duration)
      const currentValue = Math.floor(easedProgress * targetValue)
      setDisplayValue(currentValue.toLocaleString() + suffix)
      animationRef.current = requestAnimationFrame(animateValue)
    } else {
      setDisplayValue(targetValue.toLocaleString() + suffix)
    }
  }

  const easeOutQuad = (t) => {
    return t * (2 - t)
  }

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animateValue)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [targetValue])

  const renderVariationBadge = (title) => {
    const variation = variations[title]
    const isPositive = variation.trend === 'up'
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
        <span>{variation.value}%</span>
        <i className={`${arrowClass} text-[0.6rem]`} />
      </div>
    )
  }

  return (
    <div className="group bg-white dark:bg-card p-4 rounded-lg shadow transition-all duration-300 relative">
      {/* Border gradient */}
      <div className="absolute inset-0 rounded-lg p-[1px] pointer-events-none"
           style={{
             background: `radial-gradient(circle at top left, #cb3cff, transparent 70%)`,
             mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
             WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
             maskComposite: 'exclude',
             WebkitMaskComposite: 'xor'
           }}>
        <div className="bg-white dark:bg-card w-full h-full rounded-[calc(0.5rem-1px)]" />
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
          {renderVariationBadge(title)}
        </div>
      </div>
    </div>
  )
}

export default KPI
