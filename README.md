# 🌌 PERCY QUASAR EN EL OASIS

Una plataforma moderna de streaming de música diseñada para reproducir mixes pesados (archivos MP3 grandes) directamente desde GitHub Pages.

![Music Platform](https://img.shields.io/badge/Music-Streaming-purple?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Design-Responsive-blue?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-success?style=for-the-badge)

## ✨ Características

- 🎵 **Reproductor de Audio Moderno** - Interfaz elegante con controles intuitivos
- 📱 **Totalmente Responsive** - Optimizado para móviles, tablets y computadoras
- 🎨 **Diseño Glassmorphism** - Efectos de cristal con gradientes vibrantes
- 🎧 **Playlist Dinámica** - Gestión fácil de tus mixes con favoritos e historial
- ⌨️ **Atajos de Teclado** - Control rápido con el teclado
- 🔊 **Control de Volumen** - Ajuste preciso del volumen
- 📊 **Visualizador de Audio** - 4 modos de visualización (barras, ondas, círculo, partículas)
- 💿 **Animación de Vinilo** - Disco giratorio mientras reproduce
- 🚀 **Optimizado para Archivos Grandes** - Maneja MP3s de ~200MB sin problemas
- 🎙️ **Comandos de Voz** - Control por voz en español
- 🌙 **Temporizador de Sueño** - Apagado automático con fade out
- 🔗 **Compartir Canciones** - Enlaces directos con timestamp
- 🌗 **Modo Apollo/Oasis** - Tema claro y oscuro
- ♿ **Accesible** - Cumple con WCAG AA, compatible con lectores de pantalla
- 🔒 **Seguro** - Protección contra XSS
- ⚡ **Alto Rendimiento** - Optimizado para dispositivos de gama baja

## 🚀 Inicio Rápido

### 1. Estructura del Proyecto

```
MUSIC_OASIS/
├── index.html          # Página principal
├── styles.css          # Estilos y diseño
├── app.js             # Lógica de la aplicación
├── README.md          # Este archivo
└── music/             # Carpeta para tus archivos MP3 (créala)
    ├── mix1.mp3
    ├── mix2.mp3
    └── ...
```

### 2. Agregar tu Música

**Paso 1:** Crea una carpeta llamada `music` en el mismo directorio que `index.html`

```bash
mkdir music
```

**Paso 2:** Copia tus archivos MP3 a la carpeta `music/`

**Paso 3:** Edita el archivo `app.js` y agrega tus tracks al array `playlist`:

```javascript
const playlist = [
    { 
        title: "Summer Vibes Mix 2026", 
        file: "summer-vibes-2026.mp3", 
        size: "195 MB" 
    },
    { 
        title: "Deep House Sessions Vol.1", 
        file: "deep-house-vol1.mp3", 
        size: "210 MB" 
    },
    { 
        title: "Techno Night Mix", 
        file: "techno-night.mp3", 
        size: "198 MB" 
    },
    // Agrega más mixes aquí...
];
```

### 3. Probar Localmente

Abre `index.html` en tu navegador web favorito. ¡Listo!

> **Nota:** Algunos navegadores pueden bloquear la reproducción de archivos locales. Para una mejor experiencia, usa un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

## 🌐 Desplegar en GitHub Pages

### Opción 1: Repositorio Público (Gratis)

1. Crea un nuevo repositorio en GitHub
2. Sube todos los archivos (index.html, styles.css, app.js, y la carpeta music/)
3. Ve a Settings → Pages
4. En "Source", selecciona la rama `main` y carpeta `/ (root)`
5. Haz clic en "Save"
6. Tu sitio estará disponible en `https://tu-usuario.github.io/nombre-repo/`

### Opción 2: Repositorio Privado (GitHub Pro)

Mismo proceso que la Opción 1, pero necesitas GitHub Pro para usar Pages con repos privados.

### ⚠️ Consideraciones Importantes para GitHub Pages

**Límites de Tamaño:**
- GitHub recomienda que los repositorios sean menores a 1GB
- Los archivos individuales no deben exceder 100MB (límite estricto)
- GitHub Pages tiene un límite suave de 1GB por sitio

**Para archivos MP3 de ~200MB cada uno:**

Si tus archivos MP3 son muy grandes (>100MB), GitHub bloqueará el push. Tienes estas opciones:

1. **Comprimir los archivos** - Reduce la calidad del MP3 para que sean <100MB
2. **Usar Git LFS** - Git Large File Storage (requiere configuración adicional)
3. **Hosting externo** - Sube los MP3s a otro servicio (Dropbox, Google Drive, etc.) y modifica las URLs en `app.js`

**Ejemplo con hosting externo:**

```javascript
const CONFIG = {
    musicFolder: 'https://tu-servidor.com/music/', // URL externa
    // ...
};
```

## ⌨️ Atajos de Teclado

| Tecla | Acción |
|-------|--------|
| `Espacio` | Reproducir/Pausar |
| `N` | Siguiente track |
| `P` | Track anterior |
| `M` | Silenciar/Activar sonido |
| `←` | Retroceder 5 segundos |
| `→` | Avanzar 5 segundos |
| `↑` | Subir volumen |
| `↓` | Bajar volumen |

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --color-primary: hsl(280, 85%, 60%);      /* Color principal */
    --color-secondary: hsl(200, 90%, 55%);    /* Color secundario */
    --color-accent: hsl(320, 80%, 60%);       /* Color de acento */
    /* ... */
}
```

### Cambiar Fuentes

Las fuentes actuales son:
- **Outfit** - Fuente principal
- **Space Grotesk** - Fuente secundaria (monospace)

Para cambiar, edita el `<link>` en `index.html` y actualiza las variables en `styles.css`.

## ⚙️ Configuración Avanzada

### Opciones de Rendimiento

Edita `app.js` para ajustar el rendimiento:

```javascript
const CONFIG = {
    debugMode: false,              // true para ver errores de API
    maxParticles: { 
        mobile: 15,                // Partículas en móvil
        desktop: 30                // Partículas en desktop
    },
    maxHistoryItems: 50            // Límite de historial
};
```

### Modo Debug

Para activar notificaciones de errores de API:

```javascript
debugMode: true  // Cambiar a true en CONFIG
```

## 📱 Responsive Design

La plataforma está optimizada para:
- 📱 **Móviles** - 320px - 480px
- 📱 **Tablets** - 481px - 768px
- 💻 **Laptops** - 769px - 1024px
- 🖥️ **Desktops** - 1025px+

## 🔧 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño moderno con Glassmorphism
- **JavaScript (Vanilla)** - Sin dependencias externas
- **Web Audio API** - Reproducción de audio nativa

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de usarlo y modificarlo como desees.

## 🎵 Créditos

Desarrollado para **PERCY QUASAR EN EL OASIS**

---

**¿Necesitas ayuda?** Abre un issue en el repositorio de GitHub.

**¿Te gusta el proyecto?** ¡Dale una ⭐ en GitHub!
