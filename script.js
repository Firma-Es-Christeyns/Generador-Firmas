document.addEventListener('DOMContentLoaded', function() {

    // --- Base de datos de las sedes ---
    const sedesData = {
        'Ador': { address: 'P. I. Raconc, c/ Científica Margarita Salas Falgueras, 2 - 46729 Ador (Valencia)', phone: '+34 962 871 345' },
        'Cheste': { address: 'Polígono Industrial Castilla Esquina Vial, Vial 5, 2, 46380, (Valencia)', phone: '+34 962 510 407' },
        'Madrid': { address: 'Avenida Mediterraneo, 11, 28007 (Madrid)', phone: '+34 902 636 273' },
        'Vic': { address: 'Carrer de Figueres, 16, 08500 Vic, (Barcelona)', phone: '+34 938 869 733' }
    };

    // --- Elementos del DOM ---
    const generarBtn = document.getElementById('generar-btn');
    const copyBtn = document.getElementById('copy-btn');
    const firmaContainer = document.getElementById('firma-container');

    const formInputs = {
        nombre: document.getElementById('nombre'),
        cargo: document.getElementById('cargo'),
        tef: document.getElementById('tef'),
        sede: document.getElementById('sede'),
        division: document.getElementById('division')
    };
    
    const signatureOutputs = {
        nombre: document.getElementById('nombre-empleado'),
        cargo: document.getElementById('cargo-empleado'),
        tef: document.getElementById('tef-empleado'),
        sedeInfo: document.getElementById('sede-info'),
        sedeTelefono: document.getElementById('sede-telefono'),
        mobileWrapper: document.getElementById('mobile-field-wrapper'),
        banner: document.getElementById('banner-image')
    };

    const generadoSpan = document.getElementById('generado');
    
    // --- Funciones ---
    function formatPhoneNumber(phoneNumber) {
        if (phoneNumber && phoneNumber.length === 9 && !isNaN(phoneNumber)) {
            return `${phoneNumber.substring(0, 3)} ${phoneNumber.substring(3, 6)} ${phoneNumber.substring(6, 9)}`;
        }
        return phoneNumber;
    }

    function updateSignature() {
        const nombreVal = formInputs.nombre.value.trim();
        const cargoVal = formInputs.cargo.value.trim();
        const tefVal = formInputs.tef.value.trim();
        const sedeVal = formInputs.sede.value;
        const divisionVal = formInputs.division.value;
        
        signatureOutputs.nombre.textContent = nombreVal;
        signatureOutputs.cargo.textContent = cargoVal;

        if (tefVal) {
            signatureOutputs.tef.textContent = formatPhoneNumber(tefVal);
            signatureOutputs.mobileWrapper.style.display = 'inline';
        } else {
            signatureOutputs.mobileWrapper.style.display = 'none';
        }

        const sedeSeleccionada = sedesData[sedeVal];
        if (sedeSeleccionada) {
            signatureOutputs.sedeInfo.textContent = ` ${sedeSeleccionada.address} `;
            signatureOutputs.sedeTelefono.innerHTML = ` <span style="font-family:Arial,Helvetica,sans-serif;color:#4da42f;font-size:14px;"> T </span><span style="font-family:Arial,Helvetica,sans-serif;color:#606060;font-size:14px;">${sedeSeleccionada.phone}</span>`;
        } else {
            signatureOutputs.sedeInfo.textContent = '';
            signatureOutputs.sedeTelefono.innerHTML = '';
        }

        let bannerFilename = 'banner_actual.png';
        if (divisionVal) {
            bannerFilename = `banner_actual_${divisionVal}.png`;
        }
        signatureOutputs.banner.src = `https://raw.githubusercontent.com/Firma-Es-Christeyns/Generador-Firmas/main/img/banner/${bannerFilename}`;
    }

    // --- Event Listeners ---
    if (generarBtn) {
        // ¡NUEVA VIGILANCIA PARA EL CAMPO DE TELÉFONO!
        formInputs.tef.addEventListener('input', function (e) {
            // Reemplaza cualquier caracter que NO sea un dígito por una cadena vacía
            e.target.value = e.target.value.replace(/\D/g, '');
        });

        generarBtn.addEventListener('click', function() {
            if (!formInputs.nombre.value.trim() || !formInputs.cargo.value.trim() || !formInputs.sede.value) {
                alert('Por favor, rellena todos los campos obligatorios: Nombre, Cargo y Sede.');
                return;
            }
            
            updateSignature();
            copyBtn.disabled = false;
            
            generadoSpan.textContent = ' ¡Firma generada!';
            generadoSpan.style.color = 'green';
            generadoSpan.style.fontWeight = 'bold';
            generadoSpan.style.marginLeft = '10px';
        });

        Object.values(formInputs).forEach(input => {
            input.addEventListener('input', () => {
                copyBtn.disabled = true;
                generadoSpan.textContent = '';
            });
        });
    }

    if (copyBtn && firmaContainer) {
        copyBtn.addEventListener('click', function() {
            if (copyBtn.disabled) return;
            try {
                const firmaHTML = firmaContainer.innerHTML;
                const blob = new Blob([firmaHTML], { type: 'text/html' });
                const clipboardItem = new ClipboardItem({ 'text/html': blob });

                navigator.clipboard.write([clipboardItem]).then(() => {
                    copyBtn.textContent = '¡Copiado!';
                    copyBtn.classList.add('copied');
                    setTimeout(() => {
                        copyBtn.textContent = 'Copiar Firma';
                        copyBtn.classList.remove('copied');
                    }, 2000);
                }).catch(err => {
                    fallbackCopy(firmaContainer.innerHTML); 
                });
            } catch (err) {
                fallbackCopy(firmaContainer.innerHTML);
            }
        });
    }
    
    function fallbackCopy(textToCopy) {
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position="fixed"; textArea.style.top = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            copyBtn.textContent = '¡Copiado!';
            copyBtn.classList.add('copied');
            setTimeout(() => {
                copyBtn.textContent = 'Copiar Firma';
                copyBtn.classList.remove('copied');
            }, 2000);
        } catch (err) {
            console.error('Fallback copy failed', err);
        }
        document.body.removeChild(textArea);
    }
});