// ============================================================================
// СОВРЕМЕННЫЙ САЙТ-ПОРТФОЛИО - JAVASCRIPT
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация всех компонентов
    initAnimatedBackground();
    initGeometricShapes();
    initParallaxDots();
    initScrollAnimations();
    initPortfolioEffects();
    initPortfolioGallery();
    initSmoothScroll();
    initContactForm();
    
    console.log('🚀 Сайт инициализирован успешно!');
});

// ============================================================================
// АНИМИРОВАННЫЙ ФОН С ЧАСТИЦАМИ
// ============================================================================

function initAnimatedBackground() {
    const bgContainer = document.getElementById('animatedBg');
    const particleCount = 80;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Случайные размеры частиц
        const size = Math.random() * 12 + 6; // от 10px до 30px
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Случайное горизонтальное положение
        particle.style.left = Math.random() * 100 + '%';
        
        // Случайная задержка анимации
        particle.style.animationDelay = Math.random() * 20 + 's';
        
        // Случайная продолжительность
        particle.style.animationDuration = (15 + Math.random() * 15) + 's';
        
        bgContainer.appendChild(particle);
    }
    
    // Интерактивность с мышью - частицы следуют за курсором
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Создаем временную частицу при движении мыши
        if (Math.random() > 0.95) { // 5% шанс создания частицы
            createMouseParticle(mouseX, mouseY);
        }
    });
    
    function createMouseParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'mouse-particle';
        
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background: rgba(52, 152, 219, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: mouseParticleFade 1s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        // Удаляем частицу после анимации
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

function initGeometricShapes() {
    const shapesContainer = document.getElementById('geometricShapes');
    const shapes = ['circle', 'square', 'triangle'];
    const shapeCount = 8;
    
    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        
        shape.className = `shape shape--${shapeType}`;
        
        // Размеры в зависимости от типа фигуры
        if (shapeType === 'circle' || shapeType === 'square') {
            const size = Math.random() * 60 + 40; // от 40px до 100px
            shape.style.width = size + 'px';
            shape.style.height = size + 'px';
        }
        
        // Случайное положение
        shape.style.left = Math.random() * 100 + '%';
        shape.style.top = Math.random() * 100 + '%';
        
        // Случайная задержка анимации
        shape.style.animationDelay = Math.random() * 60 + 's';
        
        shapesContainer.appendChild(shape);
    }
}

// ============================================================================
// ПАРАЛЛАКС ТОЧКИ
// ============================================================================

