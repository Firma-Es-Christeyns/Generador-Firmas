// Espera a que todo el contenido de la página se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {

    // --- Lógica para Generar la Firma ---
    const generarBtn = document.getElementById('generar-btn');
    const nombreInput = document.getElementById('nombre');
    const cargoInput = document.getElementById('cargo');
    const tefInput = document.getElementById('tef');
    const nombreEmpleadoOutput = document.getElementById('nombre-empleado');
    const cargoEmpleadoOutput = document.getElementById('cargo-empleado');
    const tefEmpleadoOutput = document.getElementById('tef-empleado');
    const generadoSpan = document.getElementById('generado');

    function formatPhoneNumber(phoneNumber) {
        if (phoneNumber && phoneNumber.length === 9 && !isNaN(phoneNumber)) {
            const part1 = phoneNumber.substring(0, 3);
            const part2 = phoneNumber.substring(3, 6);
            const part3 = phoneNumber.substring(6, 9);
            return `${part1} ${part2} ${part3}`;
        }
        return phoneNumber;
    }

    if (generarBtn) { // Solo ejecuta si el botón de generar existe en la página
        generarBtn.addEventListener('click', function() {
            const nombre = nombreInput.value.trim();
            const cargo = cargoInput.value.trim();
            const tef = tefInput.value.trim();
            const tefFormateado = formatPhoneNumber(tef);

            nombreEmpleadoOutput.textContent = nombre || nombreInput.placeholder;
            cargoEmpleadoOutput.textContent = cargo || cargoInput.placeholder;
            tefEmpleadoOutput.textContent = tef ? tefFormateado : "123 456 789";

            generadoSpan.textContent = ' ¡Firma generada!';
            generadoSpan.style.color = 'green';
            generadoSpan.style.fontWeight = 'bold';
            generadoSpan.style.marginLeft = '10px';
        });
    }


    // --- ¡NUEVA LÓGICA PARA EL BOTÓN DE COPIAR! ---
    const copyBtn = document.getElementById('copy-btn');
    const firmaContainer = document.getElementById('firma-container');

    if (copyBtn && firmaContainer) { // Solo ejecuta si el botón de copiar y la firma existen
        copyBtn.addEventListener('click', function() {
            try {
                // El método moderno para copiar HTML
                const firmaHTML = firmaContainer.innerHTML;
                const blob = new Blob([firmaHTML], { type: 'text/html' });
                const clipboardItem = new ClipboardItem({ 'text/html': blob });

                navigator.clipboard.write([clipboardItem]).then(function() {
                    // Feedback visual para el usuario
                    copyBtn.textContent = '¡Copiado!';
                    copyBtn.classList.add('copied'); // Añade una clase para cambiar el color

                    // Vuelve al texto original después de 2 segundos
                    setTimeout(function() {
                        copyBtn.textContent = 'Copiar Firma';
                        copyBtn.classList.remove('copied');
                    }, 2000);

                }).catch(function(err) {
                    console.error('Error al copiar la firma: ', err);
                    alert('Error al copiar. Por favor, selecciona y copia el texto manualmente.');
                });

            } catch (err) {
                console.error('El navegador no soporta la API de portapapeles, usando método antiguo.', err);
                // Fallback para navegadores antiguos (menos fiable con HTML)
                const range = document.createRange();
                range.selectNode(firmaContainer);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                document.execCommand('copy');
                window.getSelection().removeAllRanges();
                alert('Firma copiada (método antiguo). Puede que necesites ajustar el formato al pegar.');
            }
        });
    }
});