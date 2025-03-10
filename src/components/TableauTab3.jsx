import React, { useEffect, useState, useMemo, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { PreloadedDataContext } from '../context/preLoadContext';

/**
 * On suppose que chaque objet `data` a les champs suivants:
 * {
 *   CodeOffice: "DJAKH",
 *   OfficeName: "Bureau Aéroport Khat",
 *   Month: "2025-01",              // format YYYY-MM
 *   ModeRecouvrement: "Cash",      // ex: 'Cash', 'Check', 'Electronic'
 *   TotalAmountPaid: 12345
 * }
 */
export default function TableauTab3() {
  // Définissez ici vos 3 modes de recouvrement, 
  // ou récupérez-les dynamiquement si besoin
  const recouvrementModes = ['Cash', 'Check', 'Electronic'];

  const { preloadedData, loading, error } = useContext(PreloadedDataContext);

  // Données de transaction 
  const data = preloadedData.recettesMode

  // 1) Extraire la liste des mois distincts, triés
  const months = useMemo(() => {
    const uniqueMonths = Array.from(new Set(data.map(d => d.Month)));
    // Tri lexical : 2022-01, 2022-02, ..., 2023-01, etc.
    uniqueMonths.sort();
    return uniqueMonths;
  }, [data]);

  // 2) Extraire la liste des modes de paiement distincts, triés
  const modes = useMemo(() => {
    const uniqueModes = Array.from(new Set(data.map(d => d.MopDsc)));
    uniqueModes.sort(); // Tri alphabétique
    return uniqueModes;
  }, [data]);

  // 3) Générer les données pivotées pour le tableau
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const pivoted = pivotOfficeMopDsc(data, months, modes);
    setTableData(pivoted);
  }, [data, months, modes]);

  // 4) Définir le groupement de colonnes pour avoir 2 rangées d'en-tête
  //    - 1ère rangée : "Bureau", puis un colSpan=nombre_de_modes par Mois, puis "Total"
  //    - 2ème rangée : les noms des modes
  const headerColumnGroup = useMemo(() => (
    <ColumnGroup>
      {/* -- Première ligne -- */}
      <Row>
        <Column header="Bureau" rowSpan={2} />
        {months.map((month) => (
          <Column
            key={month}
            header={month}
            colSpan={modes.length}
          />
        ))}
        <Column header="Total" rowSpan={2} />
      </Row>
      {/* -- Deuxième ligne : sous-colonnes pour chaque mode -- */}
      <Row>
        {months.map((month) =>
          modes.map((mode) => (
            <Column key={month + '_' + mode} header={mode} />
          ))
        )}
      </Row>
    </ColumnGroup>
  ), [months, modes]);

  // 5) Générer la liste de colonnes dynamiques (pour <DataTable>)
const dynamicColumns = useMemo(() => {
  const cols = [];
  // Première colonne : Bureau
  cols.push({ field: 'OfficeName', header: 'Bureau' });

  // Pour chaque (mois, mode), on définit un champ "YYYY-MM_Mode"
  months.forEach((month) => {
    modes.forEach((mode) => {
      const fieldName = `${month}_${mode}`;
      cols.push({ field: fieldName, header: mode });
    });
  });

  // Colonne finale "total" : on la freeze à droite et on la stylise
  cols.push({
    field: 'total',
    header: 'Total',
    frozen: true,             // Gèle la colonne
    alignFrozen: 'right',     // L’aligne à droite
    headerStyle: {
      color: '#f5e58c',
      fontWeight: 'bold'
    },
    bodyStyle: {
      color: '#f5e58c',
      fontWeight: 'bold'
    }
  });
  return cols;
}, [months, modes]);




  return (
    <div style={{ marginTop: '1rem' }}>
      <h2 className="text-xl text-center font-bold text-white mb-4 p-6">
        MODALITES DE RECOUVREMENTS PAR BUREAUX PAR ANNEE
      </h2>

      <div className="card">
        <DataTable
          value={tableData}
          headerColumnGroup={headerColumnGroup}
          scrollable
          scrollHeight="650px"
          className="custom-datatable"
          // Par ex., styliser la ligne TOT
          rowClassName={(rowData) =>
            rowData.OfficeName === 'TOTAUX' ? 'summary-row' : ''
          }
        >
          {dynamicColumns.map((col) => (
            <Column
              key={col.field}
              field={col.field}
              header={col.header}
              frozen={col.frozen}          // important pour activer le gel
              alignFrozen={col.alignFrozen}
              bodyStyle={col.bodyStyle}
              headerStyle={col.headerStyle}
              style={{ minWidth: '120px', textAlign: 'right' }}
            />
          ))}
        </DataTable>
      </div>
    </div>
  );
}

/**
* @function pivotOfficeMopDsc
* 
* Pivote la data en fonction de:
* - Lignes = OfficeName
* - Colonnes = (Month + '_' + MopDsc)
* - Valeur = somme de TotalAmountPaid
* Ajoute également:
* - un champ 'total' (somme de toutes les colonnes) pour chaque bureau
* - une ligne globale "TOTAUX"
*/
function pivotOfficeMopDsc(data, months, modes) {
  const result = {};

  data.forEach(item => {
    const { OfficeName, Month, MopDsc, TotalAmountPaid } = item;

    // Initialise la ligne si pas encore existante
    if (!result[OfficeName]) {
      result[OfficeName] = {
        OfficeName,
        total: 0,
      };
      // On crée un champ = 0 pour chaque (mois, mode)
      months.forEach(m => {
        modes.forEach(mode => {
          result[OfficeName][`${m}_${mode}`] = 0;
        });
      });
    }

    // On cumule la valeur dans le champ Month_Mode
    const fieldName = `${Month}_${MopDsc}`;
    // Vérifie que le champ existe (au cas où un MopDsc inattendu arriverait)
    if (fieldName in result[OfficeName]) {
      result[OfficeName][fieldName] += TotalAmountPaid;
      result[OfficeName].total += TotalAmountPaid;
    }
  });

  // -- Ligne finale TOTAUX --
  const totalRow = {
    OfficeName: 'TOTAUX',
    total: 0,
  };
  // Initialise chaque (mois, mode) à 0
  months.forEach((m) => {
    modes.forEach((mode) => {
      totalRow[`${m}_${mode}`] = 0;
    });
  });

  // On additionne toutes les lignes
  Object.values(result).forEach((row) => {
    months.forEach((m) => {
      modes.forEach((mode) => {
        totalRow[`${m}_${mode}`] += row[`${m}_${mode}`];
      });
    });
    totalRow.total += row.total;
  });

  // On insère la ligne TOTAUX
  result['TOTAUX'] = totalRow;

  // Retourne un tableau pour DataTable
  return Object.values(result);
}