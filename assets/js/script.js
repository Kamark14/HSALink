// DOM Elements
        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.getElementById('registerBtn');
        const loginModal = document.getElementById('loginModal');
        const registerModal = document.getElementById('registerModal');
        const thankYouModal = document.getElementById('thankYouModal');
        const closeModalBtns = document.querySelectorAll('.close-modal');
        const switchToRegister = document.getElementById('switchToRegister');
        const switchToLogin = document.getElementById('switchToLogin');
        const closeThankYou = document.getElementById('closeThankYou');
        const newsletterForm = document.getElementById('newsletterForm');
        const contactForm = document.getElementById('contactForm');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const cookieConsent = document.getElementById('cookieConsent');
        const acceptCookies = document.getElementById('acceptCookies');
        const rejectCookies = document.getElementById('rejectCookies');

        // Check if cookies are already accepted
        function checkCookieConsent() {
            const consent = getCookie('cookieConsent');
            if (consent === '') {
                // Show cookie consent after a delay
                setTimeout(() => {
                    cookieConsent.style.display = 'block';
                }, 2000);
            }
        }

        // Get cookie value
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
            return '';
        }

        // Set cookie
        function setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = `expires=${date.toUTCString()}`;
            document.cookie = `${name}=${value}; ${expires}; path=/`;
        }

        // Show modal function
        function showModal(modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        // Hide modal function
        function hideModal(modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Show thank you modal with custom message
        function showThankYou(message) {
            document.getElementById('thankYouMessage').textContent = message;
            showModal(thankYouModal);
        }

        // Event Listeners
        loginBtn.addEventListener('click', () => showModal(loginModal));
        registerBtn.addEventListener('click', () => showModal(registerModal));

        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                hideModal(loginModal);
                hideModal(registerModal);
                hideModal(thankYouModal);
            });
        });

        switchToRegister.addEventListener('click', () => {
            hideModal(loginModal);
            showModal(registerModal);
        });

        switchToLogin.addEventListener('click', () => {
            hideModal(registerModal);
            showModal(loginModal);
        });

        closeThankYou.addEventListener('click', () => hideModal(thankYouModal));

        // Newsletter form submission
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real application, you would send this data to your backend
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            // Save to cookies (for demonstration)
            setCookie('newsletterSubscribed', 'true', 365);
            setCookie('userEmail', email, 365);
            
            // Show thank you message
            showThankYou('Obrigado por se inscrever em nossa newsletter! Você receberá nossas atualizações em breve.');
            
            // Reset form
            newsletterForm.reset();
        });

        // Contact form submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real application, you would send this data to your backend
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Save to cookies (for demonstration)
            setCookie('contactFormSubmitted', 'true', 30);
            
            // Show thank you message
            showThankYou('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
            
            // Reset form
            contactForm.reset();
        });

        // Login form submission
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real application, you would send this data to your backend
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Save to cookies (for demonstration)
            setCookie('userLoggedIn', 'true', 1);
            setCookie('userEmail', email, 1);
            
            // Show thank you message
            showThankYou('Login realizado com sucesso! Redirecionando...');
            
            // In a real application, you would redirect to the dashboard
            setTimeout(() => {
                hideModal(loginModal);
            }, 2000);
        });

        // Register form submission
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real application, you would send this data to your backend
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            
            // Save to cookies (for demonstration)
            setCookie('userRegistered', 'true', 365);
            setCookie('userEmail', email, 365);
            setCookie('userName', name, 365);
            
            // Show thank you message
            showThankYou('Conta criada com sucesso! Verifique seu e-mail para ativar sua conta.');
            
            // Reset form and switch to login
            setTimeout(() => {
                hideModal(registerModal);
                registerForm.reset();
            }, 2000);
        });

        // Cookie consent
        acceptCookies.addEventListener('click', () => {
            setCookie('cookieConsent', 'accepted', 365);
            cookieConsent.style.display = 'none';
        });

        rejectCookies.addEventListener('click', () => {
            setCookie('cookieConsent', 'rejected', 30);
            cookieConsent.style.display = 'none';
        });

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === loginModal) hideModal(loginModal);
            if (e.target === registerModal) hideModal(registerModal);
            if (e.target === thankYouModal) hideModal(thankYouModal);
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Mobile menu toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        const navButtons = document.querySelector('.nav-buttons');

        mobileMenu.addEventListener('click', () => {
            const isVisible = navLinks.style.display === 'flex';
            
            if (isVisible) {
                navLinks.style.display = 'none';
                navButtons.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navButtons.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navButtons.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'var(--branco)';
                navLinks.style.padding = '1rem';
                navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
                
                navButtons.style.position = 'absolute';
                navButtons.style.top = 'calc(100% + 180px)';
                navButtons.style.left = '0';
                navButtons.style.width = '100%';
                navButtons.style.backgroundColor = 'var(--branco)';
                navButtons.style.padding = '1rem';
                navButtons.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
                
                // Adjust li margins for mobile
                document.querySelectorAll('.nav-links li').forEach(li => {
                    li.style.margin = '0.5rem 0';
                });
            }
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            checkCookieConsent();
        });