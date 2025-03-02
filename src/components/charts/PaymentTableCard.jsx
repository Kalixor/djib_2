import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function PaymentTableCard() {
  const initialData = [
    // Bureau A
    { bureau: 'Bureau A', taxe: 'Taxe Import', espece: 500, cheque: 300, certifie: 200, total: 1000 },
    { bureau: 'Bureau A', taxe: 'Taxe Export', espece: 400, cheque: 250, certifie: 150, total: 800 },
    { bureau: 'Bureau A', taxe: 'Droit Douane', espece: 300, cheque: 200, certifie: 100, total: 600 },
    
    // Bureau B
    { bureau: 'Bureau B', taxe: 'Taxe Import', espece: 450, cheque: 280, certifie: 170, total: 900 },
    { bureau: 'Bureau B', taxe: 'Taxe Transit', espece: 350, cheque: 220, certifie: 130, total: 700 },
    { bureau: 'Bureau B', taxe: 'Droit Douane', espece: 250, cheque: 180, certifie: 70, total: 500 },
    
    // Bureau C
    { bureau: 'Bureau C', taxe: 'Taxe Export', espece: 600, cheque: 400, certifie: 300, total: 1300 },
    { bureau: 'Bureau C', taxe: 'Taxe Import', espece: 500, cheque: 350, certifie: 250, total: 1100 },
    { bureau: 'Bureau C', taxe: 'Droit Douane', espece: 400, cheque: 300, certifie: 200, total: 900 },
  ]

  const [data, setData] = useState(initialData)
  const [selectedColumn, setSelectedColumn] = useState(null)
  const [filterValues, setFilterValues] = useState([])
  const [selectedFilter, setSelectedFilter] = useState(null)
  const [filters, setFilters] = useState({
    bureau: null,
    taxe: null
  })

  const handleColumnSelect = (column) => {
    setSelectedColumn(column)
    const uniqueValues = [...new Set(initialData.map(item => item[column]))]
    setFilterValues(uniqueValues)
    setSelectedFilter(null)
  }

  const handleFilterSelect = (value) => {
    setSelectedFilter(value)
    setFilters(prev => ({ ...prev, [selectedColumn]: value }))
    
    const filteredData = initialData.filter(item => {
      return Object.entries(filters).every(([key, filterValue]) => {
        if (key === selectedColumn) return item[key] === value
        if (!filterValue) return true
        return item[key] === filterValue
      })
    })
    
    setData(filteredData)
  }

  const resetFilters = () => {
    setSelectedColumn(null)
    setFilterValues([])
    setSelectedFilter(null)
    setFilters({ bureau: null, taxe: null })
    setData(initialData)
  }

  return (
    <div className="bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f] transition-all duration-300 relative">
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

      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <i className="fas fa-money-bill-wave text-lg text-gray-300 dark:text-card-text" />
            <h3 className="text-sm font-semibold text-gray-900 dark:text-card-text">
              Recettes / Bureaux / Taxes / Mode
            </h3>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-4 items-center">
        {/* Column Select */}
        <Select onValueChange={handleColumnSelect}>
          <SelectTrigger className="w-48 bg-brand-800/20 border border-[#343b4f] hover:bg-brand-800/30 text-card-text">
            <SelectValue placeholder="Sélectionner une colonne" />
          </SelectTrigger>
          <SelectContent className="bg-brand-800/20 border border-[#343b4f]">
            <SelectItem 
              value="bureau"
              className="hover:bg-[#ce68fd]/10 focus:bg-[#ce68fd]/10 text-card-text"
            >
              Bureau
            </SelectItem>
            <SelectItem 
              value="taxe"
              className="hover:bg-[#ce68fd]/10 focus:bg-[#ce68fd]/10 text-card-text"
            >
              Taxe
            </SelectItem>
          </SelectContent>
        </Select>

        {/* Value Select */}
        <Select 
          onValueChange={handleFilterSelect}
          disabled={!selectedColumn}
        >
          <SelectTrigger className="w-48 bg-brand-800/20 border border-[#343b4f] hover:bg-brand-800/30 text-card-text disabled:opacity-50 disabled:cursor-not-allowed">
            <SelectValue placeholder="Sélectionner une valeur" />
          </SelectTrigger>
          <SelectContent className="bg-brand-800/20 border border-[#343b4f]">
            {filterValues.map((value, index) => (
              <SelectItem
                key={index}
                value={value}
                className="hover:bg-[#ce68fd]/10 focus:bg-[#ce68fd]/10 text-card-text"
              >
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="px-3 py-2 text-sm bg-[#ce68fd]/10 hover:bg-[#ce68fd]/20 text-[#ce68fd] rounded-lg border border-[#ce68fd]/50 transition-colors"
        >
          Réinitialiser
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#00c2ff]/50 scrollbar-track-[#343b4f]/20">
        <table className="w-full text-sm text-left text-card-text">
          <thead className="text-xs sticky top-0 bg-brand-800/10 backdrop-blur-sm">
            <tr>
              <th scope="col" className="px-4 py-2 text-[#00c2ff] sticky top-0">Bureau</th>
              <th scope="col" className="px-4 py-2 text-[#00c2ff] sticky top-0">Taxe</th>
              <th scope="col" className="px-4 py-2 text-[#00c2ff] sticky top-0">Espèce</th>
              <th scope="col" className="px-4 py-2 text-[#00c2ff] sticky top-0">Chèque</th>
              <th scope="col" className="px-4 py-2 text-[#00c2ff] sticky top-0">Certifié</th>
              <th scope="col" className="px-4 py-2 text-[#00c2ff] sticky top-0">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr 
                key={index} 
                className="border-b border-[#343b4f] hover:bg-[#ce68fd]/10 transition-colors"
              >
                <td className="px-4 py-2 text-xs font-medium">{item.bureau}</td>
                <td className="px-4 py-2 text-xs">{item.taxe}</td>
                <td className="px-4 py-2 text-xs">{item.espece.toLocaleString()}</td>
                <td className="px-4 py-2 text-xs">{item.cheque.toLocaleString()}</td>
                <td className="px-4 py-2 text-xs">{item.certifie.toLocaleString()}</td>
                <td className="px-4 py-2 text-xs font-medium">
                  {item.total.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
