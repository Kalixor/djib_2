import React, { createContext, useState, useEffect } from 'react';
import { fetchData } from '../utils/apiUtils'; // Import de ta fonction fetchData

// Création du contexte
export const PreloadedDataContext = createContext();

export const PreloadedDataProvider = ({ children }) => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

  // État pour stocker les données préchargées
  const [preloadedData, setPreloadedData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const queries = {
    recettesBureau : 'recettes-par-bureau',
    recettesTaxes : 'recettes-par-taxe',
    recettesMode : 'recettes-par-mode',
    recettes : 'recettes',
    recettesTicTva : 'recettes_tic_tva',
    bureaux : 'bureaux',
    taxes : 'taxes',
    recetteAnnuel : 'recettes_annuel',
    recetteMensuelle : 'recettes_mensuelle',
    recetteHebdo : 'recettes_hebdo',
    recetteJour : 'recettes_jour'
  }

  // Fonction pour charger toutes les requêtes en parallèle
//   useEffect(() => {
//     const fetchAllData = async () => {
//       try {
//         setLoading(true);
//         let results = {};

//         // Parcourt chaque requête SQL et exécute fetchData()
//         await Promise.all(
//           Object.entries(queries).map(async ([key, sql]) => {
//             results[key] = await fetchData(BASE_URL, "query", { sql });
//           })
//         );

//         setPreloadedData(results);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAllData();
//   }, []);

  // Fonction pour charger toutes les requêtes séquenciellement
   
  useEffect(() => {
    const fetchSequentially = async () => {
      try {
        setLoading(true);
        let results = {};

        // EXÉCUTE LES REQUÊTES EN SÉQUENTIEL (évite les blocages)
        for (const [key, query] of Object.entries(queries)) {
          results[key] = await fetchData(BASE_URL, query);
        }

        setPreloadedData(results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSequentially();
  }, []);

  return (
    <PreloadedDataContext.Provider value={{ preloadedData, loading, error }}>
      {children}
    </PreloadedDataContext.Provider>
  );
};
