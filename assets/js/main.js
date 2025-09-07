/**
 * Main JavaScript File - Luong Duc Phu Portfolio
 * Handles initialization and main functionality
 */

// Import modules
import { TypingAnimation, ParticleSystem, ScrollReveal } from './animations.js';

/**
 * Main Application Class
 */
class PortfolioApp {
    constructor() {
        this.typingAnimation = null;
        this.particleSystem = null;
        this.scrollReveal = null;
        
        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        this.initTypingAnimation();
        this.initParticleSystem();
        this.initScrollReveal();
        this.initEventListeners();
        this.initFormHandlers();
        this.initButtonHandlers();
    }

    /**
     * Initialize typing animation
     */
    initTypingAnimation() {
        const texts = [
            "Front-End Developer",
            "ReactJS Developer", 
            "UI/UX",
            "Problem Solver"
        ];
        
        this.typingAnimation = new TypingAnimation('typingText', texts);
        this.typingAnimation.start();
    }

    /**
     * Initialize particle system
     */
    initParticleSystem() {
        this.particleSystem = new ParticleSystem('particles');
        this.particleSystem.start();
    }

    /**
     * Initialize scroll reveal animations
     */
    initScrollReveal() {
        this.scrollReveal = new ScrollReveal();
        this.scrollReveal.init();
    }


    /**
     * Initialize event listeners
     */
    initEventListeners() {
        // Scroll event for animations
        window.addEventListener('scroll', () => {
            this.scrollReveal.revealOnScroll();
        });

        // Resize event for responsive adjustments
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Page visibility change
        document.addEventListener('visibilitychange', () => {
            this.handleVisibilityChange();
        });
    }

    /**
     * Initialize form handlers
     */
    initFormHandlers() {
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', this.handleFormSubmit.bind(this));
        }
    }

    /**
     * Initialize button handlers
     */
    initButtonHandlers() {
        document.addEventListener('click', (e) => {
            if (e.target.textContent.includes('View CV')) {
                this.handleCVDownload();
            }
            if (e.target.textContent.includes('Contact')) {
                this.smoothScrollTo('#contact');
            }
        });
    }


    /**
     * Handle form submission
     */
    handleFormSubmit(e) {
        e.preventDefault();
        this.showNotification('Thank you for contacting me! This is a demo form so messages are not actually sent.', 'info');
    }

    /**
     * Handle CV download
     */
    handleCVDownload() {
        this.showNotification('CV will be downloaded! (Demo)', 'info');
    }

    /**
     * Smooth scroll to element
     */
    smoothScrollTo(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    /**
     * Handle window resize
     */
    handleResize() {
        // Recalculate animations on resize
        if (this.scrollReveal) {
            this.scrollReveal.revealOnScroll();
        }
    }

    /**
     * Handle visibility change
     */
    handleVisibilityChange() {
        if (document.hidden) {
            // Pause animations when tab is not visible
            if (this.typingAnimation) {
                this.typingAnimation.pause();
            }
            if (this.particleSystem) {
                this.particleSystem.pause();
            }
        } else {
            // Resume animations when tab becomes visible
            if (this.typingAnimation) {
                this.typingAnimation.resume();
            }
            if (this.particleSystem) {
                this.particleSystem.resume();
            }
        }
    }

    /**
     * Show notification
     */
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '0.5rem',
            color: '#fff',
            fontWeight: '600',
            zIndex: '9999',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            maxWidth: '300px',
            wordWrap: 'break-word'
        });

        // Set background color based on type
        const colors = {
            info: '#3b82f6',
            success: '#10b981',
            warning: '#f59e0b',
            error: '#ef4444'
        };
        notification.style.backgroundColor = colors[type] || colors.info;

        // Add to DOM
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after delay
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    /**
     * Get application state
     */
    getState() {
        return {
            typingAnimation: this.typingAnimation ? this.typingAnimation.isRunning() : false,
            particleSystem: this.particleSystem ? this.particleSystem.isRunning() : false
        };
    }

    /**
     * Destroy application
     */
    destroy() {
        if (this.typingAnimation) {
            this.typingAnimation.stop();
        }
        if (this.particleSystem) {
            this.particleSystem.stop();
        }
        if (this.scrollReveal) {
            this.scrollReveal.destroy();
        }
    }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new PortfolioApp();
});

// Export for potential external use
export { PortfolioApp };
