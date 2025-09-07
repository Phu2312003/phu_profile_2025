/**
 * Animations Module - Luong Duc Phu Portfolio
 * Handles all animation-related functionality
 */

/**
 * Typing Animation Class
 */
export class TypingAnimation {
    constructor(elementId, texts, options = {}) {
        this.elementId = elementId;
        this.texts = texts;
        this.options = {
            typeSpeed: 100,
            deleteSpeed: 50,
            pauseTime: 2000,
            ...options
        };
        
        this.element = document.getElementById(elementId);
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.isRunning = false;
        this.animationId = null;
        
        if (!this.element) {
            console.warn(`Element with id "${elementId}" not found`);
        }
    }

    /**
     * Start the typing animation
     */
    start() {
        if (!this.element || this.isRunning) return;
        
        this.isRunning = true;
        this.typeText();
    }

    /**
     * Stop the typing animation
     */
    stop() {
        this.isRunning = false;
        if (this.animationId) {
            clearTimeout(this.animationId);
            this.animationId = null;
        }
    }

    /**
     * Pause the typing animation
     */
    pause() {
        this.isRunning = false;
    }

    /**
     * Resume the typing animation
     */
    resume() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.typeText();
        }
    }

    /**
     * Core typing animation logic
     */
    typeText() {
        if (!this.isRunning || !this.element) return;

        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        if (!this.isDeleting && this.charIndex === currentText.length) {
            this.animationId = setTimeout(() => {
                this.isDeleting = true;
                this.typeText();
            }, this.options.pauseTime);
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            this.animationId = setTimeout(() => {
                this.typeText();
            }, this.options.typeSpeed);
        } else {
            const speed = this.isDeleting ? this.options.deleteSpeed : this.options.typeSpeed;
            this.animationId = setTimeout(() => {
                this.typeText();
            }, speed);
        }
    }

    /**
     * Check if animation is running
     */
    isRunning() {
        return this.isRunning;
    }

    /**
     * Update texts
     */
    updateTexts(newTexts) {
        this.texts = newTexts;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
    }
}

/**
 * Particle System Class
 */
export class ParticleSystem {
    constructor(containerId, options = {}) {
        this.containerId = containerId;
        this.options = {
            particleCount: 50,
            particleSize: 4,
            particleColor: 'rgba(255, 215, 0, 0.8)',
            animationDuration: 6000,
            spawnInterval: 300,
            ...options
        };
        
        this.container = document.getElementById(containerId);
        this.particles = [];
        this.isRunning = false;
        this.spawnInterval = null;
        
        if (!this.container) {
            console.warn(`Container with id "${containerId}" not found`);
        }
    }

    /**
     * Start the particle system
     */
    start() {
        if (!this.container || this.isRunning) return;
        
        this.isRunning = true;
        this.spawnInterval = setInterval(() => {
            this.createParticle();
        }, this.options.spawnInterval);
    }

    /**
     * Stop the particle system
     */
    stop() {
        this.isRunning = false;
        if (this.spawnInterval) {
            clearInterval(this.spawnInterval);
            this.spawnInterval = null;
        }
        
        // Remove all particles
        this.particles.forEach(particle => {
            if (particle.element && particle.element.parentNode) {
                particle.element.parentNode.removeChild(particle.element);
            }
        });
        this.particles = [];
    }

    /**
     * Pause the particle system
     */
    pause() {
        this.isRunning = false;
        if (this.spawnInterval) {
            clearInterval(this.spawnInterval);
            this.spawnInterval = null;
        }
    }

    /**
     * Resume the particle system
     */
    resume() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.spawnInterval = setInterval(() => {
                this.createParticle();
            }, this.options.spawnInterval);
        }
    }

    /**
     * Create a new particle
     */
    createParticle() {
        if (!this.isRunning || !this.container) return;

        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Set particle properties
        Object.assign(particle.style, {
            position: 'absolute',
            width: `${this.options.particleSize}px`,
            height: `${this.options.particleSize}px`,
            backgroundColor: this.options.particleColor,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            animationDuration: `${(Math.random() * 3 + 2)}s`,
            animationDelay: `${Math.random() * 2}s`,
            animationName: 'float',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear'
        });

        // Add to container
        this.container.appendChild(particle);
        
        // Store particle reference
        const particleData = {
            element: particle,
            createdAt: Date.now()
        };
        this.particles.push(particleData);

        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
            const index = this.particles.indexOf(particleData);
            if (index > -1) {
                this.particles.splice(index, 1);
            }
        }, this.options.animationDuration);
    }

    /**
     * Check if particle system is running
     */
    isRunning() {
        return this.isRunning;
    }

    /**
     * Update particle count
     */
    updateParticleCount(count) {
        this.options.particleCount = count;
    }
}

/**
 * Scroll Reveal Animation Class
 */
export class ScrollReveal {
    constructor(options = {}) {
        this.options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
            ...options
        };
        
        this.observer = null;
        this.elements = [];
    }

    /**
     * Initialize scroll reveal
     */
    init() {
        this.elements = document.querySelectorAll('.fade-in');
        this.setupIntersectionObserver();
        this.observeElements();
    }

    /**
     * Setup intersection observer
     */
    setupIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    this.observer.unobserve(entry.target);
                }
            });
        }, this.options);
    }

    /**
     * Observe elements
     */
    observeElements() {
        this.elements.forEach(element => {
            this.observer.observe(element);
        });
    }

    /**
     * Reveal elements on scroll (fallback for older browsers)
     */
    revealOnScroll() {
        this.elements.forEach(element => {
            if (element.classList.contains('visible')) return;
            
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    /**
     * Add new elements to observe
     */
    addElements(selector) {
        const newElements = document.querySelectorAll(selector);
        newElements.forEach(element => {
            if (!this.elements.includes(element)) {
                this.elements.push(element);
                if (this.observer) {
                    this.observer.observe(element);
                }
            }
        });
    }

    /**
     * Destroy scroll reveal
     */
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
        this.elements = [];
    }
}

/**
 * Utility function to create custom animations
 */
export function createCustomAnimation(element, keyframes, options = {}) {
    const defaultOptions = {
        duration: 1000,
        easing: 'ease',
        fill: 'forwards'
    };
    
    const animationOptions = { ...defaultOptions, ...options };
    
    return element.animate(keyframes, animationOptions);
}

/**
 * Utility function to stagger animations
 */
export function staggerAnimation(elements, animationFunction, delay = 100) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            animationFunction(element);
        }, index * delay);
    });
}

/**
 * Utility function to create timeline animations
 */
export function createTimeline(animations) {
    let currentTime = 0;
    
    animations.forEach(animation => {
        const { element, keyframes, options = {}, delay = 0 } = animation;
        
        setTimeout(() => {
            element.animate(keyframes, options);
        }, currentTime + delay);
        
        currentTime += (options.duration || 1000) + delay;
    });
}
