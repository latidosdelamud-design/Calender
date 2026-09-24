document.addEventListener('DOMContentLoaded', () => {
    let currentDate = new Date();
    let currentSlide = 0;

    // CARRUSEL
    const carruselSlides = document.getElementById('carrusel-slides');
    const carruselIndicadores = document.getElementById('carrusel-indicadores');

    const imagenesCarrusel = [
        { url: "assets/images/carrusel/01-procesion-gualamita.jpg", caption: "Procesión del Señor de Gualamita" },
        { url: "assets/images/festividades/10-hatun-luya-1.jpg", caption: "Fiesta Patronal - Hatun Luya" },
        { url: "assets/images/festividades/13-danza-cuemal.jpg", caption: "Danzas Tradicionales - Cuemal" },
        { url: "assets/images/carrusel/04-festividad-lamud-yt.jpg", caption: "Festividad en Lámud" },
        { url: "assets/images/banner/banner-lamud-vista.jpg", caption: "Paisaje de Lámud" },
        { url: "assets/images/festividades/11-senor-gualamita.jpg", caption: "Cristo Redentor - Señor de Gualamita" },
        { url: "assets/images/festividades/06-pachamama-raymi.jpg", caption: "Lámud" },
        { url: "assets/images/festividades/12-cruz-lamud-urco.jpg", caption: "Parque de Lámud - Cruz de Lamud Urco" }
    ];

    function renderCarrusel() {
    carruselSlides.innerHTML = '';
    carruselIndicadores.innerHTML = '';

    imagenesCarrusel.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = 'min-w-full h-full relative';
        slide.innerHTML = `
            <img src="${img.url}" alt="${img.caption}" class="w-full h-full object-cover">
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-8 pt-20">
                <p class="text-xl font-medium text-[#f6e0b5] font-serif tracking-wide drop-shadow-md">${img.caption}</p>
            </div>
        `;
        carruselSlides.appendChild(slide);

        const indicador = document.createElement('button');
        indicador.className = `w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === 0 ? 'bg-[#d4af37] scale-125' : 'bg-white/40'}`;
        indicador.addEventListener('click', () => goToSlide(index));
        carruselIndicadores.appendChild(indicador);
    });
}