function initParallaxDots() {
    const dotsContainer = document.getElementById('parallaxDots');
    const dotsCount = 30;
    
    // Создаем точки
    for (let i = 0; i < dotsCount; i++) {
        const dot = document.createElement('div');
        dot.className = 'parallax-dot';
        
        // Случайное расположение
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        
        // Случайная задержка анимации
        dot.style.animationDelay = Math.random() * 8 + 's';
        dot.style.animationDuration = (6 + Math.random() * 4) + 's';
        
        dotsContainer.appendChild(dot);
    }
    
    // Параллакс эффект при скролле
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const dots = document.querySelectorAll('.parallax-dot');
        
        dots.forEach((dot, index) => {
            const speed = 0.3 + (index % 3) * 0.2;
            const yPos = scrolled * speed;
            dot.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}

// ============================================================================
// АНИМАЦИИ ПРИ СКРОЛЛЕ
// ============================================================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                
                // Отключаем наблюдение после анимации
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Наблюдаем за всеми анимируемыми элементами
    const animatedElements = document.querySelectorAll(`
        .animate-fade-zoom,
        .animate-slide-up,
        .animate-slide-left,
        .animate-slide-right,
        .animate-zoom-in,
        .animate-timeline,
        .animate-fade-in
    `);
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ============================================================================
// ЭФФЕКТЫ ДЛЯ КАРТОЧЕК ПОРТФОЛИО
// ============================================================================

function initPortfolioEffects() {
    // Убираем сложные 3D эффекты, оставляем только простое наведение
    console.log('✅ Портфолио эффекты упрощены');
}

// ============================================================================
// ПОЛНОЭКРАННАЯ ГАЛЕРЕЯ ПОРТФОЛИО
// ============================================================================

function initPortfolioGallery() {
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    const galleryModal = document.getElementById('galleryModal');
    const galleryImage = document.getElementById('galleryImage');
    const galleryTitle = document.getElementById('galleryTitle');
    const galleryDescription = document.getElementById('galleryDescription');
    const galleryCurrentIndex = document.getElementById('galleryCurrentIndex');
    const galleryTotalCount = document.getElementById('galleryTotalCount');
    const galleryClose = document.getElementById('galleryClose');
    const galleryPrev = document.getElementById('galleryPrev');
    const galleryNext = document.getElementById('galleryNext');
    const galleryOverlay = document.getElementById('galleryOverlay');
    
    let currentGallery = [];
    let currentImageIndex = 0;
    
    // Открытие галереи при клике на карточку
    portfolioCards.forEach(card => {
        card.addEventListener('click', function() {
            const galleryId = this.dataset.gallery;
            const title = this.querySelector('.portfolio-card__title').textContent;
            const description = this.querySelector('.portfolio-card__description').textContent;
            
            console.log(`🎯 Клик по карточке: ${galleryId}, заголовок: ${title}`);
            
            openGallery(galleryId, title, description);
        });
    });
    
    // Диагностика: проверяем, что все галереи найдены
    console.log('🔍 Проверка галерей:');
    for (let i = 1; i <= 6; i++) {
        const galleryData = document.querySelector(`.gallery-data [data-gallery="gallery${i}"]`);
        if (galleryData) {
            const imageCount = galleryData.querySelectorAll('img').length;
            console.log(`✅ Gallery ${i}: ${imageCount} изображений`);
        } else {
            console.log(`❌ Gallery ${i}: не найдена`);
        }
    }
    
    // Функция открытия галереи
    function openGallery(galleryId, title, description) {
        const galleryData = document.querySelector(`.gallery-data [data-gallery="${galleryId}"]`);
        if (!galleryData) {
            console.error(`❌ Галерея ${galleryId} не найдена`);
            return;
        }
        
        currentGallery = Array.from(galleryData.querySelectorAll('img'));
        currentImageIndex = 0;
        
        console.log(`🖼️ Открываем галерею ${galleryId} с ${currentGallery.length} изображениями:`, currentGallery.map(img => img.src));
        
        galleryTitle.textContent = title;
        galleryDescription.textContent = description;
        galleryTotalCount.textContent = currentGallery.length;
        
        showCurrentImage();
        
        // Показываем модальное окно
        galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Анимация появления
        setTimeout(() => {
            galleryModal.style.transform = 'scale(1)';
        }, 50);
    }
    
    // Показ текущего изображения
    function showCurrentImage() {
        if (currentGallery.length === 0) return;
        
        const currentImg = currentGallery[currentImageIndex];
        galleryImage.src = currentImg.src;
        galleryImage.alt = currentImg.alt;
        galleryCurrentIndex.textContent = currentImageIndex + 1;
        
        // Анимация смены изображения
        galleryImage.style.opacity = '0';
        galleryImage.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            galleryImage.style.opacity = '1';
            galleryImage.style.transform = 'scale(1)';
        }, 100);
    }
    
    // Навигация по галерее
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
        showCurrentImage();
    }
    
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
        showCurrentImage();
    }
    
    // Закрытие галереи
    function closeGallery() {
        galleryModal.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            galleryModal.classList.remove('active');
            document.body.style.overflow = '';
            galleryModal.style.transform = '';
        }, 200);
    }
    
    // Обработчики событий
    galleryClose.addEventListener('click', closeGallery);
    galleryOverlay.addEventListener('click', closeGallery);
    galleryNext.addEventListener('click', nextImage);
    galleryPrev.addEventListener('click', prevImage);
    
    // Навигация с клавиатуры
    document.addEventListener('keydown', function(e) {
        if (!galleryModal.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeGallery();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    });
}

// ============================================================================
// СЛАЙДЕРЫ ПОРТФОЛИО (УБИРАЕМ, ТАК КАК ТЕПЕРЬ ГАЛЕРЕЯ)
// ============================================================================

// Старая функция слайдеров удалена - теперь используется полноэкранная галерея

// ============================================================================
// ПЛАВНЫЙ СКРОЛЛ
// ============================================================================

function initSmoothScroll() {
    // Плавный скролл для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Улучшенный плавный скролл с инерцией
    let isScrolling = false;
    
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                // Дополнительные эффекты при скролле
                handleScrollEffects();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });
}

function handleScrollEffects() {
    const scrolled = window.pageYOffset;
    
    // Эффект параллакса для hero секции
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroOffset = scrolled * 0.5;
        hero.style.transform = `translateY(${heroOffset}px)`;
    }
}

