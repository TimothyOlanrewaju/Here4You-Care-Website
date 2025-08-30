        const whatsappFloat = document.getElementById('whatsappFloat');
        const chatDialog = document.getElementById('chatDialog');
        const closeBtn = document.getElementById('closeBtn');
        const openChatBtn = document.getElementById('openChatBtn');
        const overlay = document.getElementById('overlay');

        document.getElementById('year').textContent = new Date().getFullYear();
       function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Update navbar active state
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Form submission handlers
        document.getElementById('signup-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const form = e.target;
            const submitBtn = form.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('.btn-text');
            const spinner = submitBtn.querySelector('.spinner-border');
            const messagesDiv = document.getElementById('form-messages');
            
            // Show loading state
            btnText.textContent = 'Submitting...';
            spinner.style.display = 'inline-block';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual Formspree endpoint)
            const formData = new FormData(form);
            
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    messagesDiv.innerHTML = `
                        <div class="alert alert-success" role="alert">
                            <i class="fas fa-check-circle me-2"></i>
                            Thank you! Your application has been submitted successfully. We'll contact you within 24 hours.
                        </div>
                    `;
                    form.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                messagesDiv.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        <i class="fas fa-exclamation-triangle me-2"></i>
                        There was an error submitting your application. Please try again or call us directly.
                    </div>
                `;
            })
            .finally(() => {
                // Reset button state
                btnText.textContent = 'Submit Application';
                spinner.style.display = 'none';
                submitBtn.disabled = false;
            });
        });

        // Contact form handler
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const form = e.target;
            const submitBtn = form.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('.btn-text');
            const spinner = submitBtn.querySelector('.spinner-border');
            const messagesDiv = document.getElementById('contact-form-messages');
            
            // Show loading state
            btnText.textContent = 'Sending...';
            spinner.style.display = 'inline-block';
            submitBtn.disabled = true;
            
            // Simulate form submission
            const formData = new FormData(form);
            
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    messagesDiv.innerHTML = `
                        <div class="alert alert-success" role="alert">
                            <i class="fas fa-check-circle me-2"></i>
                            Thank you for your message! We'll get back to you within 24 hours.
                        </div>
                    `;
                    form.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                messagesDiv.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        <i class="fas fa-exclamation-triangle me-2"></i>
                        There was an error sending your message. Please try again or call us directly.
                    </div>
                `;
            })
            .finally(() => {
                // Reset button state
                btnText.textContent = 'Send Message';
                spinner.style.display = 'none';
                submitBtn.disabled = false;
            });
        });

        // Footer link handlers
        function showPrivacyPolicy() {
            alert('Privacy Policy\n\nCareConnect is committed to protecting your privacy. We collect personal information only as necessary to provide our services and will never share your information without your consent. For full details, please contact us.');
        }

        function showTermsOfService() {
            alert('Terms of Service\n\nBy using our services, you agree to our terms and conditions. Please contact us for complete terms and conditions documentation.');
        }

        function showHipaaCompliance() {
            alert('HIPAA Compliance\n\nCareConnect is fully HIPAA compliant. We maintain strict confidentiality of all health information and follow all federal privacy regulations.');
        }

        function showLicensingInfo() {
            alert('Licensing Information\n\nCareConnect is licensed by the Nigerian Ministry of Health and all applicable state agencies. License numbers available upon request.');
        }

        function showComplaint() {
            alert('File a Complaint\n\nWe take all concerns seriously. Please contact us at complaints@careconnect.ng or call our complaint hotline for immediate assistance.');
        }

        function showCaregiverJobs() {
            alert('Caregiver Opportunities\n\nJoin our team of compassionate professionals! Contact us at careers@careconnect.ng for current openings.');
        }

        function showTestimonials() {
            alert('Client Testimonials\n\n"CareConnect changed our lives. The care my mother receives is exceptional." - Sarah M.\n\n"Professional, caring, and reliable. Highly recommended!" - John D.');
        }

        // Smooth scrolling for internal navigation
        document.addEventListener('DOMContentLoaded', function() {
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
                form.addEventListener('input', function(e) {
                    if (e.target.checkValidity()) {
                        e.target.classList.remove('is-invalid');
                        e.target.classList.add('is-valid');
                    } else {
                        e.target.classList.remove('is-valid');
                        e.target.classList.add('is-invalid');
                    }
                });
            });

            const counters = document.querySelectorAll(".stat-number");
            const speed = 100; // smaller = faster

            const animateCounter = (counter) => {
                const target = +counter.getAttribute("data-target");
                const suffix = counter.getAttribute("data-suffix") || "";
                const updateCount = () => {
                    const current = +counter.innerText.replace(/\D/g, ""); // strip non-numbers
                    const increment = Math.ceil(target / speed);

                    if (current < target) {
                        counter.innerText = current + increment;
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target + suffix;
                    }
                };
                updateCount();
            };

            // Observer triggers animation when stats section comes into view
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        obs.unobserve(entry.target); // only run once
                    }
                });
            }, { threshold: 0.5 });

            counters.forEach((counter) => observer.observe(counter));
        });

        // Auto-hide alerts after 5 seconds
        function hideAlerts() {
            setTimeout(() => {
                const alerts = document.querySelectorAll('.alert');
                alerts.forEach(alert => {
                    alert.style.opacity = '0';
                    setTimeout(() => alert.remove(), 500);
                });
            }, 5000);
        }

        // Add smooth transitions
        document.addEventListener('DOMContentLoaded', function() {
            const style = document.createElement('style');
            style.textContent = `
                .page-section {
                    opacity: 0;
                    transition: opacity 0.3s ease-in-out;
                }
                .page-section.active {
                    opacity: 1;
                }
            `;
            document.head.appendChild(style);
        });

        // for navbar collapse
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link[onclick*="showPage"]');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    // Small delay to ensure the page change happens first
                    setTimeout(() => {
                        const navbarCollapse = document.querySelector('.navbar-collapse');
                        const navbarToggler = document.querySelector('.navbar-toggler');
                        
                        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                            if (window.bootstrap && bootstrap.Collapse) {
                                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                                    toggle: false
                                });
                                bsCollapse.hide();
                            } else {
                                navbarCollapse.classList.remove('show');
                                if (navbarToggler) {
                                    navbarToggler.classList.add('collapsed');
                                    navbarToggler.setAttribute('aria-expanded', 'false');
                                }
                            }
                        }
                    }, 50);
                });
            });
        });
        // Whatsapp

        const whatsappNumber = '447377113663'; 
        
        const message = 'Hello, I would like to know more about your care services.';

        // Toggle chat dialog
        function toggleChat() {
            const isActive = chatDialog.classList.contains('active');
            
            if (isActive) {
                closeChat();
            } else {
                openChat();
            }
        }

        function openChat() {
            chatDialog.classList.add('active');
            overlay.classList.add('active');
            whatsappFloat.classList.remove('pulse');
        }

        function closeChat() {
            chatDialog.classList.remove('active');
            overlay.classList.remove('active');
            // Resume pulse animation after closing
            setTimeout(() => {
                whatsappFloat.classList.add('pulse');
            }, 3000);
        }

        function openWhatsApp() {
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
            closeChat();
        }

        // Event listeners
        whatsappFloat.addEventListener('click', toggleChat);
        closeBtn.addEventListener('click', closeChat);
        openChatBtn.addEventListener('click', openWhatsApp);
        overlay.addEventListener('click', closeChat);

        // Close dialog when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeChat();
            }
        });

        // Auto-pulse animation
        setInterval(() => {
            if (!chatDialog.classList.contains('active')) {
                whatsappFloat.classList.add('pulse');
                setTimeout(() => {
                    whatsappFloat.classList.remove('pulse');
                }, 2000);
            }
        }, 10000);
