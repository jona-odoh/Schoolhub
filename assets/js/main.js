/* ===========================================
   SCHOOLHUB - ADVANCED SaaS SCHOOL MANAGEMENT SYSTEM
   Main JavaScript File
   =========================================== */

(function() {
    'use strict';

    // ========================================
    // THEME MANAGEMENT (Light/Dark Mode)
    // ========================================
    const themeToggle = {
        init: function() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', savedTheme);
            
            const toggleBtn = document.getElementById('themeToggle');
            if (toggleBtn) {
                this.updateIcon(savedTheme);
                toggleBtn.addEventListener('click', () => this.toggle());
            }
        },
        
        toggle: function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            this.updateIcon(newTheme);
        },
        
        updateIcon: function(theme) {
            const icon = document.querySelector('#themeToggle i');
            if (icon) {
                icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
            }
        }
    };

    // ========================================
    // SIDEBAR MANAGEMENT
    // ========================================
    const sidebar = {
        init: function() {
            const toggleBtn = document.getElementById('sidebarToggle');
            const sidebarEl = document.querySelector('.sidebar');
            const mainContent = document.querySelector('.main-content');
            
            if (toggleBtn && sidebarEl) {
                toggleBtn.addEventListener('click', () => {
                    sidebarEl.classList.toggle('collapsed');
                    if (mainContent) {
                        mainContent.classList.toggle('expanded');
                    }
                });
            }

            // Mobile menu toggle
            const mobileToggle = document.getElementById('mobileMenuToggle');
            if (mobileToggle && sidebarEl) {
                mobileToggle.addEventListener('click', () => {
                    sidebarEl.classList.toggle('mobile-show');
                });
            }

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (sidebarEl && window.innerWidth <= 768) {
                    if (!sidebarEl.contains(e.target) && !e.target.closest('#mobileMenuToggle')) {
                        sidebarEl.classList.remove('mobile-show');
                    }
                }
            });

            // Active menu highlighting
            this.highlightActiveMenu();
        },

        highlightActiveMenu: function() {
            const currentPath = window.location.pathname;
            const menuLinks = document.querySelectorAll('.sidebar-menu a');
            
            menuLinks.forEach(link => {
                if (link.getAttribute('href') === currentPath || 
                    currentPath.includes(link.getAttribute('href'))) {
                    link.classList.add('active');
                }
            });
        }
    };

    // ========================================
    // DROPDOWN MANAGEMENT
    // ========================================
    const dropdown = {
        init: function() {
            const dropdowns = document.querySelectorAll('.dropdown-custom');
            
            dropdowns.forEach(dropdown => {
                const trigger = dropdown.querySelector('[data-toggle="dropdown"]');
                const menu = dropdown.querySelector('.dropdown-menu-custom');
                
                if (trigger && menu) {
                    trigger.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.closeAll();
                        menu.classList.toggle('show');
                    });
                }
            });

            // Close dropdowns when clicking outside
            document.addEventListener('click', () => this.closeAll());
        },

        closeAll: function() {
            document.querySelectorAll('.dropdown-menu-custom').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    };

    // ========================================
    // MODAL MANAGEMENT
    // ========================================
    const modal = {
        init: function() {
            // Open modal triggers
            document.querySelectorAll('[data-toggle="modal"]').forEach(trigger => {
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = trigger.getAttribute('data-target');
                    this.open(targetId);
                });
            });

            // Close modal triggers
            document.querySelectorAll('[data-dismiss="modal"]').forEach(closeBtn => {
                closeBtn.addEventListener('click', () => {
                    const modal = closeBtn.closest('.modal-custom');
                    if (modal) this.close(modal.id);
                });
            });

            // Close modal on overlay click
            document.querySelectorAll('.modal-custom').forEach(modalEl => {
                modalEl.addEventListener('click', (e) => {
                    if (e.target === modalEl) {
                        this.close(modalEl.id);
                    }
                });
            });

            // Close on ESC key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeAll();
                }
            });
        },

        open: function(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        },

        close: function(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        },

        closeAll: function() {
            document.querySelectorAll('.modal-custom.show').forEach(modal => {
                this.close(modal.id);
            });
        }
    };

    // ========================================
    // NOTIFICATIONS
    // ========================================
    const notification = {
        show: function(message, type = 'info', duration = 3000) {
            const notification = document.createElement('div');
            notification.className = `notification notification-${type} slide-in-up`;
            notification.innerHTML = `
                <div class="notification-content">
                    <i class="fas fa-${this.getIcon(type)}"></i>
                    <span>${message}</span>
                </div>
                <button class="notification-close">&times;</button>
            `;
            
            document.body.appendChild(notification);

            // Close button
            notification.querySelector('.notification-close').addEventListener('click', () => {
                this.remove(notification);
            });

            // Auto remove
            if (duration > 0) {
                setTimeout(() => this.remove(notification), duration);
            }
        },

        remove: function(notification) {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        },

        getIcon: function(type) {
            const icons = {
                success: 'check-circle',
                error: 'exclamation-circle',
                warning: 'exclamation-triangle',
                info: 'info-circle'
            };
            return icons[type] || icons.info;
        }
    };

    // ========================================
    // FORM VALIDATION
    // ========================================
    const formValidation = {
        init: function() {
            const forms = document.querySelectorAll('.needs-validation');
            forms.forEach(form => {
                form.addEventListener('submit', (e) => {
                    if (!form.checkValidity()) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    form.classList.add('was-validated');
                });
            });
        }
    };

    // ========================================
    // SEARCH FUNCTIONALITY
    // ========================================
    const search = {
        init: function() {
            const searchInputs = document.querySelectorAll('[data-search]');
            searchInputs.forEach(input => {
                const targetSelector = input.getAttribute('data-search');
                input.addEventListener('input', (e) => {
                    this.filter(e.target.value, targetSelector);
                });
            });
        },

        filter: function(query, targetSelector) {
            const items = document.querySelectorAll(targetSelector);
            const searchTerm = query.toLowerCase();

            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    };

    // ========================================
    // TOOLTIPS
    // ========================================
    const tooltip = {
        init: function() {
            const tooltips = document.querySelectorAll('[data-tooltip]');
            tooltips.forEach(element => {
                const text = element.getAttribute('data-tooltip');
                const position = element.getAttribute('data-tooltip-position') || 'top';
                
                element.addEventListener('mouseenter', (e) => {
                    this.show(e.target, text, position);
                });

                element.addEventListener('mouseleave', () => {
                    this.hide();
                });
            });
        },

        show: function(target, text, position) {
            const tooltip = document.createElement('div');
            tooltip.className = `tooltip-custom tooltip-${position}`;
            tooltip.textContent = text;
            tooltip.id = 'active-tooltip';
            
            document.body.appendChild(tooltip);

            const rect = target.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();

            let top, left;
            switch(position) {
                case 'top':
                    top = rect.top - tooltipRect.height - 10;
                    left = rect.left + (rect.width - tooltipRect.width) / 2;
                    break;
                case 'bottom':
                    top = rect.bottom + 10;
                    left = rect.left + (rect.width - tooltipRect.width) / 2;
                    break;
                case 'left':
                    top = rect.top + (rect.height - tooltipRect.height) / 2;
                    left = rect.left - tooltipRect.width - 10;
                    break;
                case 'right':
                    top = rect.top + (rect.height - tooltipRect.height) / 2;
                    left = rect.right + 10;
                    break;
            }

            tooltip.style.top = `${top + window.scrollY}px`;
            tooltip.style.left = `${left + window.scrollX}px`;
        },

        hide: function() {
            const tooltip = document.getElementById('active-tooltip');
            if (tooltip) tooltip.remove();
        }
    };

    // ========================================
    // CHART INITIALIZATION (Placeholder for Chart.js)
    // ========================================
    const charts = {
        init: function() {
            // Initialize charts when Chart.js is loaded
            if (typeof Chart !== 'undefined') {
                this.initDashboardCharts();
            }
        },

        initDashboardCharts: function() {
            // Attendance Chart
            const attendanceCtx = document.getElementById('attendanceChart');
            if (attendanceCtx) {
                new Chart(attendanceCtx, {
                    type: 'line',
                    data: {
                        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                        datasets: [{
                            label: 'Attendance Rate',
                            data: [92, 89, 95, 91, 94, 88],
                            borderColor: '#4F46E5',
                            backgroundColor: 'rgba(79, 70, 229, 0.1)',
                            tension: 0.4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        }
                    }
                });
            }

            // Performance Chart
            const performanceCtx = document.getElementById('performanceChart');
            if (performanceCtx) {
                new Chart(performanceCtx, {
                    type: 'bar',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                            label: 'Average Score',
                            data: [75, 78, 82, 79, 85, 88],
                            backgroundColor: '#10B981'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            }

            // Fee Collection Chart
            const feeCtx = document.getElementById('feeChart');
            if (feeCtx) {
                new Chart(feeCtx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Collected', 'Pending', 'Overdue'],
                        datasets: [{
                            data: [65, 25, 10],
                            backgroundColor: ['#10B981', '#F59E0B', '#EF4444']
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            }
        }
    };

    // ========================================
    // DATATABLE INITIALIZATION
    // ========================================
    const datatables = {
        init: function() {
            if (typeof jQuery !== 'undefined' && jQuery.fn.DataTable) {
                $('.data-table').DataTable({
                    responsive: true,
                    pageLength: 10,
                    language: {
                        search: "_INPUT_",
                        searchPlaceholder: "Search..."
                    }
                });
            }
        }
    };

    // ========================================
    // COUNTER ANIMATION
    // ========================================
    const counter = {
        init: function() {
            const counters = document.querySelectorAll('[data-counter]');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animate(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            counters.forEach(counter => observer.observe(counter));
        },

        animate: function(element) {
            const target = parseInt(element.getAttribute('data-counter'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    element.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current).toLocaleString();
                }
            }, 16);
        }
    };

    // ========================================
    // FILE UPLOAD PREVIEW
    // ========================================
    const fileUpload = {
        init: function() {
            const fileInputs = document.querySelectorAll('input[type="file"][data-preview]');
            fileInputs.forEach(input => {
                input.addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    const previewId = input.getAttribute('data-preview');
                    const preview = document.getElementById(previewId);
                    
                    if (file && preview) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            preview.src = e.target.result;
                        };
                        reader.readAsDataURL(file);
                    }
                });
            });
        }
    };

    // ========================================
    // INITIALIZE ALL COMPONENTS
    // ========================================
    document.addEventListener('DOMContentLoaded', function() {
        themeToggle.init();
        sidebar.init();
        dropdown.init();
        modal.init();
        formValidation.init();
        search.init();
        tooltip.init();
        charts.init();
        datatables.init();
        counter.init();
        fileUpload.init();

        // Initialize AOS if available
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true,
                offset: 100
            });
        }
    });

    // ========================================
    // EXPORT FOR GLOBAL ACCESS
    // ========================================
    window.SchoolHub = {
        notification,
        modal,
        dropdown,
        charts
    };

})();