// ============================================================================
// ФОРМА ОБРАТНОЙ СВЯЗИ
// ============================================================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получаем данные формы
        const formData = new FormData(form);
        const name = formData.get('name')?.toString().trim();
        const email = formData.get('email')?.toString().trim();
        const message = formData.get('message')?.toString().trim();
        
        // Валидация
        if (!validateForm(name, email, message)) {
            return;
        }
        
        // Имитация отправки
        submitForm(form, { name, email, message });
    });
}

function validateForm(name, email, message) {
    // Проверка имени
    if (!name || name.length < 2) {
        showFormMessage('Пожалуйста, введите ваше имя (минимум 2 символа)', 'error');
        return false;
    }
    
    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        showFormMessage('Пожалуйста, введите корректный email адрес', 'error');
        return false;
    }
    
    // Проверка сообщения
    if (!message || message.length < 10) {
        showFormMessage('Пожалуйста, введите сообщение (минимум 10 символов)', 'error');
        return false;
    }
    
    return true;
}

function submitForm(form, data) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Показываем состояние загрузки
    submitButton.textContent = 'Отправляется...';
    submitButton.disabled = true;
    
    // Имитация отправки на сервер
    setTimeout(() => {
        // Успешная отправка
        showFormMessage('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.', 'success');
        
        // Сброс формы
        form.reset();
        
        // Восстановление кнопки
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        console.log('📧 Форма отправлена:', data);
    }, 2000);
}

function showFormMessage(message, type) {
    // Удаляем предыдущие сообщения
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Создаем новое сообщение
    const messageElement = document.createElement('div');
    messageElement.className = `form-message form-message--${type}`;
    messageElement.textContent = message;
    
    // Стили для сообщения
    messageElement.style.cssText = `
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 8px;
        font-size: 0.95rem;
        font-weight: 500;
        ${type === 'success' ? 
            'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : 
            'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
        }
        animation: slideInUp 0.3s ease;
    `;
    
    // Добавляем сообщение после формы
    const form = document.getElementById('contactForm');
    form.appendChild(messageElement);
    
    // Автоматически удаляем сообщение через 5 секунд
    setTimeout(() => {
        messageElement.style.animation = 'slideOutUp 0.3s ease';
        setTimeout(() => messageElement.remove(), 300);
    }, 5000);
}

// ============================================================================
// ДОПОЛНИТЕЛЬНЫЕ УТИЛИТЫ
// ============================================================================

// Дебаунс функция для оптимизации производительности
function debounce(func, wait) {
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

// Проверка поддержки Intersection Observer
function isIntersectionObserverSupported() {
    return 'IntersectionObserver' in window;
}

// Фоллбэк для старых браузеров
if (!isIntersectionObserverSupported()) {
    console.warn('⚠️ IntersectionObserver не поддерживается. Анимации могут работать некорректно.');
    
    // Простой фоллбэк - показываем все элементы
    window.addEventListener('load', function() {
        const animatedElements = document.querySelectorAll(`
            .animate-fade-zoom,
            .animate-slide-up,
            .animate-slide-left,
            .animate-slide-right,
            .animate-zoom-in,
            .animate-timeline,
            .animate-fade-in
        `);
        
        animatedElements.forEach(el => {
            el.classList.add('visible');
        });
    });
}

// Обработка ошибок изображений
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach((img, index) => {
        img.addEventListener('error', function() {
            console.warn(`⚠️ Не удалось загрузить изображение: ${img.src}`);
            
            // Заменяем на плейсхолдер
            img.src = `data:image/svg+xml;base64,${btoa(`
                <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="300" fill="#f8fafc"/>
                    <rect x="150" y="120" width="100" height="60" rx="8" fill="#e2e8f0"/>
                    <circle cx="170" cy="140" r="8" fill="#cbd5e0"/>
                    <path d="M180 160L190 150L210 170L200 180L180 160Z" fill="#cbd5e0"/>
                    <text x="200" y="200" text-anchor="middle" fill="#64748b" font-family="system-ui" font-size="14">
                        Изображение недоступно
                    </text>
                </svg>
            `)}`;
            
            img.alt = 'Изображение недоступно';
        });
        
        img.addEventListener('load', function() {
            console.log(`✅ Изображение загружено: ${img.src.split('/').pop()}`);
        });
    });
});

// Добавляем CSS анимации для сообщений формы
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideOutUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);
