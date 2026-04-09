// ===== PRODUCT DATA =====
const products = {
    flash: [
        { id: 1, brand: 'Nike', name: 'Tênis Revolution 6 Masculino', price: 299.99, originalPrice: 499.99, discount: 40, emoji: '👟', badge: '-40%' },
        { id: 2, brand: 'Adidas', name: 'Camiseta Essentials Logo', price: 89.99, originalPrice: 149.99, discount: 40, emoji: '👕', badge: '-40%' },
        { id: 3, brand: 'Puma', name: 'Tênis Smash v2 Feminino', price: 249.99, originalPrice: 399.99, discount: 38, emoji: '👟', badge: '-38%' },
        { id: 4, brand: 'Oakley', name: 'Óculos de Sol Holbrook', price: 459.99, originalPrice: 699.99, discount: 34, emoji: '🕶️', badge: '-34%' },
        { id: 5, brand: 'Lacoste', name: 'Polo Classic Fit', price: 399.99, originalPrice: 599.99, discount: 33, emoji: '👔', badge: '-33%' },
    ],
    feminino: [
        { id: 10, brand: 'Nike', name: 'Tênis Air Max SC Feminino', price: 499.99, originalPrice: 699.99, discount: 29, emoji: '👟', badge: '-29%' },
        { id: 11, brand: 'Adidas', name: 'Leggings Training Feminina', price: 179.99, originalPrice: 249.99, discount: 28, emoji: '👖', badge: 'Novo', badgeClass: 'new' },
        { id: 12, brand: 'Puma', name: 'Sutiã Esportivo 4Keeps', price: 149.99, originalPrice: 199.99, discount: 25, emoji: '👙', badge: '-25%' },
        { id: 13, brand: 'Vans', name: 'Tênis Old Skool Classic', price: 349.99, originalPrice: 449.99, discount: 22, emoji: '👟', badge: '-22%' },
        { id: 14, brand: 'Calvin Klein', name: 'Sutiã Modern Cotton', price: 199.99, originalPrice: 279.99, discount: 29, emoji: '👙', badge: '-29%' },
        { id: 15, brand: 'Under Armour', name: 'Jaqueta Storm Feminina', price: 399.99, originalPrice: 549.99, discount: 27, emoji: '🧥', badge: '-27%' },
        { id: 16, brand: 'Nike', name: 'Bolsa Gym Club Feminina', price: 159.99, originalPrice: 219.99, discount: 27, emoji: '👜', badge: '-27%' },
        { id: 17, brand: 'Adidas', name: 'Sandália Adilette Comfort', price: 129.99, originalPrice: 179.99, discount: 28, emoji: '🩴', badge: '-28%' },
        { id: 18, brand: 'Puma', name: 'Regata Ess+ Logo Feminina', price: 79.99, originalPrice: 119.99, discount: 33, emoji: '👕', badge: '-33%' },
        { id: 19, brand: 'Oakley', name: 'Óculos Sutro Lite', price: 549.99, originalPrice: 749.99, discount: 27, emoji: '🕶️', badge: '-27%' },
    ],
    masculino: [
        { id: 20, brand: 'Nike', name: 'Tênis Revolution 6 Masculino', price: 299.99, originalPrice: 449.99, discount: 33, emoji: '👟', badge: '-33%' },
        { id: 21, brand: 'Adidas', name: 'Camiseta Trefoil Essentials', price: 99.99, originalPrice: 149.99, discount: 33, emoji: '👕', badge: '-33%' },
        { id: 22, brand: 'Puma', name: 'Calça Jogger Masculina', price: 199.99, originalPrice: 279.99, discount: 29, emoji: '👖', badge: '-29%' },
        { id: 23, brand: 'Under Armour', name: 'Camiseta Tech 2.0', price: 129.99, originalPrice: 179.99, discount: 28, emoji: '👕', badge: '-28%' },
        { id: 24, brand: 'Lacoste', name: 'Polo Classic Fit L.12.12', price: 449.99, originalPrice: 599.99, discount: 25, emoji: '👔', badge: '-25%' },
        { id: 25, brand: 'Nike', name: 'Bermuda Sportswear', price: 149.99, originalPrice: 219.99, discount: 32, emoji: '🩳', badge: '-32%' },
        { id: 26, brand: 'Adidas', name: 'Jaqueta Windbreaker', price: 349.99, originalPrice: 499.99, discount: 30, emoji: '🧥', badge: '-30%' },
        { id: 27, brand: 'Vans', name: 'Tênis Authentic Classic', price: 299.99, originalPrice: 399.99, discount: 25, emoji: '👟', badge: '-25%' },
        { id: 28, brand: 'Tommy Hilfiger', name: 'Camisa Oxford Slim', price: 399.99, originalPrice: 549.99, discount: 27, emoji: '👔', badge: '-27%' },
        { id: 29, brand: 'Puma', name: 'Boné ESS+ Trucker', price: 89.99, originalPrice: 129.99, discount: 31, emoji: '🧢', badge: '-31%' },
    ]
};

