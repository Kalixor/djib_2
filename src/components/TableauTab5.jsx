import React, { useEffect, useState, useMemo, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { PreloadedDataContext } from '../context/preLoadContext';
import StyledInputText from './StyledInputText'
import CustomSelect from './CustomSelect'
import '../tabs_styles.css';

export default function TableauTab5() {
  const [tableData, setTableData] = useState([]);

  const { preloadedData, loading, error } = useContext(PreloadedDataContext);

  // Données de transaction 
  const data = preloadedData.recettesTicTva

  // État pour l'année sélectionnée
  const [selectedYear, setSelectedYear] = useState("");
  // État pour les données pivotées

  // Liste des années distinctes
  const distinctYears = useMemo(() => {
    const years = new Set(data.map(d => d.Month.split("-")[0]));
    // On transforme en tableau et on trie
    return Array.from(years).sort(); // ex: ["2022","2023","2024","2025"]
  }, [data]);

  // Liste des taxes distinctes
  const uniqueTaxes = useMemo(() => {
    const setTaxes = new Set(data.map(d => d.CodeTaxe));
    return Array.from(setTaxes).sort(); // ex: ["TIC","TID","XYZ"]
  }, [data]);

  // Les 12 mois (en chaînes "01".."12")
  // OK : months sera la même référence à chaque rendu
  const months = useMemo(() => ["01","02","03","04","05","06","07","08","09","10","11","12"], []);


  // Au montage, si aucune année n'est sélectionnée, on prend la dernière ou la première
  useEffect(() => {
    if (!selectedYear && distinctYears.length > 0) {
      // Ex: on prend la plus récente
      setSelectedYear(distinctYears[distinctYears.length - 1]);
    }
  }, [distinctYears]);

  // À chaque fois que selectedYear change, on recalcule tableData
  useEffect(() => {
    if (!selectedYear) {
      setTableData([]);
      return;
    }
    // 1) Filtrer la data sur l'année choisie
    const filteredData = data.filter(item => {
      const [year] = item.Month.split("-");
      return year === selectedYear;
    });
    // 2) Pivoter
    const pivoted = pivotDataByMonthAndTax(filteredData, months, uniqueTaxes);
    setTableData(pivoted);
  }, [data, selectedYear, months, uniqueTaxes]);

  // Définition des colonnes du DataTable
  const columns = useMemo(() => {
    const cols = [];
    // Première colonne : "Mois"
    cols.push({
      field: 'monthName',
      header: 'Mois',
      frozen: true,
      alignFrozen: 'left',
      style: { textAlign: 'left' }
    });
    // Colonnes par taxe
    uniqueTaxes.forEach(tax => {
      cols.push({
        field: tax,
        header: tax,
        style: { textAlign: 'right' }
      });
    });
    // Colonne "total"
    cols.push({
      field: 'total',
      header: 'Total',
      frozen: true,
      alignFrozen: 'right',
      style: { color: '#f5e58c', fontWeight: 'bold', textAlign: 'right' }
    });
    return cols;
  }, [uniqueTaxes]);

  // Gestion du changement d'année dans le <select>
  const handleYearChange = (e) => {
    setSelectedYear(e.value);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <h2 className="text-xl text-center font-bold text-white mb-4 p-6">
        REALISATION TIC PAR TAUX - ANNEE : <span className='text-back-300'>{selectedYear}</span>
      </h2>

      <div className="flex flex-row -mt-20 mb-8 ml-10 w-68 gap-8 ">
        <CustomSelect
          options={distinctYears.map((y) => ({ label: y, value: y }))}
          value={selectedYear}
          label={''}
          fowardChange={(selected) => handleYearChange(selected)}
          placeHolder="Selectionner année..."
          classNamePrefix="react-select"
          selectedOptions={selectedYear}
        // setSelectedOptions={(s) => setSelectedYear(s)}
        />
      </div>

      <div className="card">
        <DataTable
          value={tableData}
          rowHover
          selectionMode="single"
          scrollable
          scrollHeight="600px"
          className="custom-datatable"
          // On peut colorer la ligne "TOTAUX"
          rowClassName={(rowData) => rowData.monthName === 'TOTAUX' ? 'summary-row' : ''}
        >
          {columns.map(col => (
            <Column
              key={col.field}
              field={col.field}
              header={col.header}
              style={col.style}
              frozen={col.frozen}
              alignFrozen={col.alignFrozen}
            />
          ))}
        </DataTable>
      </div>
    </div>
  );
}

/**
* Construit la structure pivot:
*   - Lignes = 12 mois (01..12)
*   - Colonnes = Taxes
*   - Valeur = somme de TotalAmountPaid
* + champ "total" pour chaque ligne
* + ligne "TOTAUX" globale
*/
function pivotDataByMonthAndTax(data, months, uniqueTaxes) {
  // 1) Préparer la structure
  const pivot = {};
  months.forEach(mm => {
    pivot[mm] = { month: mm, total: 0 };
    uniqueTaxes.forEach(tax => {
      pivot[mm][tax] = 0;
    });
  });

  // 2) Remplir
  data.forEach(item => {
    const { CodeTaxe, Month, TotalAmountPaid } = item;
    const [, mm] = Month.split('-'); // "YYYY-MM" => [YYYY,MM]
    if (pivot[mm] && pivot[mm][CodeTaxe] !== undefined) {
      pivot[mm][CodeTaxe] += TotalAmountPaid;
      pivot[mm].total += TotalAmountPaid;
    }
  });

  // 3) Convertir en tableau, remplacer "month" par "monthName"
  const monthNames = {
    '01': 'JANVIER', '02': 'FÉVRIER', '03': 'MARS', '04': 'AVRIL',
    '05': 'MAI', '06': 'JUIN', '07': 'JUILLET', '08': 'AOUT',
    '09': 'SEPTEMBRE', '10': 'OCTOBRE', '11': 'NOVEMBRE', '12': 'DÉCEMBRE'
  };

  const rows = months.map(mm => {
    return {
      monthName: monthNames[mm] || mm,
      ...pivot[mm]
    };
  });

  // 4) Ligne TOTAUX
  const totalRow = { monthName: 'TOTAUX', total: 0 };
  uniqueTaxes.forEach(tax => { totalRow[tax] = 0; });

  rows.forEach(r => {
    uniqueTaxes.forEach(tax => {
      totalRow[tax] += r[tax];
    });
    totalRow.total += r.total;
  });

  rows.push(totalRow);

  return rows;
}