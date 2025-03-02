import { useState } from 'react'

export default function PaymentTableCard() {
  const data = [
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
    
    // Bureau D
    { bureau: 'Bureau D', taxe: 'Taxe Transit', espece: 700, cheque: 500, certifie: 400, total: 1600 },
    { bureau: 'Bureau D', taxe: 'Taxe Export', espece: 600, cheque: 450, certifie: 350, total: 1400 },
    { bureau: 'Bureau D', taxe: 'Droit Douane', espece: 500, cheque: 400, certifie: 300, total: 1200 }
  ]

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

      {/* Table with vertical scroll */}
      <div className="overflow-x-auto max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#00c2ff]/50 scrollbar-track-[#343b4f]/20">
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
