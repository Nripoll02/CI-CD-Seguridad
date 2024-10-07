## App para obtener datos del clima mediante WeatherAPI

Este repositorio contiene una aplicación de consola que utiliza APIs externas para obtener datos del clima y simula la rotación de claves API. El proyecto se despliega automáticamente usando Railway.

## Requisitos previos

Antes de comenzar, asegúrate de tener lo siguiente instalado:

- [Node.js](https://nodejs.org/en/download/) (versión 16 o superior)
- [Git](https://git-scm.com/)
- Una cuenta en [Railway](https://railway.app/)
- Clave API válida para el servicio de [WeatherAPI](https://www.weatherapi.com/)

## Clonar el repositorio

```bash
git clone https://github.com/Nripoll02/CI-CD-Seguridad
cd CI-CD-Seguridad

```

## Instalación de dependencias
npm install

## Configuración del entorno
Este proyecto utiliza un archivo .env para gestionar claves API y otras configuraciones sensibles. Crea un archivo .env en el directorio raíz del proyecto con el siguiente contenido:

```API_KEY=tu_clave_api_de_weatherapi```
Asegurate de reemplazar tu_clave_api_de_weatherapi con tu clave API real obtenida de WeatherAPI.


## Ejecutar pruebas
Este proyecto incluye un conjunto de pruebas para verificar la funcionalidad de la API. Para ejecutarlas, utiliza el siguiente comando:

```npm test```

Las pruebas se ejecutarán usando Mocha y comprobarán la funcionalidad de la API del clima, tanto para ciudades válidas como inválidas.

## Despliegue en Railway

Este proyecto se puede desplegar fácilmente en Railway. Sigue los pasos a continuación para realizar el despliegue:

Paso 1: Crear una nueva aplicación en Railway
Ingresa a Railway y crea una cuenta si no tienes una.
Crea un nuevo proyecto y conecta el repositorio de GitHub.
Paso 2: Configurar variables de entorno en Railway
En la sección "Environment" de Railway, agrega la siguiente variable de entorno:

API_KEY: tu clave API de WeatherAPI.
Paso 3: Despliegue
Railway detectará automáticamente el repositorio y el archivo package.json, iniciando el proceso de despliegue.

Paso 4: Comprobar el estado del despliegue
Una vez que el despliegue esté completo, Railway te proporcionará una URL desde la cual podrás acceder a la aplicación.

## Rotación automática de claves API (Simulado)

Este proyecto incluye un script para la rotación automática de la clave API. El script simula la generación de una nueva clave API de forma aleatoria. Para ejecutarlo manualmente:

```node src/scripts/rotate-api-key.js```

Esto actualizará tu archivo .env con una nueva clave API simulada. Recuerda que esta es solo una simulación, no una clave válida para servicios reales.

## Flujo de CI/CD

Este proyecto incluye un flujo de CI/CD con GitHub Actions:

Pruebas automáticas: Las pruebas se ejecutan automáticamente en cada push al repositorio.
Despliegue: Railway se encarga del despliegue automático al hacer push en la rama master.




