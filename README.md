# Generador de Firmas Corporativas - Christeyns

Este proyecto contiene una herramienta web estática para que los empleados de Christeyns puedan generar sus firmas de correo corporativas de forma unificada y sencilla, tanto para la versión de escritorio de Outlook como para la versión web.

---

## 🚀 Enlace a la Herramienta

**URL:** `https://TU_USUARIO_DE_GITHUB.github.io/NOMBRE_DE_TU_REPOSITORIO/`

---

## 📖 ¿Cómo Usar? (Para Empleados)

1.  Accede a la URL de la herramienta.
2.  En la página de inicio, selecciona la versión de Outlook que utilizas:
    * **OUTLOOK DE ESCRITORIO (OLD):** Para la aplicación instalada en tu PC o Mac.
    * **OUTLOOK WEB / NUEVO OUTLOOK:** Para la versión que usas en el navegador o la nueva app de Outlook.
3.  Rellena los campos: **Nombre y apellidos**, **Cargo** y **Teléfono** (9 dígitos sin espacios).
4.  Pulsa el botón **"Generar firma"**.
5.  Pulsa el gran botón azul **"Copiar Firma"**. El contenido se copiará al portapapeles.
6.  Ve a la configuración de firmas de tu Outlook y **pega** el contenido copiado.

---

## 🔧 ¿Cómo Actualizar el Banner? (Para Marketing / IT)

#### **Requisito INDISPENSABLE:**

* La imagen final que se suba **DEBE** guardarse en formato **PNG** y llamarse **exactamente `banner_actual.png`**. No importa si el diseño original está en JPG, Photoshop o Illustrator; el fichero final subido a esta carpeta debe cumplir esta norma.

#### **Pasos para actualizar el banner:**

1.  **Prepara tu nueva imagen** del banner y, usando cualquier programa de edición de imagen, **expórtala o guárdala como `banner_actual.png`**.
2.  **Navega a la carpeta del banner** dentro de este repositorio: `img/banner/`.
3.  **(Opcional pero recomendado)** Si quieres guardar el banner antiguo, descárgalo y súbelo a la carpeta `img/historial/` con un nombre descriptivo (ej: `banner_verano_2025.png`).
4.  **Borra el `banner_actual.png` antiguo** que está en la carpeta `/banner/`.
5.  **Sube tu nuevo fichero `banner_actual.png`** a la carpeta `/banner/`.
6.  Una vez subido el fichero, los cambios se verán reflejados en la herramienta en 1-2 minutos.

---

## 📂 Estructura del Proyecto

* `index.html`: La página principal de selección.
* `outlook_app.html`: El generador para la versión de escritorio de Outlook.
* `outlook_web.html`: El generador para la versión web / Nuevo Outlook.
* `style.css`: La hoja de estilos que da diseño a todas las páginas.
* `script.js`: El fichero JavaScript que contiene toda la lógica de la aplicación (generación de la firma, formato del teléfono y botón de copiar).
* `/img/`: Carpeta que contiene todas las imágenes fijas (logo, iconos, etc.) y el banner actual.