// ===== CART STATE =====
let cart = [];

// ===== DOM ELEMENTS =====
const heroSlider = document.getElementById('heroSlider');
const slides = heroSlider.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const dots = document.querySelectorAll('.dot');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const modal = document.getElementById('quickViewModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const newsletterForm = document.getElementById('newsletterForm');

// Login elements
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const loginModalClose = document.getElementById('loginModalClose');
const tabLogin = document.getElementById('tabLogin');
const tabRegister = document.getElementById('tabRegister');
const loginFormWrapper = document.getElementById('loginFormWrapper');
const registerFormWrapper = document.getElementById('registerFormWrapper');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const registerPassword = document.getElementById('registerPassword');
const passwordStrength = document.getElementById('passwordStrength');

// ===== SLIDER =====
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlider() {
    clearInterval(slideInterval);
}

nextBtn.addEventListener('click', () => {
    stopSlider();
    nextSlide();
    startSlider();
});

prevBtn.addEventListener('click', () => {
    stopSlider();
    prevSlide();
    startSlider();
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        stopSlider();
        showSlide(parseInt(dot.dataset.index));
        startSlider();
    });
});

startSlider();

// ===== RENDER PRODUCTS =====
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        ${product.badge ? `<span class="product-badge ${product.badgeClass || ''}">${product.badge}</span>` : ''}
        <button class="product-wishlist" onclick="toggleWishlist(this, event)">
            <i class="far fa-heart"></i>
        </button>
        <div class="product-image" onclick="openQuickView(${product.id})">
            <span class="product-emoji">${product.emoji}</span>
        </div>
        <div class="product-info">
            <div class="product-brand">${product.brand}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-prices">
                <div class="product-original-price">De R$ ${product.originalPrice.toFixed(2).replace('.', ',')}</div>
                <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                <div class="product-installment">ou 10x de R$ ${(product.price / 10).toFixed(2).replace('.', ',')} sem juros</div>
            </div>
            <span class="product-discount">${product.discount}% OFF</span>
            <button class="btn-add-cart" onclick="addToCart(${product.id}, event)">
                <i class="fas fa-shopping-bag"></i> Adicionar ao Carrinho
            </button>
        </div>
    `;
    return card;
}

function renderProducts() {
    const flashContainer = document.getElementById('flashProducts');
    const femininoContainer = document.getElementById('femininoProducts');
    const masculinoContainer = document.getElementById('masculinoProducts');

    products.flash.forEach(p => flashContainer.appendChild(createProductCard(p)));
    products.feminino.forEach(p => femininoContainer.appendChild(createProductCard(p)));
    products.masculino.forEach(p => masculinoContainer.appendChild(createProductCard(p)));
}

renderProducts();

// ===== CART FUNCTIONS =====
function findProduct(id) {
    const allProducts = [...products.flash, ...products.feminino, ...products.masculino];
    return allProducts.find(p => p.id === id);
}

function addToCart(productId, event) {
    if (event) event.stopPropagation();
    
    const product = findProduct(productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCart();
    showToast(`${product.name} adicionado ao carrinho!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateQty(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += change;
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }
    updateCart();
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartFooter.style.display = 'none';
        // Clear all cart items except the empty message
        const items = cartItems.querySelectorAll('.cart-item');
        items.forEach(item => item.remove());
    } else {
        cartEmpty.style.display = 'none';
        cartFooter.style.display = 'block';

        // Clear and rebuild cart items
        const items = cartItems.querySelectorAll('.cart-item');
        items.forEach(item => item.remove());

        cart.forEach(item => {
            const cartItemEl = document.createElement('div');
            cartItemEl.className = 'cart-item';
            cartItemEl.innerHTML = `
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-info">
                    <div class="cart-item-brand">${item.brand}</div>
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</div>
                    <div class="cart-item-qty">
                        <button onclick="updateQty(${item.id}, -1)"><i class="fas fa-minus"></i></button>
                        <span>${item.qty}</span>
                        <button onclick="updateQty(${item.id}, 1)"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItems.appendChild(cartItemEl);
        });
    }

    cartTotal.textContent = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
}

// ===== TOGGLE CART =====
function toggleCart() {
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : '';
}

cartBtn.addEventListener('click', toggleCart);
cartClose.addEventListener('click', toggleCart);
cartOverlay.addEventListener('click', toggleCart);

// ===== QUICK VIEW MODAL =====
function openQuickView(productId) {
    const product = findProduct(productId);
    if (!product) return;

    const sizes = ['P', 'M', 'G', 'GG'];
    modalBody.innerHTML = `
        <div class="modal-image">${product.emoji}</div>
        <div class="modal-info">
            <div class="product-brand">${product.brand}</div>
            <h3>${product.name}</h3>
            <div class="product-prices">
                <div class="product-original-price">De R$ ${product.originalPrice.toFixed(2).replace('.', ',')}</div>
                <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                <div class="product-installment">ou 10x de R$ ${(product.price / 10).toFixed(2).replace('.', ',')} sem juros</div>
            </div>
            <div class="modal-sizes">
                <h4>Tamanho</h4>
                <div class="size-options">
                    ${sizes.map((s, i) => `<div class="size-option ${i === 1 ? 'active' : ''}" onclick="selectSize(this)">${s}</div>`).join('')}
                </div>
            </div>
            <button class="modal-btn-cart" onclick="addToCart(${product.id}); closeModal();">
                <i class="fas fa-shopping-bag"></i> Adicionar ao Carrinho
            </button>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function selectSize(el) {
    document.querySelectorAll('.size-option').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// ===== WISHLIST =====
function toggleWishlist(btn, event) {
    event.stopPropagation();
    const icon = btn.querySelector('i');
    btn.classList.toggle('active');
    if (btn.classList.contains('active')) {
        icon.className = 'fas fa-heart';
        showToast('Adicionado aos favoritos! ❤️');
    } else {
        icon.className = 'far fa-heart';
    }
}

// ===== SEARCH =====
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    const allProducts = [...products.flash, ...products.feminino, ...products.masculino];
    const results = allProducts.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.brand.toLowerCase().includes(query)
    );

    if (results.length > 0) {
        openQuickView(results[0].id);
    } else {
        showToast('Nenhum produto encontrado 😕');
    }
}

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

// ===== COUNTDOWN =====
function updateCountdown() {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    const diff = endOfDay - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ===== TOAST NOTIFICATION =====
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== NEWSLETTER =====
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input').value;
    if (email) {
        showToast('E-mail cadastrado com sucesso! 🎉');
        newsletterForm.querySelector('input').value = '';
    }
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (modal.classList.contains('active')) closeModal();
        if (cartSidebar.classList.contains('active')) toggleCart();
        if (loginModal.classList.contains('active')) closeLoginModal();
    }
});

