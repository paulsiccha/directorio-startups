# 🧭 Directorio de Startups

Un directorio curado de las mejores plataformas y listados de startups del mundo, con foco especial en Latinoamérica.

🌐 **Visita el sitio:** [paulsiccha.github.io/directorio-startups](https://paulsiccha.github.io/directorio-startups/)

## 🎯 Propósito

Este proyecto tiene como objetivo centralizar los mejores recursos para descubrir startups a nivel global, con especial atención al ecosistema latinoamericano. En lugar de tener que buscar en múltiples lugares, aquí encontrarás una selección curada de los directorios más confiables y útiles.

## � Directorios Incluidos

El directorio incluye plataformas como:

- **Startups regionales:** startups.pe, TopStartups.lat, Contxto, LatamList
- **Plataformas globales:** Crunchbase, Product Hunt, Wellfound, F6S
- **Inteligencia de mercado:** Tracxn, Dealroom.co, StartupBlink
- **Aceleradoras:** Y Combinator Startup Directory, BetaList

## 🚀 Tecnologías

- **HTML5, CSS3, JavaScript** (vanilla, sin frameworks)
- **Diseño responsive** con mobile-first approach
- **Modo oscuro automático** según preferencia del sistema
- **Optimizado para SEO** con meta tags para redes sociales

## 🤝 Cómo Contribuir

¡Las contribuciones son bienvenidas! Puedes ayudar de varias formas:

### Sugerir nuevos directorios

¿Conoces un directorio de startups que no está en esta lista?

1. Crea un [issue](https://github.com/paulsiccha/directorio-startups/issues/new) con el nombre del directorio y su URL
2. O envía un Pull Request agregándolo directamente al archivo `script.js`

### Formato para agregar directorios

En el archivo `script.js`, agrega un nuevo objeto al array `directories`:

```javascript
{
    name: "Nombre del Directorio",
    url: "https://ejemplo.com",
    description: "Descripción corta de qué tipo de startups agrupa."
}
```

### Reportar problemas

Si encuentras algún error o enlace roto, por favor repórtalo creando un [issue](https://github.com/paulsiccha/directorio-startups/issues/new).

## 🛠️ Desarrollo Local

Para ejecutar el proyecto localmente:

```bash
# Clona el repositorio
git clone https://github.com/paulsiccha/directorio-startups.git
cd directorio-startups

# Opción 1: Abrir index.html directamente en tu navegador

# Opción 2: Usar un servidor local con Python
python3 -m http.server 8000

# Opción 3: Usar un servidor local con Node.js
npx http-server
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia [MIT](LICENSE).

## 👨‍💻 Autor

Creado y curado por [Paul Siccha](https://github.com/paulsiccha)

---

**¿Conoces un directorio de startups que debería estar incluido?** [Abre un issue](https://github.com/paulsiccha/directorio-startups/issues/new) o envía un PR.