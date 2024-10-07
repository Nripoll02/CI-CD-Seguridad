import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

// Función para generar una clave API simulada (aleatoria)
function generateApiKey() {
  return `API_KEY_${Math.random().toString(36).substring(2, 15)}`;
}

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta al archivo .env
const envPath = path.join(__dirname, '../../.env');

// Leer el archivo .env y reemplazar la clave API
function rotateApiKey() {
  fs.readFile(envPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error leyendo el archivo .env:', err);
      return;
    }

    // Generar nueva clave API
    const newApiKey = generateApiKey();

    // Reemplazar la clave antigua con la nueva en el .env
    const updatedEnv = data.replace(/API_KEY=.*/, `API_KEY=${newApiKey}`);

    // Guardar el archivo actualizado
    fs.writeFile(envPath, updatedEnv, 'utf8', (err) => {
      if (err) {
        console.error('Error al actualizar la clave API en .env:', err);
      } else {
        console.log(`Clave API actualizada: ${newApiKey}`);
      }
    });
  });
}

// Ejecutar la funcion para la rotación de clave
rotateApiKey();
