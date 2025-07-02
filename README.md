# Generador de Firmas Corporativas

Este proyecto es una herramienta web interna diseñada para que los empleados de la compañía puedan generar sus firmas de correo electrónico corporativas de forma estandarizada, rápida y sin errores.

## Características Principales

- **Dos Formatos de Firma:**
  - **Escritorio/Web:** Una firma completa con todos los elementos gráficos, incluyendo logo y banners promocionales.
  - **Móvil:** Una versión simplificada y más ligera, optimizada para dispositivos móviles.
- **Formulario Intuitivo:** Los usuarios solo tienen que rellenar sus datos (nombre, cargo, sede) para generar la firma.
- **Capitalización Automática:** El campo de "Nombre y apellidos" formatea el texto automáticamente para asegurar que cada palabra empiece con mayúscula, manteniendo una imagen profesional.
- **Gestión de Banners Dinámica:** El banner promocional que aparece en la firma de escritorio/web es dinámico y depende de la "División" seleccionada por el usuario.
- **Copia Fácil:** Un botón "Copiar Firma" permite copiar el HTML de la firma directamente al portapapeles para pegarlo en la configuración de Outlook.

---

## Gestión de Enlaces de Banners (Para Marketing)

Una de las características clave de esta herramienta es la capacidad de cambiar los enlaces a los que dirigen los banners promocionales de forma sencilla y sin tocar el código principal.

Para modificar un enlace, sigue estos pasos:

1.  Busca el fichero llamado `datos_banners.js` en el repositorio.
2.  Ábrelo para editarlo. Verás un contenido similar a este:

    ```javascript
    const bannerLinks = {
      "general": "[https://www.pagina-general.com](https://www.pagina-general.com)",
      "laundry": "[https://www.pagina-laundry.com](https://www.pagina-laundry.com)",
      "ph": "[https://www.pagina-ph.com](https://www.pagina-ph.com)",
      "food": "[https://www.pagina-food.com](https://www.pagina-food.com)"
    };
    ```

3.  Simplemente, **reemplaza la URL** que está entre comillas por la nueva que desees para la división correspondiente.
4.  Guarda los cambios. El generador de firmas usará automáticamente los nuevos enlaces.

---

## Estructura del Proyecto

- `index.html`: Página de inicio donde el usuario elige el tipo de firma.
- `outlook_app_web.html`: Generador para la versión de Escritorio/Web.
- `outlook_mobile.html`: Generador para la versión de Móvil.
- `style.css`: Hoja de estilos común para todas las páginas.
- `script.js`: Fichero principal con la lógica de generación de firmas.
- `datos_banners.js`: **(Importante)** Fichero de configuración con los enlaces de los banners.

---

## Despliegue

Este proyecto está desplegado usando **GitHub Pages**.