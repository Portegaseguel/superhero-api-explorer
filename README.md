# SuperHero API Explorer

Aplicación web que permite buscar superhéroes por ID y visualizar información detallada obtenida desde una API externa.

El proyecto consume datos desde **SuperHero API** y presenta información biográfica, características físicas y estadísticas de poder en una interfaz responsive construida con Bootstrap.

---

## Descripción

SuperHero API Explorer fue desarrollado como proyecto práctico de desarrollo Frontend, enfocado en el consumo de APIs REST desde JavaScript y la representación dinámica de datos en el navegador.

El usuario puede ingresar el ID de un superhéroe y obtener información como:

- Nombre del personaje
- Nombre completo
- Alias
- Ocupación
- Altura
- Peso
- Editorial
- Alineación
- Imagen
- Estadísticas de poder

Las estadísticas se muestran además mediante un gráfico generado dinámicamente.

---

## Funcionalidades

- Búsqueda de superhéroes por ID
- Validación de datos ingresados
- Consumo de API mediante AJAX
- Manejo de respuestas y errores
- Renderizado dinámico de información
- Visualización gráfica de estadísticas
- Interfaz responsive
- Integración con una API REST externa

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- jQuery
- AJAX
- Bootstrap 5
- CanvasJS
- REST API

---

## API utilizada

El proyecto utiliza **SuperHero API** para obtener la información de los personajes.

La API requiere un token de acceso personal.

Por seguridad, este repositorio no incluye un token válido.

En el archivo `script.js` encontrarás:

```js
const accessToken = 'YOUR_SUPERHERO_API_TOKEN';
```

Para ejecutar el proyecto debes reemplazar ese valor por tu propio token de acceso.

---

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/Portegaseguel/superhero-api-explorer.git
```

Ingresa al directorio del proyecto:

```bash
cd superhero-api-explorer
```

Abre el archivo:

```text
script.js
```

y reemplaza:

```js
const accessToken = 'YOUR_SUPERHERO_API_TOKEN';
```

por tu token personal de SuperHero API.

Luego puedes abrir directamente:

```text
index.html
```

en tu navegador.

También puedes levantar un servidor local con Python:

```bash
python3 -m http.server 8000
```

y acceder desde:

```text
http://localhost:8000
```

---

## Funcionamiento

El flujo principal de la aplicación es el siguiente:

1. El usuario ingresa el ID de un superhéroe.
2. JavaScript valida que el valor ingresado sea numérico.
3. Se realiza una petición AJAX a SuperHero API.
4. La respuesta JSON es procesada dinámicamente.
5. La información del personaje se muestra en una tarjeta Bootstrap.
6. Las estadísticas del superhéroe se representan mediante CanvasJS.

---

## Datos mostrados

Para cada personaje encontrado, la aplicación puede mostrar:

- Nombre
- Nombre completo
- Alias
- Ocupación
- Altura
- Peso
- Editorial
- Alineación
- Imagen del personaje

Además se muestran las siguientes estadísticas:

- Inteligencia
- Fuerza
- Velocidad
- Durabilidad
- Poder
- Combate

---

## Visualización de estadísticas

Las estadísticas obtenidas desde la API son procesadas y representadas mediante un gráfico generado con **CanvasJS**.

Esto permite visualizar de manera más clara la distribución de habilidades de cada personaje.

---

## Manejo de errores

La aplicación contempla distintos escenarios de error:

- ID inválido
- Valor no numérico
- Superhéroe inexistente
- Error de conexión con la API
- Respuesta incorrecta del servicio

En estos casos se muestra un mensaje al usuario sin interrumpir el funcionamiento general de la interfaz.

---

## Estructura del proyecto

```text
superhero-api-explorer/
├── img/
├── index.html
├── script.js
├── styles.css
└── README.md
```

---

## Objetivo del proyecto

Este proyecto fue desarrollado para aplicar conceptos de desarrollo Frontend relacionados con:

- Consumo de APIs REST
- Manipulación dinámica del DOM
- Programación asíncrona
- Validación de formularios
- Procesamiento de datos JSON
- Manejo de errores
- Visualización de datos
- Diseño responsive

---

## Estado del proyecto

Proyecto funcional para fines de demostración y portfolio.

Para realizar consultas a la API es necesario configurar un token válido de SuperHero API.

---

## Autora

**Paulina Ortega Seguel**

GitHub:  
https://github.com/Portegaseguel
