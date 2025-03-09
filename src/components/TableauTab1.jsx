import { useState, useContext, useEffect, useMemo, useCallback } from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from "primereact/inputtext";
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { FilterMatchMode } from 'primereact/api';
// import 'primereact/resources/themes/saga-blue/theme.css';  // Thème
import 'primereact/resources/themes/md-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';          // Styles de base
import 'primeicons/primeicons.css';
import '../tabs_styles.css';
import { PreloadedDataContext } from '../context/preLoadContext';
import CustomSelect from './CustomSelect'
import StyledInputText from './StyledInputText'


export default function TableauTabs() {
  const [activeTab, setActiveTab] = useState('tableau1')
  const [searchTerm, setSearchTerm] = useState("");

  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [headerGroup, setHeaderGroup] = useState(null);
  const [month, setMonth] = useState("2022-01");
  const [selectedOption, setSelectedOption] = useState(null);

  const [selectedMonth, setselectedMonth] = useState([]);

  const { preloadedData, loading, error } = useContext(PreloadedDataContext);

  const handleDateChange = (s) => {
    console.log(s)
    setselectedMonth(s);
    setMonth(s.value);
  }

  // Convert `data` from an object into an array
  const dataArray = Object.values(tableData);

  // Filtering logic: Search in CodeTaxe and TaxeDescription
  const filteredData = dataArray.filter(row =>
    row.CodeTaxe.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.TaxeDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Custom header with search input
  const headerWithSearch = () => (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <span>Code Taxe:</span>
      <InputText
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        style={{ width: "100px" }}
      />
    </div>
  );
  // Données de transaction 
  const transactions = preloadedData.recettesBureau

  const dates = useMemo(() => Array.from(new Set(transactions.map(t => t.Month)))
    , [])

  // Table de liaison CodeTaxe -> TaxeDescription
  const taxeDescriptions = preloadedData.taxes

  // Table de liaison CodeTaxe -> TaxeDescription
  const codeOfficeByName = preloadedData.bureaux

  const bureauGroups = {
    "SITE-PORT": [
      "Bureau du Port", //OK
      "Bureau  Hydrocarbures", //Ok
      "Bureau Free Zone", //OK
      "Djibouti International Free Trade", //OK
      "Bureau FZ East Africa Holding", //OK
      "Bureau Zone Franche", //OK
      "Bureau Transit", //OK
      "Bureau UKAB HOLDING ", //OK
      "Bureau Révision", //Ok
      "Bureau Exonérations",
      "Bureau UKAB HOLDING"

    ],
    "SITE-AEROPORT": [
      "Bureau Aéroport Fret",
      "Bureau Khat",
      "Brigade Aéroport Passager"
    ],
    "SITE-VILLE": [
      "Bureau de la Gare",
      "Bureau  Poste",
      "Djibouti International Free Trade"
    ]
  };

  // Filter transactions by selected month and offices
  const filterTransactions = useCallback((month, selectedOffices) => {
    return transactions.filter(entry => entry.Month === month && (selectedOffices === '*' || selectedOffices.includes(entry.CodeOffice)));
  });

  // Transform transactions into pivoted table data
  const transformData = useCallback((filteredTransactions, uniqueOffices) => {

    const sumRows = (data) => {
      // Iterate through each parent object
      for (const parentKey in data) {
        const details = data[parentKey];
        let total = 0;

        // Iterate over each key in the inner object
        for (const key in details) {
          if (key.startsWith("D")) {
            const value = details[key];
            // If the value is a number, add it directly
            if (typeof value === "number") {
              total += value;
            }
            // If it's a non-empty string, try to convert it to a number
            else if (typeof value === "string" && value !== "") {
              const numberVal = parseFloat(value);
              if (!isNaN(numberVal)) {
                total += numberVal;
              }
            }
          }
        }
        // Add a new key with the total (e.g., "TOT-AIB")
        details[`total`] = total;
      }
    }


    const sunColumns = (data) => {
      // Création d'un objet résumé pour accumuler les sommes verticales
      const summary = {};

      // Parcourir chaque objet parent de la structure
      for (const parentKey in data) {
        const details = data[parentKey];
        // Parcourir chaque clé de l'objet courant
        for (const key in details) {
          // On ne considère que les champs qui commencent par "D" et qui ne sont pas déjà un total
          if (key.startsWith("D") && !key.startsWith("tot")) {
            let value = details[key];
            // Convertir la valeur en nombre si nécessaire (les chaînes vides seront considérées comme 0)
            let numberVal = typeof value === "number" ? value : parseFloat(value) || 0;
            // Nommer le champ dans le résumé en ajoutant "TOT-" devant le nom original
            const summaryKey = key;
            summary[summaryKey] = (summary[summaryKey] || 0) + numberVal;
          }
        }
      }

      data["TOTAL"] = summary;
      data["TOTAL"]["CodeTaxe"] = "TOTAUX";
      data["TOTAL"]["TaxeDescription"] = "Par Bureaux";
    }

    const taxeMap = Object.fromEntries(taxeDescriptions.map(taxe => [taxe.CodeTaxe, taxe.TaxeDescription]));

    const transformedData = {};

    filteredTransactions.forEach(({ CodeOffice, CodeTaxe, TotalAmountPaid }) => {
      if (!transformedData[CodeTaxe]) {
        transformedData[CodeTaxe] = { CodeTaxe, TaxeDescription: taxeMap[CodeTaxe] || CodeTaxe };

        // Initialize all CodeOffice fields to prevent missing columns
        uniqueOffices.forEach(office => {
          transformedData[CodeTaxe][office] = '';
        });
      }
      transformedData[CodeTaxe][CodeOffice] = TotalAmountPaid;
    });

    sumRows(transformedData)
    sunColumns(transformedData)

    console.log('transformedData is :', transformedData)

    return Object.values(transformedData);
  });

  // Generate PrimeReact table columns
  const generateColumns = useCallback((groupedData) => {

    console.log('groupedData is :', groupedData)


    return [
      { field: "CodeTaxe", header: "Code Taxe", frozen: true },
      { field: "TaxeDescription", header: "Description", bodyStyle: { backgroundColor: "#081028" } },
      ...groupedData.map(office => (({ field: office, header: office }))),
      { field: "total", header: "TOTAL", bodyStyle: { color: '#f5e58c', backgroundColor: "#081028", textAlign: "left" }, frozen: true, alignFrozen: "right" },
      // ...[...uniqueOffices].reverse().map(office => ({ field: office, header: office }))
    ];
  });

  // Generate dynamic header group
  const generateHeaderGroup = useCallback((uniqueOffices) => {
    const headerRows = [];
    const subHeaderRows = [<Column header="" key="empty" />];
    const freeGroup = [];

    // Map CodeOffice to OfficeDescription
    const officeCodeToName = Object.fromEntries(codeOfficeByName.map(t => [t.CodeOffice, t.OfficeName]));
    const officeNames = uniqueOffices.map(code => officeCodeToName[code] || code);

    subHeaderRows.push(
      <Column header={''} alignHeader="left" headerStyle={{ color: '#b6d16b', fontWeight: 'bold' }} />
    );

    const officeMap = Object.fromEntries(codeOfficeByName.map(off => [off.OfficeName, off.CodeOffice]));

    Object.entries(bureauGroups).forEach(([groupName, offices]) => {

      const groupOffices = offices.filter(office => officeNames.includes(office));
      // const groupOffices = orderedOffices.filter(office => offices.includes(officeCodeToName[office]));

      if (groupOffices.length > 0) {

        headerRows.push(
          <Column key={groupName} header={groupName} colSpan={groupOffices.length} alignHeader="left" headerStyle={{ color: '#b6d16b', fontWeight: 'bold' }} />
        );
        groupOffices.forEach(office => {
          subHeaderRows.push(
            <Column key={officeMap[office]} header={office} headerStyle={{ color: '#c09f62', fontWeight: 'bold' }} />
          );
        });
      }
    });

    // Find offices not in predefined groups
    officeNames.forEach(office => {
      if (!Object.values(bureauGroups).some(group => group.includes(office))) {
        freeGroup.push(office);
      }
    });

    // Add "Free" group for unclassified offices
    if (freeGroup.length > 0) {
      headerRows.push(
        <Column key="Free" header="SITE-?" colSpan={freeGroup.length} alignHeader="left" headerStyle={{ color: '#b6d16b', fontWeight: 'bold' }} />
      );
      freeGroup.forEach(office => {
        subHeaderRows.push(
          <Column key={office} header={office} headerStyle={{ color: '#c09f62', fontWeight: 'bold' }} />
        );
      });
    }

    const keySubHeader = subHeaderRows.map((s) => s.key).slice(2)

    const cols = generateColumns(keySubHeader)

    console.log('cols is :', cols)


    setColumns(cols)

    // Ajouter la colonne "Total" si nécessaire
    if (uniqueOffices.length > 0) {
      headerRows.push(
        <Column
          header="TOTAUX"
          colSpan={1}
          alignHeader="left"
          headerStyle={{ color: '#b6d16b', fontWeight: 'bold' }}
          key="TOTAL"
          frozen
          alignFrozen="right"
        />
      );
      subHeaderRows.push(
        <Column
          header="Total"
          headerStyle={{ color: '#f5e58c', fontWeight: 'bold' }}
          key="Total"
          frozen
          alignFrozen="right"
        />
      );
    }

    return (
      <ColumnGroup>
        <Row >
          <Column header="Taxes et Surtaxes" colSpan={1} headerStyle={{ color: '#96c5d3', fontWeight: 'bold' }} frozen />
          <Column header="Description" colSpan={1} headerStyle={{ color: '#96c5d3', fontWeight: 'bold', zIndex: 1 }} />
          {headerRows}
        </Row>
        <Row >
          {subHeaderRows}
        </Row>
      </ColumnGroup>
    );
  });

  useEffect(() => {

    setMonth(month);

    const selectedOffices = '*'; //  ['DIFTZ', 'DJAFR', 'DJAKH', 'DJBAP', 'DJCDF']

    const filteredTransactions = filterTransactions(month, selectedOffices);

    const uniqueOffices = Array.from(new Set(filteredTransactions.map(t => t.CodeOffice)));

    const data = transformData(filteredTransactions, uniqueOffices);

    const headerGrp = generateHeaderGroup(uniqueOffices);

    setTableData(data);
    setHeaderGroup(headerGrp);

  }, [loading, month])

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

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day ? day + '/' : ''}${month}/${year}`;
  }

  const currentDates = useMemo(() =>
    dates.map(date => ({
      value: date,
      label: `${date}` // Tu peux adapter le format ici
    })),
    [dates]
  );
 
  return (
    <div>
      <h2 className="text-xl text-center font-bold text-white mb-4 p-6">RECETTE  MENSUELLE  PAR  TAXES-BUREAUX POUR LE MOIS : <span className='text-back-300'>{formatDate(month)}</span>  </h2>
      <div className="flex flex-row -mt-16 top-10 ml-10 w-68 gap-8 ">
        <CustomSelect
          options={currentDates}
          value={month}
          label={''}
          fowardChange={(selected) => handleDateChange(selected)}
          placeHolder="Selectionner date..."
          classNamePrefix="react-select"
          selectedOptions={month}
          setSelectedOptions={(s) => setMonth(s)}
        />

        <div style={{ marginBottom: "1px" }}>
          <span className='text-sm text-card-text'>Taxe: </span>
          <StyledInputText
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Chercher..."
            width="150px"
          />
        </div>
      </div>

      <div className="mt-4 bg-white dark:bg-card p-4 rounded-lg shadow border border-[#343b4f]">
        <div className="card">
          <DataTable
            value={filteredData}
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
            scrollHeight="700px"
            // style={{ width: '800px' }}
            className="custom-datatable"
            rowClassName={rowData => rowData.CodeTaxe == "TOTAUX" ? "summary-row" : ""}
          >
            {/* <Column field="CodeTaxe" header={headerWithSearch} frozen style={{ minWidth: "150px" }} /> */}
            {/* <Column field="TaxeDescription" header="Description" style={{ minWidth: "200px" }} />
            {Object.keys(filteredData[0] || {}).filter(key => key !== "CodeTaxe" && key !== "TaxeDescription").map(colKey => (
                <Column key={colKey} field={colKey} header={colKey} />
            ))} */}


            {columns.map(col => (
              <Column key={col.field}
                field={col.field}
                header={col.header}
                bodyStyle={col.bodyStyle}
                frozen={col.frozen || false}
                alignFrozen={col.alignFrozen}
              />
            ))}

          </DataTable>
        </div>
      </div>
    </div>
  )
}
