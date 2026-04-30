/* ============================================================
   SHAMM MARKET — Professional JavaScript Core
   Author: Sarvarbek Rahmonjonov
   Version: 2.0.0
   ============================================================ */

'use strict';

/* ──────────────────────────────────────────────
   1. PRODUCT DATABASE
────────────────────────────────────────────── */
const PRODUCTS = [
  { id: 1,  name: 'MacBook Pro M3',        category: 'electronics', price: 18500000, oldPrice: 21000000, rating: 4.9, reviews: 312, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80', badge: 'sale',    description: 'Apple M3 chip, 16GB RAM, 512GB SSD. Eng tez noutbuk.', seller: 'TechShop Pro', inStock: true },
  { id: 2,  name: 'iPhone 15 Pro Max',     category: 'electronics', price: 16200000, oldPrice: null,     rating: 4.8, reviews: 540, image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80', badge: 'new',     description: 'Titanium dizayn, 48MP kamera, A17 Pro chip.', seller: 'Apple Reseller', inStock: true },
  { id: 3,  name: 'Samsung Galaxy S24 Ultra', category: 'electronics', price: 14800000, oldPrice: 16000000, rating: 4.7, reviews: 289, image: 'https://images.unsplash.com/photo-1610945264803-c22b62831454?w=400&q=80', badge: 'sale', description: 'S Pen, 200MP kamera, AI yordamida ishlaydi.', seller: 'Samsung Uzbekistan', inStock: true },
  { id: 4,  name: 'Sony WH-1000XM5',       category: 'accessories', price: 3200000,  oldPrice: 3800000,  rating: 4.9, reviews: 178, image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&q=80', badge: 'sale',    description: "Dunyoning eng yaxshi ANC quloqchinlari. 30 soat batareya.", seller: 'AudioWorld', inStock: true },
  { id: 5,  name: 'AirPods Pro 2',         category: 'accessories', price: 2950000,  oldPrice: null,     rating: 4.8, reviews: 421, image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&q=80', badge: 'new',     description: 'H2 chip, ANC, 30 soat umumiy batareya.', seller: 'Apple Reseller', inStock: true },
  { id: 6,  name: 'Nike Air Force 1',      category: 'clothes',     price: 980000,   oldPrice: 1200000,  rating: 4.6, reviews: 634, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80', badge: 'sale',    description: 'Original Nike Air Force 1 White. 40-46 razmerlar.', seller: 'NikeStore UZ', inStock: true },
  { id: 7,  name: 'iPad Pro M2 12.9"',     category: 'electronics', price: 12400000, oldPrice: null,     rating: 4.9, reviews: 156, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80', badge: 'new',     description: 'Liquid Retina XDR, M2 chip, Wi-Fi 6E.', seller: 'TechShop Pro', inStock: true },
  { id: 8,  name: 'Dyson V15 Detect',      category: 'home',        price: 5600000,  oldPrice: 6500000,  rating: 4.7, reviews: 93,  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', badge: 'sale',    description: "Lazer texnologiyasi bilan changni ko'radi. HEPA filtr.", seller: 'HomeAppliances', inStock: true },
  { id: 9,  name: 'Adidas Ultraboost 23',  category: 'sports',      price: 1450000,  oldPrice: null,     rating: 4.6, reviews: 287, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', badge: 'new',     description: 'BOOST texnologiyasi, karbonfiber plastina.', seller: 'SportZone', inStock: true },
  { id: 10, name: 'LG OLED C3 65"',        category: 'home',        price: 28000000, oldPrice: 32000000, rating: 4.8, reviews: 62,  image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&q=80', badge: 'sale',    description: 'evo OLED, 4K 120Hz, Dolby Vision IQ, webOS 23.', seller: 'HomeAppliances', inStock: true },
  { id: 11, name: 'Canon EOS R6 Mark II',  category: 'electronics', price: 24500000, oldPrice: null,     rating: 4.9, reviews: 44,  image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=80', badge: 'new',     description: '40 fps, 6K RAW video, IBIS 8-stop.', seller: 'PhotoPro UZ', inStock: true },
  { id: 12, name: 'Levi\'s 501 Original',  category: 'clothes',     price: 680000,   oldPrice: 850000,   rating: 4.5, reviews: 512, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80', badge: 'sale',    description: "Original Levi's 501. Klassik ko'k rang. Barcha razmerlar.", seller: 'FashionHub', inStock: true },
  { id: 13, name: 'DJI Mini 4 Pro',        category: 'electronics', price: 9800000,  oldPrice: null,     rating: 4.8, reviews: 78,  image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&q=80', badge: 'new',     description: '4K/60fps, obstacle avoidance, 34 daqiqa parvoz.', seller: 'DroneWorld', inStock: true },
  { id: 14, name: 'Roborock S8 Pro',       category: 'home',        price: 7200000,  oldPrice: 8500000,  rating: 4.7, reviews: 134, image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80', badge: 'sale',    description: "Lidar navigatsiya, 6000Pa so'rish kuchi, avto bo'shatish.", seller: 'SmartHome UZ', inStock: true },
  { id: 15, name: 'North Face Puffer Jacket', category: 'clothes',  price: 2100000,  oldPrice: null,     rating: 4.6, reviews: 198, image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80', badge: 'new',     description: "700-fill duck down, DWR ishlov. S-XXL o'lchamlar.", seller: 'OutdoorGear', inStock: true },
  { id: 16, name: 'GoPro HERO 12 Black',   category: 'accessories', price: 4900000,  oldPrice: 5400000,  rating: 4.7, reviews: 221, image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&q=80', badge: 'sale',    description: "5.3K60, HyperSmooth 6.0, 27m suvdan himoya.", seller: 'TechShop Pro', inStock: true },
];

const EXCHANGE_LISTINGS = [
  { id: 101, title: 'Python Dasturlash Kursi',   category: 'Ta\'lim',    price: 450000,  location: 'Toshkent', seller: 'CodeMaster', avatar: 'C', avatarColor: '#6c5ce7', time: '2 soat oldin',  condition: 'Online',     image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=300&q=80', description: 'Noldan Python o\'rganish. 60 dars, amaliy loyihalar.' },
  { id: 102, title: 'iPhone 12 Pro 128GB',       category: 'Elektronika', price: 5200000, location: 'Yunusobod', seller: 'Jasur T.', avatar: 'J', avatarColor: '#e17055', time: '5 soat oldin',  condition: 'Yaxshi',     image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=300&q=80', description: 'Zaryadlagich va quticha bilan. Ekran ideal. Batareya 89%.' },
  { id: 103, title: 'Vintage Leather Jacket',    category: 'Kiyim',      price: 780000,  location: 'Chilonzor', seller: 'Nilufar R.', avatar: 'N', avatarColor: '#00b894', time: 'Kecha',         condition: 'Yaxshi',     image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=300&q=80', description: "Original teri. L o'lcham. 2 yil ishlatilgan, juda yaxshi holat." },
  { id: 104, title: 'IELTS Tayyorlov Kursi',     category: 'Ta\'lim',    price: 600000,  location: 'Online',    seller: 'EduPro', avatar: 'E', avatarColor: '#0984e3', time: '1 kun oldin',   condition: 'Online',     image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&q=80', description: 'Band 7+ kafolatli. 3 oylik kurs. Mock testlar + mentor.' },
  { id: 105, title: 'Samsung 27" 4K Monitor',    category: 'Elektronika', price: 3800000, location: 'Mirzo Ulugbek', seller: 'Sardor K.', avatar: 'S', avatarColor: '#d63031', time: '2 kun oldin',   condition: 'Yangi',      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&q=80', description: "IPS panel, 4K 60Hz, HDR10. Qutisidan chiqarilgan, 2 hafta ishlatilgan." },
  { id: 106, title: 'Ikea Kallax Javon',         category: 'Uy',         price: 320000,  location: 'Sergeli', seller: 'Malika B.', avatar: 'M', avatarColor: '#fab1a0', time: '3 kun oldin',   condition: 'Yaxshi',     image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=80', description: "4x4 bo'lim. Oq rang. Ko'chirish sababli sotyapman." },
  { id: 107, title: 'Freelance Dizayn Kursi',    category: 'Ta\'lim',    price: 380000,  location: 'Online',    seller: 'DesignStudio', avatar: 'D', avatarColor: '#a29bfe', time: '4 kun oldin',   condition: 'Online',     image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&q=80', description: 'Figma, Adobe XD, UI/UX asoslari. 45 video dars.' },
  { id: 108, title: 'Volkswagen Polo 2019',      category: 'Avtomobil',  price: 145000000, location: 'Toshkent', seller: 'Bobur A.', avatar: 'B', avatarColor: '#636e72', time: '1 hafta oldin', condition: 'Ishlatilgan', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=300&q=80', description: '78,000 km. Bitta egasi. Servis tarixi bor. Savdolashiladi.' },
];

/* ──────────────────────────────────────────────
   2. APPLICATION STATE
────────────────────────────────────────────── */
const State = {
  cart: JSON.parse(localStorage.getItem('shamm_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('shamm_wishlist') || '[]'),
  user: JSON.parse(localStorage.getItem('shamm_user') || 'null'),
  notifications: 3,
  currentSection: 'home',
  shopPage: 1,
  itemsPerPage: 8,
  activeFilter: 'all',
  sortOrder: 'default',
  priceMin: 0,
  priceMax: 50000000,
  ratingFilter: 0,
  searchQuery: '',
  darkMode: localStorage.getItem('shamm_theme') !== 'light',
};

/* ──────────────────────────────────────────────
   3. INITIALIZATION
────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initMobileSidebar();
  initCart();
  initSearch();
  renderFeaturedProducts();
  renderShopProducts();
  renderOffers();
  renderExchange();
  startFlashTimer();
  startMarquee();
  initScrollEffects();
  restoreUser();
  initPriceRange();
  updateCartUI();
});

/* ──────────────────────────────────────────────
   4. THEME
────────────────────────────────────────────── */
function initTheme() {
  if (!State.darkMode) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  const toggle = document.getElementById('themeToggle');
  if (toggle) toggle.classList.toggle('active', State.darkMode);
}

function toggleTheme() {
  State.darkMode = !State.darkMode;
  document.documentElement.setAttribute('data-theme', State.darkMode ? '' : 'light');
  localStorage.setItem('shamm_theme', State.darkMode ? 'dark' : 'light');
  const toggle = document.getElementById('themeToggle');
  if (toggle) toggle.classList.toggle('active', State.darkMode);
  showToast(State.darkMode ? '🌙 Qorong\'i rejim yoqildi' : '☀️ Yorug\' rejim yoqildi', 'info');
}

/* ──────────────────────────────────────────────
   5. NAVBAR & SCROLL
────────────────────────────────────────────── */
function initNavbar() {
  let lastScroll = 0;
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    if (current > lastScroll && current > 200) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    lastScroll = Math.max(current, 0);
    updateActiveNavLink();
  }, { passive: true });
}

function updateActiveNavLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.classList.toggle('active', link.dataset.section === State.currentSection);
  });
  const mobItems = document.querySelectorAll('.mob-nav-item');
  mobItems.forEach(item => {
    item.classList.toggle('active', item.dataset.section === State.currentSection);
  });
}

function initScrollEffects() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.cat-card, .trust-item, .value-card, .about-stats .ab-stat').forEach(el => {
    el.classList.add('fade-in-up');
    observer.observe(el);
  });
}

/* ──────────────────────────────────────────────
   6. SECTION NAVIGATION
────────────────────────────────────────────── */
function showSection(sectionId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
    State.currentSection = sectionId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateActiveNavLink();
    history.pushState(null, '', `#${sectionId}`);
  }
}

function filterAndGoShop(category) {
  State.activeFilter = category;
  State.shopPage = 1;
  showSection('shop');
  renderShopProducts();
  document.querySelectorAll('.chip').forEach(c => {
    c.classList.toggle('active', c.dataset.cat === category);
  });
}

// Handle hash on load
window.addEventListener('load', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    showSection(hash);
  }
});

/* ──────────────────────────────────────────────
   7. MOBILE SIDEBAR
────────────────────────────────────────────── */
function initMobileSidebar() {
  const menuToggle = document.getElementById('menuToggle');
  const overlay = document.getElementById('sidebarOverlay');
  const closeBtn = document.getElementById('closeSidebar');

  menuToggle?.addEventListener('click', openSidebar);
  overlay?.addEventListener('click', closeSidebar);
  closeBtn?.addEventListener('click', closeSidebar);
}

function openSidebar() {
  document.getElementById('mobileSidebar')?.classList.add('open');
  document.getElementById('sidebarOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  const user = State.user;
  if (user) {
    const el = document.getElementById('sidebarUsername');
    if (el) el.textContent = user.name;
  }
}

function closeSidebar() {
  document.getElementById('mobileSidebar')?.classList.remove('open');
  document.getElementById('sidebarOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ──────────────────────────────────────────────
   8. CART
────────────────────────────────────────────── */
function initCart() {
  document.getElementById('cartBtn')?.addEventListener('click', openCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
}

function openCart() {
  document.getElementById('cartDrawer')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartItems();
}

function closeCart() {
  document.getElementById('cartDrawer')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = State.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
    showToast(`🛒 ${product.name} miqdori oshirildi`, 'success');
  } else {
    State.cart.push({ ...product, qty: 1 });
    showToast(`🛒 ${product.name} savatga qo'shildi`, 'success');
  }
  saveCart();
  updateCartUI();
  animateCartButton();
}

function removeFromCart(productId) {
  State.cart = State.cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  renderCartItems();
  showToast('Mahsulot savatdan olib tashlandi', 'info');
}

function updateCartQty(productId, delta) {
  const item = State.cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() {
  localStorage.setItem('shamm_cart', JSON.stringify(State.cart));
}

function updateCartUI() {
  const count = State.cart.reduce((sum, i) => sum + i.qty, 0);
  const badge = document.getElementById('cartCount');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function renderCartItems() {
  const list = document.getElementById('cartItemsList');
  const empty = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');

  if (!list) return;

  if (State.cart.length === 0) {
    if (empty) empty.style.display = 'flex';
    if (footer) footer.style.display = 'none';
    list.innerHTML = '';
    list.appendChild(empty);
    return;
  }

  if (empty) empty.style.display = 'none';
  if (footer) footer.style.display = 'block';

  const total = State.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('cartTotal').textContent = formatPrice(total);

  list.innerHTML = State.cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <span class="cart-item-price">${formatPrice(item.price)}</span>
        <div class="cart-qty-row">
          <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-remove-btn" onclick="removeFromCart(${item.id})" aria-label="O'chirish">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `).join('');
}

function animateCartButton() {
  const btn = document.getElementById('cartBtn');
  if (!btn) return;
  btn.classList.add('bump');
  setTimeout(() => btn.classList.remove('bump'), 400);
}

function checkout() {
  if (!State.user) {
    closeCart();
    openAuthModal();
    showToast('Buyurtma berish uchun tizimga kiring', 'warning');
    return;
  }
  closeCart();
  showToast('🎉 Buyurtmangiz qabul qilindi! Tez orada bog\'lanamiz.', 'success', 4000);
  State.cart = [];
  saveCart();
  updateCartUI();
}

/* ──────────────────────────────────────────────
   9. WISHLIST
────────────────────────────────────────────── */
function toggleWishlist(productId, btn) {
  const idx = State.wishlist.indexOf(productId);
  if (idx > -1) {
    State.wishlist.splice(idx, 1);
    if (btn) btn.classList.remove('active');
    showToast('Sevimlilardan olib tashlandi', 'info');
  } else {
    State.wishlist.push(productId);
    if (btn) btn.classList.add('active');
    showToast('❤️ Sevimlilarga qo\'shildi', 'success');
  }
  localStorage.setItem('shamm_wishlist', JSON.stringify(State.wishlist));
}

function isWishlisted(productId) {
  return State.wishlist.includes(productId);
}

/* ──────────────────────────────────────────────
   10. PRODUCT RENDERING
────────────────────────────────────────────── */
function createProductCard(product, compact = false) {
  const wishlisted = isWishlisted(product.id);
  const stars = renderStars(product.rating);
  const badgeHtml = product.badge
    ? `<span class="product-badge ${product.badge}">${product.badge === 'new' ? 'Yangi' : product.badge === 'sale' ? 'CHEGIRMA' : product.badge}</span>`
    : '';
  const oldPriceHtml = product.oldPrice
    ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>`
    : '';
  const discount = product.oldPrice
    ? `<span class="discount-pct">-${Math.round((1 - product.price / product.oldPrice) * 100)}%</span>`
    : '';

  return `
    <div class="product-card${compact ? ' compact' : ''}" onclick="openProductDetail(${product.id})">
      <div class="product-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${badgeHtml}
        <button class="wishlist-btn${wishlisted ? ' active' : ''}"
          onclick="event.stopPropagation(); toggleWishlist(${product.id}, this)"
          aria-label="Sevimlilarga qo'shish">
          <i class="fas fa-heart"></i>
        </button>
      </div>
      <div class="product-info">
        <p class="product-seller"><i class="fas fa-store"></i> ${product.seller}</p>
        <h4 class="product-name">${product.name}</h4>
        <div class="product-rating">
          ${stars}
          <span class="review-count">(${product.reviews})</span>
        </div>
        <div class="product-price-row">
          <div class="price-group">
            <strong class="product-price">${formatPrice(product.price)}</strong>
            ${oldPriceHtml}
            ${discount}
          </div>
          <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})" aria-label="Savatga qo'shish">
            <i class="fas fa-shopping-bag"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) html += '<i class="fas fa-star"></i>';
    else if (i === full && half) html += '<i class="fas fa-star-half-alt"></i>';
    else html += '<i class="far fa-star"></i>';
  }
  return html;
}

function renderFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  if (!container) return;
  const featured = PRODUCTS.filter(p => p.rating >= 4.7).slice(0, 8);
  container.innerHTML = featured.map(p => createProductCard(p)).join('');
}

/* ──────────────────────────────────────────────
   11. SHOP / FILTERS
────────────────────────────────────────────── */
function initPriceRange() {
  updatePriceRange();
}

function updatePriceRange() {
  const minEl = document.getElementById('priceMin');
  const maxEl = document.getElementById('priceMax');
  if (!minEl || !maxEl) return;

  State.priceMin = parseInt(minEl.value);
  State.priceMax = parseInt(maxEl.value);

  if (State.priceMin > State.priceMax) {
    [State.priceMin, State.priceMax] = [State.priceMax, State.priceMin];
    minEl.value = State.priceMin;
    maxEl.value = State.priceMax;
  }

  const minDisp = document.getElementById('priceMinDisplay');
  const maxDisp = document.getElementById('priceMaxDisplay');
  if (minDisp) minDisp.textContent = State.priceMin.toLocaleString('uz-UZ');
  if (maxDisp) maxDisp.textContent = State.priceMax.toLocaleString('uz-UZ');

  filterProducts();
}

function getFilteredProducts() {
  let result = [...PRODUCTS];

  // Category
  if (State.activeFilter !== 'all') {
    result = result.filter(p => p.category === State.activeFilter);
  }

  // Search
  if (State.searchQuery) {
    const q = State.searchQuery.toLowerCase();
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.seller.toLowerCase().includes(q)
    );
  }

  // Price
  result = result.filter(p => p.price >= State.priceMin && p.price <= State.priceMax);

  // Rating
  if (State.ratingFilter > 0) {
    result = result.filter(p => p.rating >= State.ratingFilter);
  }

  // Condition checkboxes
  const condChecks = document.querySelectorAll('.filter-block input[type="checkbox"][value="new"], .filter-block input[type="checkbox"][value="sale"], .filter-block input[type="checkbox"][value="instock"]');
  const activeConditions = Array.from(condChecks).filter(c => c.checked).map(c => c.value);
  if (activeConditions.length > 0) {
    result = result.filter(p => {
      return activeConditions.every(cond => {
        if (cond === 'new') return p.badge === 'new';
        if (cond === 'sale') return p.badge === 'sale';
        if (cond === 'instock') return p.inStock;
        return true;
      });
    });
  }

  // Sort
  switch (State.sortOrder) {
    case 'price-asc':  result.sort((a, b) => a.price - b.price); break;
    case 'price-desc': result.sort((a, b) => b.price - a.price); break;
    case 'rating':     result.sort((a, b) => b.rating - a.rating); break;
    case 'newest':     result.sort((a, b) => b.id - a.id); break;
  }

  return result;
}

function renderShopProducts() {
  const container = document.getElementById('shopProducts');
  const countEl = document.getElementById('resultsCount');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (!container) return;

  const all = getFilteredProducts();
  const end = State.shopPage * State.itemsPerPage;
  const visible = all.slice(0, end);

  if (countEl) countEl.textContent = `${all.length} mahsulot topildi`;
  if (loadMoreBtn) loadMoreBtn.style.display = all.length > end ? 'inline-flex' : 'none';

  if (visible.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h3>Mahsulot topilmadi</h3>
        <p>Filtrlarni o'zgartirib ko'ring</p>
        <button class="btn-primary sm" onclick="resetFilters()">Filterlarni tozalash</button>
      </div>
    `;
    return;
  }

  container.innerHTML = visible.map(p => createProductCard(p)).join('');
}

function filterProducts() {
  // Category from sidebar checkboxes
  const catChecks = document.querySelectorAll('.filter-block input[type="checkbox"][value="electronics"], .filter-block input[type="checkbox"][value="accessories"], .filter-block input[type="checkbox"][value="clothes"], .filter-block input[type="checkbox"][value="home"], .filter-block input[type="checkbox"][value="sports"]');
  const checkedCats = Array.from(catChecks).filter(c => c.checked).map(c => c.value);
  const allChecked = document.querySelector('.filter-block input[type="checkbox"][value="all"]')?.checked;

  if (!allChecked && checkedCats.length === 1) {
    State.activeFilter = checkedCats[0];
  } else {
    State.activeFilter = 'all';
  }

  // Rating
  const ratingEl = document.querySelector('input[name="rating"]:checked');
  State.ratingFilter = ratingEl ? parseFloat(ratingEl.value) : 0;

  // Search
  const shopSearch = document.getElementById('shopSearchInput');
  State.searchQuery = shopSearch?.value.trim() || '';

  State.shopPage = 1;
  renderShopProducts();
}

function quickFilter(category, btn) {
  State.activeFilter = category;
  State.shopPage = 1;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  btn?.classList.add('active');
  renderShopProducts();
}

function sortProducts(value) {
  State.sortOrder = value;
  renderShopProducts();
}

function loadMore() {
  State.shopPage += 1;
  renderShopProducts();
}

function setView(type) {
  const grid = document.getElementById('shopProducts');
  const gridBtn = document.getElementById('gridViewBtn');
  const listBtn = document.getElementById('listViewBtn');
  if (!grid) return;
  if (type === 'list') {
    grid.classList.add('list-view');
    gridBtn?.classList.remove('active');
    listBtn?.classList.add('active');
  } else {
    grid.classList.remove('list-view');
    gridBtn?.classList.add('active');
    listBtn?.classList.remove('active');
  }
}

function resetFilters() {
  State.activeFilter = 'all';
  State.sortOrder = 'default';
  State.priceMin = 0;
  State.priceMax = 50000000;
  State.ratingFilter = 0;
  State.searchQuery = '';
  State.shopPage = 1;

  const minEl = document.getElementById('priceMin');
  const maxEl = document.getElementById('priceMax');
  if (minEl) minEl.value = 0;
  if (maxEl) maxEl.value = 50000000;

  const shopSearch = document.getElementById('shopSearchInput');
  if (shopSearch) shopSearch.value = '';

  document.querySelectorAll('.filter-block input[type="checkbox"]').forEach(c => { c.checked = false; });
  const allCb = document.querySelector('.filter-block input[type="checkbox"][value="all"]');
  if (allCb) allCb.checked = true;

  const ratingAll = document.querySelector('input[name="rating"][value="0"]');
  if (ratingAll) ratingAll.checked = true;

  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.cat === 'all'));

  updatePriceRange();
  renderShopProducts();
  showToast('Filterlar tozalandi', 'info');
}

/* ──────────────────────────────────────────────
   12. PRODUCT DETAIL MODAL
────────────────────────────────────────────── */
function openProductDetail(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productDetailModal');
  const content = document.getElementById('productDetailContent');
  if (!modal || !content) return;

  const wishlisted = isWishlisted(product.id);
  const discount = product.oldPrice
    ? `<span class="discount-pct lg">-${Math.round((1 - product.price / product.oldPrice) * 100)}%</span>`
    : '';

  content.innerHTML = `
    <div class="detail-layout">
      <div class="detail-img-side">
        <img src="${product.image}" alt="${product.name}" class="detail-main-img">
        <div class="detail-thumbs">
          <img src="${product.image}" alt="" class="detail-thumb active">
        </div>
      </div>
      <div class="detail-info-side">
        <span class="detail-category">${product.category}</span>
        <h2 class="detail-title">${product.name}</h2>
        <div class="detail-rating">
          ${renderStars(product.rating)}
          <span>${product.rating} (${product.reviews} sharh)</span>
        </div>
        <div class="detail-price-wrap">
          <strong class="detail-price">${formatPrice(product.price)}</strong>
          ${product.oldPrice ? `<s class="detail-old-price">${formatPrice(product.oldPrice)}</s>` : ''}
          ${discount}
        </div>
        <p class="detail-desc">${product.description}</p>
        <div class="detail-meta">
          <div class="meta-item"><i class="fas fa-store"></i><span>${product.seller}</span></div>
          <div class="meta-item"><i class="fas fa-${product.inStock ? 'check-circle' : 'times-circle'}"></i>
            <span class="${product.inStock ? 'in-stock' : 'out-stock'}">${product.inStock ? 'Mavjud' : 'Tugagan'}</span></div>
          <div class="meta-item"><i class="fas fa-truck"></i><span>1-2 kun ichida yetkazish</span></div>
          <div class="meta-item"><i class="fas fa-shield-alt"></i><span>14 kun qaytarish kafolati</span></div>
        </div>
        <div class="detail-actions">
          <button class="btn-primary lg" onclick="addToCart(${product.id}); closeModal('productDetailModal')">
            <i class="fas fa-shopping-bag"></i> Savatga qo'shish
          </button>
          <button class="btn-ghost lg wishlist-detail-btn${wishlisted ? ' active' : ''}"
            onclick="toggleWishlist(${product.id}, this)">
            <i class="fas fa-heart"></i>
          </button>
          <button class="btn-ghost lg" onclick="shareProduct(${product.id})">
            <i class="fas fa-share-alt"></i>
          </button>
        </div>
        <button class="btn-contact-seller" onclick="contactSeller('${product.seller}')">
          <i class="fas fa-comments"></i> Sotuvchi bilan bog'lanish
        </button>
      </div>
    </div>
  `;

  openModal('productDetailModal');
}

function contactSeller(sellerName) {
  closeModal('productDetailModal');
  showSection('chat');
  showToast(`💬 ${sellerName} bilan suhbat ochildi`, 'info');
}

function shareProduct(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  if (navigator.share) {
    navigator.share({ title: product.name, text: product.description, url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast('🔗 Havola nusxalandi', 'success');
    });
  }
}

/* ──────────────────────────────────────────────
   13. OFFERS
────────────────────────────────────────────── */
function renderOffers() {
  const grid = document.getElementById('offersGrid');
  if (!grid) return;

  const saleProducts = PRODUCTS.filter(p => p.badge === 'sale');

  grid.innerHTML = saleProducts.map(product => {
    const pct = Math.round((1 - product.price / product.oldPrice) * 100);
    return `
      <div class="offer-card" onclick="openProductDetail(${product.id})">
        <div class="offer-discount-badge">-${pct}%</div>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="offer-info">
          <h3>${product.name}</h3>
          <div class="offer-prices">
            <strong>${formatPrice(product.price)}</strong>
            <s>${formatPrice(product.oldPrice)}</s>
          </div>
          <p class="offer-save">Tejaysiz: ${formatPrice(product.oldPrice - product.price)}</p>
          <button class="btn-primary sm" onclick="event.stopPropagation(); addToCart(${product.id})">
            <i class="fas fa-shopping-bag"></i> Savatga
          </button>
        </div>
      </div>
    `;
  }).join('');
}

/* ──────────────────────────────────────────────
   14. EXCHANGE
────────────────────────────────────────────── */
function renderExchange(listings = EXCHANGE_LISTINGS) {
  const grid = document.getElementById('exchangeGrid');
  if (!grid) return;

  if (listings.length === 0) {
    grid.innerHTML = `<div class="empty-state"><i class="fas fa-search"></i><h3>E'lon topilmadi</h3></div>`;
    return;
  }

  grid.innerHTML = listings.map(item => `
    <div class="exchange-card" onclick="openExchangeDetail(${item.id})">
      <div class="ex-card-img">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <span class="ex-condition-badge">${item.condition}</span>
      </div>
      <div class="ex-card-body">
        <div class="ex-category-tag">${item.category}</div>
        <h3 class="ex-card-title">${item.title}</h3>
        <p class="ex-card-desc">${item.description}</p>
        <div class="ex-card-footer">
          <strong class="ex-price">${formatPrice(item.price)}</strong>
          <div class="ex-seller">
            <div class="ex-avatar" style="background:${item.avatarColor}">${item.avatar}</div>
            <span>${item.seller}</span>
          </div>
        </div>
        <div class="ex-meta">
          <span><i class="fas fa-map-marker-alt"></i> ${item.location}</span>
          <span><i class="fas fa-clock"></i> ${item.time}</span>
        </div>
        <div class="ex-card-actions">
          <button class="btn-primary sm" onclick="event.stopPropagation(); contactExchangeSeller('${item.seller}')">
            <i class="fas fa-comments"></i> Bog'lanish
          </button>
          <button class="btn-ghost sm" onclick="event.stopPropagation(); addExchangeToCart(${item.id})">
            <i class="fas fa-shopping-bag"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function searchExchange() {
  const query = document.getElementById('exSearch')?.value.toLowerCase() || '';
  const cat = document.getElementById('exCatFilter')?.value || '';
  const sort = document.getElementById('exSort')?.value || 'new';

  let result = EXCHANGE_LISTINGS.filter(item => {
    const matchQ = !query || item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query);
    const matchC = !cat || item.category === cat;
    return matchQ && matchC;
  });

  if (sort === 'cheap') result.sort((a, b) => a.price - b.price);
  else if (sort === 'expensive') result.sort((a, b) => b.price - a.price);

  renderExchange(result);
}

function openExchangeDetail(id) {
  const item = EXCHANGE_LISTINGS.find(i => i.id === id);
  if (!item) return;
  showToast(`📋 "${item.title}" — ${formatPrice(item.price)}. Sotuvchi: ${item.seller}`, 'info', 4000);
}

function contactExchangeSeller(seller) {
  showSection('chat');
  showToast(`💬 ${seller} bilan suhbat`, 'info');
}

function addExchangeToCart(id) {
  const item = EXCHANGE_LISTINGS.find(i => i.id === id);
  if (!item) return;
  showToast(`🛒 "${item.title}" savatga qo'shildi`, 'success');
}

/* ──────────────────────────────────────────────
   15. FLASH SALE TIMER
────────────────────────────────────────────── */
function startFlashTimer() {
  const end = Date.now() + (8 * 3600 + 45 * 60) * 1000;

  function tick() {
    const diff = Math.max(0, end - Date.now());
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    const setEl = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = String(val).padStart(2, '0');
    };

    setEl('timerH', h);
    setEl('timerM', m);
    setEl('timerS', s);

    if (diff > 0) requestAnimationFrame(tick);
  }

  tick();
}

/* ──────────────────────────────────────────────
   16. MARQUEE
────────────────────────────────────────────── */
function startMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;
  // CSS animation handles it; this just ensures content doubles for seamless loop
  const clone = track.innerHTML;
  track.innerHTML += clone;
}

/* ──────────────────────────────────────────────
   17. SEARCH
────────────────────────────────────────────── */
function initSearch() {
  const input = document.getElementById('nav-search');
  const popup = document.getElementById('searchPopup');
  if (!input || !popup) return;

  let debounceTimer;

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => performNavSearch(input.value.trim()), 250);
  });

  input.addEventListener('focus', () => {
    if (input.value.trim()) performNavSearch(input.value.trim());
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-search-wrap')) {
      popup.style.display = 'none';
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      popup.style.display = 'none';
      State.searchQuery = input.value.trim();
      State.activeFilter = 'all';
      showSection('shop');
      renderShopProducts();
    }
  });
}

function performNavSearch(query) {
  const popup = document.getElementById('searchPopup');
  if (!query || !popup) { if (popup) popup.style.display = 'none'; return; }

  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.seller.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 6);

  if (results.length === 0) {
    popup.innerHTML = `<div class="search-no-result"><i class="fas fa-search"></i> Hech narsa topilmadi</div>`;
  } else {
    popup.innerHTML = results.map(p => `
      <div class="search-result-item" onclick="openProductDetail(${p.id}); document.getElementById('searchPopup').style.display='none'; document.getElementById('nav-search').value='';">
        <img src="${p.image}" alt="${p.name}">
        <div>
          <span>${p.name}</span>
          <small>${formatPrice(p.price)}</small>
        </div>
      </div>
    `).join('');
  }

  popup.style.display = 'block';
}

/* ──────────────────────────────────────────────
   18. NOTIFICATIONS
────────────────────────────────────────────── */
document.getElementById('notifyBtn')?.addEventListener('click', (e) => {
  e.stopPropagation();
  const panel = document.getElementById('notifyPanel');
  if (panel) panel.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  const panel = document.getElementById('notifyPanel');
  if (panel && !e.target.closest('#notifyPanel') && !e.target.closest('#notifyBtn')) {
    panel.classList.remove('open');
  }
});

function clearNotifications() {
  document.getElementById('notifyList').innerHTML = `
    <div class="empty-notify"><i class="fas fa-bell-slash"></i><p>Bildirishnomalar yo'q</p></div>
  `;
  State.notifications = 0;
  const badge = document.getElementById('notifyCount');
  if (badge) badge.style.display = 'none';
}

/* ──────────────────────────────────────────────
   19. AUTHENTICATION
────────────────────────────────────────────── */
function openAuthModal() {
  openModal('authModal');
}

function switchAuthTab(tab, btn) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  btn?.classList.add('active');
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
}

function loginWithEmail() {
  const email = document.getElementById('loginEmail')?.value.trim();
  const pass = document.getElementById('loginPassword')?.value;

  if (!email || !pass) { showToast('Email va parolni kiriting', 'error'); return; }
  if (!validateEmail(email)) { showToast('Email noto\'g\'ri formatda', 'error'); return; }
  if (pass.length < 6) { showToast('Parol kamida 6 belgi bo\'lishi kerak', 'error'); return; }

  const name = email.split('@')[0];
  setUser({ name, email, avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=c8a96e&color=0a0c10&bold=true&size=128` });
  closeModal('authModal');
  showToast(`👋 Xush kelibsiz, ${name}!`, 'success');
}

function registerWithEmail() {
  const name = document.getElementById('regName')?.value.trim();
  const email = document.getElementById('regEmail')?.value.trim();
  const phone = document.getElementById('regPhone')?.value.trim();
  const pass = document.getElementById('regPassword')?.value;

  if (!name) { showToast('Ismingizni kiriting', 'error'); return; }
  if (!email || !validateEmail(email)) { showToast('Yaroqli email kiriting', 'error'); return; }
  if (!pass || pass.length < 8) { showToast('Parol kamida 8 belgi bo\'lishi kerak', 'error'); return; }

  setUser({ name, email, phone, avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=c8a96e&color=0a0c10&bold=true&size=128` });
  closeModal('authModal');
  showToast(`🎉 Xush kelibsiz, ${name}! Ro'yxatdan o'tdingiz.`, 'success');
}

function loginWithGoogle() {
  const mockName = 'Google Foydalanuvchi';
  setUser({
    name: mockName,
    email: 'user@gmail.com',
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(mockName)}&background=c8a96e&color=0a0c10&bold=true&size=128`
  });
  closeModal('authModal');
  showToast('✅ Google orqali kirildi', 'success');
}

function setUser(user) {
  State.user = user;
  localStorage.setItem('shamm_user', JSON.stringify(user));
  updateUserUI(user);
}

function updateUserUI(user) {
  const loginBtn = document.getElementById('loginBtn');
  const avatarMenu = document.getElementById('avatarMenu');
  const userAvatarNav = document.getElementById('userAvatarNav');
  const profileName = document.getElementById('profileName');
  const profileHandle = document.getElementById('profileHandle');
  const profileAvatar = document.getElementById('profileAvatar');
  const sidebarUsername = document.getElementById('sidebarUsername');

  if (loginBtn) loginBtn.classList.add('hidden');
  if (avatarMenu) avatarMenu.classList.remove('hidden');
  if (userAvatarNav) userAvatarNav.src = user.avatar;
  if (profileName) profileName.textContent = user.name;
  if (profileHandle) profileHandle.textContent = '@' + (user.email?.split('@')[0] || 'user');
  if (profileAvatar) profileAvatar.src = user.avatar;
  if (sidebarUsername) sidebarUsername.textContent = user.name;
}

function restoreUser() {
  if (State.user) updateUserUI(State.user);
}

function logoutApp() {
  State.user = null;
  localStorage.removeItem('shamm_user');

  const loginBtn = document.getElementById('loginBtn');
  const avatarMenu = document.getElementById('avatarMenu');
  if (loginBtn) loginBtn.classList.remove('hidden');
  if (avatarMenu) avatarMenu.classList.add('hidden');

  showSection('home');
  showToast('Tizimdan chiqildi', 'info');
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function togglePass(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.type = input.type === 'password' ? 'text' : 'password';
}

// Avatar dropdown toggle
document.getElementById('userAvatarNav')?.addEventListener('click', (e) => {
  e.stopPropagation();
  document.getElementById('avatarDropdown')?.classList.toggle('open');
});

document.addEventListener('click', () => {
  document.getElementById('avatarDropdown')?.classList.remove('open');
});

/* ──────────────────────────────────────────────
   20. PROFILE
────────────────────────────────────────────── */
function openEditProfile() {
  if (!State.user) { openAuthModal(); return; }
  const u = State.user;
  const editName = document.getElementById('editName');
  const editHandle = document.getElementById('editHandle');
  const editPhone = document.getElementById('editPhone');
  if (editName) editName.value = u.name || '';
  if (editHandle) editHandle.value = u.email?.split('@')[0] || '';
  if (editPhone) editPhone.value = u.phone || '';
  openModal('editProfileModal');
}

function saveProfile() {
  const name = document.getElementById('editName')?.value.trim();
  const handle = document.getElementById('editHandle')?.value.trim();
  const phone = document.getElementById('editPhone')?.value.trim();
  const location = document.getElementById('editLocation')?.value.trim();
  const bio = document.getElementById('editBio')?.value.trim();

  if (!name) { showToast('Ism kiritish majburiy', 'error'); return; }

  State.user = { ...State.user, name, handle, phone, location, bio };
  localStorage.setItem('shamm_user', JSON.stringify(State.user));
  updateUserUI(State.user);
  closeModal('editProfileModal');
  showToast('✅ Profil yangilandi', 'success');
}

function changeAvatar(input) {
  const file = input.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const src = e.target.result;
    const avatar = document.getElementById('profileAvatar');
    const navAvatar = document.getElementById('userAvatarNav');
    if (avatar) avatar.src = src;
    if (navAvatar) navAvatar.src = src;
    if (State.user) {
      State.user.avatar = src;
      localStorage.setItem('shamm_user', JSON.stringify(State.user));
    }
    showToast('📷 Avatar yangilandi', 'success');
  };
  reader.readAsDataURL(file);
}

function openTopUp() {
  showToast('💳 To\'lov tizimi tez orada ishga tushadi', 'info');
}

function shareApp() {
  if (navigator.share) {
    navigator.share({ title: 'Shamm Market', text: 'O\'zbekistonning eng qulay online bozori!', url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => showToast('🔗 Havola nusxalandi', 'success'));
  }
}

/* ──────────────────────────────────────────────
   21. ADD PRODUCT
────────────────────────────────────────────── */
function openAddProduct() {
  if (!State.user) {
    openAuthModal();
    showToast('E\'lon berish uchun tizimga kiring', 'warning');
    return;
  }
  openModal('addProductModal');
}

function submitProduct() {
  const name = document.getElementById('newProductName')?.value.trim();
  const cat = document.getElementById('newProductCat')?.value;
  const price = parseInt(document.getElementById('newProductPrice')?.value || '0');
  const desc = document.getElementById('newProductDesc')?.value.trim();

  if (!name) { showToast('Mahsulot nomini kiriting', 'error'); return; }
  if (!cat)  { showToast('Kategoriya tanlang', 'error'); return; }
  if (!price || price <= 0) { showToast('Narxni to\'g\'ri kiriting', 'error'); return; }
  if (!desc) { showToast('Tavsif yozing', 'error'); return; }

  const newProduct = {
    id: Date.now(),
    name,
    category: cat,
    price,
    oldPrice: null,
    rating: 5.0,
    reviews: 0,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
    badge: 'new',
    description: desc,
    seller: State.user.name,
    inStock: true,
  };

  PRODUCTS.unshift(newProduct);
  closeModal('addProductModal');
  showToast(`✅ "${name}" e'loni muvaffaqiyatli joylashtirildi!`, 'success', 4000);
  renderShopProducts();
  renderFeaturedProducts();

  // Reset form
  ['newProductName','newProductPrice','newProductDesc','newProductLocation'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const cat_el = document.getElementById('newProductCat');
  if (cat_el) cat_el.value = '';
}

/* ──────────────────────────────────────────────
   22. PREMIUM MODAL
────────────────────────────────────────────── */
function openPremiumModal() {
  openModal('premiumModal');
}

function buyPremium(plan) {
  if (!State.user) {
    closeModal('premiumModal');
    openAuthModal();
    showToast('Premium olish uchun avval kiring', 'warning');
    return;
  }
  const price = plan === 'monthly' ? '49,000 UZS' : '390,000 UZS';
  closeModal('premiumModal');
  showToast(`👑 Premium (${price}) muvaffaqiyatli faollashtirildi!`, 'success', 5000);
}

/* ──────────────────────────────────────────────
   23. CHAT
────────────────────────────────────────────── */
function openChat(name, status, color) {
  const view = document.getElementById('activeChatView');
  const empty = document.getElementById('chatEmptyState');
  const avatar = document.getElementById('activeChatAvatar');
  const nameEl = document.getElementById('activeChatName');
  const statusEl = document.getElementById('activeChatStatus');

  if (empty) empty.style.display = 'none';
  if (view) { view.style.display = 'flex'; }
  if (avatar) { avatar.textContent = name[0]; avatar.style.background = color; }
  if (nameEl) nameEl.textContent = name;
  if (statusEl) {
    statusEl.textContent = status;
    statusEl.className = status === 'Online' ? 'status-online' : 'status-offline';
  }

  document.querySelectorAll('.conv-item').forEach(i => i.classList.remove('active'));
  event?.currentTarget?.classList?.add('active');

  // Scroll to bottom
  const area = document.getElementById('messagesArea');
  if (area) area.scrollTop = area.scrollHeight;
}

function closeChatWindow() {
  document.getElementById('activeChatView').style.display = 'none';
  document.getElementById('chatEmptyState').style.display = 'flex';
}

function sendMsg() {
  const input = document.getElementById('msgInput');
  const area = document.getElementById('messagesArea');
  if (!input || !area || !input.value.trim()) return;

  const text = input.value.trim();
  const now = new Date();
  const time = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

  const msgEl = document.createElement('div');
  msgEl.className = 'msg outgoing';
  msgEl.innerHTML = `<p>${escapeHtml(text)}</p><small>${time}</small>`;
  area.appendChild(msgEl);
  input.value = '';
  area.scrollTop = area.scrollHeight;

  // Simulate reply
  setTimeout(() => {
    const replies = [
      'Tushunarliq! Yordam bera olaman.',
      'Yaxshi taklifingiz bor. Ko\'rib chiqamiz.',
      'Ha, albatta! Qanday yordam kerak?',
      'Buyurtmangiz haqida batafsil ma\'lumot bering.',
      'Rahmat xabaringiz uchun! Tez orada javob beramiz.',
    ];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    const replyEl = document.createElement('div');
    replyEl.className = 'msg incoming';
    replyEl.innerHTML = `<p>${reply}</p><small>${time}</small>`;
    area.appendChild(replyEl);
    area.scrollTop = area.scrollHeight;
  }, 1000 + Math.random() * 1500);
}

function searchContacts() {
  const q = document.getElementById('contactSearch')?.value.toLowerCase() || '';
  document.querySelectorAll('.conv-item').forEach(item => {
    const name = item.querySelector('.conv-top span')?.textContent.toLowerCase() || '';
    item.style.display = name.includes(q) ? '' : 'none';
  });
}

/* ──────────────────────────────────────────────
   24. CONTACT FORM
────────────────────────────────────────────── */
function submitContact(e) {
  e.preventDefault();
  showToast('✅ Xabaringiz yuborildi! 24 soat ichida javob beramiz.', 'success', 4000);
  e.target.reset();
}

/* ──────────────────────────────────────────────
   25. MODALS (Generic)
────────────────────────────────────────────── */
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

// Close modals on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
    closeCart();
    closeSidebar();
  }
});

/* ──────────────────────────────────────────────
   26. TOAST NOTIFICATIONS
────────────────────────────────────────────── */
function showToast(message, type = 'info', duration = 3000) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const icons = { success: 'check-circle', error: 'times-circle', warning: 'exclamation-triangle', info: 'info-circle' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="fas fa-${icons[type] || 'info-circle'}"></i>
    <span>${message}</span>
    <button onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
  `;

  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

/* ──────────────────────────────────────────────
   27. UTILITY FUNCTIONS
────────────────────────────────────────────── */
function formatPrice(price) {
  if (price === null || price === undefined) return '';
  return price.toLocaleString('uz-UZ') + ' UZS';
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ──────────────────────────────────────────────
   28. BACK BUTTON SUPPORT
────────────────────────────────────────────── */
window.addEventListener('popstate', () => {
  const hash = window.location.hash.replace('#', '') || 'home';
  if (document.getElementById(hash)) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(hash)?.classList.add('active');
    State.currentSection = hash;
    updateActiveNavLink();
  }
});

/* ──────────────────────────────────────────────
   29. PERFORMANCE: Lazy load images on scroll
────────────────────────────────────────────── */
const lazyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        lazyObserver.unobserve(img);
      }
    }
  });
}, { rootMargin: '200px' });

/* ──────────────────────────────────────────────
   30. SERVICE WORKER (PWA-ready hook)
────────────────────────────────────────────── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // navigator.serviceWorker.register('/sw.js');
  });
}

/* ──────────────────────────────────────────────
   31. HANDLE ANCHOR LINKS IN NAVBAR
────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href').replace('#', '');
    if (document.getElementById(href)) {
      e.preventDefault();
      showSection(href);
    }
  });
});

/* ──────────────────────────────────────────────
   END OF SHAMM MARKET SCRIPT
────────────────────────────────────────────── */