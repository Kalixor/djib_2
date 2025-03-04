import { useState, useMemo } from 'react'
import { BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import CustomMultiSelect from '../CustomMultiSelect'
import SelectionDisplay from '../SelectionDisplay'
import Select from 'react-select'

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-brand-800/95 backdrop-blur-sm p-3 rounded-lg border border-[#cb3cff]/50 shadow-lg">
                <div className="flex flex-col gap-1">
                    <p className="text-xs text-card-text mb-1">{label}</p>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-white font-medium">
                            {payload[0].value}
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    return null
}

const generateData = (period, bureauFilter = null, taxeFilter = null) => {
    const bureaux = ['Bureau A', 'Bureau B', 'Bureau C', 'Bureau D']
    const taxes = ['Taxe Import', 'Taxe Export', 'Taxe Transit', 'Droit Douane']

    const generateItem = (i) => {
        const bureau = bureaux[Math.floor(Math.random() * bureaux.length)]
        const taxe = taxes[Math.floor(Math.random() * taxes.length)]

        if ((bureauFilter && bureau !== bureauFilter) || (taxeFilter && taxe !== taxeFilter)) {
            return null
        }

        return {
            name: i,
            value: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000,
            bureau,
            taxe
        }
    }

    switch (period) {
        case 'Jour':
            return Array.from({ length: 24 }, (_, i) => generateItem(i)).filter(Boolean)
        case 'Sem':
            return ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day, i) => generateItem(day, i)).filter(Boolean)
        case 'Mois':
            return Array.from({ length: 30 }, (_, i) => generateItem(i + 1)).filter(Boolean)
        case 'Année':
            return ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'].map((month, i) => generateItem(month, i)).filter(Boolean)
        default:
            return []
    }
}

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'rgba(8, 16, 40, 0.5)',
    backdropFilter: 'blur(12px)',
    borderColor: 'rgba(0, 194, 255, 0.5)',
    minHeight: '32px',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#00c2ff'
    }
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#0b1739',
    border: '1px solid rgba(0, 194, 255, 0.5)',
    backdropFilter: 'blur(12px)'
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#00c2ff' : 'transparent',
    color: state.isSelected ? '#0b1739' : '#aeb9e1',
    '&:hover': {
      backgroundColor: '#00c2ff',
      color: '#0b1739'
    }
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#aeb9e1'
  }),
  input: (provided) => ({
    ...provided,
    color: '#aeb9e1'
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#aeb9e1'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#aeb9e1',
    padding: '4px',
    '&:hover': {
      color: '#00c2ff'
    }
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: '#aeb9e1',
    padding: '4px',
    '&:hover': {
      color: '#00c2ff'
    }
  })
}

