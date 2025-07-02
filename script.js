// Fichero: script.js (Versión con copiado a prueba de fallos para Android)

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
        banner: document.getElementById('banner-image'),
        bannerLink: document.getElementById('banner-link')
    };

    const generadoSpan = document.getElementById('generado');
    
    function formatPhoneNumber(phoneNumber) {
        if (phoneNumber && phoneNumber.length === 9 && !isNaN(phoneNumber)) {
            return `${phoneNumber.substring(0, 3)} ${phoneNumber.substring(3, 6)} ${phoneNumber.substring(6, 9)}`;
        }
        return phoneNumber;
    }
    
    function toTitleCase(str) {
        if (!str) return '';
        return str.toLowerCase().split(' ').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    }

    function updateSignature() {
        const nombreVal = toTitleCase(formInputs.nombre.value.trim());
        const cargoVal = toTitleCase(formInputs.cargo.value.trim());
        const tefVal = formInputs.tef.value.trim();
        const sedeVal = formInputs.sede.value;
        
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

        if (formInputs.division && signatureOutputs.banner && signatureOutputs.bannerLink) {
            const divisionVal = formInputs.division.value; 
            let bannerFilename = 'banner_actual.png';
            let linkKey = 'general'; 

            if (divisionVal) { 
                linkKey = divisionVal.toLowerCase(); 
                bannerFilename = `banner_actual_${linkKey}.png`;
            }
            
            if (typeof bannerLinks !== 'undefined' && bannerLinks) {
                signatureOutputs.banner.src = `https://raw.githubusercontent.com/Firma-Es-Christeyns/Generador-Firmas/main/img/banner/${bannerFilename}`;
                const defaultUrl = bannerLinks['general'] || 'https://www.christeyns.com/es-es/';
                signatureOutputs.bannerLink.href = bannerLinks[linkKey] || defaultUrl;
            }
        }
    }
    
    function selectText(element) {
        const range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }

    function showFeedback(message, duration = 3000) {
        copyBtn.textContent = message;
        copyBtn.classList.add('copied');
        setTimeout(() => {
            copyBtn.textContent = 'Copiar Firma';
            copyBtn.classList.remove('copied');
        }, duration);
    }

    // --- Event Listeners ---
    if (generarBtn) {
        if (formInputs.nombre) {
            formInputs.nombre.addEventListener('input', function(e) {
                const start = e.target.selectionStart;
                const end = e.target.selectionEnd;
                e.target.value = toTitleCase(e.target.value);
                e.target.setSelectionRange(start, end);
            });
        }
        
        if (formInputs.cargo) {
            formInputs.cargo.addEventListener('input', function(e) {
                const start = e.target.selectionStart;
                const end = e.target.selectionEnd;
                e.target.value = toTitleCase(e.target.value);
                e.target.setSelectionRange(start, end);
            });
        }

        if (formInputs.tef) {
            formInputs.tef.addEventListener('input', function (e) {
                e.target.value = e.target.value.replace(/\D/g, '');
            });
        }

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
            if (input) { 
                input.addEventListener('input', () => {
                    copyBtn.disabled = true;
                    generadoSpan.textContent = '';
                });
            }
        });
    }

    if (copyBtn && firmaContainer) {
        copyBtn.addEventListener('click', function() {
            if (copyBtn.disabled) return;
            
            // Intento 1: API Moderna
            if (navigator.clipboard && navigator.clipboard.write) {
                const firmaHTML = firmaContainer.innerHTML;
                const blob = new Blob([firmaHTML], { type: 'text/html' });
                const clipboardItem = new ClipboardItem({ 'text/html': blob });

                navigator.clipboard.write([clipboardItem]).then(() => {
                    showFeedback('¡Copiado!');
                }).catch(err => {
                    // Intento 2: Comando Clásico
                    selectText(firmaContainer);
                    if (document.execCommand('copy')) {
                        showFeedback('¡Copiado!');
                    } else {
                        // Intento 3: Failsafe (Seleccionar para el usuario)
                        selectText(firmaContainer);
                        showFeedback('¡Seleccionado! Cópialo manualmente');
                    }
                    window.getSelection().removeAllRanges();
                });
            } else {
                 // Intento 2 (para navegadores muy antiguos)
                 selectText(firmaContainer);
                 if (document.execCommand('copy')) {
                     showFeedback('¡Copiado!');
                 } else {
                     // Intento 3: Failsafe (Seleccionar para el usuario)
                     selectText(firmaContainer);
                     showFeedback('¡Seleccionado! Cópialo manualmente');
                 }
                 window.getSelection().removeAllRanges();
            }
        });
    }
});