/**
 * SHAMM MARKET - Core Engine 2026
 * Developed by: Sarvarbek
 */

// 1. Ma'lumotlar ombori (Real loyihada bu API orqali keladi)
const PRODUCT_DATA = [
    { id: 1, name: "MacBook Air M3", price: 14500000, category: "electronics", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500", badge: "Top" },
    { id: 2, name: "iPhone 15 Pro", price: 12800000, category: "electronics", img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500", badge: "Yangi" },
    { id: 3, name: "Apple Watch Series 9", price: 5400000, category: "accessories", img: "https://images.unsplash.com/photo-1546868871-70c122467d8b?w=500", badge: "Chegirma" },
    { id: 4, name: "AirPods Max", price: 7200000, category: "electronics", img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500", badge: "" },
    { id: 5, name: "Leather Case", price: 450000, category: "accessories", img: "https://images.unsplash.com/photo-1603313011101-31c726a55dad?w=500", badge: "" },
    { id: 6, name: "Satechi Hub USB-C", price: 980000, category: "accessories", img: "https://images.unsplash.com/photo-1562975078-226f12e2eb19?w=500", badge: "Trend" }
];

// 2. Savatcha holati (Local Storage bilan ishlash)
let cart = JSON.parse(localStorage.getItem('shamm_cart')) || [];

// 3. Platforma boshqaruv obyekti
const ShammMarket = {
    init() {
        this.renderProducts(PRODUCT_DATA);
        this.setupEventListeners();
        this.updateCartUI();
        this.initScrollEffect();
    },

    // Mahsulotlarni ekranga chiqarish (Minimalist dizayn bilan)
    renderProducts(items) {
        const list = document.getElementById('product-list');
        list.innerHTML = ''; // Skeletonni tozalash

        if (items.length === 0) {
            list.innerHTML = `<p class="no-results">Hech narsa topilmadi...</p>`;
            return;
        }

        items.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-img-wrapper">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                    <img src="${product.img}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="category-label">${product.category}</span>
                    <h3>${product.name}</h3>
                    <div class="product-footer">
                        <span class="price">${product.price.toLocaleString()} UZS</span>
                        <button class="add-btn" onclick="ShammMarket.addToCart(${product.id})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            `;
            list.appendChild(card);
        });
    },

    // Savatchaga qo'shish logikasi
    addToCart(id) {
        const product = PRODUCT_DATA.find(p => p.id === id);
        cart.push(product);
        this.saveCart();
        this.updateCartUI();
        this.showToast(`${product.name} savatchaga qo'shildi!`);
    },

    saveCart() {
        localStorage.setItem('shamm_cart', JSON.stringify(cart));
    },

    updateCartUI() {
        const count = document.getElementById('cart-count');
        count.innerText = cart.length;
        // Animatsiya berish
        count.classList.add('bump');
        setTimeout(() => count.classList.remove('bump'), 300);
    },

    // Qidiruv va Filtr
    setupEventListeners() {
        // Qidiruv tizimi
        const searchInput = document.querySelector('.search-box input');
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = PRODUCT_DATA.filter(p => 
                p.name.toLowerCase().includes(term)
            );
            this.renderProducts(filtered);
        });

        // Filtr tugmalari
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                const filtered = filter === 'all' 
                    ? PRODUCT_DATA 
                    : PRODUCT_DATA.filter(p => p.category === filter);
                this.renderProducts(filtered);
            });
        });

        // Mobil Navigatsiya Active holati
        const mobItems = document.querySelectorAll('.mobile-nav-item');
        mobItems.forEach(item => {
            item.addEventListener('click', () => {
                mobItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            });
        });
    },

    // Header skrol effekti
    initScrollEffect() {
        const header = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    },

    // Professional bildirishnoma (Toast)
    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerText = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 500);
            }, 2500);
        }, 100);
    }
};

// Saytni ishga tushirish
document.addEventListener('DOMContentLoaded', () => ShammMarket.init());



const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const mobileSidebar = document.getElementById('mobileSidebar');
const menuOverlay = document.getElementById('menuOverlay');

// Menyuni ochish
menuToggle.addEventListener('click', () => {
    mobileSidebar.classList.add('open');
    menuOverlay.classList.add('show');
});

// Menyuni yopish
const hideMenu = () => {
    mobileSidebar.classList.remove('open');
    menuOverlay.classList.remove('show');
};

