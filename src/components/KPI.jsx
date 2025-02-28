import React, { useState, useEffect, useRef, useMemo } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Text } from 'recharts'

const KPI = ({ title, value, isActive, onClick }) => {
  const [sortAscending, setSortAscending] = useState(true)
  const [isChartView, setIsChartView] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const kpiRef = useRef(null)

  const YELLOW_COLORS = [
    '#FFD700',
    '#FFC300',
    '#FFA500',
    '#FF8C00',
    '#FFD700',
    '#FFC300',
    '#FFA500',
    '#FF8C00'
  ]

  const onPieEnter = (_, index) => {
    setActiveIndex(index)
  }

  const onPieLeave = () => {
    //setActiveIndex(null)
  }
  
  const renderTopLabel = () => {
    if (activeIndex === null) return null
    
    const activeItem = getSubItems()[activeIndex]
    const truncatedLabel = activeItem.name.length > 14 
      ? `${activeItem.name.substring(0, 14)}...` 
      : activeItem.name

    return (
      <text
        x="50%"
        y="10%"
        fill="#a8a9a7"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          fontSize: '1.4rem',
          fontWeight: 'bold',
          textShadow: '0 0 4px rgba(255,195,0,0.8)',
          filter: 'none'
        }}
      >
        {activeItem.name}
      </text>
    )
  }

  const renderCenterLabel = () => {
    const currentIndex = activeIndex !== null ? activeIndex : 0
    const activeItem = getSubItems()[currentIndex]
    const iconClass = getSubItemIcon(activeItem.name)

    return (
      <>
        <foreignObject x="30%" y="30%" width="40%" height="40%">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            opacity: 0.2
          }}>
            <i className={`${iconClass} text-8xl text-yellow-200`} />
          </div>
        </foreignObject>

        <text
          x="50%"
          y="50%"
          fill="#f9f7f7"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            textShadow: '0 0 4px rgba(255,195,0,0.8)',
            filter: 'none',
            opacity: 1
          }}
        >
          {`${activeItem.value}M`}
        </text>
      </>
    )
  }

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="#333"
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fontSize: '0.9rem',
          fontWeight: 'bold',
          pointerEvents: 'none',
          opacity: 1,
          transition: 'none'
        }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  useEffect(() => {
    if (isActive) {
      setActiveIndex(0)
    }
  }, [isActive])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (kpiRef.current && !kpiRef.current.contains(event.target)) {
        if (isActive) {
          onClick()
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isActive, onClick])

  const getIcon = () => {
    switch(title) {
      case 'Importations': return 'fas fa-boxes-packing'
      case 'Exportations': return 'fas fa-truck-fast'
      case 'Manifestes': return 'fas fa-clipboard-list'
      case 'Recettes Totales': return 'fas fa-coins'
      default: return 'fas fa-circle-info'
    }
  }

  const getSubItemIcon = (label) => {
    switch(label) {
      case 'Produits agricoles': return 'fas fa-wheat-awn'
      case 'Matériel industriel': return 'fas fa-industry'
      case 'Produits chimiques': return 'fas fa-flask'
      case 'Textiles': return 'fas fa-tshirt'
      case 'Produits pétroliers': return 'fas fa-gas-pump'
      case 'Métaux': return 'fas fa-cubes'
      case 'Maritimes': return 'fas fa-ship'
      case 'Aériens': return 'fas fa-plane'
      case 'Terrestres': return 'fas fa-truck'
      case 'Droits de douane': return 'fas fa-file-invoice-dollar'
      case 'Taxes': return 'fas fa-percent'
      case 'Amendes': return 'fas fa-gavel'
      default: return 'fas fa-circle-info'
    }
  }
  
  const getSubItems = () => {
    const items = {
      'Importations': [
        { name: 'Produits agricoles', value: 4.2 },
        { name: 'Matériel industriel', value: 3.8 },
        { name: 'Produits chimiques', value: 2.5 },
        { name: 'Autres', value: 2.0 }
      ],
      'Exportations': [
        { name: 'Textiles', value: 3.0 },
        { name: 'Produits pétroliers', value: 2.5 },
        { name: 'Métaux', value: 1.7 },
        { name: 'Autres', value: 1.0 }
      ],
      'Manifestes': [
        { name: 'Maritimes', value: 800 },
        { name: 'Aériens', value: 300 },
        { name: 'Terrestres', value: 100 }
      ],
      'Recettes Totales': [
        { name: 'Droits de douane', value: 12.5 },
        { name: 'Taxes', value: 5.2 },
        { name: 'Amendes', value: 2.0 },
        { name: 'Autres', value: 1.0 }
      ]
    }

    const data = items[title] || []
    return data.sort((a, b) => {
      return sortAscending ? a.value - b.value : b.value - a.value
    })
  }

  const cellOpacity = useMemo(() => {
    return Array(getSubItems().length).fill(0.3).map((_, index) => 
      index === activeIndex ? 1 : 0.3
    )},
    [activeIndex, getSubItems])
  
  const toggleSort = (e) => {
    e.stopPropagation()
    setSortAscending(!sortAscending)
  }

  const toggleView = (e) => {
    e.stopPropagation()
    setIsChartView(!isChartView)
  }

  const renderChart = () => {
    const data = getSubItems()

    return (
      <div className="h-96 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              fill="#FFD700"
              paddingAngle={5}
              dataKey="value"
              label={renderCustomizedLabel}
              labelLine={false}
              isAnimationActive={false}
              activeIndex={activeIndex}
              activeShape={{
                outerRadius: 130,
                innerRadius: 70,
                fill: '#FFC300'
              }}
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={YELLOW_COLORS[index % YELLOW_COLORS.length]}
                  strokeWidth={activeIndex === index ? 2 : 1}
                  stroke="#FFD700"
                  fillOpacity={cellOpacity[index]}
                />
              ))}
            </Pie>
            {renderTopLabel()}
            {renderCenterLabel()}
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
  
  const renderList = () => {
    const data = getSubItems()

    return (
      <div className="p-3 space-y-2">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="group/subitem grid grid-cols-[minmax(120px,1fr)_80px_32px] items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300 truncate">{item.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{((item.value / data.reduce((sum, i) => sum + i.value, 0)) * 100).toFixed(0)}%</p>
            </div>
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 text-center">
              {item.value}M
            </p>
            <i className={`${getSubItemIcon(item.name)} text-xl text-gray-300 dark:text-gray-600`} />
          </div>
        ))}
      </div>
    )
  }

  const variations = {
    'Importations': { value: 2.5, trend: 'up' },
    'Exportations': { value: 1.8, trend: 'down' },
    'Manifestes': { value: 0.3, trend: 'up' },
    'Recettes Totales': { value: 4.2, trend: 'up' }
  }

  const renderKPIHeader = () => {
    const variation = variations[title]
    const arrowClass = variation.trend === 'up' 
      ? 'fas fa-arrow-up' 
      : 'fas fa-arrow-down'

    return (
      <div className="flex justify-between items-start w-full min-h-[60px]">
        <div className="flex-1 space-y-2">
          <h3 className="text-sm font-medium text-gray-500 dark:text-card-text">
            {title}
          </h3>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            {value}
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center mr-1">
          <div>
            <i className={`${arrowClass} text-sm text-card-text`} />
          </div>
          <span className={`text-xs ${
            isActive
              ? variation.trend === 'up' 
                ? 'text-green-500' 
                : 'text-red-500'
              : 'text-gray-400'
          }`}>
            {variation.value}%
          </span>
        </div>
  
        <div className="ml-4">
          <i className={`${getIcon()} text-xl text-card-text`} />
        </div>
      </div>
    )
  }
  
  return (
    <div 
      ref={kpiRef}
      className={`group bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f] ${
        isActive 
          ? 'shadow-lg' 
          : ''
      } transition-all duration-300 cursor-pointer relative`}
      onClick={onClick}
    >
      {renderKPIHeader()}
  
      {isActive && (
        <>
          <div className="absolute bottom-2 right-2 flex gap-2">
            <button
              onClick={toggleView}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 transition-colors duration-300 flex items-center justify-center w-5 h-5"
              title="Toggle View"
            >
              <i className={`fas ${
                isChartView ? 'fa-list text-yellow-500' : 'fa-chart-pie text-gray-800 dark:text-gray-200'
              } text-xl`} />
            </button>
            <button
              onClick={toggleSort}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 transition-colors duration-300 flex items-center justify-center w-5 h-5"
              title="Sort"
            >
              <i className={`fas ${
                sortAscending ? 'fa-sort-amount-down-alt text-yellow-500' : 'fa-sort-amount-up text-gray-800 dark:text-gray-200'
              } text-xl`} />
            </button>
          </div>

          <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            {isChartView ? renderChart() : renderList()}
          </div>
        </>
      )}
    </div>
  )
}

export default KPI