export default function BarChart() {
    const [period, setPeriod] = useState('Mois')
    const [bureauFilter, setBureauFilter] = useState(null)
    const [taxeFilter, setTaxeFilter] = useState(null)
    const [data, setData] = useState(generateData('Mois'))


    const bureaux = useMemo(() => [
      { value: 'Bureau A', label: 'Bureau A' },
      { value: 'Bureau B', label: 'Bureau B' },
      { value: 'Bureau C', label: 'Bureau C' },
      { value: 'Bureau D', label: 'Bureau D' }
    ], [])

    const taxes = useMemo(() => [
      { value: 'Taxe Import', label: 'Taxe Import' },
      { value: 'Taxe Export', label: 'Taxe Export' },
      { value: 'Taxe Transit', label: 'Taxe Transit' },
      { value: 'Droit Douane', label: 'Droit Douane' }
    ], [])

    const defaultTaxes = useMemo(() =>Array.from({ length: 100 }, (_, i) => ({
        value: `TAX_${i + 1}`,
        label: `Taxe ${i + 1}`,
        }))
        , [])

    const handlePeriodChange = (newPeriod) => {
        if (newPeriod !== period) {
            setPeriod(newPeriod)
            setData(generateData(newPeriod, bureauFilter?.value, taxeFilter?.value))
        }
    }



    const handleBureauChange = (selectedOption) => {
        setBureauFilter(selectedOption)
        setData(generateData(period, selectedOption?.value, taxeFilter?.value))
    }

    const renderVariationBadge = (value, trend) => {
        const isPositive = trend === 'up'
        const arrowClass = isPositive
            ? 'fas fa-arrow-up rotate-45'
            : 'fas fa-arrow-down rotate-[-35deg]'

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
                <span>{value}%</span>
                <i className={`${arrowClass} text-[0.6rem]`} />
            </div>
        )
    }

    const handleTaxeChange = (selectedOption) => {
        setTaxeFilter(selectedOption)
        setData(generateData(period, bureauFilter?.value, selectedOption?.value))
    }

    const [selectedOptions, setSelectedOptions] = useState([]);

    const removeSelection = (option) => {
        setSelectedOptions(selectedOptions.filter(item => item.value !== option.value));
    };

    return (
        <div className="group h-full bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f] transition-all duration-300 relative">
            {/* Border gradient */}
            <div className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 17% -3%, #00c2ff 0%, #00c2ff 10%, transparent 30%)`,
                    mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                    padding: '1px'
                }}>
                <div className="bg-white dark:bg-card w-full h-full rounded-lg" />
            </div>

            {/* Period Selector & Filter Combo */}
            <div className="absolute w-80 top-4 right-4 z-20 bg-brand-800/50 backdrop-blur-sm p-2 rounded-lg border border-[#00c2ff]/50">
                <div className="flex gap-10">
                    {['Jour', 'Sem', 'Mois', 'Année'].map((p) => (
                        <button
                            key={p}
                            type="button"
                            onClick={() => handlePeriodChange(p)}
                            className={`
                                    relative
                                    px-2 py-1 rounded-md
                                    text-[12px] font-medium
                                    transition-colors duration-100
                                    ${period === p
                                                        ? 'bg-[#00c2ff]/10 text-[#00c2ff]'
                                                        : 'text-card-text'
                                                    }
                                    after:absolute
                                    after:inset-0
                                    after:rounded-md
                                    after:border
                                    after:border-transparent
                                    focus:after:border-[#00c2ff]/50
                                    hover:after:border-[#00c2ff]/50
                                    after:pointer-events-none
                                    hover:text-[#00c2ff]
                            `}
                        >
                            {p}
                        </button>
                    ))}
                </div>

                {/* Combo Lists */}
                <div className="flex flex-col gap-2 mt-3 justify-end text-[12px]">
                  <div className="w-76">
                    <Select
                      options={bureaux}
                      value={bureauFilter}
                      onChange={handleBureauChange}
                      placeholder="Bureau"
                      isClearable
                      styles={customStyles}
                      classNamePrefix="react-select"
                    />
                  </div>
                  <div className="w-76">
                    <CustomMultiSelect
                      options={defaultTaxes}
                      value={taxeFilter}
                      onChange={handleTaxeChange}
                      placeholder="Taxe"
                      classNamePrefix="react-select"
                      selectedOptions={selectedOptions}
                      setSelectedOptions={setSelectedOptions}
                    />
                  </div>
                </div>
            </div>
            {/*Header Title  */}                                        
           <div className="flex items-start justify-between mb-2 relative z-10">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <i className="fas fa-chart-line text-sm text-gray-300 dark:text-card-text" />
                        <h3 className="text-xs font-medium text-gray-500 dark:text-card-text">
                            Évolution des recettes
                        </h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                            20.7M
                        </p>
                        {renderVariationBadge(4.2, 'up')}
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="h-56 relative z-10 mt-28 mb-2">
                <ResponsiveContainer width="100%" height="100%">
                    <ReBarChart
                        data={data}
                        margin={{ top: 5, right: 20, left: 0, bottom: 30 }}
                    >
                        <XAxis
                            dataKey="name"
                            tick={{
                                fill: '#aeb9e1',
                                fontSize: period === 'Mois' ? 8 : (period === 'Jour' ? 10 : 12)
                            }}
                            axisLine={false}
                            tickLine={false}
                            interval={0}
                            angle={period === 'Année' ? -45 : 0}
                            textAnchor={period === 'Année' ? 'end' : 'middle'}
                            height={40}
                        />
                        <YAxis
                            tick={{ fill: '#aeb9e1', fontSize: 10 }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={false}
                        />
                        <Bar
                            dataKey="value"
                            stroke="#00c2ff"
                            fill="transparent"
                            strokeWidth={period === 'Jour' || period === 'Mois' ? 1 : 2}
                            radius={[4, 4, 0, 0]}
                            barSize={period === 'Jour' || period === 'Mois' ? 4 : 20}
                        />
                    </ReBarChart>
                </ResponsiveContainer>
            </div>
            {/* Filter display */}
            <div className="flex w-full gap-4 items-start mb-40">
                <SelectionDisplay label={'Bureaux'} selectedOptions={selectedOptions} removeSelection={removeSelection} />
            </div>

           
        </div>
    )
}
