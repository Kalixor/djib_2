import { useState } from 'react'

export default function TableauTabs() {
  const [activeTab, setActiveTab] = useState('tableau1')

  const renderTable1 = () => (
    <div className="mt-4 bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f]">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-card-text">
          <thead className="bg-brand-800/90">
            <tr>
              <th scope="col" className="px-4 py-2 text-[#00c2ff]">Date</th>
              <th scope="col" className="px-4 py-2 text-[#00c2ff]">Bureau</th>
              <th scope="col" className="px-4 py-2 text-[#00c2ff]">Montant</th>
              <th scope="col" className="px-4 py-2 text-[#00c2ff]">Statut</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#343b4f] hover:bg-[#ce68fd]/10">
              <td colSpan={4} className="px-4 py-3 text-center text-gray-400 dark:text-card-text">
                Aucune donnée disponible
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderTable2 = () => (
    <div className="mt-4 bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f]">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-card-text">
          <thead className="bg-brand-800/90">
            <tr>
              <th scope="col" className="px-4 py-2 text-[#00c2ff]">ID</th>
              <th scope="col" className="px-4 py-2 text-[#00c2ff]">Type</th>
              <th scope="col" className="px-4 py-2 text-[#00c2ff]">Quantité</th>
              <th scope="col" className="px-4 py-2 text-[#00c2ff]">Valeur</th>
              <th scope="col" className="px-4 py-2 text-[#00c2ff]">Destination</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#343b4f] hover:bg-[#ce68fd]/10">
              <td colSpan={5} className="px-4 py-3 text-center text-gray-400 dark:text-card-text">
                Aucune donnée disponible
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderTable3 = () => (
    <div className="mt-4 bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f]">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-card-text">
          <thead className="bg-brand-800/90">
            <tr>
              <th scope="col" className="px-4 py-2 text-[#00c2ff]">Opération</th>
              <th scope="col" className="px-4 py-2 text-[#00c2ff]">Heure</th>
              <th scope="col" className="px-4 py-2 text-[#00c2ff]">Utilisateur</th>
              <th scope="col" className="px-4 py-2 text-[#00c2ff]">Détails</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#343b4f] hover:bg-[#ce68fd]/10">
              <td colSpan={4} className="px-4 py-3 text-center text-gray-400 dark:text-card-text">
                Aucune donnée disponible
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <div className="bg-brand-800/50 backdrop-blur-sm p-2 rounded-lg border border-[#cb3cff]/50 mt-2">
      <div className="flex gap-1">
        {['Tableau 1', 'Tableau 2', 'Tableau 3'].map((tab, index) => (
          <button
            key={tab}
            className={`
              px-3 py-1.5 rounded-md text-sm font-medium
              transition-colors duration-100
              ${
                activeTab === `tableau${index + 1}`
                  ? 'bg-[#cb3cff]/10 text-[#cb3cff]'
                  : 'text-card-text hover:bg-brand-700/50'
              }
            `}
            onClick={() => setActiveTab(`tableau${index + 1}`)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'tableau1' && renderTable1()}
      {activeTab === 'tableau2' && renderTable2()}
      {activeTab === 'tableau3' && renderTable3()}
    </div>
  )
}
