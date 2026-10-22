/* ============================================================
   navigation.js
   Shared navigation bar for all Naw-Ruz pages.
   Shows Login / Register when logged out, and "Hi, Name" + Logout when logged in.
   ============================================================ */

(function () {

    /* ---------- CSS ---------- */
    var navCSS = `
        :root{
            --primary:#0f172a;
            --primary-light:#1e293b;
            --accent:#f97316;
            --accent-hover:#ea580c;
            --bg:#f8fafc;
            --card:#ffffff;
            --text:#0f172a;
            --text-light:#64748b;
            --font:'Inter',sans-serif;
            --radius:16px;
            --shadow:0 1px 3px rgba(0,0,0,0.04),0 4px 12px rgba(0,0,0,0.04);
            --nav-height:60px;
            --nav-height-desktop:68px;
        }
        .container{width:100%;padding:0 16px;max-width:480px;margin:0 auto}
        @media(min-width:768px){.container{max-width:720px;padding:0 24px}}
        @media(min-width:1024px){.container{max-width:960px;padding:0 32px}}
        @media(min-width:1280px){.container{max-width:1100px}}

        body{padding-top:var(--nav-height)}
        @media(min-width:768px){body{padding-top:var(--nav-height-desktop)}}

        .nav-bar{
            position:fixed;top:0;left:0;right:0;width:100%;z-index:1000;
            background:rgba(255,255,255,0.92);
            -webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);
            border-bottom:1px solid rgba(15,23,42,0.04);
            transition:.3s;
            will-change:transform;
        }
        .nav-bar.nav-scrolled{box-shadow:0 2px 16px rgba(15,23,42,.08)}
        .nav-inner{display:flex;align-items:center;justify-content:space-between;height:60px;padding:0 16px;max-width:1100px;margin:0 auto}
        .nav-left{display:flex;align-items:center;gap:8px;cursor:pointer;flex-shrink:0}
        .logo{height:40px;width:40px;border-radius:8px;object-fit:cover;flex-shrink:0}
        .nav-brand{font-size:.95rem;font-weight:700;color:var(--primary);letter-spacing:-.3px}
        .hamburger{display:flex;flex-direction:column;gap:4px;background:none;border:none;cursor:pointer;padding:6px;z-index:1001}
        .hamburger span{display:block;width:22px;height:2.5px;background:var(--text);border-radius:2px;transition:.3s}
        .hamburger.active span:nth-child(1){transform:translateY(6.5px)rotate(45deg)}
        .hamburger.active span:nth-child(2){opacity:0;transform:scaleX(0)}
        .hamburger.active span:nth-child(3){transform:translateY(-6.5px)rotate(-45deg)}

        .nav-links{
            position:fixed;top:0;right:-100%;width:280px;height:100vh;
            background:rgba(255,255,255,0.98);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);
            padding:80px 28px 28px;list-style:none;
            transition:right .35s cubic-bezier(.16,1,.3,1);
            box-shadow:-10px 0 40px rgba(0,0,0,.06);
            overflow-y:auto;
            z-index:1000;
        }
        .nav-links.open{right:0}
        .nav-links li a{
            display:flex;align-items:center;gap:10px;
            padding:14px 0;border-bottom:1px solid rgba(15,23,42,.04);
            text-decoration:none;color:var(--text);font-size:.9rem;font-weight:500;
            transition:color .25s;cursor:pointer
        }
        .nav-links li a:hover{color:var(--accent)}
        .nav-links li a i{width:20px;text-align:center;font-size:.85rem;color:var(--text-light)}
        .nav-cta-mobile{
            display:flex;align-items:center;justify-content:center;gap:8px;
            margin-top:20px;padding:14px;border-radius:12px;
            background:var(--accent);color:#fff !important;font-weight:600;font-size:.9rem;
            text-decoration:none;border:none !important;transition:.3s
        }
        .nav-cta-mobile:hover{background:var(--accent-hover)}
        .nav-overlay{position:fixed;inset:0;background:rgba(15,23,42,.3);z-index:999;opacity:0;visibility:hidden;transition:.3s}
        .nav-overlay.show{opacity:1;visibility:visible}

        /* Auth area */
        .nav-auth-desktop{display:none;align-items:center}
        .auth-btn{
            display:inline-flex;align-items:center;gap:6px;
            padding:9px 18px;border-radius:50px;
            background:var(--accent);color:#fff;font-weight:600;font-size:.8rem;
            text-decoration:none;white-space:nowrap;transition:.3s
        }
        .auth-btn:hover{background:var(--accent-hover)}
        .auth-user{display:inline-flex;align-items:center;gap:8px;font-size:.8rem;font-weight:600;color:var(--text);white-space:nowrap}
        .auth-user i{color:var(--accent);font-size:1rem}
        .auth-user button{
            background:none;border:1px solid rgba(15,23,42,.12);border-radius:50px;
            padding:6px 12px;font-size:.75rem;cursor:pointer;font-family:var(--font);color:var(--text-light)
        }
        .auth-user button:hover{border-color:var(--accent);color:var(--accent)}

        @media(min-width:768px){
            .hamburger,.nav-overlay,.nav-cta-mobile,.nav-auth-mobile{display:none !important}
            .nav-inner{padding:0 24px;height:68px}
            .nav-links{
                position:static;width:auto;height:auto;background:transparent;
                -webkit-backdrop-filter:none;backdrop-filter:none;
                padding:0;box-shadow:none;overflow:visible;
                display:flex;align-items:center;gap:4px
            }
            .nav-links li a{border-bottom:none;padding:8px 14px;font-size:.85rem;border-radius:8px}
            .nav-links li a i{display:none}
            .nav-links li a:hover{background:rgba(15,23,42,.04);color:var(--primary)}
            .nav-auth-desktop{display:flex;margin-left:12px}
        }
    `;

    /* ---------- HTML ---------- */
    var navHTML = `
        <div class="nav-bar" id="navbar">
            <div class="nav-inner">
                <div class="nav-left" onclick="window.location.href='index.html'">
                    <img src="logo.jpg" alt="Naw-Ruz" class="logo">
                    <span class="nav-brand">Naw-Ruz Foundation</span>
                </div>

                <button class="hamburger" id="hamburger" aria-label="Menu">
                    <span></span><span></span><span></span>
                </button>

                <div class="nav-overlay" id="navOverlay"></div>

                <ul class="nav-links" id="navLinks">
                    <li><a href="index.html" onclick="loadPage('index');return true"><i class="fas fa-home"></i> Home</a></li>
                    <li><a href="about.html" onclick="loadPage('about');return true"><i class="fas fa-info-circle"></i> About Us</a></li>
                    <li><a href="ourofferings.html" onclick="loadPage('displaycourse');return true"><i class="fas fa-book"></i> Our Offerings</a></li>
                    <li><a href="appelforsupport.html" onclick="loadPage('community');return true"><i class="fas fa-hand-holding-heart"></i> Appeal for Support</a></li>
                    <li><a href="contacts.html" onclick="loadPage('contactus');return true"><i class="fas fa-envelope"></i> Contact Us</a></li>
                    <li class="nav-auth-mobile" id="authMobile"></li>
                    <li><a href="enquire.html" class="nav-cta-mobile">Get Started Free <i class="fas fa-arrow-right"></i></a></li>
                </ul>

                <div class="nav-auth-desktop" id="authDesktop"></div>
            </div>
        </div>
    `;

    /* ---------- Inject CSS ---------- */
    var styleTag = document.createElement('style');
    styleTag.setAttribute('data-injected', 'navigation.js');
    styleTag.textContent = navCSS;
    document.head.appendChild(styleTag);

    /* ---------- Inject HTML ---------- */
    function injectNav() {
        var mount = document.getElementById('navbar-placeholder');
        if (!mount) {
            mount = document.createElement('div');
            document.body.insertBefore(mount, document.body.firstChild);
        }
        mount.innerHTML = navHTML;
        bindNavEvents();
        bindScrollShadow();
        loadUser();
    }

    /* ---------- Hamburger / overlay ---------- */
    function bindNavEvents() {
        var hamburger = document.getElementById('hamburger');
        var navLinks = document.getElementById('navLinks');
        var overlay = document.getElementById('navOverlay');
        if (!hamburger || !navLinks || !overlay) return;

        function closeNav() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            overlay.classList.remove('show');
            document.body.style.overflow = '';
        }

        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
            overlay.classList.toggle('show');
            document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
        });

        overlay.addEventListener('click', closeNav);

        // Delegated, so links added later (login/logout) also close the menu
        navLinks.addEventListener('click', function (e) {
            if (e.target.closest('a')) closeNav();
        });
    }

    /* ---------- Shadow once scrolled ---------- */
    function bindScrollShadow() {
        var navbar = document.getElementById('navbar');
        if (!navbar) return;

        function onScroll() {
            if (window.scrollY > 4) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ---------- Login state ---------- */
    var AUTH_API = 'http://localhost:8080/api/auth';
    var TOKEN_KEY = 'nawruz_token';

    function esc(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function renderAuth(user) {
        var desk = document.getElementById('authDesktop');
        var mob = document.getElementById('authMobile');
        if (!desk || !mob) return;

        if (user) {
            var first = esc(user.fullName.split(' ')[0]);
            desk.innerHTML =
                '<span class="auth-user"><i class="fas fa-user-circle"></i> Hi, ' + first +
                ' <button type="button" data-logout>Logout</button></span>';
            mob.innerHTML =
                '<a href="#" data-logout><i class="fas fa-sign-out-alt"></i> Logout (' + first + ')</a>';
        } else {
            desk.innerHTML =
                '<a href="login.html" class="auth-btn"><i class="fas fa-user"></i> Login / Register</a>';
            mob.innerHTML =
                '<a href="login.html"><i class="fas fa-user"></i> Login / Register</a>';
        }

        document.querySelectorAll('[data-logout]').forEach(function (el) {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                logout();
            });
        });
    }

    function loadUser() {
        var token = localStorage.getItem(TOKEN_KEY);
        if (!token) {
            renderAuth(null);
            return;
        }
        fetch(AUTH_API + '/me', { headers: { Authorization: 'Bearer ' + token } })
            .then(function (res) {
                if (res.status === 401) {
                    localStorage.removeItem(TOKEN_KEY);
                    renderAuth(null);
                    return null;
                }
                return res.json().then(renderAuth);
            })
            .catch(function () {
                // Backend offline: show logged-out state but keep the token
                renderAuth(null);
            });
    }

    function logout() {
        var token = localStorage.getItem(TOKEN_KEY);
        fetch(AUTH_API + '/logout', {
            method: 'POST',
            headers: { Authorization: 'Bearer ' + token }
        }).finally(function () {
            localStorage.removeItem(TOKEN_KEY);
            window.location.reload();
        });
    }
    /* ---------- Helpers for pages with forms ---------- */
    window.NawAuth = {
        authHeaders: function () {
            var h = { 'Content-Type': 'application/json' };
            var t = localStorage.getItem(TOKEN_KEY);
            if (t) h['Authorization'] = 'Bearer ' + t;
            return h;
        },
        guardForm: function (formId) {
            var form = document.getElementById(formId);
            if (!form || localStorage.getItem(TOKEN_KEY)) return;

            form.querySelectorAll('button[type="submit"]').forEach(function (b) {
                b.disabled = true;
                b.style.opacity = '.5';
                b.style.cursor = 'not-allowed';
            });

            var page = window.location.pathname.split('/').pop() || 'index.html';
            var notice = document.createElement('div');
            notice.style.cssText = 'background:#fff7ed;border:1px solid #fdba74;color:#9a3412;' +
                'border-radius:12px;padding:14px;margin-bottom:16px;font-size:.85rem;text-align:center';
            notice.innerHTML = 'Please <a href="login.html?next=' + encodeURIComponent(page) +
                '" style="color:#ea580c;font-weight:700">login or register</a> to submit this form.';
            form.parentNode.insertBefore(notice, form);
        }
    };
    /* ---------- Run ---------- */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectNav);
    } else {
        injectNav();
    }

})();