closeMenu.addEventListener('click', hideMenu);
menuOverlay.addEventListener('click', hideMenu);

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const menuOverlay = document.getElementById('menuOverlay');

    // Menyuni ochish
    menuToggle.addEventListener('click', () => {
        mobileSidebar.classList.add('open');
        menuOverlay.classList.add('show');
        document.body.style.overflow = 'hidden'; // Orqa fonni qotirish
    });

    // Menyuni yopish funksiyasi
    const hideMenu = () => {
        mobileSidebar.classList.remove('open');
        menuOverlay.classList.remove('show');
        document.body.style.overflow = 'auto';
    };

    closeMenu.addEventListener('click', hideMenu);
    menuOverlay.addEventListener('click', hideMenu);
});

// Savatcha funksiyasi (test uchun)
function toggleCart() {
    alert("Savatcha ochilmoqda...");
}

document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll('.mobile-nav-item');
    const sections = document.querySelectorAll('.main-page');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Agar bu havola bo'lsa (a tegi), default sakrashni to'xtatamiz
            const href = this.getAttribute('href');
            if(!href && !this.classList.contains('exchange-main')) return;

            const targetId = href ? href.replace('#', '') : 'exchange';

            // 1. Hamma sectionlarni yashirish
            sections.forEach(sec => sec.style.display = 'none');

            // 2. Tanlangan sectionni ko'rsatish
            const targetSection = document.getElementById(targetId);
            if(targetSection) {
                targetSection.style.display = 'block';
                window.scrollTo(0, 0); // Sahifani tepaga qaytarish
            }

            // 3. Aktiv klasni yangilash
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// 1. Qidiruv funksiyasi (Search)
function searchFunction() {
    let input = document.getElementById('main-search').value.toLowerCase();
    let cards = document.getElementsByClassName('item-card');

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// 2. Kategoriya bo'yicha filterlash
function filterCategory(cat) {
    let cards = document.getElementsByClassName('item-card');
    for (let i = 0; i < cards.length; i++) {
        let cardCat = cards[i].getAttribute('data-cat');
        if (cat === 'all' || cardCat === cat) {
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    }
    // Agar Yordam yoki Premium bo'lsa, alohida logic yozish mumkin
    if(cat === 'help') alert("Yordam markaziga xush kelibsiz!");
}



// 4. Premium funksiyasi
function openPremium() {
    confirm("Premium tarifiga o'tishni xohlaysizmi? (Oyiga 50,000 so'm)");
}

function logoutApp() {
    if(confirm("Tizimdan chiqmoqchimisiz?")) {
        // Chiqish mantiqi (masalan, login sahifasiga yo'naltirish)
        alert("Siz tizimdan chiqdingiz!");
        window.location.reload(); 
    }
}

// Balansni to'ldirish funksiyasi
document.querySelector('.add-funds-btn')?.addEventListener('click', () => {
    let amount = prompt("To'ldirish summasini kiriting (UZS):");
    if(amount) {
        alert(amount + " so'm uchun to'lov sahifasiga o'tilmoqda...");
    }
});

// Chatni ochish
function openConversation(name, status) {
    document.getElementById('active-chat-window').style.display = 'flex';
    document.getElementById('chat-with-name').innerText = name;
    document.getElementById('chat-with-status').innerText = status;
}

// Chatni yopish
function closeConversation() {
    document.getElementById('active-chat-window').style.display = 'none';
}

// Xabar yuborish
function sendMessage() {
    const input = document.getElementById('msg-input');
    const container = document.getElementById('messages-container');
    
    if (input.value.trim() !== "") {
        const newMsg = document.createElement('div');
        newMsg.className = 'msg outgoing';
        newMsg.innerText = input.value;
        container.appendChild(newMsg);
        
        input.value = ""; // Inputni tozalash
        container.scrollTop = container.scrollHeight; // Avtomatik pastga tushish
    }
}

// Enter bosilganda ham xabar ketsin
document.getElementById('msg-input')?.addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendMessage();
});

// Filtrlash va Saralash funksiyasi
document.getElementById('sort-price')?.addEventListener('change', function() {
    alert("Saralash usuli: " + this.value);
    // Bu yerda real ma'lumotlarni massivdan saralash kodi bo'ladi
});

// Maxsulot qo'shish oynasini chaqirish
function openAddProduct() {
    const productName = prompt("Sotmoqchi bo'lgan mahsulotingiz nomi:");
    if(productName) {
        alert(productName + " muvaffaqiyatli moderatorga yuborildi!");
    }
}

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        // Avval hamma elementlardan active klassini o'chirib chiqamiz
        navItems.forEach(nav => nav.classList.remove('active'));
        
        // Bosilgan elementga active klassini qo'shamiz
        this.classList.add('active');
    });
});

