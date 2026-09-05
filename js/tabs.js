document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');

    const reflowCalendario = () => {
        if (typeof renderCalendario === 'function') renderCalendario();
    };

    function activarTab(tabName) {
        tabBtns.forEach(btn => {
            const isActive = btn.dataset.tab === tabName;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        panels.forEach(panel => {
            if (panel.id === tabName) {
                panel.classList.remove('hidden');
                if (tabName === 'panel-calendario') reflowCalendario();
            } else {
                panel.classList.add('hidden');
            }
        });

        try {
            window.scrollTo({ top: document.getElementById('tab-nav').offsetTop - 10, behavior: 'smooth' });
        } catch (e) {}
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => activarTab(btn.dataset.tab));
    });

    const guardado = sessionStorage.getItem('lamud-tab-activo');
    activarTab(guardado && document.getElementById(guardado) ? guardado : 'panel-calendario');

    window.addEventListener('beforeunload', () => {
        const activo = document.querySelector('.tab-btn.active');
        if (activo) sessionStorage.setItem('lamud-tab-activo', activo.dataset.tab);
    });
});