function updateIndicadores() {
    const indicadores = carruselIndicadores.querySelectorAll('button');
    indicadores.forEach((ind, i) => {
        if (i === currentSlide) {
            ind.className = 'w-2.5 h-2.5 rounded-full bg-[#d4af37] scale-125 transition-all duration-300';
        } else {
            ind.className = 'w-2.5 h-2.5 rounded-full bg-white/40 scale-100 transition-all duration-300';
        }
    });
}

    function goToSlide(index) {
        currentSlide = index;
        carruselSlides.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateIndicadores();
    }

    function updateIndicadores() {
        const indicadores = carruselIndicadores.querySelectorAll('button');
        indicadores.forEach((ind, i) => {
            ind.classList.toggle('bg-amber-400', i === currentSlide);
            ind.classList.toggle('scale-125', i === currentSlide);
            ind.classList.toggle('bg-white/50', i !== currentSlide);
        });
    }

    document.getElementById('carrusel-prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + imagenesCarrusel.length) % imagenesCarrusel.length;
        goToSlide(currentSlide);
    });

    document.getElementById('carrusel-next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % imagenesCarrusel.length;
        goToSlide(currentSlide);
    });

    setInterval(() => {
        currentSlide = (currentSlide + 1) % imagenesCarrusel.length;
        goToSlide(currentSlide);
    }, 5000);

    //  CALENDARIO 
    const mesTitulo = document.getElementById('mes-titulo');
    const anioTitulo = document.getElementById('anio-titulo');
    const calendarioGrid = document.getElementById('calendario-grid');
    const fechaActual = document.getElementById('fecha-actual');
    const proximasContainer = document.getElementById('proximas-festividades');
    const modal = document.getElementById('modal');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalFecha = document.getElementById('modal-fecha');
    const modalDescripcion = document.getElementById('modal-descripcion');
    const modalImagen = document.getElementById('modal-imagen');
    const modalVideo = document.getElementById('modal-video');
    const cerrarModal = document.getElementById('cerrar-modal');

    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    function actualizarFechaActual() {
        const hoy = new Date();
        fechaActual.innerHTML = `<p class="text-xl md:text-2xl">${hoy.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>`;
    }

    function parsearFechaLocal(fechaStr) {
        const [year, month, day] = fechaStr.split('-').map(Number);
        return new Date(year, month - 1, day);
    }

    function renderCalendario() {
    calendarioGrid.innerHTML = '';
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    mesTitulo.textContent = meses[month];
    anioTitulo.textContent = year;

    const primerDia = new Date(year, month, 1).getDay();
    const diasEnMes = new Date(year, month + 1, 0).getDate();
    const diasMesAnterior = new Date(year, month, 0).getDate();

    for (let i = 0; i < primerDia; i++) {
        const diaNum = diasMesAnterior - primerDia + i + 1;
        crearDia(diaNum, month - 1, year, true);
    }
    
    for (let dia = 1; dia <= diasEnMes; dia++) {
        crearDia(dia, month, year, false);
    }
    
    const totalCeldasImpresas = primerDia + diasEnMes;
    const restantes = Math.ceil(totalCeldasImpresas / 7) * 7 - totalCeldasImpresas;
    for (let dia = 1; dia <= restantes; dia++) {
        crearDia(dia, month + 1, year, true);
    }
    
    // CANDADO DE 2026
    
    const btnAnterior = document.getElementById("btn-prev");
    const btnSiguiente = document.getElementById("btn-next");

    if (btnAnterior && btnSiguiente) {
        
        if (month === 0) {
            btnAnterior.disabled = true;
            btnAnterior.style.opacity = "0.3";         
            btnAnterior.style.cursor = "not-allowed";    
            btnAnterior.style.pointerEvents = "none";    
        } else {
            btnAnterior.disabled = false;
            btnAnterior.style.opacity = "1";
            btnAnterior.style.cursor = "pointer";
            btnAnterior.style.pointerEvents = "auto";
        }

        if (month === 11) {
            btnSiguiente.disabled = true;
            btnSiguiente.style.opacity = "0.3";
            btnSiguiente.style.cursor = "not-allowed";
            btnSiguiente.style.pointerEvents = "none";
        } else {
            btnSiguiente.disabled = false;
            btnSiguiente.style.opacity = "1";
            btnSiguiente.style.cursor = "pointer";
            btnSiguiente.style.pointerEvents = "auto";
        }
    }
    // solo animación stagger sin ocultar (prefers-reduced-motion respeta)
    if(typeof gsap!=='undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
        gsap.from(calendarioGrid.children, { opacity:0, y:8, duration:0.35, stagger:{ each:0.01, from:'start' }, ease:'power2.out', overwrite:true });
    }
}

    function crearDia(dia, mes, año, esOtroMes) {
    let fechaTemp = new Date(año, mes, dia);
    fechaTemp.setHours(0,0,0,0);
    
    const yStr = fechaTemp.getFullYear();
    const mStr = String(fechaTemp.getMonth() + 1).padStart(2, '0');
    const dStr = String(fechaTemp.getDate()).padStart(2, '0');
    const fechaStr = `${yStr}-${mStr}-${dStr}`;

    const dayElement = document.createElement('div');
    
    const hoy = new Date();
    hoy.setHours(0,0,0,0);
    
    const isToday = fechaTemp.getTime() === hoy.getTime();
    const isPast = fechaTemp.getTime() < hoy.getTime();
    const isFuture = fechaTemp.getTime() > hoy.getTime();

    const festividadesDia = festividades.filter(f => f.fecha === fechaStr);
    const hasEvent = festividadesDia.length > 0;

    dayElement.className = 'cal-day relative flex items-center justify-center rounded-[18px] border border-[rgba(246,224,181,0.12)] transition-all duration-300';

    let bgColor = 'bg-[rgba(8,43,34,0.55)]'; 
    let textColor = '';
    let extraClasses = '';

    if (esOtroMes) {
        bgColor = 'bg-[rgba(4,30,23,0.25)]';
        extraClasses = 'opacity-30';
    }

    if (isToday) {
        bgColor = '!bg-white';
        textColor = '!text-[#041e17] font-bold text-xl';
        extraClasses = 'shadow-[0_0_25px_rgba(255,255,255,0.6)] !border-white z-10';
    } else if (hasEvent && isPast) {
        bgColor = '!bg-cyan-500/40';
        textColor = '!text-cyan-50 font-bold text-lg';
        extraClasses = '!border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:!bg-cyan-400/60';
    } else if (hasEvent && isFuture) {
        bgColor = '!bg-amber-500/40';
        textColor = '!text-amber-50 font-bold text-lg';
        extraClasses = '!border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:!bg-amber-400/60';
    }

    dayElement.className += ` ${bgColor} ${textColor} ${extraClasses}`;
    
    dayElement.innerHTML = `<span>${dia}</span>`;

    if (hasEvent) {
        dayElement.style.cursor = 'pointer';
        dayElement.addEventListener('click', () => mostrarModal(festividadesDia, fechaStr));
    }

    calendarioGrid.appendChild(dayElement);
}

    function getImagenesFest(fest){
        if(Array.isArray(fest.imagenes) && fest.imagenes.length) return fest.imagenes;
        if(fest.imagen) return [fest.imagen];
        return [];
    }
    function renderImagenesFest(fest){
        const imgs = getImagenesFest(fest);
        if(imgs.length===0) return '';
        if(imgs.length===1) return `<img src="${imgs[0]}" class="w-full mt-6 rounded-2xl max-h-72 md:max-h-[420px] object-cover border border-amber-900/30 shadow-lg" alt="${fest.nombre}" loading="lazy" onerror="this.style.display='none'">`;
        const dots = imgs.map((_,i)=> `<button data-idx="${i}" class="modal-dot w-2 h-2 rounded-full ${i===0?'bg-amber-300':'bg-white/50'} transition"></button>`).join('');
        const slides = imgs.map(src=> `<img src="${src}" class="min-w-full h-72 md:h-[400px] object-cover shrink-0" alt="${fest.nombre}" loading="lazy" onerror="this.style.display='none'">`).join('');
        return `
            <div class="modal-fest-carousel relative overflow-hidden rounded-2xl mt-6 border border-[rgba(246,224,181,0.1)] shadow-xl group">
                <div class="modal-carousel-track flex transition-transform duration-500 ease-out">${slides}</div>
                <button class="modal-carousel-prev absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur text-white w-9 h-9 rounded-full flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition">‹</button>
                <button class="modal-carousel-next absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur text-white w-9 h-9 rounded-full flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition">›</button>
                <div class="modal-carousel-dots absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">${dots}</div>
                <div class="absolute top-3 right-3 bg-black/50 backdrop-blur text-amber-100 text-xs px-2.5 py-1 rounded-full border border-white/10"><span class="modal-carousel-counter">1</span> / ${imgs.length}</div>
            </div>`;
    }
    function initModalCarousels(){
        document.querySelectorAll('.modal-fest-carousel').forEach(carousel=>{
            const track = carousel.querySelector('.modal-carousel-track');
            const slides = track.children.length;
            const prev = carousel.querySelector('.modal-carousel-prev');
            const next = carousel.querySelector('.modal-carousel-next');
            const dots = carousel.querySelectorAll('.modal-dot');
            const counter = carousel.querySelector('.modal-carousel-counter');
            let idx=0;
            function update(){
                track.style.transform = `translateX(-${idx*100}%)`;
                dots.forEach((d,i)=>{
                    d.className = `modal-dot w-2 h-2 rounded-full transition ${i===idx?'bg-amber-300 scale-125':'bg-white/50'}`;
                });
                if(counter) counter.textContent = idx+1;
            }
            if(prev) prev.addEventListener('click', ()=>{ idx=(idx-1+slides)%slides; update(); });
            if(next) next.addEventListener('click', ()=>{ idx=(idx+1)%slides; update(); });
            dots.forEach(d=> d.addEventListener('click', ()=>{ idx=parseInt(d.dataset.idx); update(); }));
        });
    }

    function mostrarModal(festividadesDia, fechaStr) {
        if (festividadesDia.length === 0) return;

        const fechaCorrecta = parsearFechaLocal(fechaStr);

        modalTitulo.innerHTML = festividadesDia.length > 1 
            ? "Festividades del día" 
            : festividadesDia[0].nombre;

        modalFecha.textContent = fechaCorrecta.toLocaleDateString('es-ES', { 
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' 
        });

        let htmlContent = '';

        if (festividadesDia.length >= 2) {
            htmlContent = `<div class="flex flex-col gap-8">`;
            festividadesDia.forEach(fest => {
                htmlContent += `
                    <div class="bg-emerald-900/30 border border-emerald-700/50 rounded-3xl p-6 md:p-8">
                        <h3 class="text-2xl font-bold text-amber-100 mb-4">${fest.nombre}</h3>
                        <div class="text-emerald-100/90 leading-relaxed space-y-4">
                            ${fest.descripcion}
                        </div>
                        ${renderImagenesFest(fest)}
                    </div>`;
            });
            htmlContent += `</div>`;
        } 
        else {
            const fest = festividadesDia[0];
            htmlContent = `
                <div class="space-y-6">
                    <div class="text-emerald-100/90 leading-relaxed space-y-4 text-base md:text-lg">
                        ${fest.descripcion}
                    </div>
                    ${renderImagenesFest(fest)}
                </div>`;
        }

        modalDescripcion.innerHTML = htmlContent;
        setTimeout(initModalCarousels, 0);
        modalVideo.innerHTML = '';

        festividadesDia.forEach(fest => {
            if (fest.video && fest.video.includes('youtu')) {
                let videoId = fest.video.includes('youtu.be') ? fest.video.split('/').pop().split('?')[0].split('&')[0] : fest.video.split('v=')[1]?.split('&')[0].split('?')[0];
                modalVideo.innerHTML += `
                    <div class="mt-10 border-t border-[rgba(246,224,181,0.1)] pt-8">
                        <h4 class="font-semibold text-[#f6e0b5] text-lg mb-4 flex items-center gap-3">
                            <span class="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                            Video: ${fest.nombre}
                        </h4>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" 
                            frameborder="0" allowfullscreen class="rounded-3xl shadow-2xl border border-[rgba(246,224,181,0.1)]"></iframe>
                    </div>`;
            }
        });

        modal.classList.remove('hidden');
    }

    cerrarModal.addEventListener('click', () => modal.classList.add('hidden'));
    
    modal.addEventListener('click', (e) => {
        if(e.target === modal) modal.classList.add('hidden');
    });

    document.getElementById('btn-prev').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendario();
    });

    document.getElementById('btn-next').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendario();
    });

    function mostrarProximasFestividades() {
        const hoy = new Date();
        hoy.setHours(0,0,0,0);

        const proximas = festividades
            .filter(f => {
                const fechaFest = parsearFechaLocal(f.fecha);
                return fechaFest >= hoy;
            })
            .sort((a, b) => parsearFechaLocal(a.fecha) - parsearFechaLocal(b.fecha))
            .slice(0, 6);

        proximasContainer.innerHTML = '';
        
        if(proximas.length === 0) {
            proximasContainer.innerHTML = '<p class="text-sm text-emerald-400 italic">No hay más festividades registradas en el año.</p>';
            return;
        }

        proximas.forEach(fest => {
            const div = document.createElement('div');
            div.className = 'festividad-item bg-emerald-950/40 p-4 rounded-2xl cursor-pointer border border-emerald-800/30 hover:border-amber-500/30';
            const fechaObj = parsearFechaLocal(fest.fecha);
            div.innerHTML = `
                <p class="font-semibold text-amber-100">${fest.nombre}</p>
                <p class="text-sm text-emerald-300 capitalize">${fechaObj.toLocaleDateString('es-ES', { month: 'long', day: 'numeric' })}</p>
            `;
            div.addEventListener('click', () => mostrarModal([fest], fest.fecha));
            proximasContainer.appendChild(div);
        });
        if(typeof gsap!=='undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
            gsap.from(proximasContainer.children, { opacity:0, x:10, duration:0.4, stagger:0.06, ease:'power2.out', overwrite:true });
        }
    }

    // go todo
    actualizarFechaActual();
    renderCarrusel();
    renderCalendario();
    mostrarProximasFestividades();
})


document.addEventListener("DOMContentLoaded", () => {
    const btnCas = document.getElementById("btn-info-cas");
    const modalCas = document.getElementById("modal-cas");
    const closeCas = document.getElementById("close-modal-cas");

    if (btnCas && modalCas && closeCas) {
        btnCas.addEventListener("click", () => {
            modalCas.style.display = "block";
            document.body.style.overflow = "hidden";
        });

        closeCas.addEventListener("click", () => {
            modalCas.style.display = "none";
            document.body.style.overflow = "auto";
        });

        window.addEventListener("click", (event) => {
            if (event.target === modalCas) {
                modalCas.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
    }
});
