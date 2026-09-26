# Directorio de Startups

Un directorio curado de las mejores plataformas y listados de startups del mundo, con foco especial en Latinoamérica.

🌐 **Live:** [paulsiccha.github.io/directorio-startups](https://paulsiccha.github.io/directorio-startups/)

## 📋 Descripción

Este proyecto es una landing page estática que recopila los mejores directorios de startups a nivel global. El objetivo es ser un punto único donde la gente encuentre recursos para descubrir startups, con especial atención al ecosistema latinoamericano.

## 🚀 Características

- **Diseño minimalista** estilo Hero UI
- **Modo oscuro automático** según preferencia del sistema
- **Totalmente responsive** (mobile-first)
- **Sin dependencias** - HTML/CSS/JS puro
- **Fácil de mantener** - Datos en array de JavaScript
- **SEO optimizado** con meta tags para redes sociales

## 📁 Estructura del Proyecto

```
directorio-startups/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y diseño
├── script.js           # Datos de directorios y lógica
├── favicon.svg         # Favicon (emoji 🧭)
└── README.md           # Este archivo
```

## ➕ Cómo Agregar Nuevos Directorios

Para agregar un nuevo directorio al listado, sigue estos pasos:

1. Abre el archivo `script.js`
2. Busca el array `directories`
3. Agrega un nuevo objeto con el siguiente formato:

```javascript
{
    name: "Nombre del Directorio",
    url: "https://ejemplo.com",
    description: "Descripción corta de qué tipo de startups agrupa."
}
```

**Ejemplo:**

```javascript
{
    name: "Startup Chile",
    url: "https://startupchile.org",
    description: "Programa de aceleración de startups en Chile con alcance global."
}
```

4. Guarda el archivo y los cambios se reflejarán automáticamente en la página

## 🛠️ Desarrollo Local

Para ver la página localmente:

1. Clona el repositorio
2. Abre `index.html` en tu navegador, o
3. Usa un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (requiere http-server)
npx http-server
```

4. Abre `http://localhost:8000` en tu navegador

## 📦 Deploy en GitHub Pages

### Opción 1: Desde la rama principal (recomendado)

1. Sube los archivos a tu repositorio en GitHub
2. Ve a **Settings** > **Pages**
3. En **Source**, selecciona:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Haz clic en **Save**
5. Tu sitio estará disponible en: `https://[tu-usuario].github.io/directorio-startups/`

### Opción 2: Desde la carpeta /docs

1. Mueve todos los archivos a una carpeta llamada `docs/`
2. Sube los cambios a GitHub
3. Ve a **Settings** > **Pages**
4. En **Source**, selecciona:
   - **Branch:** `main`
   - **Folder:** `/docs`
5. Haz clic en **Save**

## 🎨 Personalización

### Colores

Los colores principales se definen en `styles.css` en las variables CSS:

```css
:root {
    --accent-color: #2563EB;    /* Color de acento azul */
    --bg-primary: #FAFAFA;      /* Fondo principal (light mode) */
    --bg-card: #FFFFFF;         /* Fondo de tarjetas */
    /* ... más variables */
}
```

### Favicon

El favicon actual usa el emoji 🧭. Para cambiarlo:

1. Reemplaza `favicon.svg` con tu propio archivo SVG, o
2. Actualiza el `<link>` en `index.html` para usar un PNG/ICO

### Sponsor

El bloque de sponsor está preparado como placeholder en el HTML. Para activarlo:

1. Busca la sección `.sponsor-placeholder` en `index.html`
2. Reemplaza el contenido con tu código de sponsor (imagen, link, etc.)
3. Ajusta los estilos en `styles.css` bajo `.sponsor-box` si es necesario

## 🤝 Contribuir

Las contribuciones son bienvenidas. Puedes:

1. **Reportar problemas** o sugerir nuevos directorios creando un [issue](https://github.com/paulsiccha/directorio-startups/issues/new)
2. **Enviar un PR** directamente con tus cambios
3. **Mejorar el diseño** o corregir errores

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Creado y curado por [Paul Siccha](https://github.com/paulsiccha)

---

**¿Conoces un directorio de startups que no está en esta lista?** [Ábrelo como issue](https://github.com/paulsiccha/directorio-startups/issues/new) o envía un PR.