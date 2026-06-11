
        // Toggle Mobile Menu
        const menuToggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');
        
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            menuToggle.textContent = menu.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when clicking a link
        document.querySelectorAll('#menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                menuToggle.textContent = '☰';
            });
        });

        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.transparent-header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // --- LAZY LOADING FOR IFRAMES ---
        document.addEventListener("DOMContentLoaded", function() {
            const lazyIframes = document.querySelectorAll(".lazy-iframe");

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
                }, {
                    rootMargin: "0px 0px 200px 0px" // Load 200px before they appear
                });

                lazyIframes.forEach(function(iframe) {
                    iframeObserver.observe(iframe);
                });
            } else {
                // Fallback for older browsers
                lazyIframes.forEach(function(iframe) {
                    iframe.src = iframe.dataset.src;
                });
            }
        });
  