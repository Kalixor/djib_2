import { createContext, useContext, useState, useEffect } from 'react'

const PeriodContext = createContext()

export const PeriodProvider = ({ children }) => {
  const [period, setPeriod] = useState({ grain: 'Annuelles', currentDate: '2025-03-07'})

  const togglePeriod = (newPeriod) => {
    setPeriod(prev => ({ ...prev, ...newPeriod }))
  }

  // Observer les changements d'état (debug)
  useEffect(() => {
    console.log('period context updated:', period);
  }, [period]); // S'exécute à chaque changement de `period`


  return (
    <PeriodContext.Provider value={{ period, togglePeriod }}>
      {children}
    </PeriodContext.Provider>
  )
}

export const usePeriod = () => useContext(PeriodContext)
