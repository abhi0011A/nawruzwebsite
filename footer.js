/* ============================================================
   footer.js
   Shared footer for all Naw-Ruz pages.
   Usage: add a placeholder near the end of <body> on every page:

       <div id="footer-placeholder"></div>
       <script src="footer.js"></script>

   Editing the CSS/HTML below updates the footer on every page
   that includes this file.
   ============================================================ */

(function () {

    /* ---------- CSS ---------- */
    var footerCSS = `
        footer{background:var(--primary);color:rgba(255,255,255,.7);padding:40px 0 20px}
        .footer-grid{display:flex;flex-direction:column;gap:28px}
        @media(min-width:768px){.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:32px}}
        .footer-brand h3{font-size:1rem;font-weight:700;color:#fff;margin-bottom:8px}
        .footer-brand p{font-size:.82rem;line-height:1.7;max-width:280px}
        .footer-social{display:flex;gap:10px;margin-top:14px}
        .footer-social a{
            width:34px;height:34px;border-radius:50%;
            border:1px solid rgba(255,255,255,.08);
            display:flex;align-items:center;justify-content:center;
            color:rgba(255,255,255,.4);text-decoration:none;transition:.3s;font-size:.78rem
        }
        .footer-social a:active{background:rgba(249,115,22,.1);border-color:var(--accent);color:var(--accent)}
        .footer-col h4{color:#fff;font-size:.8rem;font-weight:600;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:12px}
        .footer-col ul{list-style:none}
        .footer-col ul li{margin-bottom:8px}
        .footer-col ul li a{color:rgba(255,255,255,.45);text-decoration:none;font-size:.82rem;transition:.3s}
        .footer-col ul li a:active{color:var(--accent)}
        .footer-bottom{text-align:center;padding-top:18px;border-top:1px solid rgba(255,255,255,.04);font-size:.75rem;margin-top:28px}
    `;

    /* ---------- HTML ---------- */
    var footerHTML = `
        <footer>
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <h3>Naw-Ruz Foundation</h3>
                        
                        <div class="footer-social">
                            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="about.html" onclick="loadPage('about');return false">Home</a></li>
                            <li><a href="about.html" onclick="loadPage('about');return false">About Us</a></li>
                            <li><a href="displaycourse.html" onclick="loadPage('displaycourse');return false">Our Offerings</a></li>
                            <li><a href="enquire.html">Contact</a></li>
                        </ul>
                    </div>
                   
                    <div class="footer-col">
                        <h4>Corporate Information</h4>
                        <ul>
                            <li><a href="">Section 8 Company</a></li>
                            <li><a href="">CIN: U85500PN2024NPL230600</a></li>
                            <li><a href="#">Sangli, Maharashtra</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">&copy; 2026 Naw-Ruz Foundation. All rights reserved.</div>
            </div>
        </footer>
    `;

    /* ---------- Inject CSS ---------- */
    var styleTag = document.createElement('style');
    styleTag.setAttribute('data-injected', 'footer.js');
    styleTag.textContent = footerCSS;
    document.head.appendChild(styleTag);

    /* ---------- Inject HTML ---------- */
    function injectFooter() {
        var mount = document.getElementById('footer-placeholder');
        if (!mount) {
            // fallback: append to the end of <body> if no placeholder is found
            mount = document.createElement('div');
            document.body.appendChild(mount);
        }
        mount.innerHTML = footerHTML;
    }

    /* ---------- Run ---------- */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectFooter);
    } else {
        injectFooter();
    }

})();