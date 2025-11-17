/**
 * IdentAgent.me - Common Utilities
 * Version: 1.0 - Alpha-MVP-Omega
 */

/**
 * Show loading spinner
 * @param {HTMLElement} element 
 */
export function showLoading(element) {
    if (!element) return;
    element.innerHTML = '<div class="flex justify-center items-center"><div class="spinner"></div></div>';
}

/**
 * Hide loading spinner
 * @param {HTMLElement} element 
 */
export function hideLoading(element) {
    if (!element) return;
    element.innerHTML = '';
}

/**
 * Show toast notification
 * @param {string} message 
 * @param {string} type - success, error, warning, info
 */
export function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg text-white z-50 fade-in`;
    
    const colors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        warning: 'bg-yellow-500',
        info: 'bg-blue-500'
    };
    
    toast.classList.add(colors[type] || colors.info);
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * Format date
 * @param {Date|string} date 
 * @returns {string}
 */
export function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

/**
 * Validate email
 * @param {string} email 
 * @returns {boolean}
 */
export function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Sanitize HTML to prevent XSS
 * @param {string} html 
 * @returns {string}
 */
export function sanitizeHTML(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
}

/**
 * Debounce function
 * @param {Function} func 
 * @param {number} wait 
 * @returns {Function}
 */
export function debounce(func, wait) {
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

/**
 * Get URL parameter
 * @param {string} name 
 * @returns {string|null}
 */
export function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

/**
 * Generate unique ID
 * @returns {string}
 */
export function generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