function filterProducts(input) {
    // 1. Elementni tekshirish (Undefined xatosini yo'qotadi)
    const searchInput = input || document.querySelector('input[onkeyup*="filterProducts"]');
    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase().trim();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        // 2. Elementlar borligini tekshirish (Null xatosini yo'qotadi)
        const titleEl = card.querySelector('h4') || card.querySelector('.product-name');
        const catEl = card.querySelector('.category-label') || card.querySelector('.electronics');

        const title = titleEl ? titleEl.innerText.toLowerCase() : "";
        const category = catEl ? catEl.innerText.toLowerCase() : "";

        // 3. Qidiruv mantiqi
        if (title.includes(searchTerm) || category.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
// 2. Kategoriya bo'yicha filterlash
function filterCat(category, btn) {
    // Tugma stilini yangilash
    document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    let cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// 3. Savatga qo'shish
let cartItems = 0;
function addToCart(name) {
    cartItems++;
    document.getElementById('cart-count').innerText = cartItems;
    alert(name + " savatchaga qo'shildi!");
}

// 4. Layk tugmasi
function toggleLike(btn) {
    const icon = btn.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.replace('far', 'fas');
        btn.style.color = "#ff4757";
    } else {
        icon.classList.replace('fas', 'far');
        btn.style.color = "#ccc";
    }
}

// Qidiruv funksiyasi - Xatolardan himoyalangan versiya
function searchProducts() {
    // 1. Inputni tekshirish
    const searchInput = document.getElementById('shop-search-input');
    if (!searchInput) return; 

    const searchTerm = searchInput.value.toLowerCase().trim();
    
    // 2. Barcha mahsulot kartochkalarini tanlab olish
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        // Elementlar borligini tekshiramiz (Xatolikni oldini olish uchun)
        const nameEl = card.querySelector('h4');
        const catEl = card.querySelector('.category-label');

        // Agar elementlar topilsa tekstini olamiz, aks holda bo'sh joy
        const productName = nameEl ? nameEl.innerText.toLowerCase() : "";
        const productCat = catEl ? catEl.innerText.toLowerCase() : "";

        // 3. Qidiruv mantiqi
        if (productName.includes(searchTerm) || productCat.includes(searchTerm)) {
            card.style.display = "block";
            // Animatsiya faqat yangi ko'ringanda ishlashi uchun
            if (searchTerm !== "") {
                card.style.animation = "fadeIn 0.3s ease";
            }
        } else {
            card.style.display = "none";
        }
    });
}
// Inputga "keyup" hodisasini ulash
document.getElementById('shop-search-input').addEventListener('keyup', searchProducts);

// 2. Saralash funksiyasi (Sort)
function sortItems(criteria) {
    const container = document.getElementById('exchange-items');
    const cards = Array.from(container.querySelectorAll('.ex-card-premium'));

    cards.sort((a, b) => {
        const priceA = parseInt(a.getAttribute('data-price'));
        const priceB = parseInt(b.getAttribute('data-price'));

        if (criteria === 'cheap') {
            return priceA - priceB; // Arzonidan qimmatiga
        } else if (criteria === 'expensive') {
            return priceB - priceA; // Qimmatidan arzoniga
        } else {
            return 0; // 'new' holati uchun (tartibni o'zgartirmaydi)
        }
    });

    // Tartiblangan kartochkalarni konteynerga qayta joylashtiramiz
    cards.forEach(card => container.appendChild(card));
}

// 3. Layk (Favorite) tugmasi uchun kichik funksiya
document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        icon.classList.toggle('far');
        icon.classList.toggle('fas');
        this.style.color = icon.classList.contains('fas') ? '#ff4757' : '#ccc';
    });
});

