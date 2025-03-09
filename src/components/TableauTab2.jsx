import React, { useEffect, useState, useMemo, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import CustomSelect from './CustomSelect'
import { PreloadedDataContext } from '../context/preLoadContext';
import StyledInputText from './StyledInputText'
import '../tabs_styles.css';

export default function TableauTab2() {
  const [tableData, setTableData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState(null);

  const { preloadedData, loading, error } = useContext(PreloadedDataContext);

   // Données de transaction 
   const data = preloadedData.recettesTaxes

   const dates = useMemo(() => Array.from(new Set(data.map(t => t.Month)))
     , [])
 
   // Table de liaison CodeTaxe -> TaxeDescription
   const taxeDescriptions = preloadedData.taxes
 
   // Table de liaison CodeTaxe -> TaxeDescription
   const codeOfficeByName = preloadedData.bureaux

   const handleDateChange = (s) => {
    // console.log(s)
    setSelectedYear(s.value);
  }
  
     // Convert `data` from an object into an array
   const dataArray = Object.values(tableData);

   const filteredData = dataArray.filter(row =>
    row.CodeTaxe.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.TaxeDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 1) Extraire la liste des années distinctes
  const availableYears = useMemo(() => {
    const years = Array.from(
      new Set(data.map((item) => item.Month.split('-')[0])) // On récupère la partie 'YYYY'
    );
    // On peut trier par ordre croissant ou décroissant
    years.sort();
    return years;
  }, [data]);

  // 2) Sélection par défaut de l'année (ex. la plus récente)
  useEffect(() => {
    if (availableYears.length > 0) {
      setSelectedYear(availableYears[availableYears.length - 1]);
    }
  }, [availableYears]);

  // 3) À chaque changement de l'année OU du searchTerm, on recalcule
  useEffect(() => {
    if (!selectedYear) {
      setTableData([]);
      return;
    }

    // Filtrer d'abord par l'année choisie
    const filteredByYear = data.filter((d) => {
      const [year] = d.Month.split('-'); // ex: "2024-10" -> ["2024","10"]
      return year === selectedYear;
    });

    // Ensuite filtrer par searchTerm (dans CodeTaxe ou TaxeDescription)
    const search = searchTerm.toLowerCase();
    const filteredFinal = filteredByYear.filter((d) => {
      return (
        d.CodeTaxe.toLowerCase().includes(search) ||
        d.TaxeDescription.toLowerCase().includes(search)
      );
    });

    // On pivote la data filtrée
    const pivoted = transformDataByMonth(filteredFinal);
    setTableData(pivoted);
  }, [data, selectedYear, searchTerm]);

  // Les colonnes sont fixes : Jan à Déc + total
  // (On peut changer l'intitulé du header selon les besoins)
  const columns = useMemo(() => [
    { field: 'CodeTaxe',        header: 'Code Taxe',       frozen: true },
    { field: 'TaxeDescription', header: 'Description',     frozen: true },
    { field: '01',              header: 'Janvier' },
    { field: '02',              header: 'Février' },
    { field: '03',              header: 'Mars' },
    { field: '04',              header: 'Avril' },
    { field: '05',              header: 'Mai' },
    { field: '06',              header: 'Juin' },
    { field: '07',              header: 'Juillet' },
    { field: '08',              header: 'Août' },
    { field: '09',              header: 'Septembre' },
    { field: '10',              header: 'Octobre' },
    { field: '11',              header: 'Novembre' },
    { field: '12',              header: 'Décembre' },
    { field: 'total',           header: 'Total',           frozen: true, alignFrozen: 'right' },
  ], []);

  return (
    <div style={{ marginTop: '1rem' }}>
      <h2 className="text-xl text-center font-bold text-white mb-4 p-6">
      REALISATION DES RECETTES BUDGETAIRE MENSUELLES - ANNÉE : <span className='text-back-300'>{selectedYear}</span>
      </h2>

      <div className="flex flex-row -mt-20 mb-8 ml-10 w-68 gap-8 ">
        
         {/* -- Sélection de l'année -- */}
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          
          <CustomSelect
          options={availableYears.map((y) => ({ label: y, value: y }))}
          value={selectedYear}
          label={''}
          fowardChange={(selected) => handleDateChange(selected)}
          placeHolder="Selectionner année..."
          classNamePrefix="react-select"
          selectedOptions={selectedYear}
          // setSelectedOptions={(s) => setSelectedYear(s)}
        />
        </div> 
        

      <div style={{ marginBottom: "1px" }}>
          <span className='text-sm mr-4 text-card-text'>Taxe: </span>
          <StyledInputText
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Chercher..."
            width="150px"
          />
        </div>

        

      </div>


      <div className="card">

     

        <DataTable
          value={filteredData}
          scrollable
          scrollHeight="700px"
          className="custom-datatable"
          rowClassName={(rowData) => rowData.CodeTaxe === 'TOTAUX' ? 'summary-row' : ''}
        >
          {columns.map((col) => (
            <Column
              key={col.field}
              field={col.field}
              header={col.header}
              frozen={col.frozen}
              alignFrozen={col.alignFrozen}
              style={{ minWidth: '100px', textAlign: 'right' }}
            />
          ))}
        </DataTable>
      </div>
    </div>
  );
}


const formatDate = (dateString) => {
  const [year, month, day] = dateString.split('-');
  return `${day ? day + '/' : ''}${month}/${year}`;
}


/**
 * Transforme la liste d'objets en un pivot (par mois) :
 *   - Lignes : CodeTaxe, TaxeDescription
 *   - Colonnes : 01, 02, ..., 12 + total
 */
const transformDataByMonth = (data) => {
  const pivot = {};

  data.forEach(({ CodeTaxe, TaxeDescription, Month, TotalAmountPaid }) => {
    // Récupère le numéro de mois (MM) à partir de "YYYY-MM"
    const [year, mm] = Month.split('-');  // ex: "2024-10" -> ["2024", "10"]
    const monthKey = mm;                  // "10"

    // Si l'entrée pour ce CodeTaxe n'existe pas, on l'initialise
    if (!pivot[CodeTaxe]) {
      pivot[CodeTaxe] = {
        CodeTaxe,
        TaxeDescription,
        '01': 0, '02': 0, '03': 0, '04': 0, '05': 0, '06': 0,
        '07': 0, '08': 0, '09': 0, '10': 0, '11': 0, '12': 0,
        total: 0
      };
    }

    // On ajoute le montant au mois concerné
    if (pivot[CodeTaxe][monthKey] !== undefined) {
      pivot[CodeTaxe][monthKey] += TotalAmountPaid;
      pivot[CodeTaxe].total += TotalAmountPaid;
    }
  });

  // Optionnel : si vous voulez une ligne "TOTAUX" globale
  // vous pouvez décommenter la partie ci-dessous
  
  const totalGlobal = {
    CodeTaxe: 'TOTAUX',
    TaxeDescription: 'Total Général',
    '01': 0, '02': 0, '03': 0, '04': 0, '05': 0, '06': 0,
    '07': 0, '08': 0, '09': 0, '10': 0, '11': 0, '12': 0,
    total: 0
  };
  // On additionne
  Object.values(pivot).forEach((row) => {
    for (let m = 1; m <= 12; m++) {
      const mm = m.toString().padStart(2, '0');
      totalGlobal[mm] += row[mm];
    }
    totalGlobal.total += row.total;
  });
  // On l'ajoute au pivot
  pivot['TOTAUX'] = totalGlobal;
  

  return Object.values(pivot);
}
