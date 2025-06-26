# Generador de Firmas Corporativas - Christeyns

Este proyecto contiene una herramienta web estática para que los empleados de Christeyns puedan generar sus firmas de correo corporativas de forma unificada y sencilla, tanto para la versión de escritorio de Outlook como para la versión web.

---

## 🚀 Enlace a la Herramienta

**URL:** `https://firma-es-christeyns.github.io/Generador-Firmas/`

---

## 📖 ¿Cómo Usar? (Para Empleados)

1.  Accede a la URL de la herramienta.
2.  En la página de inicio, selecciona la versión de Outlook que utilizas:
    * **OUTLOOK DE ESCRITORIO (OLD):** Para la aplicación instalada en tu PC o Mac.
    * **OUTLOOK WEB / NUEVO OUTLOOK:** Para la versión que usas en el navegador o la nueva app de Outlook.
3.  Rellena los campos obligatorios (*): **Nombre y apellidos**, **Cargo** y **Sede**.
4.  El campo **Móvil** es opcional. Si lo dejas vacío, no aparecerá en la firma.
5.  El campo **División** es opcional. Selecciónalo solo si perteneces a **Food, Laundry o PH**. En caso contrario, déjalo en "General".
6.  Pulsa el botón **"Generar firma"**.
7.  Pulsa el gran botón azul **"Copiar Firma"**. El contenido se copiará al portapapeles.
8.  Ve a la configuración de firmas de tu Outlook y **pega** el contenido copiado.

---

## 📂 Estructura del Proyecto

* `index.html`: La página principal de selección.
* `outlook_app.html`: El generador para la versión de escritorio de Outlook.
* `outlook_web.html`: El generador para la versión web / Nuevo Outlook.
* `style.css`: La hoja de estilos que da diseño a todas las páginas.
* `script.js`: El fichero JavaScript que contiene toda la lógica de la aplicación (generación de la firma, formato del teléfono y botón de copiar).
* `/img/`: Carpeta que contiene todas las imágenes fijas (logo, iconos, etc.) y el banner actual.