import React, { useState, useEffect, useMemo, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { Paginator } from 'primereact/paginator';
import '../tabs_styles.css';


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



/**
 * data : tableau d'objets au format :
 * [
 *   {
 *     "Date": "2024-01-02",
 *     "CodeOffice": "DIFTZ",
 *     "OfficeName": "Djibouti International Free Trade ",
 *     "TotalAmountPaid": 1770330
 *   },
 *   ...
 * ]
 *
 * codeOfficeByName : tableau de référence (CodeOffice -> OfficeName)
 * memoizedBureauGroups : objet décrivant les regroupements par SITE, par ex. :
 *   {
 *     "SITE-PORT": [
 *       "Bureau du Port",
 *       "Bureau Hydrocarbures",
 *       "Bureau Free Zone",
 *       ...
 *     ],
 *     "SITE-AEROPORT": [
 *       "Bureau Aéroport Fret",
 *       "Bureau Khat",
 *       "Brigade Aéroport Passager"
 *     ],
 *     ...
 *   }
 */
export default function TableauTab4() {
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [headerGroup, setHeaderGroup] = useState(null);

  const { preloadedData, loading, error } = useContext(PreloadedDataContext);

  // Données de transaction 
  const data = preloadedData.recettes

  // Table de liaison CodeTaxe -> TaxeDescription

  const codeOfficeByName = preloadedData.bureaux

  const memoizedBureauGroups = useMemo(() => ({
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
  }))

  // État pour gérer l'affichage du spinner
  const [isLoading, setIsLoading] = useState(true);

  // Dates et Bureaux distincts
  const uniqueDates = useMemo(() => {
    const setDates = new Set(data.map(d => d.Date));
    return Array.from(setDates).sort();
  }, [data]);

  const uniqueOffices = useMemo(() => {
    const setOffices = new Set(data.map(d => d.OfficeName || 'Inconnu'));
    return Array.from(setOffices);
  }, [data]);

  useEffect(() => {
    // On déclenche le spinner
    setIsLoading(true);

    // Optionnel : simuler un délai
    const timer = setTimeout(() => {
      // Pivoter les données
      const pivoted = pivotDataByDay(data, uniqueDates, uniqueOffices);
      setTableData(pivoted);

      // Générer l'en-tête groupé
      const headerGrp = generateHeaderGroup(uniqueOffices, memoizedBureauGroups, codeOfficeByName);
      setHeaderGroup(headerGrp);

      // Générer la liste de colonnes
      const cols = generateColumns(uniqueOffices);
      setColumns(cols);

      setIsLoading(false);
    }, 150);

    // Nettoyage
    return () => clearTimeout(timer);
  }, [
    data,          // On ne dépend que de data
    uniqueDates,   // et de ces 2 useMemo
    uniqueOffices
  ]);

  return (
    <div style={{ marginTop: '1rem' }}>
      <h2 className="text-xl text-center font-bold text-white mb-4 p-6">
        RECETTES PAR JOUR PAR BUREAUX
      </h2>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <BeatLoader color="#36d7b7" size={25} />
        </div>
      ) : (
        <div className="card">
          <DataTable
            value={tableData}
            headerColumnGroup={headerGroup}
            scrollable
            rowHover          // Active le hover
            selectionMode="single" // Rend les lignes "sélectionnables"
            scrollHeight="600px"
            className="custom-datatable"
            rowClassName={(rowData) => rowData.Date === 'TOTAUX' ? 'summary-row' : ''}

          // Pagination client
          // paginator
          // rows={50}
          // rowsPerPageOptions={[10, 25, 50, 100]}
          >
            {columns.map((col) => (
              <Column
                key={col.field}
                field={col.field}
                header={col.header}
                style={{ minWidth: '130px', textAlign: 'right' }}
                frozen={col.frozen}
                alignFrozen={col.alignFrozen}
                headerStyle={col.headerStyle}
                bodyStyle={col.bodyStyle}
              />
            ))}
          </DataTable>
        </div>
      )}
    </div>
  );
}