// ===== LOGIN MODAL =====
function openLoginModal() {
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLoginModal() {
    loginModal.classList.remove('active');
    document.body.style.overflow = '';
}

loginBtn.addEventListener('click', openLoginModal);
loginModalClose.addEventListener('click', closeLoginModal);

loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) closeLoginModal();
});

// Tab switching
tabLogin.addEventListener('click', () => {
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    loginFormWrapper.classList.add('active');
    registerFormWrapper.classList.remove('active');
});

tabRegister.addEventListener('click', () => {
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    registerFormWrapper.classList.add('active');
    loginFormWrapper.classList.remove('active');
});

// Password visibility toggle
function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    const icon = btn.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        input.type = 'password';
        icon.className = 'fas fa-eye';
    }
}

// Password strength checker
registerPassword.addEventListener('input', function () {
    const password = this.value;
    const strengthBar = passwordStrength.querySelector('.strength-bar');
    const strengthText = passwordStrength.querySelector('.strength-text');
    let strength = 0;

    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    const levels = [
        { width: '0%', color: '#eee', text: '' },
        { width: '20%', color: '#e74c3c', text: 'Muito fraca' },
        { width: '40%', color: '#e67e22', text: 'Fraca' },
        { width: '60%', color: '#f39c12', text: 'Média' },
        { width: '80%', color: '#27ae60', text: 'Forte' },
        { width: '100%', color: '#2ecc71', text: 'Muito forte' },
    ];

    const level = levels[strength];
    strengthBar.style.width = level.width;
    strengthBar.style.background = level.color;
    strengthText.textContent = level.text;
    strengthText.style.color = level.color;
});

