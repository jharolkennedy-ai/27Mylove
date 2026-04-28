function empezarSorpresa() {
    // 1. Quitar el modal
    const modal = document.getElementById('modal-inicio');
    if (modal) modal.style.display = 'none';
    
    // 2. Mostrar el contenido
    const contenido = document.getElementById('contenido-principal');
    if (contenido) contenido.classList.remove('oculto');
    
    // 3. Reproducir música
    const musica = document.getElementById('miMusica');
    if (musica) {
        musica.play().catch(e => console.log("Música lista"));
    }
    
    // 4. Iniciar contador
    actualizarContador();
    setInterval(actualizarContador, 1000);

    // 5. Iniciar lluvia de corazones
    for (let i = 0; i < 20; i++) {
        setTimeout(crearCorazonFlotante, i * 300);
        // Añade esto para que cree un corazón nuevo cada 800 milisegundos (0.8 segundos)
    setInterval(crearCorazonFlotante, 800);
    }
}

function actualizarContador() {
    const fechaInicio = new Date('February 27, 2026 00:00:00').getTime();
    const ahora = new Date().getTime();
    const diferencia = ahora - fechaInicio;

    const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const h = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('dias').innerText = d < 10 ? '0' + d : d;
    document.getElementById('horas').innerText = h < 10 ? '0' + h : h;
    document.getElementById('minutos').innerText = m < 10 ? '0' + m : m;
    document.getElementById('segundos').innerText = s < 10 ? '0' + s : s;
}

function crearCorazonFlotante() {
    const corazon = document.createElement('div');
    corazon.className = 'corazon-flotante';
    corazon.innerHTML = '❤️';
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.getElementById('lluvia-corazones').appendChild(corazon);
    
    setTimeout(() => { corazon.remove(); }, 5000);
}// --- FUNCIÓN PARA EL EFECTO DE ESCRITURA ---

function empezarLectura() {
    // 1. Ocultar el botón
    document.getElementById('btn-leer-historia').style.display = 'none';
    
    // 2. Mostrar el contenedor del texto
    const pEfecto = document.getElementById('efecto-escritura');
    pEfecto.style.display = 'block';

    // 3. El texto completo que quieres escribir
    const textoCompleto = "Me gusta pensar que lo nuestro es como una ley natural: la aguja siempre busca el norte y yo siempre te buscare a ti. No hace falta que estemos juntos a cada momento para sentir que estamos conectados; tu brillo es la señal que sigo en la oscuridad, el destino que decidi eligir cada vez que me toca decidir hacia dónde ir. Eres, sin duda, lo más real y estable de mi mapa.";
    
    let i = 0;
    const velocidad = 50; // Milisegundos entre cada letra (ajusta para más rápido/lento)

    // La función mágica que escribe letra por letra
    function escribir() {
        if (i < textoCompleto.length) {
            pEfecto.innerHTML += textoCompleto.charAt(i);
            i++;
            setTimeout(escribir, velocidad);
        } else {
            // Cuando termina de escribir, mostrar la firma y los corazones flotantes de fondo
            mostrarFirmaFinal();
        }
    }

    // Arrancamos la escritura
    escribir();
}

function mostrarFirmaFinal() {
    // Mostramos la firma con un pequeño retraso y un efecto suave
    const firma = document.getElementById('firma-mensaje');
    firma.style.display = 'block';
    firma.style.opacity = '0';
    
    // Suave aparición de la firma
    let opacidad = 0;
    const intervalFirma = setInterval(() => {
        opacidad += 0.1;
        firma.style.opacity = opacidad;
        if (opacidad >= 1) clearInterval(intervalFirma);
    }, 100);

    // Activamos la lluvia de corazones del fondo (si no estaba ya activa)
    if(typeof crearLluviaCorazones === 'function'){
        crearLluviaCorazones();
    }
}