function pivotDataByDay(data, uniqueDates, uniqueOffices) {
  const result = {};

  uniqueDates.forEach(date => {
    result[date] = { Date: date, total: 0 };
    uniqueOffices.forEach(office => {
      result[date][office] = 0;
    });
  });

  data.forEach(item => {
    const { Date, OfficeName, TotalAmountPaid } = item;
    const officeKey = OfficeName || 'Inconnu';
    if (result[Date] && officeKey in result[Date]) {
      result[Date][officeKey] += (TotalAmountPaid || 0);
      result[Date].total += (TotalAmountPaid || 0);
    }
  });

  // Ligne TOTAUX
  const totalRow = { Date: 'TOTAUX', total: 0 };
  uniqueOffices.forEach(o => { totalRow[o] = 0; });

  Object.values(result).forEach(row => {
    if (row.Date !== 'TOTAUX') {
      uniqueOffices.forEach(o => {
        totalRow[o] += row[o];
      });
      totalRow.total += row.total;
    }
  });

  result['TOTAUX'] = totalRow;
  return Object.values(result);
}

/**
 * Construit un ColumnGroup pour 2 lignes d'en-tête :
 *  - 1ère ligne : "Jour" (rowSpan=2), puis un <Column> par SITE (colSpan= nb de bureaux), puis "Total" (rowSpan=2)
 *  - 2ème ligne : un <Column> par bureau
 */
function generateHeaderGroup(uniqueOffices, bureauGroups, codeOfficeByName) {
  // On suppose que codeOfficeByName = [{ CodeOffice, OfficeName }, ...]
  const officeToSite = {};
  for (const [site, arrOffices] of Object.entries(bureauGroups)) {
    arrOffices.forEach((name) => {
      officeToSite[name] = site;
    });
  }

  const officesNotClassified = [];
  const siteToOffices = {};

  uniqueOffices.forEach((officeName) => {
    const site = officeToSite[officeName];
    if (!site) {
      officesNotClassified.push(officeName);
    } else {
      if (!siteToOffices[site]) siteToOffices[site] = [];
      siteToOffices[site].push(officeName);
    }
  });

  // -- Première ligne
  const firstRow = [];
  // "Jour" (rowSpan=2)
  firstRow.push(<Column key="Jour-col" header="Jour" rowSpan={2} frozen alignFrozen="left" />);
  // Un <Column> par site (colSpan = nb de bureaux)
  for (const [site, arr] of Object.entries(siteToOffices)) {
    firstRow.push(
      <Column
        key={site}
        header={site}
        colSpan={arr.length}
        alignHeader="left"
        headerStyle={{ color: '#b6d16b', fontWeight: 'bold' }}
      />
    );
  }
  // Si officesNotClassified
  if (officesNotClassified.length > 0) {
    firstRow.push(
      <Column
        key="SITE-?"
        header="SITE-?"
        colSpan={officesNotClassified.length}
        alignHeader="left"
        headerStyle={{ color: '#b6d16b', fontWeight: 'bold' }}
      />
    );
  }
  // "Total" (rowSpan=2)
  firstRow.push(
    <Column
      key="total-col"
      header="Total"
      rowSpan={2}
      frozen
      alignFrozen="right"
      headerStyle={{ color: '#f5e58c', fontWeight: 'bold' }}
    />
  );

  // -- Deuxième ligne
  const secondRow = [];
  for (const [site, arr] of Object.entries(siteToOffices)) {
    arr.forEach((officeName) => {
      secondRow.push(
        <Column
          key={officeName}
          header={officeName}
          headerStyle={{ color: '#c09f62', fontWeight: 'bold' }}
        />
      );
    });
  }
  officesNotClassified.forEach((officeName) => {
    secondRow.push(
      <Column
        key={officeName}
        header={officeName}
        headerStyle={{ color: '#c09f62', fontWeight: 'bold' }}
      />
    );
  });

  return (
    <ColumnGroup>
      <Row>{firstRow}</Row>
      <Row>{secondRow}</Row>
    </ColumnGroup>
  );
}


function generateColumns(uniqueOffices) {
  const cols = [];
  cols.push({
    field: 'Date',
    header: 'Jour',
    frozen: true,
    alignFrozen: 'left',
    headerStyle: { fontWeight: 'bold' },
    bodyStyle: { textAlign: 'left' },
  });
  uniqueOffices.forEach(office => {
    cols.push({ field: office, header: office });
  });
  cols.push({
    field: 'total',
    header: 'Total',
    frozen: true,
    alignFrozen: 'right',
    headerStyle: { color: '#f5e58c', fontWeight: 'bold' },
    bodyStyle: { color: '#f5e58c', fontWeight: 'bold' },
  });
  return cols;
}