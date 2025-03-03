import { useState, useMemo } from 'react'
import PaymentTypePieChart from './PaymentTypePieChart'
import TaxPieChart from './TaxPieChart'

// Fonction pour générer des dates aléatoires dans une plage
const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    .toISOString()
    .split('T')[0]
}

// Génération des données initiales
const generateInitialData = () => {
  const bureaux = ['Bureau A', 'Bureau B', 'Bureau C', 'Bureau D']
  const taxes = ['Taxe Import', 'Taxe Export', 'Taxe Transit', 'Droit Douane']
  const data = []
  
  for (let i = 0; i < 100; i++) {
    const bureau = bureaux[Math.floor(Math.random() * bureaux.length)]
    const taxe = taxes[Math.floor(Math.random() * taxes.length)]
    const espece = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000
    const cheque = Math.floor(Math.random() * (3000 - 500 + 1)) + 500
    const certifie = Math.floor(Math.random() * (2000 - 300 + 1)) + 300
    const total = espece + cheque + certifie
    
    data.push({
      date: randomDate(new Date(2023, 0, 1), new Date()),
      bureau,
      taxe,
      espece,
      cheque,
      certifie,
      total
    })
  }
  
  return data
}

const initialData = generateInitialData()

export default function PaymentTableCard() {
  const [bureauFilter, setBureauFilter] = useState(null)
  const [taxeFilter, setTaxeFilter] = useState(null)
  const [dateFilter, setDateFilter] = useState(null)
  const [showBureauFilter, setShowBureauFilter] = useState(false)
  const [showTaxeFilter, setShowTaxeFilter] = useState(false)
  const [showDateFilter, setShowDateFilter] = useState(false)

  const getUniqueValues = (column) => {
    const values = new Set(initialData.map(item => item[column]))
    return Array.from(values).sort()
  }

  const handleFilterClick = (filterType, setFilter, setShowFilter, currentFilter) => {
    if (currentFilter) {
      setFilter(null)
    } else {
      setShowFilter(prev => !prev)
    }
  }

  // Filtrage des données
  const filteredData = useMemo(() => {
    let data = [...initialData]
    
    if (bureauFilter) {
      data = data.filter(item => item.bureau === bureauFilter)
    }
    
    if (taxeFilter) {
      data = data.filter(item => item.taxe === taxeFilter)
    }
    
    if (dateFilter) {
      data = data.filter(item => item.date === dateFilter)
    }
    
    return data
  }, [bureauFilter, taxeFilter, dateFilter])

  // Calcul des totaux
  const totals = useMemo(() => {
    return filteredData.reduce(
      (acc, item) => {
        acc.espece += item.espece
        acc.cheque += item.cheque
        acc.certifie += item.certifie
        acc.total += item.total
        return acc
      },
      { espece: 0, cheque: 0, certifie: 0, total: 0 }
    )
  }, [filteredData])

  const handleResetFilters = () => {
    setBureauFilter(null)
    setTaxeFilter(null)
    setDateFilter(null)
    setShowBureauFilter(false)
    setShowTaxeFilter(false)
    setShowDateFilter(false)
  }

  return (
    <div className="space-y-4">
      {/* Table Card */}
      <div className="bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f] transition-all duration-300 relative overflow-hidden">
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

        {/* Header avec logo */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <i className="fas fa-money-bill-wave text-lg text-gray-300 dark:text-card-text" />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-card-text">
                Recettes / Bureaux / Taxes / Mode
              </h3>
            </div>
          </div>
          <button
            onClick={handleResetFilters}
            className="px-3 py-1.5 text-xs text-card-text hover:text-[#cb3cff] transition-colors border border-[#343b4f] rounded-lg hover:border-[#cb3cff]"
          >
            Réinitialiser
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#00c2ff]/50 scrollbar-track-[#343b4f]/20">
          <table className="w-full text-xs text-left text-card-text">
            <thead className="sticky top-0 bg-brand-800/10 backdrop-blur-sm">
              <tr>
                <th scope="col" className="px-3 py-1.5 text-[#00c2ff] relative">
                  <div className="flex items-center gap-1">
                    Date
                    <button 
                      onClick={() => handleFilterClick('date', setDateFilter, setShowDateFilter, dateFilter)}
                      className="text-[#00c2ff] hover:text-[#cb3cff] transition-colors"
                    >
                      <i className={`fas ${dateFilter ? 'fa-filter-circle-xmark text-[#ce68fd]' : 'fa-filter'} text-xs`} />
                    </button>
                    {showDateFilter && (
                      <div className="absolute top-full left-0 mt-1 bg-brand-800/95 backdrop-blur-sm rounded-lg shadow-lg border border-[#cb3cff]/50 z-10">
                        <div className="max-h-48 overflow-y-auto text-[0.75rem]">
                          {getUniqueValues('date').map((value, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                setDateFilter(value)
                                setShowDateFilter(false)
                              }}
                              className="px-3 py-1.5 text-card-text hover:bg-[#cb3cff]/10 hover:text-[#cb3cff] cursor-pointer"
                            >
                              {value}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </th>
                <th scope="col" className="px-3 py-1.5 text-[#00c2ff] relative">
                  <div className="flex items-center gap-1">
                    Bureau
                    <button 
                      onClick={() => handleFilterClick('bureau', setBureauFilter, setShowBureauFilter, bureauFilter)}
                      className="text-[#00c2ff] hover:text-[#cb3cff] transition-colors"
                    >
                      <i className={`fas ${bureauFilter ? 'fa-filter-circle-xmark text-[#ce68fd]' : 'fa-filter'} text-xs`} />
                    </button>
                    {showBureauFilter && (
                      <div className="absolute top-full left-0 mt-1 bg-brand-800/95 backdrop-blur-sm rounded-lg shadow-lg border border-[#cb3cff]/50 z-10">
                        <div className="max-h-48 overflow-y-auto text-[0.75rem]">
                          {getUniqueValues('bureau').map((value, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                setBureauFilter(value)
                                setShowBureauFilter(false)
                              }}
                              className="px-3 py-1.5 text-card-text hover:bg-[#cb3cff]/10 hover:text-[#cb3cff] cursor-pointer"
                            >
                              {value}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </th>
                <th scope="col" className="px-3 py-1.5 text-[#00c2ff] relative">
                  <div className="flex items-center gap-1">
                    Taxe
                    <button 
                      onClick={() => handleFilterClick('taxe', setTaxeFilter, setShowTaxeFilter, taxeFilter)}
                      className="text-[#00c2ff] hover:text-[#cb3cff] transition-colors"
                    >
                      <i className={`fas ${taxeFilter ? 'fa-filter-circle-xmark text-[#ce68fd]' : 'fa-filter'} text-xs`} />
                    </button>
                    {showTaxeFilter && (
                      <div className="absolute top-full left-0 mt-1 bg-brand-800/95 backdrop-blur-sm rounded-lg shadow-lg border border-[#cb3cff]/50 z-10">
                        <div className="max-h-48 overflow-y-auto text-[0.75rem]">
                          {getUniqueValues('taxe').map((value, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                setTaxeFilter(value)
                                setShowTaxeFilter(false)
                              }}
                              className="px-3 py-1.5 text-card-text hover:bg-[#cb3cff]/10 hover:text-[#cb3cff] cursor-pointer"
                            >
                              {value}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </th>
                <th scope="col" className="px-3 py-1.5 text-[#00c2ff]">Espèce</th>
                <th scope="col" className="px-3 py-1.5 text-[#00c2ff]">Chèque</th>
                <th scope="col" className="px-3 py-1.5 text-[#00c2ff]">Certifié</th>
                <th scope="col" className="px-3 py-1.5 text-[#00c2ff]">Total</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr 
                  key={index} 
                  className="border-b border-[#343b4f] hover:bg-[#ce68fd]/10 transition-colors"
                >
                  <td className="px-3 py-1.5">{item.date}</td>
                  <td className="px-3 py-1.5 font-medium">{item.bureau}</td>
                  <td className="px-3 py-1.5">{item.taxe}</td>
                  <td className="px-3 py-1.5">{item.espece.toLocaleString()}</td>
                  <td className="px-3 py-1.5">{item.cheque.toLocaleString()}</td>
                  <td className="px-3 py-1.5">{item.certifie.toLocaleString()}</td>
                  <td className="px-3 py-1.5 font-medium">
                    {item.total.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
            {/* Ligne des totaux */}
            <tfoot className="sticky bottom-0">
              <tr className="bg-brand-800/10 backdrop-blur-sm border-t border-[#343b4f]">
                <td colSpan={3} className="px-3 py-1.5 font-bold text-white text-right">
                  Total
                </td>
                <td className="px-3 py-1.5 font-bold text-white">
                  {totals.espece.toLocaleString()}
                </td>
                <td className="px-3 py-1.5 font-bold text-white">
                  {totals.cheque.toLocaleString()}
                </td>
                <td className="px-3 py-1.5 font-bold text-white">
                  {totals.certifie.toLocaleString()}
                </td>
                <td className="px-3 py-1.5 font-bold text-white">
                  {totals.total.toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Pie Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PaymentTypePieChart data={[
          { name: 'Espèce', value: totals.espece },
          { name: 'Chèque', value: totals.cheque },
          { name: 'Certifié', value: totals.certifie }
        ]} />
        
        <TaxPieChart data={useMemo(() => {
          const taxes = {}
          filteredData.forEach(item => {
            taxes[item.taxe] = (taxes[item.taxe] || 0) + item.total
          })
          return Object.entries(taxes).map(([name, value]) => ({
            name,
            value
          }))
        }, [filteredData])} />
      </div>
    </div>
  )
}
