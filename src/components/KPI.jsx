import React, { useEffect, useRef, useState, useCallback, useContext } from 'react'
import { usePeriod } from '../context/PeriodContext'
import { PreloadedDataContext } from '../context/preLoadContext';

import {
  ClipLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClockLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  MoonLoader,
  PacmanLoader,
  PropagateLoader,
  PuffLoader,
  RingLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SkewLoader,
  SquareLoader,
  SyncLoader
} from "react-spinners";



const KPI = ({ title, isActive, onClick, style }) => {
  const { period } = usePeriod()
  const [displayValue, setDisplayValue] = useState('0')
  const [displayLastDate, setDisplayLastDate] = useState('2022-05-01')
  const [variationValue, setVariationValue] = useState(0)
  const [variationAmount, setVariationAmount] = useState(0)
  const targetValue = useRef(0)
  const animationRef = useRef(null)
  const startTimeRef = useRef(null)

  const { preloadedData, loading, error } = useContext(PreloadedDataContext);

  const querriesPeriod = {
    'Journalières': 'totPerDay',
    'Hebdomadaires': 'totPerWeek',
    'Mensuelles': 'totPerMonth',
    'Annuelles': 'totPerYear'
  }

  const titleField = {
    'Recettes Totales': 'TotalPaidValue',
    'Recettes Prévues': 'TotalAssessedValue',
    'Bureaux': '',
    'Paiements': ''
  }

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // Ajoute 1 car getMonth() commence à 0

  const getCurrentYearWeek = () => {
    const today = new Date();

    // Récupérer le numéro de semaine ISO 8601
    const getISOWeekNumber = (date) => {
      const tempDate = new Date(date.getTime());
      tempDate.setHours(0, 0, 0, 0);
      tempDate.setDate(tempDate.getDate() + 3 - (tempDate.getDay() || 7));

      const firstThursday = new Date(tempDate.getFullYear(), 0, 4);
      const weekNumber = Math.ceil(((tempDate - firstThursday) / 86400000 + 1) / 7);

      return weekNumber;
    }

    const year = today.getFullYear(); // Récupère l'année actuelle
    let week = getISOWeekNumber(today); // Récupère la semaine actuelle

    // Format "YYYY-WEEK" avec zéro devant si la semaine est < 10
    return `${year}-${week.toString().padStart(2, '0')}`;
  }

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  }

  const currentYearWeek = getCurrentYearWeek();

  const currentDay = new Date().toISOString().split('T')[0];
  // Output : "2024-03-02"
  
  const date = new Date(period.currentDate)
  const prevYear = date.getFullYear() - 1
  date.setFullYear(prevYear); // Soustraire 1 an
  const lastYearDate = date.toISOString().split('T')[0];

  const formatNumber = (value) => {
    return new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 3, maximumFractionDigits: 3 }).format(value);
  }

  const getIcon = useCallback(() => {
    switch (title) {
      case 'Paiements': return 'fas fa-cash-register'
      case 'Recettes Prévues': return 'fas fa-truck-fast'
      case 'Bureaux': return 'fas fa-clipboard-list'
      case 'Recettes Totales': return 'fas fa-coins'
      default: return 'fas fa-circle-info'
    }
  }, [title])

  const getKpiData = useCallback(() => {

    let val, prevVal, varAmount;

    setDisplayLastDate(formatDate(period.currentDate))

    // Définition dynamique de la condition
    const condition = (item) => {
      switch (period.grain) {
        case "Annuelles":
          return item.Year == currentYear;
        case "Mensuelles":
          return item.Month == currentMonth;
        case "Hebdomadaires":
          return item.Week == currentYearWeek;
        case "Journalières":
          return item.Day == currentDay;
        default:
          return false;
      }
    };

    switch (title) {
      case 'Recettes Totales':

        val = prevVal = preloadedData[querriesPeriod['Journalières']]
          .filter(item => item.Day >= `${currentYear}-01-01` && item.Day <= period.currentDate)
          .map(item => item.TotalPaidValue)
          .reduce((acc, value) => acc + value, 0);

        // Résolution à l'année
        // val = preloadedData[querriesPeriod[period.grain]]
        //   .find(condition)
        // val = (val ? val.TotalPaidValue : 0  )

        prevVal = preloadedData[querriesPeriod['Journalières']]
          .filter(item => item.Day >= `${prevYear}-01-01` && item.Day <= lastYearDate)
          .map(item => item.TotalPaidValue)
          .reduce((acc, value) => acc + value, 0);
        break;

      default:
        val = 0
        prevVal = 0
        break;
    }

    varAmount = val - prevVal

    return {
      value: val,
      prevValue: formatNumber(prevVal),
      variationAmount: varAmount
    }
  }, [loading, preloadedData, period])

  useEffect(() => {

    if (!loading && preloadedData[querriesPeriod[period.grain]] && period.grain) {

      const { value, variationAmount } = getKpiData()

      targetValue.current = value
      setVariationAmount(variationAmount)
      setVariationValue(Math.round((variationAmount / (value - variationAmount)) * 100))
      startTimeRef.current = null
      setDisplayValue('0')
      animationRef.current = requestAnimationFrame(animateValue)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [loading, preloadedData, period])

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
      setDisplayValue(formatNumber(targetValue.current))
      console.log(formatNumber(targetValue.current));
    }
  }, [])

  const easeOutQuad = useCallback((t) => t * (2 - t), [])

  const renderVariationBadge = useCallback(() => {
    // const { trend } = getKpiData()
    const isPositive = (variationAmount > 0)
    const arrowClass = isPositive
      ? 'fas fa-arrow-up rotate-45'
      : 'fas fa-arrow-down rotate-[-35deg]'

    return (
      <div className="flex flex-col items-end">
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
        <div className={`text-[1rem] mt-1 ${isPositive ? 'text-green-600' : 'text-red-500'
          }`}>
          {isPositive ? '+' : '-'}{Math.abs(variationAmount).toLocaleString()}
        </div>
        <div className="text-[0.8rem] mt-1 text-gray-400  ">
          Par rapport au <span className='text-gray-300 font-light'>{formatDate(lastYearDate)}</span>
        </div>
      </div>
    )
  }, [variationValue, variationAmount, period])

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
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <i className={`${getIcon()} text-sm text-gray-300 dark:text-card-text`} />
            <h3 className="text-sm font-medium text-gray-500 dark:text-card-text">
              {title}
            </h3>
            <div className="text-[0.8rem] mt-1 text-gray-400  ">
              au {formatDate(period.currentDate)}
            </div>
          </div>
          {renderVariationBadge()}
        </div>

        <div className="flex items-center gap-2">
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            {displayValue.replace(/\u202F/g, ' ')}
          </p>
        </div>

        {loading && (
          <div className="absolute -right-2 top-[70%] spinner-container">
            <BeatLoader color="#00c2ff" size={20} />
          </div>
        )}
      </div>
    </div>
  )
}

export default React.memo(KPI)
