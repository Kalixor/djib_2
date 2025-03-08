import { useState, useContext, useEffect, useMemo, useCallback } from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { FilterMatchMode } from 'primereact/api';
// import 'primereact/resources/themes/saga-blue/theme.css';  // Thème
import 'primereact/resources/themes/md-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';          // Styles de base
import 'primeicons/primeicons.css';
import '../tabs_styles.css';
import { PreloadedDataContext } from '../context/preLoadContext';
import CustomMultiSelect from './CustomMultiSelect'

export default function TableauTabs() {
  const [activeTab, setActiveTab] = useState('tableau1')
  
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [headerGroup, setHeaderGroup] = useState(null);
  const [month, setMonth] = useState("2024-01");
  const { preloadedData, loading, error } = useContext(PreloadedDataContext);

  const handleDateChange = (e) => {
    const selectedValue = e.target.value;
    setMonth(selectedValue);
  }

  // Données de transaction 
  const transactions = preloadedData.totTaxByBurByMonth
  
  const dates = useMemo(() => Array.from(new Set(transactions.map(t => t.Month)))
  , [])

  // Table de liaison CodeTaxe -> TaxeDescription
  const taxeDescriptions = preloadedData.taxByName
  
  // Office groupings
  const bureauGroups = {
    "SITE-PORT": [
        "Bureau du Port",
        "Bureau Hydrocarbures",
        "Bureau Free Zone",
        "Djibouti International Free Trade",
        "Bureau FZ East Africa Holding",
        "Bureau Zone Franche",
        "Bureau Transit",
        "Bureau UKAB HOLDING",
        "Bureau révision",
        "Bureau exonération"
    ],
    "SITE-AEROPORT": [
        "Bureau Frêt",
        "Bureau Khat",
        "Bureau Passager"
    ],
    "SITE-VILLE": [
        "Bureau Gare",
        "Bureau Poste"
    ]
  };

  // Filter transactions by selected month and offices
  const filterTransactions = useCallback( (month, selectedOffices) => {
    return transactions.filter(entry => entry.Month === month && (selectedOffices === '*' || selectedOffices.includes(entry.CodeOffice)));
  });

  // Transform transactions into pivoted table data
  const transformData = useCallback( (filteredTransactions) => {
    const taxeMap = Object.fromEntries(taxeDescriptions.map(taxe => [taxe.CodeTaxe, taxe.TaxeDescription]));
    const transformedData = {};

    filteredTransactions.forEach(({ CodeOffice, CodeTaxe, TotalAmountPaid }) => {
        if (!transformedData[CodeTaxe]) {
            transformedData[CodeTaxe] = { CodeTaxe, TaxeDescription: taxeMap[CodeTaxe] || CodeTaxe };
        }
        transformedData[CodeTaxe][CodeOffice] = TotalAmountPaid;
    });
    return Object.values(transformedData);
  });

  // Generate PrimeReact table columns
  const generateColumns = useCallback( (uniqueOffices) => {
    return [
        { field: "CodeTaxe", header: "Code Taxe" },
        { field: "TaxeDescription", header: "Description" },
        ...uniqueOffices.map(office => ({ field: office, header: office }))
    ];
  });

  // Generate dynamic header group
  const generateHeaderGroup = useCallback((uniqueOffices) => {
    const headerRows = [];
    const subHeaderRows = [<Column header="" key="empty" />];
    const freeGroup = [];

    Object.entries(bureauGroups).forEach(([groupName, offices]) => {
        const groupOffices = offices.filter(office => uniqueOffices.includes(office));
        if (groupOffices.length > 0) {
            headerRows.push(
                <Column key={groupName} header={groupName} colSpan={groupOffices.length} alignHeader="left" headerStyle={{ color: '#b6d16b', fontWeight: 'bold' }} />
            );
            groupOffices.forEach(office => {
                subHeaderRows.push(
                    <Column key={office} header={office} headerStyle={{ color: '#c09f62', fontWeight: 'bold' }} />
                );
            });
        }
    });

    // Find offices not in predefined groups
    uniqueOffices.forEach(office => {
        if (!Object.values(bureauGroups).some(group => group.includes(office))) {
            freeGroup.push(office);
        }
    });

    // Add "Free" group for unclassified offices
    if (freeGroup.length > 0) {
        headerRows.push(
            <Column key="Free" header="Free" colSpan={freeGroup.length} alignHeader="left" headerStyle={{ color: '#b6d16b', fontWeight: 'bold' }} />
        );
        freeGroup.forEach(office => {
            subHeaderRows.push(
                <Column key={office} header={office} headerStyle={{ color: '#c09f62', fontWeight: 'bold' }} />
            );
        });
    }
  });

  useEffect(() => {

    console.log('entering loading transformaing')

    setMonth(month);

    const selectedOffices = '*'; // ['DIFTZ', 'DJAFR', 'DJAKH', 'DJBAP', 'DJCDF']
    
    const filteredTransactions = filterTransactions(month, selectedOffices);

    const uniqueOffices = Array.from(new Set(filteredTransactions.map(t => t.CodeOffice)));

    const data = transformData(filteredTransactions);

    const cols = generateColumns(uniqueOffices);

    const headerGrp = generateHeaderGroup(uniqueOffices);

    setTableData(data);
    setColumns(cols);
    setHeaderGroup(headerGrp);

  },[loading])
  
  // Définition du groupe de colonnes pour l'en-tête
  const heaerGroup = (
    <ColumnGroup>
      {/* Première ligne : Catégories principales */}
      <Row>
        <Column header="Taxes et Surtaxes" colSpan={1} headerStyle={{ color: '#96c5d3', fontWeight: 'bold' }} />
        <Column header="SITE-PORT" colSpan={4} alignHeader="left" headerStyle={{ color: '#b6d16b', fontWeight: 'bold' }} />
        <Column header="SITE-AEROPORT" colSpan={3} alignHeader="left" headerStyle={{ color: '#b6d16b', fontWeight: 'bold' }} />
        <Column header="SITE-VILLE" colSpan={2} alignHeader="left" headerStyle={{ color: '#b6d16b', fontWeight: 'bold' }} />
        <Column header="" colSpan={1} alignHeader="left" />
        <Column header="TOTAL" colSpan={1} alignHeader="left" headerStyle={{ color: '#b6d16b', fontWeight: 'bold' }} />
      </Row>

      {/* Deuxième ligne : Détails des bureaux */}
      <Row frozen>
        <Column header="" />
        {/* Bureaux sous SITE-PORT */}
        <Column header="Bureau des Liquidations" headerStyle={{ color: '#c09f62', fontWeight: 'bold' }} />
        <Column header="Régimes Suspensifs" headerStyle={{ color: '#c09f62', fontWeight: 'bold' }} />
        <Column header="Bureau de la Révision" headerStyle={{ color: '#c09f62', fontWeight: 'bold' }} />
        <Column header="Bureau d'Exonération" headerStyle={{ color: '#c09f62', fontWeight: 'bold' }} />
        {/* Bureaux sous SITE-AEROPORT */}
        <Column header="KATH-Particulier-Sogick" headerStyle={{ color: '#c09f62', fontWeight: 'bold' }} />
        <Column header="Frêt" headerStyle={{ color: '#c09f62', fontWeight: 'bold' }} />
        <Column header="Passager" headerStyle={{ color: '#c09f62', fontWeight: 'bold' }} />
        {/* Bureaux sous SITE-VILLE */}
        <Column header="Bureau de la Gare" headerStyle={{ color: '#c09f62', fontWeight: 'bold' }} />
        <Column header="Bureau de la Poste" headerStyle={{ color: '#c09f62', fontWeight: 'bold' }} />
        {/* Agence Spécial */}
        <Column header="Agence Spécial" headerStyle={{ color: '#c09f62', fontWeight: 'bold' }} />
        {/* TOTAL */}
        <Column header="Total" headerStyle={{ color: '#f5e58c', fontWeight: 'bold' }} />
      </Row>
    </ColumnGroup>
  );

  // État pour les filtres
  // const [filters, setFilters] = useState({
  //   global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  //   bureau: { value: null, matchMode: FilterMatchMode.CONTAINS },
  //   statut: { value: null, matchMode: FilterMatchMode.CONTAINS }
  // });

  // const formattedData = rawData.map(item => ({
  //   ...item,
  //   date: new Date(`${item.date}-01`), // Conversion en objet Date
  // }));

  // setProducts(formattedData);

  // Fonction pour formater le mois en 'MMMM yyyy'
  const formatMonth = (date) => {
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });
  };

  // Modèle pour les sous-en-têtes avec une classe CSS spécifique
  const rowGroupHeaderTemplate = (data) => (
    <tr className="custom-subheader">
      <td colSpan="4">{data.date}</td>
    </tr>
  );

  // Modèle pour les sous-en-têtes avec une classe CSS spécifique
  // Function to calculate the total amount for a group
  const calculateGroupTotal = (group) => {
    return group.reduce((acc, item) => acc + item.montant, 0);
  };

  // Template for the group footer
  // const rowGroupFooterTemplate = (data, options) => {

  //   console.log('options is : ', options)

  //   const groupTotal = calculateGroupTotal(options.rows);
  //   return (
  //     <tr className="custom-group-footer">
  //       <td colSpan="2" style={{ textAlign: 'right', fontWeight: 'bold' }}>
  //         Total for {formatMonth(data.date)}:
  //       </td>
  //       <td style={{ fontWeight: 'bold' }}>{groupTotal.toLocaleString()} Fdj</td>
  //       <td></td>
  //     </tr>
  //   );
  // };



  const renderTable1 = () => (
    <div>
      <h2 className="text-xl text-center font-bold text-white mb-4 p-6">RECETTE  MENSUELLE  PAR  BUREAUX POUR LE MOIS : <span className='text-back-200'>{month}</span>  </h2>
      <div className="flex w-48">
                    <select
                      value={month}
                      // label={bureauLabel}
                      onChange = {handleDateChange}
                      placeholder="Dates"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"

                      // selectedOptions={bureauOptions}
                      // setSelectedOptions={setBureauOptions}
                      >
                        {dates.map((date, index) => (
                          <option key={index} value={date}>
                            {date}
                          </option>
                        ))}
                      </select>
                  </div>

      <div className="mt-4 bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f]">
        <div className="card">
          <DataTable
            value={tableData}
            // rowGroupMode="subheader"
            // groupRowsBy="date"
            // sortMode="single"
            // sortField="date"
            // sortOrder={1}
            // rowGroupHeaderTemplate={rowGroupHeaderTemplate}
            // rowGroupFooterTemplate={rowGroupFooterTemplate}
            headerColumnGroup={headerGroup}
            scrollable
            // showGridlines
            scrollHeight="500px"
            // style={{ width: '800px' }}
            className="custom-datatable"
          >
            {columns.map(col => (
                                  <Column key={col.field} field={col.field} header={col.header} />
                ))}

          </DataTable>
        </div>
      </div>
    </div>
  )

  const renderTable2 = () => (
    <div>
      <h2 className="text-xl text-center font-bold text-white mb-4 p-6">Tableau des Stocks</h2>
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
    </div>
  )

  const renderTable3 = () => (
    <div>
      <h2 className="text-xl text-center font-bold text-white mb-4 p-6">Tableau des Opérations</h2>
      <div className="mt-4 bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f]">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-card-text">
            <thead className="bg-brand-800/90">
              <tr>
                <th scope="col" className="px-4 py-2 text-[#f5e58c]">Opération</th>
                <th scope="col" className="px-4 py-2 text-[#96c5d3]">Heure</th>
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
    </div>
  )

  return (
    <div className="bg-brand-800/50 backdrop-blur-sm p-2 rounded-lg border border-[#cb3cff]/50 mt-2">
      <div className="flex gap-1">
        {['Recettes', 'Tableau 2', 'Tableau 3'].map((tab, index) => (
          <button
            key={tab}
            className={`
              px-3 py-1.5 rounded-md text-sm font-medium
              transition-colors duration-100
              ${activeTab === `tableau${index + 1}`
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
