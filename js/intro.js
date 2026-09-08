// ============================================================
// intro.js — Pantalla de introducción + todas las animaciones extra
// ============================================================

(function () {
    // ── 1. INTRO SPLASH SCREEN ────────────────────────────────
    var introScreen = document.getElementById('intro-screen');
    var introBar    = document.getElementById('intro-bar');

    if (introScreen) {
        var canvas = document.getElementById('intro-particles');
        if (canvas) {
            var ctx = canvas.getContext('2d');
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
            var pts = [];
            for (var i = 0; i < 90; i++) {
                pts.push({
                    x:     Math.random() * canvas.width,
                    y:     Math.random() * canvas.height,
                    r:     Math.random() * 2 + 0.5,
                    vx:    (Math.random() - 0.5) * 0.6,
                    vy:    (Math.random() - 0.5) * 0.6,
                    a:     Math.random() * 0.6 + 0.2,
                    color: Math.random() > 0.5 ? '#d4af37' : '#10b981'
                });
            }
            var rafIntro;
            function drawIntroParticles() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                for (var p = 0; p < pts.length; p++) {
                    var pt = pts[p];
                    pt.x += pt.vx; pt.y += pt.vy;
                    if (pt.x < 0 || pt.x > canvas.width)  pt.vx *= -1;
                    if (pt.y < 0 || pt.y > canvas.height)  pt.vy *= -1;
                    ctx.beginPath();
                    ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
                    ctx.fillStyle   = pt.color;
                    ctx.globalAlpha = pt.a;
                    ctx.fill();
                    ctx.globalAlpha = 1;
                }
                // connection lines
                ctx.lineWidth = 0.5;
                for (var a = 0; a < pts.length; a++) {
                    for (var b = a + 1; b < pts.length; b++) {
                        var dx = pts[a].x - pts[b].x, dy = pts[a].y - pts[b].y;
                        var d = Math.sqrt(dx*dx + dy*dy);
                        if (d < 130) {
                            ctx.beginPath();
                            ctx.strokeStyle  = '#d4af37';
                            ctx.globalAlpha  = (1 - d / 130) * 0.25;
                            ctx.moveTo(pts[a].x, pts[a].y);
                            ctx.lineTo(pts[b].x, pts[b].y);
                            ctx.stroke();
                            ctx.globalAlpha = 1;
                        }
                    }
                }
                rafIntro = requestAnimationFrame(drawIntroParticles);
            }
            drawIntroParticles();
        }

        // Progress bar animation
        var prog = 0;
        var barInterval = setInterval(function () {
            prog += Math.random() * 4 + 1;
            if (prog >= 100) { prog = 100; clearInterval(barInterval); }
            if (introBar) introBar.style.width = prog + '%';
        }, 35);

        // Dismiss splash after 2.8 s
        setTimeout(function () {
            if (typeof rafIntro !== 'undefined') cancelAnimationFrame(rafIntro);
            introScreen.classList.add('intro-exit');
            setTimeout(function () {
                introScreen.style.display = 'none';
                document.body.classList.add('page-visible');
            }, 850);
        }, 2800);
    } else {
        document.body.classList.add('page-visible');
    }

    // ── Everything below runs after DOM is ready ───────────────
    document.addEventListener('DOMContentLoaded', function () {

        // ── 2. BACKGROUND PARTICLE NETWORK ───────────────────
        var bgCanvas = document.getElementById('bg-particles');
        if (bgCanvas) {
            var bCtx = bgCanvas.getContext('2d');
            var W = window.innerWidth, H = Math.max(document.body.scrollHeight, window.innerHeight);
            bgCanvas.width = W; bgCanvas.height = H;
            var NUM = 60;
            var bgPts = [];
            var colors = ['#d4af37', '#10b981', '#f6e0b5', '#6ee7b7'];
            for (var n = 0; n < NUM; n++) {
                bgPts.push({
                    x:     Math.random() * W,
                    y:     Math.random() * H,
                    r:     Math.random() * 1.6 + 0.3,
                    vx:    (Math.random() - 0.5) * 0.3,
                    vy:    (Math.random() - 0.5) * 0.3,
                    a:     Math.random() * 0.3 + 0.06,
                    color: colors[Math.floor(Math.random() * colors.length)]
                });
            }
            function drawBg() {
                bCtx.clearRect(0, 0, W, H);
                for (var k = 0; k < bgPts.length; k++) {
                    var p = bgPts[k];
                    p.x += p.vx; p.y += p.vy;
                    if (p.x < 0 || p.x > W) p.vx *= -1;
                    if (p.y < 0 || p.y > H) p.vy *= -1;
                    bCtx.beginPath();
                    bCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    bCtx.fillStyle   = p.color;
                    bCtx.globalAlpha = p.a;
                    bCtx.fill();
                    bCtx.globalAlpha = 1;
                }
                bCtx.lineWidth = 0.4;
                for (var ai = 0; ai < bgPts.length; ai++) {
                    for (var bi = ai + 1; bi < bgPts.length; bi++) {
                        var dx = bgPts[ai].x - bgPts[bi].x, dy = bgPts[ai].y - bgPts[bi].y;
                        var dist = Math.sqrt(dx*dx + dy*dy);
                        if (dist < 110) {
                            bCtx.beginPath();
                            bCtx.strokeStyle  = '#d4af37';
                            bCtx.globalAlpha  = (1 - dist / 110) * 0.10;
                            bCtx.moveTo(bgPts[ai].x, bgPts[ai].y);
                            bCtx.lineTo(bgPts[bi].x, bgPts[bi].y);
                            bCtx.stroke();
                            bCtx.globalAlpha = 1;
                        }
                    }
                }
                requestAnimationFrame(drawBg);
            }
            drawBg();
            window.addEventListener('resize', function () {
                W = window.innerWidth; H = Math.max(document.body.scrollHeight, window.innerHeight);
                bgCanvas.width = W; bgCanvas.height = H;
            });
        }

        // ── 3. CUSTOM CURSOR ──────────────────────────────────
        var dot  = document.getElementById('cursor-dot');
        var ring = document.getElementById('cursor-ring');
        var isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

        if (!isTouchDevice && dot && ring) {
            var rx = 0, ry = 0, cx = 0, cy = 0;
            document.addEventListener('mousemove', function (e) {
                cx = e.clientX; cy = e.clientY;
                dot.style.left = cx + 'px';
                dot.style.top  = cy + 'px';
            });
            (function animRing() {
                rx += (cx - rx) * 0.12;
                ry += (cy - ry) * 0.12;
                ring.style.left = rx + 'px';
                ring.style.top  = ry + 'px';
                requestAnimationFrame(animRing);
            })();
            var hoverSel = 'a, button, .podcast-card, .puesto-img-wrapper, .tab-btn, .cal-day, .festividad-item';
            document.querySelectorAll(hoverSel).forEach(function (el) {
                el.addEventListener('mouseenter', function () {
                    dot.classList.add('cursor-hover');
                    ring.classList.add('cursor-hover');
                });
                el.addEventListener('mouseleave', function () {
                    dot.classList.remove('cursor-hover');
                    ring.classList.remove('cursor-hover');
                });
            });
        }

        // ── 4. MAGNETIC BUTTONS ───────────────────────────────
        document.querySelectorAll('.magnetic').forEach(function (btn) {
            btn.addEventListener('mousemove', function (e) {
                var rect = btn.getBoundingClientRect();
                var x = e.clientX - rect.left - rect.width / 2;
                var y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = 'translate(' + (x * 0.25) + 'px, ' + (y * 0.25) + 'px)';
            });
            btn.addEventListener('mouseleave', function () {
                btn.style.transform = '';
            });
        });

        // ── 5. SCROLL REVEAL ──────────────────────────────────
        var revealEls = document.querySelectorAll('.reveal-on-scroll');
        var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if ('IntersectionObserver' in window && !reduceMotion) {
            var revealObs = new IntersectionObserver(function (entries, obs) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
            revealEls.forEach(function (el) { revealObs.observe(el); });
        } else {
            revealEls.forEach(function (el) { el.classList.add('is-revealed'); });
        }

        // ── 6. HERO PARALLAX ──────────────────────────────────
        var header = document.querySelector('header');
        if (header && !reduceMotion) {
            window.addEventListener('scroll', function () {
                var sy = window.pageYOffset;
                if (sy < 800) header.style.backgroundPositionY = 'calc(0% + ' + (sy * 0.35) + 'px)';
            }, { passive: true });
        }

        // ── 7. FLOATING SHAPES PARALLAX ───────────────────────
        var shapes = document.querySelectorAll('.hero-shape');
        if (shapes.length && !reduceMotion) {
            var factors = [0.15, -0.1, 0.2, -0.08];
            window.addEventListener('scroll', function () {
                var s = window.pageYOffset;
                shapes.forEach(function (shape, i) {
                    shape.style.transform = 'translateY(' + (s * (factors[i] || 0.1)) + 'px)';
                });
            }, { passive: true });
        }

        // ── 8. MOUSE-TRACKING GLOW ON CARDS ──────────────────
        document.querySelectorAll('.podcast-card').forEach(function (card) {
            card.addEventListener('mousemove', function (e) {
                var rect = card.getBoundingClientRect();
                card.style.setProperty('--glow-x', (e.clientX - rect.left) + 'px');
                card.style.setProperty('--glow-y', (e.clientY - rect.top)  + 'px');
            });
        });

        // ── 9. PODCAST EQUALIZER SYNC ─────────────────────────
        document.querySelectorAll('.podcast-audio').forEach(function (audio) {
            var eqId = audio.getAttribute('data-eq');
            var eq   = eqId ? document.getElementById(eqId) : null;
            if (eq) {
                audio.addEventListener('play',  function () {
                    document.querySelectorAll('.equalizer').forEach(function (e) { e.classList.add('paused'); });
                    eq.classList.remove('paused');
                });
                audio.addEventListener('pause', function () { eq.classList.add('paused'); });
                audio.addEventListener('ended', function () { eq.classList.add('paused'); });
            }
        });

        // ── 10. LIGHTBOX PUESTOS ──────────────────────────────
        var puestoModal       = document.getElementById('puesto-modal');
        var puestoModalImg    = document.getElementById('puesto-modal-img');
        var puestoModalCaption= document.getElementById('puesto-modal-caption');
        var cerrarPuestoModal = document.getElementById('cerrar-puesto-modal');

        function abrirLightbox(imgSrc, caption) {
            if (!puestoModal) return;
            puestoModalImg.src = imgSrc;
            puestoModalCaption.textContent = caption || 'Dibujo Concurso "Latidos de Lámud"';
            puestoModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
        function cerrarLightbox() {
            if (!puestoModal) return;
            puestoModal.classList.add('hidden');
            document.body.style.overflow = '';
        }
        document.querySelectorAll('.btn-ver-dibujo').forEach(function (btn) {
            btn.addEventListener('click', function () {
                abrirLightbox(btn.getAttribute('data-img'), btn.getAttribute('data-caption'));
            });
        });
        if (cerrarPuestoModal) cerrarPuestoModal.addEventListener('click', cerrarLightbox);
        if (puestoModal) {
            puestoModal.addEventListener('click', function (e) { if (e.target === puestoModal) cerrarLightbox(); });
        }
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && puestoModal && !puestoModal.classList.contains('hidden')) cerrarLightbox();
        });

        // ── 11. 3D TILT COLLAGE ───────────────────────────────
        var collageMarco = document.querySelector('.collage-marco');
        if (collageMarco && !reduceMotion) {
            collageMarco.addEventListener('mousemove', function (e) {
                var rect = collageMarco.getBoundingClientRect();
                var x = e.clientX - rect.left - rect.width / 2;
                var y = e.clientY - rect.top - rect.height / 2;
                collageMarco.style.transform =
                    'perspective(1000px) rotateX(' + ((y / (rect.height / 2)) * -6) + 'deg) rotateY(' + ((x / (rect.width / 2)) * 6) + 'deg) translateY(-4px)';
            });
            collageMarco.addEventListener('mouseleave', function () {
                collageMarco.style.transform = 'perspective(1000px) rotateX(1.5deg) rotateY(-1deg) translateY(0)';
            });
        }

        // ── 12. SMOOTH SCROLL INDICATOR ───────────────────────
        var scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', function (e) {
                e.preventDefault();
                var tabNav = document.getElementById('tab-nav');
                if (tabNav) tabNav.scrollIntoView({ behavior: 'smooth' });
            });
        }

        // ── 13. RIPPLE ON CLICK ───────────────────────────────
        document.querySelectorAll('.tab-btn, .btn-footer').forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                var ripple = document.createElement('span');
                var rect   = this.getBoundingClientRect();
                ripple.className   = 'ripple-effect';
                ripple.style.left  = (e.clientX - rect.left) + 'px';
                ripple.style.top   = (e.clientY - rect.top)  + 'px';
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                setTimeout(function () { ripple.remove(); }, 700);
            });
        });

        // ── 14. SCROLL PROGRESS BAR ───────────────────────────
        var progressBar = document.getElementById('scroll-progress');
        if (progressBar) {
            window.addEventListener('scroll', function () {
                var scrollTop = document.documentElement.scrollTop;
                var docH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                progressBar.style.width = (scrollTop / docH * 100) + '%';
            }, { passive: true });
        }

        // ── 15. STAGGER ANIMATION FOR PUESTOS CARDS ───────────
        var puestoCards = document.querySelectorAll('#panel-puestos .podcast-card');
        if ('IntersectionObserver' in window) {
            var puestoObs = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        puestoObs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            puestoCards.forEach(function (card) { puestoObs.observe(card); });
        }

    }); // end DOMContentLoaded
})();
