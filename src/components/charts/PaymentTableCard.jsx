import { useState, useMemo } from 'react'

const initialData = [
  { bureau: 'Bureau A', taxe: 'Taxe Import', espece: 500, cheque: 300, certifie: 200, total: 1000 },
  { bureau: 'Bureau A', taxe: 'Taxe Export', espece: 400, cheque: 250, certifie: 150, total: 800 },
  { bureau: 'Bureau A', taxe: 'Droit Douane', espece: 300, cheque: 200, certifie: 100, total: 600 },
  { bureau: 'Bureau B', taxe: 'Taxe Import', espece: 450, cheque: 280, certifie: 170, total: 900 },
  { bureau: 'Bureau B', taxe: 'Taxe Transit', espece: 350, cheque: 220, certifie: 130, total: 700 },
  { bureau: 'Bureau B', taxe: 'Droit Douane', espece: 250, cheque: 180, certifie: 70, total: 500 },
  { bureau: 'Bureau C', taxe: 'Taxe Export', espece: 600, cheque: 400, certifie: 300, total: 1300 },
  { bureau: 'Bureau C', taxe: 'Taxe Import', espece: 500, cheque: 350, certifie: 250, total: 1100 },
  { bureau: 'Bureau C', taxe: 'Droit Douane', espece: 400, cheque: 300, certifie: 200, total: 900 },
  { bureau: 'Bureau D', taxe: 'Taxe Transit', espece: 700, cheque: 500, certifie: 400, total: 1600 },
  { bureau: 'Bureau D', taxe: 'Taxe Export', espece: 600, cheque: 450, certifie: 350, total: 1400 },
  { bureau: 'Bureau D', taxe: 'Droit Douane', espece: 500, cheque: 400, certifie: 300, total: 1200 }
]

export default function PaymentTableCard() {
  const [bureauFilter, setBureauFilter] = useState(null)
  const [taxeFilter, setTaxeFilter] = useState(null)
  const [showBureauFilter, setShowBureauFilter] = useState(false)
  const [showTaxeFilter, setShowTaxeFilter] = useState(false)

  const getUniqueValues = (column) => {
    const values = new Set(initialData.map(item => item[column]))
    return Array.from(values)
  }

  const filteredData = useMemo(() => {
    let data = [...initialData]
    
    if (bureauFilter) {
      data = data.filter(item => item.bureau === bureauFilter)
    }
    
    if (taxeFilter) {
      data = data.filter(item => item.taxe === taxeFilter)
    }
    
    return data
  }, [bureauFilter, taxeFilter])

  const handleResetFilters = () => {
    setBureauFilter(null)
    setTaxeFilter(null)
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
                  Bureau
                  <button 
                    onClick={() => setShowBureauFilter(!showBureauFilter)}
                    className="text-[#00c2ff] hover:text-[#cb3cff] transition-colors"
                  >
                    <i className="fas fa-filter text-xs" />
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
                    onClick={() => setShowTaxeFilter(!showTaxeFilter)}
                    className="text-[#00c2ff] hover:text-[#cb3cff] transition-colors"
                  >
                    <i className="fas fa-filter text-xs" />
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
        </table>
      </div>
    </div>
  )
}