// CPF mask
const registerCpf = document.getElementById('registerCpf');
registerCpf.addEventListener('input', function () {
    let value = this.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 9) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }
    this.value = value;
});

// Login form submit
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simulate login (in production, this would call an API)
    const users = JSON.parse(localStorage.getItem('dafiti_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        showToast(`Bem-vindo(a), ${user.name.split(' ')[0]}! 🎉`);
        closeLoginModal();
        // Update header to show logged-in state
        updateHeaderForLoggedInUser(user);
        loginForm.reset();
    } else {
        // Demo: allow any login
        showToast('Login realizado com sucesso! 🎉');
        closeLoginModal();
        const demoUser = { name: 'Usuário', email: email };
        updateHeaderForLoggedInUser(demoUser);
        loginForm.reset();
    }
});

// Register form submit
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const cpf = document.getElementById('registerCpf').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (password !== confirmPassword) {
        showToast('As senhas não coincidem! ❌');
        return;
    }

    if (password.length < 6) {
        showToast('A senha deve ter no mínimo 6 caracteres! ❌');
        return;
    }

    // Save user (simulated with localStorage)
    const users = JSON.parse(localStorage.getItem('dafiti_users') || '[]');

    if (users.find(u => u.email === email)) {
        showToast('Este e-mail já está cadastrado! ❌');
        return;
    }

    users.push({ name, email, cpf, password });
    localStorage.setItem('dafiti_users', JSON.stringify(users));

    showToast('Cadastro realizado com sucesso! 🎉');

    // Switch to login tab
    tabLogin.click();
    document.getElementById('loginEmail').value = email;
    registerForm.reset();
    passwordStrength.querySelector('.strength-bar').style.width = '0%';
    passwordStrength.querySelector('.strength-text').textContent = '';
});

// Update header for logged-in user
function updateHeaderForLoggedInUser(user) {
    const loginBtnElement = document.getElementById('loginBtn');
    const firstName = user.name.split(' ')[0];
    loginBtnElement.innerHTML = `
        <i class="fas fa-user-circle" style="font-size: 24px;"></i>
        <span>${firstName}</span>
        <i class="fas fa-chevron-down"></i>
    `;
    // Add logout functionality on second click
    loginBtnElement.onclick = function () {
        if (confirm('Deseja sair da sua conta?')) {
            loginBtnElement.innerHTML = `
                <i class="fas fa-user"></i>
                <span>Entrar</span>
                <i class="fas fa-chevron-down"></i>
            `;
            loginBtnElement.onclick = openLoginModal;
            showToast('Você saiu da sua conta.');
        }
    };
}

// Check if user was logged in (session simulation)
(function checkLoggedIn() {
    const lastUser = localStorage.getItem('dafiti_lastUser');
    if (lastUser) {
        const user = JSON.parse(lastUser);
        updateHeaderForLoggedInUser(user);
    }
})();

console.log('🛍️ Dafiti Store loaded successfully!');
