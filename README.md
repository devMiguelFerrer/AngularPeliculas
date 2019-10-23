# AngularPeliculas

Esta web es un ejemplo de SPA que realiza peticiones a la API de [TheMovieDB](https://www.themoviedb.org), tenemos una `toolbar` en la que hay 2 secciones, una para ver las 20 peliculas mas populares del momento y otra con un buscador de peliculas, desde la cual podemos seleccionar una pelicula y ver los detalles de esta.

## Ejemplo

Aqui os dejo un link, [AngularPeliculas](https://mibase-d272d.web.app/) en el que podeis ver la aplicacion en produccion, subida al Host de `Firebase`.

## Informacion General, Instalaciones y versiones

Proyecto generado con `Angular-CLI` en la version 8.3.5.  
Tenemos instalado `Angular Material` en la version 8.2.1.  
Hemos añadido el paquete de `Angular/flex-layout` en su version 8.0.0-beta.27.

## Configuracion Necesaria

Solo tienes que poner una `API_KEY` valida en servicio `peliculas.service.ts` ubicado en `src\app\services\peliculas.service.ts`

## Server de Desarrollo

Ejecuta `ng serve` desde dentro del directorio y navega a `http://localhost:4200/`.

## Build

Ejecuta `ng build --prod` desde dentro del directorio y los archivos de produccion seran generados en la carpeta de `dist/`.

