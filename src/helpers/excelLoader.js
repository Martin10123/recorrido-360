import * as XLSX from "xlsx";

// Función para cargar y procesar datos del Excel
export const loadScenesFromExcel = async () => {
  try {
    // Cargar el archivo Excel desde la carpeta public
    const response = await fetch("/Hotspots_360_Cotecmar_v2.xlsx");
    const arrayBuffer = await response.arrayBuffer();

    // Leer el workbook
    const workbook = XLSX.read(arrayBuffer, { type: "array" });

    // Obtener la primera hoja
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convertir a JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Procesar los datos (saltar la primera fila que son los headers)
    const scenes = {};

    for (let i = 1; i < jsonData.length; i++) {
      const row = jsonData[i];
      if (row && row.length >= 6) {
        const [
          id,
          titulo,
          descripcion,
          nombre_archivo,
          ruta_relativa,
          lado_barco,
        ] = row;

        if (id && titulo && nombre_archivo) {
          // Convertir la ruta relativa a ruta absoluta para las imágenes
          const imagePath = ruta_relativa
            ? ruta_relativa.replace("../images/", "/src/images/")
            : `/src/images/${nombre_archivo}`;

          scenes[id] = {
            id,
            title: titulo,
            description: descripcion || "",
            image: imagePath,
            fileName: nombre_archivo,
            shipSide: lado_barco || "",
            // Hotspots básicos (se pueden expandir después)
            hotSpots: {},
          };
        }
      }
    }

    console.log("Scenes loaded from Excel:", scenes);
    return scenes;
  } catch (error) {
    console.error("Error loading Excel file:", error);
    // Fallback a datos básicos si hay error
    return {
      puente1: {
        id: "puente1",
        title: "Puente de Gobierno",
        description: "Vista del puente",
        image: "/src/images/PuenteDeGobierno.jpg",
        fileName: "PuenteDeGobierno.jpg",
        shipSide: "Puente",
        hotSpots: {},
      },
    };
  }
};

// Función para obtener una escena específica
export const getSceneById = async (sceneId) => {
  const scenes = await loadScenesFromExcel();
  return scenes[sceneId] || null;
};

// Función para obtener todas las escenas
export const getAllScenes = async () => {
  return await loadScenesFromExcel();
};
