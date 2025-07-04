// Main JavaScript functionality for the hacker portfolio
class HackerPortfolio {
    constructor() {
        this.isLoading = true;
        this.currentTheme = 'dark';
        this.typewriterElements = [];
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeLoading();
        this.initializeTypewriter();
        this.initializeScrollAnimations();
        this.initializeNavigation();
        this.initializeThemeToggle();
        this.initializeContactForm();
        this.initializeParallax();
    }

    // Event Listeners Setup
    setupEventListeners() {
        window.addEventListener('load', () => this.handlePageLoad());
        window.addEventListener('scroll', () => this.handleScroll());
        window.addEventListener('resize', () => this.handleResize());
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }

    // Loading Screen
    initializeLoading() {
        const loadingScreen = document.getElementById('loading-screen');
        const progressBar = document.querySelector('.loading-progress');
        
        // Simulate loading progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    loadingScreen.classList.add('hidden');
                    this.isLoading = false;
                    this.startTypewriterAnimations();
                }, 500);
            }
            progressBar.style.width = `${progress}%`;
        }, 200);
    }

    handlePageLoad() {
        // Start animations after page load
        setTimeout(() => {
            this.animateHeroElements();
        }, 100);
    }

    // Typewriter Effect
    initializeTypewriter() {
        this.typewriterElements = document.querySelectorAll('.typewriter');
    }

    startTypewriterAnimations() {
        this.typewriterElements.forEach((element, index) => {
            const delay = element.classList.contains('delayed') ? 2000 : index * 1000;
            setTimeout(() => {
                this.typewriterEffect(element);
            }, delay);
        });
    }

    typewriterEffect(element) {
        const text = element.getAttribute('data-text');
        const speed = 50;
        let i = 0;
        
        element.textContent = '';
        element.style.opacity = '1';
        
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                // Add completed class for styling
                element.classList.add('typewriter-complete');
            }
        }, speed);
    }

    // Scroll Animations
    initializeScrollAnimations() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    
                    // Special animations for specific elements
                    if (entry.target.classList.contains('skill-item')) {
                        this.animateSkillItem(entry.target);
                    }
                    
                    if (entry.target.classList.contains('project-card')) {
                        this.animateProjectCard(entry.target);
                    }
                    
                    if (entry.target.classList.contains('blog-card')) {
                        this.animateBlogCard(entry.target);
                    }
                    
                    if (entry.target.classList.contains('stat-item')) {
                        this.animateStatNumber(entry.target);
                    }
                }
            });
        }, this.observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll(`
            .skill-item, .project-card, .stat-item, .info-card,
            .terminal-output p, .about-content, .blog-card
        `);
        
        animatedElements.forEach(el => this.observer.observe(el));
    }

    animateSkillItem(item) {
        setTimeout(() => {
            item.style.transform = 'translateX(0)';
            item.style.opacity = '1';
        }, Math.random() * 300);
    }

    animateProjectCard(card) {
        card.style.transform = 'translateY(0)';
        card.style.opacity = '1';
    }

    animateBlogCard(card) {
        card.style.transform = 'translateY(0)';
        card.style.opacity = '1';
    }

    animateStatNumber(stat) {
        const numberElement = stat.querySelector('.stat-number');
        const finalValue = numberElement.textContent;
        
        if (finalValue === '∞' || finalValue === '404' || finalValue.includes('%')) {
            // Special animation for these values
            numberElement.style.color = 'var(--accent-green)';
            return;
        }
        
        // Animate counting for numeric values
        let currentValue = 0;
        const increment = Math.ceil(parseInt(finalValue) / 50);
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= parseInt(finalValue)) {
                numberElement.textContent = finalValue;
                clearInterval(timer);
            } else {
                numberElement.textContent = currentValue;
            }
        }, 30);
    }

    // Navigation
    initializeNavigation() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Update active navigation item on scroll
        this.updateActiveNavigation();
    }

    updateActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.id;
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${currentId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(section => observer.observe(section));
    }

    // Theme Toggle (Stealth Mode)
    initializeThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'stealth') {
            this.enableStealthMode();
        }
    }

    toggleTheme() {
        const body = document.body;
        const themeToggle = document.getElementById('theme-toggle');
        
        if (this.currentTheme === 'dark') {
            this.enableStealthMode();
        } else {
            this.disableStealthMode();
        }
    }

    enableStealthMode() {
        document.body.classList.add('stealth-mode');
        this.currentTheme = 'stealth';
        localStorage.setItem('theme', 'stealth');
        
        // Update button text
        const button = document.getElementById('theme-toggle');
        button.innerHTML = '<i class="fas fa-eye"></i><span>Normal Mode</span>';
        
        // Add glitch effect to title
        this.addGlitchEffect();
    }

    disableStealthMode() {
        document.body.classList.remove('stealth-mode');
        this.currentTheme = 'dark';
        localStorage.setItem('theme', 'dark');
        
        // Update button text
        const button = document.getElementById('theme-toggle');
        button.innerHTML = '<i class="fas fa-user-ninja"></i><span>Stealth Mode</span>';
    }

    addGlitchEffect() {
        const title = document.querySelector('.glitch-text h1');
        title.style.animation = 'none';
        setTimeout(() => {
            title.style.animation = 'glitchText 0.5s infinite';
            setTimeout(() => {
                title.style.animation = 'glitchText 3s infinite';
            }, 2000);
        }, 10);
    }

    // Contact Form
    initializeContactForm() {
        const form = document.getElementById('contact-form');
        const response = document.getElementById('form-response');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };

            // Simulate form submission with terminal-like response
            this.showTerminalResponse('Establishing secure connection...');
            
            setTimeout(() => {
                this.showTerminalResponse('Encrypting message payload...');
                
                setTimeout(() => {
                    this.showTerminalResponse('Message transmitted successfully! 🚀 BTW,it does not works!! so use mail', 'success');
                    form.reset();
                }, 1500);
            }, 1000);
        });
    }

    showTerminalResponse(message, type = 'info') {
        const response = document.getElementById('form-response');
        response.innerHTML = `
            <div class="terminal-line">
                <span class="terminal-prompt">root@secure-mail:~$ </span>
                <span>${message}</span>
            </div>
        `;
        
        response.className = `form-response ${type}`;
        response.style.display = 'block';
        
        if (type === 'success') {
            setTimeout(() => {
                response.style.display = 'none';
            }, 5000);
        }
    }

    // Parallax and Scroll Effects
    initializeParallax() {
        this.parallaxElements = document.querySelectorAll('.hero-content, .scroll-indicator');
    }

    handleScroll() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax effect for hero content
        this.parallaxElements.forEach(element => {
            if (element.classList.contains('hero-content')) {
                element.style.transform = `translateY(${rate}px)`;
            }
        });

        // Hide/show navigation based on scroll direction
        this.updateNavigationVisibility(scrolled);
        
        // Update scroll indicator
        this.updateScrollIndicator(scrolled);
    }

    updateNavigationVisibility(scrolled) {
        const navbar = document.querySelector('.navbar');
        
        if (scrolled > this.lastScrollTop && scrolled > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        this.lastScrollTop = scrolled;
    }

    updateScrollIndicator(scrolled) {
        const indicator = document.querySelector('.scroll-indicator');
        if (indicator) {
            indicator.style.opacity = scrolled > 100 ? '0' : '1';
        }
    }

    // Hero Animation
    animateHeroElements() {
        const heroElements = document.querySelectorAll('.hero-content > *');
        
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    // Resize Handler
    handleResize() {
        // Update matrix canvas size if needed
        const canvas = document.getElementById('matrix-canvas');
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }

    // Terminal Commands Easter Eggs
    initializeEasterEggs() {
        let sequence = '';
        const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA';
        
        document.addEventListener('keydown', (e) => {
            sequence += e.code;
            if (sequence.length > konamiCode.length) {
                sequence = sequence.slice(-konamiCode.length);
            }
            
            if (sequence === konamiCode) {
                this.activateMatrixMode();
                sequence = '';
            }
        });
    }

    activateMatrixMode() {
        const canvas = document.getElementById('matrix-canvas');
        canvas.style.opacity = '0.8';
        
        // Show special message
        const message = document.createElement('div');
        message.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: var(--bg-primary);
                color: var(--accent-green);
                padding: 2rem;
                border: 1px solid var(--accent-green);
                border-radius: 8px;
                z-index: 10000;
                text-align: center;
                font-family: var(--font-mono);
            ">
                <h3>🎉 MATRIX MODE ACTIVATED 🎉</h3>
                <p>Welcome to the real world, Neo!</p>
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="
                            background: var(--accent-green);
                            color: var(--bg-primary);
                            border: none;
                            padding: 0.5rem 1rem;
                            margin-top: 1rem;
                            border-radius: 4px;
                            cursor: pointer;
                        ">
                    Take the blue pill
                </button>
            </div>
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            canvas.style.opacity = '0.1';
        }, 10000);
    }

    // Performance optimization
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Initialize everything when DOM is ready
    static initialize() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                new HackerPortfolio();
            });
        } else {
            new HackerPortfolio();
        }
    }
}

