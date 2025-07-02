# Generador de Firmas Corporativas

**➡️ Accede a la aplicación aquí: [https://firma-es-christeyns.github.io/Generador-Firmas/](https://firma-es-christeyns.github.io/Generador-Firmas/)**

---

Este proyecto es una herramienta web interna diseñada para que los empleados de la compañía puedan generar sus firmas de correo electrónico corporativas de forma estandarizada, rápida y sin errores.

## Características Principales

- **Dos Formatos de Firma:**
  - **Escritorio/Web:** Una firma completa con todos los elementos gráficos, incluyendo logo y banners promocionales.
  - **Móvil:** Una versión simplificada y más ligera, optimizada para dispositivos móviles.
- **Formulario Intuitivo:** Los usuarios solo tienen que rellenar sus datos (nombre, cargo, sede) para generar la firma.
- **Capitalización Automática:** Los campos **"Nombre y apellidos" y "Cargo"** formatean el texto automáticamente para asegurar que cada palabra empiece con mayúscula.
- **Gestión de Banners Dinámica:** El banner promocional es dinámico y cambia según la "División" seleccionada por el usuario. Los enlaces de cada banner se gestionan de forma centralizada.
- **Copia Fácil:** Un botón "Copiar Firma" permite copiar el HTML de la firma directamente al portapapeles para pegarlo en la configuración de Outlook.

---

## Estructura del Proyecto

- `index.html`: Página de inicio donde el usuario elige el tipo de firma.
- `outlook_app_web.html`: Generador para la versión de Escritorio/Web.
- `outlook_mobile.html`: Generador para la versión de Móvil.
- `style.css`: Hoja de estilos común para todas las páginas.
- `script.js`: Fichero principal con la lógica de generación de firmas.
- `datos_banners.js`: Fichero de configuración con los enlaces de los banners.

---

## Despliegue

Este proyecto está desplegado usando **GitHub Pages**.