function searchExchange(input) {
    // 1. Inputni tekshirish (Undefined xatosini yo'qotadi)
    if (!input || typeof input.value === 'undefined') return;

    const searchTerm = input.value.toLowerCase().trim();
    // 2. Savdo bo'limidagi barcha premium kartochkalarni olish
    const cards = document.querySelectorAll('.ex-card-premium');

    cards.forEach(card => {
        // 3. Atribut yoki sarlavhani xavfsiz olish (Null xatosini yo'qotadi)
        const titleAttr = card.getAttribute('data-title');
        const h5Element = card.querySelector('h5');
        
        // Agar data-title bo'lsa shuni, bo'lmasa h5 tekstini oladi
        const title = (titleAttr || (h5Element ? h5Element.innerText : "")).toLowerCase();

        // 4. Qidiruv natijasini ko'rsatish
        if (title.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// 1. Ismni tahrirlash funksiyasi
function editProfile() {
    const newName = prompt("Yangi ismingizni kiriting:", document.getElementById('userNameDisplay').innerText);
    const newUsername = prompt("Yangi ID (@username) kiriting:", document.getElementById('userHandle').innerText);
    
    if (newName) document.getElementById('userNameDisplay').innerText = newName;
    if (newUsername) document.getElementById('userHandle').innerText = newUsername;
    
    // Bu yerda Firebase-ga saqlash kodini yozishingiz mumkin
    console.log("Ma'lumotlar yangilandi!");
}



// Balansni chiroyli sanab chiqarish (Counter effect)
function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let minTimer = 50;
    let stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, minTimer);
    let startTime = new Date().getTime();
    let endTime = startTime + duration;
    let timer;

    function run() {
        let now = new Date().getTime();
        let remaining = Math.max((endTime - now) / duration, 0);
        let value = Math.round(end - (remaining * range));
        obj.innerHTML = value.toLocaleString();
        if (value == end) {
            clearInterval(timer);
        }
    }
    timer = setInterval(run, stepTime);
}

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(e) {
        // Sahifa almashish mantiqi
        const pageName = this.querySelector('.menu-text').innerText;
        console.log(pageName + " sahifasiga o'tilmoqda...");
        
        // Masalan, silliq o'tish effekti bilan:
        document.body.style.opacity = '0';
        setTimeout(() => {
            // Bu yerda haqiqiy sahifaga yo'naltirish
            // window.location.href = 'my-products.html';
        }, 300);
    });
});




async function addProductToBackend(name, price, description, file) {
    try {
        // 1. Rasmni yuklash
        const storageRef = ref(storage, `products/${Date.now()}_${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        const imageUrl = await getDownloadURL(snapshot.ref);

        // 2. Ma'lumotlarni Firestore-ga yozish
        const docRef = await addDoc(collection(db, "products"), {
            name: name,
            price: Number(price),
            description: description,
            image: imageUrl,
            createdAt: serverTimestamp()
        });

        console.log("Mahsulot ID bilan saqlandi: ", docRef.id);
        return true;
    } catch (error) {
        console.error("Xato: ", error);
        return false;
    }
}


async function loadProducts() {
    const shopGrid = document.getElementById('shopGrid'); // Mahsulotlar chiqadigan joy
    shopGrid.innerHTML = ''; // Tozalash

    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        const product = doc.data();
        const cardHTML = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p>${product.price.toLocaleString()} UZS</p>
                <button onclick="orderProduct('${doc.id}')">Sotib olish</button>
            </div>
        `;
        shopGrid.insertAdjacentHTML('beforeend', cardHTML);
    });
}


// script.js faylining oxiriga qo'shing
window.toggleCart = function() {
    const cart = document.getElementById('cartDrawer'); // Savatcha ID-si
    cart.classList.toggle('active');
};

window.openPremium = function() {
    alert("Premium xususiyatlar tez kunda!");
    // Bu yerda premium modalini ochish mantiqi bo'ladi
};

import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Xabar yuborish
window.sendMessage = async function() {
    const msgInput = document.getElementById('chatInput');
    const message = msgInput.value;

    if (message.trim() !== "") {
        await addDoc(collection(db, "chats"), {
            text: message,
            sender: "Sarvar", // Kelajakda Auth-dan olinadi
            createdAt: serverTimestamp()
        });
        msgInput.value = ""; // Inputni tozalash
    }
};

// Xabarlarni real-time eshitish
const q = query(collection(db, "chats"), orderBy("createdAt", "asc"));

onSnapshot(q, (snapshot) => {
    const chatBox = document.getElementById('chatMessages');
    chatBox.innerHTML = ""; // Oldingi xabarlarni tozalab qayta chizamiz

    snapshot.forEach((doc) => {
        const data = doc.data();
        const msgDiv = document.createElement('div');
        msgDiv.className = data.sender === "Sarvar" ? "my-msg" : "other-msg";
        msgDiv.innerHTML = `<b>${data.sender}:</b> ${data.text}`;
        chatBox.appendChild(msgDiv);
    });
    
    // Pastga avtomatik tushirish (scroll)
    chatBox.scrollTop = chatBox.scrollHeight;
});