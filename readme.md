# Proyecto Node.js y Express.js - Regiones y Comunas de Chile

Este proyecto utiliza Node.js y Express.js para crear un API que proporciona información sobre las regiones y comunas de Chile. Los datos se almacenan en una base de datos MySQL y se cargan desde archivos CSV.

## Configuración inicial

1. Clona este repositorio en tu máquina local:


2. Navega hasta la carpeta del proyecto:


3. Instala las dependencias del proyecto:

npm install


4. Configura la base de datos MySQL:

- Crea una base de datos en MySQL.
- Importa los archivos CSV proporcionados en la base de datos para cargar los datos de regiones y comunas.

5. Actualiza la configuración de la base de datos en el archivo `.env`:
DB_HOST=<TU_HOST_DE_MYSQL>
DB_PORT=<PUERTO_DE_MYSQL>
DB_USER=<USUARIO_DE_MYSQL>
DB_PASSWORD=<CONTRASEÑA_DE_MYSQL>
DB_NAME=<NOMBRE_DE_LA_BASE_DE_DATOS>


6. Inicia la aplicación:

npm run dev

Esto iniciará el servidor y podrás acceder a la API en [http://localhost:3000/api](http://localhost:3000/api).

## Endpoints

### Obtener las regiones de Chile

- Método: GET
- Ruta: `/api/regions`
- Descripción: Este endpoint devuelve un listado de todas las regiones de Chile almacenadas en la base de datos. Cada región incluye su nombre y otros datos relevantes.

### Obtener las comunas por región

- Método: GET
- Ruta: `/api/communes/:region_id`
- Descripción: Este endpoint devuelve un listado de todas las comunas pertenecientes a la región especificada por `region_id`. Las comunas incluyen su nombre y otros datos relevantes.

Este ultimo endpoint fue modificado debido a los problemas que dió anteriormente.


