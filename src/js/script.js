/* --- EFEITOS E FUNCIONALIDADES --- */
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. EFEITO DE SCROLL NA NAVBAR
    const header = document.querySelector('.navbar');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 2. MENU MOBILE
    const mobileBtn = document.querySelector('.menu-mobile-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 3. LAZY LOADING PARA IFRAMES
    const lazyIframes = document.querySelectorAll(".lazy-iframe");
    if (lazyIframes.length > 0) {
        if ("IntersectionObserver" in window) {
            const iframeObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const iframe = entry.target;
                        iframe.src = iframe.dataset.src;
                        iframe.classList.remove("lazy-iframe");
                        iframeObserver.unobserve(iframe);
                    }
                });
            }, { rootMargin: "0px 0px 200px 0px" });

            lazyIframes.forEach(function(iframe) {
                iframeObserver.observe(iframe);
            });
        } else {
            lazyIframes.forEach(function(iframe) {
                iframe.src = iframe.dataset.src;
            });
        }
    }
});