// Initialize the portfolio
HackerPortfolio.initialize();

// Additional utility functions
function addConsoleMessage() {
    console.log(`
    ╔══════════════════════════════════════════════════════════════╗
    ║                                                              ║
    ║  🚀 Welcome to Raman Dubey's Digital Lair!                  ║
    ║                                                              ║
    ║  👨‍💻 Cybersecurity Student & Pentester-in-Training           ║
    ║  📍 Greater Noida, IN                                        ║
    ║  🎯 Breaking stuff daily (ethically!)                        ║
    ║                                                              ║
    ║  🔧 Fun commands to try:                                     ║
    ║     - Ctrl+K: Toggle Stealth Mode                           ║
    ║     - Konami Code: Matrix Mode                              ║
    ║                                                              ║
    ║  📫 Contact: raman@example.com                               ║
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════╝
    `);
}

// Add console message when page loads
addConsoleMessage();

// Prevent right-click context menu for a more authentic terminal feel
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    
    // Show custom context menu styled like terminal
    const contextMenu = document.createElement('div');
    contextMenu.innerHTML = `
        <div style="
            position: fixed;
            left: ${e.pageX}px;
            top: ${e.pageY}px;
            background: var(--bg-primary);
            color: var(--accent-green);
            border: 1px solid var(--accent-green);
            padding: 0.5rem;
            font-family: var(--font-mono);
            font-size: 0.8rem;
            z-index: 10000;
            border-radius: 4px;
        ">
            <div>root@raman:~$ access_denied</div>
            <div style="color: var(--accent-red);">[!] Unauthorized access attempt detected</div>
        </div>
    `;
    
    document.body.appendChild(contextMenu);
    
    setTimeout(() => {
        contextMenu.remove();
    }, 2000);
});

// Service Worker registration for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Note: Service Worker file would need to be created separately
        // navigator.serviceWorker.register('/sw.js');
    });
}

// Performance monitoring
window.addEventListener('load', () => {
    setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData.loadEventEnd - perfData.loadEventStart > 3000) {
            console.warn('🐌 Slow loading detected. Consider optimizing assets.');
        } else {
            console.log('🚀 Page loaded successfully in', Math.round(perfData.loadEventEnd - perfData.loadEventStart), 'ms');
        }
    }, 0);
});
