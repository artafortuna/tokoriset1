// Anda bisa menyimpan default link logo jika ingin, namun jika sudah upload lokal akan tergantikan.
const APP_LOGO = "https://raw.githubusercontent.com/artafortuna/website1/main/1779374078922.png";

let storeData = {
    logoUrl: "",
    faviconUrl: "",
    whatsapp: "6281234567890",
    marquee: "Selamat datang di Arta Fortuna! Top up murah, aman, dan tepercaya.",
    flashSaleEnd: "",
    banners: [
        "https://via.placeholder.com/1200x350/10b981/ffffff?text=Promo+Arta+Fortuna+1",
        "https://via.placeholder.com/1200x350/059669/ffffff?text=Top+Up+Game+Murah+2",
        "https://via.placeholder.com/1200x350/10b981/ffffff?text=Pulsa+All+Operator+3",
        "https://via.placeholder.com/1200x350/065f46/ffffff?text=Layanan+24+Jam+4",
        "https://via.placeholder.com/1200x350/10b981/ffffff?text=Diskon+Akhir+Pekan+5"
    ],
    customerCarousel: Array.from({ length: 8 }, () => ""),
    products: [],
    cs: { wa: "", tele: "", ig: "", x: "", tk: "", fb: "", email: "", address: "" },
    soc: { wa: "", tele: "", ig: "", x: "", tk: "", fb: "" },
    legal: {
        privacy: "Informasi Kebijakan Privasi Toko belum diatur.",
        terms: "Informasi Syarat & Ketentuan belum diatur.",
        refund: "Informasi Kebijakan Pengembalian Dana belum diatur.",
        faq: "Daftar Tanya Jawab belum diatur."
    },
    features: {
        heading: "ARTA FORTUNA : WEBSITE TOPUP GAME & VOUCHER TEPERCAYA DI INDONESIA",
        desc: "Setiap harinya, ribuan gamers di Indonesia menggunakan ARTA FORTUNA untuk melakukan topup game dengan cepat dan lancar, tanpa perlu daftar atau login.",
        items: [
            { icon: "fa-solid fa-check-double", title: "Jujur & Tepercaya", desc: "Setiap hari ada ribuan transaksi topup game atau pembelian voucher yang dilakukan oleh pelanggan kami." },
            { icon: "fa-solid fa-bolt", title: "Pengiriman Instan", desc: "Hanya butuh beberapa detik saja untuk menyelesaikan transaksi Anda. Semua proses kami berjalan secara otomatis." },
            { icon: "fa-solid fa-percent", title: "Promosi Menarik", desc: "Dapatkan promo harga terbaik yang bisa Anda nikmati." },
            { icon: "fa-solid fa-wallet", title: "Pembayaran Lengkap", desc: "Kami menawarkan pilihan pembayaran mulai dari transfer bank, e-Wallet, hingga QRIS." },
            { icon: "fa-solid fa-thumbs-up", title: "Pasti Lebih Murah", desc: "Top up game favorit Anda dengan harga yang pastinya lebih murah dibandingkan website topup lainnya." },
            { icon: "fa-brands fa-whatsapp", title: "Layanan CS 24 Jam", desc: "Customer Support kami siap membantu Anda setiap hari dalam 24 jam via WhatsApp." }
        ]
    }
};

let currentCategory = "Pulsa";
let currentOperator = "Telkomsel";
let slideInterval;
let countdownInterval;

const dbName = "ArtaFortunaDB";
const storeName = "appData";
let db;

function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);
        request.onupgradeneeded = (e) => {
            db = e.target.result;
            if (!db.objectStoreNames.contains(storeName)) db.createObjectStore(storeName);
        };
        request.onsuccess = (e) => { db = e.target.result; resolve(); };
        request.onerror = (e) => reject(e.target.error);
    });
}

function saveToDB(data) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction([storeName], "readwrite");
        tx.objectStore(storeName).put(data, "storeData");
        tx.oncomplete = () => resolve();
        tx.onerror = (e) => reject(e.target.error);
    });
}

function loadFromDB() {
    return new Promise((resolve, reject) => {
        const tx = db.transaction([storeName], "readonly");
        const request = tx.objectStore(storeName).get("storeData");
        request.onsuccess = (e) => resolve(e.target.result);
        request.onerror = (e) => reject(e.target.error);
    });
}

function normalizeCustomerCarousel(saved) {
    const arr = Array.isArray(saved) ? saved : [];
    const out = Array.from({ length: 8 }, (_, i) => (arr[i] ? arr[i] : ""));
    return out;
}

function renderCustomerCarousel() {
    const wrap = document.getElementById('customer-carousel-wrap');
    const track = document.getElementById('customer-carousel-track');
    if (!wrap || !track) return;

    const items = (storeData.customerCarousel || []).filter(Boolean);
    if (!items.length) {
        wrap.style.display = 'none';
        track.innerHTML = '';
        return;
    }

    const duplicated = [...items, ...items];
    track.innerHTML = duplicated.slice(0, items.length * 2).map(src => `
        <div class="customer-carousel-item">
            <img src="${src}" alt="carousel item">
        </div>
    `).join('');

    const isCustomerMode = document.getElementById('customer-view').style.display !== 'none';
    wrap.style.display = isCustomerMode ? 'block' : 'none';
}

function setCustomerOnlyVisibility(isCustomerMode) {
    const promoWrap = document.getElementById('promo-marquee-container');
    const custCarouselWrap = document.getElementById('customer-carousel-wrap');
    const featuresWrap = document.getElementById('customer-features-wrap');

    if (promoWrap) promoWrap.style.display = isCustomerMode ? 'block' : 'none';
    
    if (featuresWrap) {
        const hasFeatTitle = storeData.features && storeData.features.heading;
        featuresWrap.style.display = (isCustomerMode && hasFeatTitle) ? 'block' : 'none';
    }
    
    if (custCarouselWrap) {
        const items = (storeData.customerCarousel || []).filter(Boolean);
        custCarouselWrap.style.display = (isCustomerMode && items.length > 0) ? 'block' : 'none';
    }
}

async function init() {
    try {
        await initDB();
        const saved = await loadFromDB();
        if (saved) {
            storeData = { ...storeData, ...saved };
            storeData.cs = { ...{ wa: "", tele: "", ig: "", x: "", tk: "", fb: "", email: "", address: "" }, ...(saved.cs || {}) };
            storeData.soc = { ...{ wa: "", tele: "", ig: "", x: "", tk: "", fb: "" }, ...(saved.soc || {}) };
            storeData.legal = { ...storeData.legal, ...(saved.legal || {}) };
            storeData.features = { ...storeData.features, ...(saved.features || {}) };
            storeData.customerCarousel = normalizeCustomerCarousel(saved.customerCarousel);

            storeData.products = (saved.products || []).map(p => {
                if (!p.category) p.category = "Pulsa";
                return p;
            });
        }
    } catch (error) { console.error(error); }

    populateDatalists();
    renderCustomer();
    populateAdmin();
    setCustomerOnlyVisibility(true);
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('theme-toggle').innerText = isDark ? '☀️' : '🌙';
}

function toggleView() {
    const cust = document.getElementById('customer-view');
    const adm = document.getElementById('admin-view');
    const btn = document.getElementById('toggle-view-btn');

    const toAdmin = adm.style.display === 'none';
    if (toAdmin) {
        cust.style.display = 'none';
        adm.style.display = 'block';
        btn.innerText = 'Mode Customer';
        populateAdmin();
        setCustomerOnlyVisibility(false);
    } else {
        adm.style.display = 'none';
        cust.style.display = 'block';
        btn.innerText = 'Mode Admin';
        renderCustomer();
        setCustomerOnlyVisibility(true);
    }
}

function switchAdminPage(pageId, element) {
    const pages = document.querySelectorAll('.admin-page');
    pages.forEach(page => page.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');

    if (element) {
        const menuItems = document.querySelectorAll('#admin-menu li');
        menuItems.forEach(item => item.classList.remove('active'));
        element.classList.add('active');
    }
}

function renderCustomer() {
    const logoImg = document.getElementById('header-logo');
    const headerText = document.getElementById('header-text');

    // 1. RENDER LOGO (Prioritaskan logo lokal, lalu default)
    headerText.style.animation = 'none';
    setTimeout(() => { headerText.style.animation = ''; }, 10);

    if (storeData.logoUrl && storeData.logoUrl.trim() !== "") {
        logoImg.src = storeData.logoUrl; 
        logoImg.style.display = 'block'; 
        headerText.innerText = 'ARTA FORTUNA';
    } else if (APP_LOGO && APP_LOGO.trim() !== "") {
        logoImg.src = APP_LOGO; 
        logoImg.style.display = 'block'; 
        headerText.innerText = 'ARTA FORTUNA';
    } else {
        logoImg.style.display = 'none'; 
        headerText.innerText = '⚡ ARTA FORTUNA';
    }

    // 2. RENDER FAVICON DARI LOKAL
    if (storeData.faviconUrl && storeData.faviconUrl.trim() !== "") {
        const favIcon = document.getElementById('dynamic-favicon');
        if (favIcon) favIcon.href = storeData.faviconUrl;
    }

    document.getElementById('promo-marquee').innerText = storeData.marquee;

    const slider = document.getElementById('banner-slider');
    slider.innerHTML = '';
    storeData.banners.forEach((src, idx) => {
        slider.innerHTML += `<img src="${src}" class="banner-slide ${idx === 0 ? 'active' : ''}">`;
    });
    startSlider();

    const trendingSec = document.getElementById('trending-section');
    const trendingGrid = document.getElementById('trending-product-grid');
    const trendingProducts = storeData.products.filter(p => p.isActive !== false && p.isTrending);

    if (trendingProducts.length > 0) {
        trendingGrid.innerHTML = '';
        trendingProducts.forEach(p => { trendingGrid.innerHTML += generateProductHTML(p); });
        trendingSec.style.display = "block";
    } else {
        trendingSec.style.display = "none";
    }

    const flashSec = document.getElementById('flash-sale-section');
    const flashGrid = document.getElementById('flash-product-grid');
    const flashProducts = storeData.products.filter(p => p.isActive !== false && p.isFlashSale);

    let isFlashSaleActive = false;
    if (storeData.flashSaleEnd) {
        const end = new Date(storeData.flashSaleEnd).getTime();
        const now = new Date().getTime();
        if (end - now > 0) { isFlashSaleActive = true; }
    }

    if (flashProducts.length > 0 && isFlashSaleActive) {
        flashGrid.innerHTML = '';
        flashProducts.forEach(p => { flashGrid.innerHTML += generateProductHTML(p); });
        flashSec.style.display = "block";
        startCountdown();
    } else {
        flashSec.style.display = "none";
        clearInterval(countdownInterval);
    }

    const activeProducts = storeData.products.filter(p => p.isActive !== false);
    const categories = [...new Set(activeProducts.map(p => p.category))];
    if (!categories.includes(currentCategory) && categories.length > 0) currentCategory = categories[0];

    const searchQ = (document.getElementById('customer-search')?.value || '').trim().toLowerCase();

    const catBox = document.getElementById('category-tabs');
    catBox.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `cat-btn ${cat === currentCategory ? 'active' : ''}`;
        btn.innerText = cat;
        btn.onclick = () => { currentCategory = cat; currentOperator = null; renderCustomer(); };
        catBox.appendChild(btn);
    });

    const catProductsAll = activeProducts.filter(p => p.category === currentCategory);
    const operators = [...new Set(catProductsAll.map(p => p.operator))];
    if (!operators.includes(currentOperator) && operators.length > 0) currentOperator = operators[0];

    const tabBox = document.getElementById('operator-tabs');
    tabBox.innerHTML = '';
    operators.forEach(op => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${op === currentOperator ? 'active' : ''}`;
        btn.innerText = op;
        btn.onclick = () => { currentOperator = op; renderCustomer(); };
        tabBox.appendChild(btn);
    });

    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    let filtered = catProductsAll.filter(p => p.operator === currentOperator);

    if (searchQ) {
        filtered = filtered.filter(p => {
            const hay = [
                p.category, p.operator, p.nominal, p.description || '', String(p.price ?? '')
            ].join(' ').toLowerCase();
            return hay.includes(searchQ);
        });
    }

    filtered.sort((a, b) => {
        let numA = parseInt(a.nominal.replace(/\D/g, '')) || 0;
        let numB = parseInt(b.nominal.replace(/\D/g, '')) || 0;
        return numA - numB;
    });

    filtered.forEach(p => { grid.innerHTML += generateProductHTML(p); });

    // Render Fitur Unggulan
    const featContainer = document.getElementById('features-container');
    if (featContainer && storeData.features && storeData.features.heading) {
        let itemsHtml = storeData.features.items.map(item => `
            <div class="feature-card">
                <i class="${item.icon} feature-icon"></i>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `).join('');

        featContainer.innerHTML = `
            <h2 class="features-heading">${storeData.features.heading}</h2>
            <p class="features-desc">${storeData.features.desc}</p>
            <div class="features-grid">
                ${itemsHtml}
            </div>
        `;
    }

    renderCustomerCarousel();

    // RENDER CS & SOSMED BARU (HANYA IKON BENTUK BULAT)
    const contactSec = document.getElementById('customer-contact');
    let contactHtml = "";

    const hasCs = Object.values(storeData.cs).some(val => val.trim() !== "");
    const hasSoc = Object.values(storeData.soc).some(val => val.trim() !== "");

    if (hasCs || hasSoc) {
        contactHtml += `
            <div style="display:flex; flex-direction:column; gap:20px;">
        `;
        
        // Blok CS
        if (hasCs) {
            contactHtml += `<div><h3>Hubungi Layanan CS Kami</h3><div class="contact-icon-grid">`;
            if (storeData.cs.wa) contactHtml += `<a href="${formatLink(storeData.cs.wa)}" target="_blank" class="contact-icon-btn wa" title="WhatsApp CS"><i class="fa-brands fa-whatsapp"></i></a>`;
            if (storeData.cs.tele) contactHtml += `<a href="${formatLink(storeData.cs.tele, 'tele')}" target="_blank" class="contact-icon-btn tele" title="Telegram CS"><i class="fa-brands fa-telegram"></i></a>`;
            if (storeData.cs.ig) contactHtml += `<a href="${formatLink(storeData.cs.ig, 'ig')}" target="_blank" class="contact-icon-btn ig" title="Instagram CS"><i class="fa-brands fa-instagram"></i></a>`;
            if (storeData.cs.x) contactHtml += `<a href="${formatLink(storeData.cs.x, 'x')}" target="_blank" class="contact-icon-btn x" title="X (Twitter) CS"><i class="fa-brands fa-x-twitter"></i></a>`;
            if (storeData.cs.tk) contactHtml += `<a href="${formatLink(storeData.cs.tk, 'tk')}" target="_blank" class="contact-icon-btn tk" title="TikTok CS"><i class="fa-brands fa-tiktok"></i></a>`;
            if (storeData.cs.fb) contactHtml += `<a href="${formatLink(storeData.cs.fb)}" target="_blank" class="contact-icon-btn fb" title="Facebook CS"><i class="fa-brands fa-facebook-f"></i></a>`;
            if (storeData.cs.email) contactHtml += `<a href="mailto:${storeData.cs.email}" target="_blank" class="contact-icon-btn email" title="Email CS"><i class="fa-solid fa-envelope"></i></a>`;
            contactHtml += `</div></div>`;
        }

        // Blok Sosmed
        if (hasSoc) {
            contactHtml += `<div><h3>Ikuti Sosial Media Kami</h3><div class="contact-icon-grid">`;
            if (storeData.soc.wa) contactHtml += `<a href="${formatLink(storeData.soc.wa)}" target="_blank" class="contact-icon-btn wa" title="WhatsApp Sosmed"><i class="fa-brands fa-whatsapp"></i></a>`;
            if (storeData.soc.tele) contactHtml += `<a href="${formatLink(storeData.soc.tele, 'tele')}" target="_blank" class="contact-icon-btn tele" title="Telegram Sosmed"><i class="fa-brands fa-telegram"></i></a>`;
            if (storeData.soc.ig) contactHtml += `<a href="${formatLink(storeData.soc.ig, 'ig')}" target="_blank" class="contact-icon-btn ig" title="Instagram Sosmed"><i class="fa-brands fa-instagram"></i></a>`;
            if (storeData.soc.x) contactHtml += `<a href="${formatLink(storeData.soc.x, 'x')}" target="_blank" class="contact-icon-btn x" title="X (Twitter) Sosmed"><i class="fa-brands fa-x-twitter"></i></a>`;
            if (storeData.soc.tk) contactHtml += `<a href="${formatLink(storeData.soc.tk, 'tk')}" target="_blank" class="contact-icon-btn tk" title="TikTok Sosmed"><i class="fa-brands fa-tiktok"></i></a>`;
            if (storeData.soc.fb) contactHtml += `<a href="${formatLink(storeData.soc.fb)}" target="_blank" class="contact-icon-btn fb" title="Facebook Sosmed"><i class="fa-brands fa-facebook-f"></i></a>`;
            contactHtml += `</div></div>`;
        }

        contactHtml += `</div>`;

        if (storeData.cs.address) {
            contactHtml += `<div class="contact-address"><i class="fa-solid fa-location-dot" style="color:var(--primary); margin-right:5px;"></i> ${storeData.cs.address}</div>`;
        }

        contactSec.innerHTML = contactHtml;
        contactSec.style.display = "block";
    } else {
        contactSec.style.display = "none";
    }
}

function generateProductHTML(p) {
    const descHtml = (p.description && p.description.trim() !== "") ? `<div class="product-desc">${p.description}</div>` : ``;
    const detailPesanan = p.description ? ` (${p.description})` : '';
    const waMsg = `Halo Arta Fortuna, saya mau beli ${p.category} ${p.operator} - ${p.nominal}${detailPesanan} seharga Rp ${p.price.toLocaleString('id-ID')}`;
    const waLink = `https://wa.me/${storeData.whatsapp}?text=${encodeURIComponent(waMsg)}`;

    let badges = "";
    if (p.isFlashSale) badges += `<div class="badge-flash">⚡</div>`;
    if (p.isTrending) badges += `<div class="badge-trending">🔥</div>`;

    return `
        <div class="product-card">
            ${badges}
            <div>
                <div class="product-nominal">${p.nominal}</div>
                ${descHtml}
            </div>
            <span class="product-price">Rp ${p.price.toLocaleString('id-ID')}</span>
            <a href="${waLink}" target="_blank" class="btn-buy"><i class="fa-brands fa-whatsapp"></i> Beli</a>
        </div>
    `;
}

function startCountdown() {
    clearInterval(countdownInterval);
    const end = new Date(storeData.flashSaleEnd).getTime();

    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = end - now;

        if (distance <= 0) {
            document.getElementById('countdown-timer').innerText = "WAKTU HABIS";
            clearInterval(countdownInterval);
            document.getElementById('flash-sale-section').style.display = "none";
            return;
        }

        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        const fH = h < 10 ? "0" + h : h;
        const fM = m < 10 ? "0" + m : m;
        const fS = s < 10 ? "0" + s : s;

        document.getElementById('countdown-timer').innerText = `${fH}j ${fM}m ${fS}s`;
    }, 1000);
}

function formatLink(input, type) {
    if (input.startsWith("http")) return input;
    if (type === 'tele') return `https://t.me/${input.replace('@', '')}`;
    if (type === 'ig') return `https://instagram.com/${input.replace('@', '')}`;
    if (type === 'x') return `https://twitter.com/${input.replace('@', '')}`;
    if (type === 'tk') return `https://tiktok.com/@${input.replace('@', '')}`;
    if (input.includes('@')) return `mailto:${input}`;
    return `https://wa.me/${input}`;
}

function startSlider() {
    clearInterval(slideInterval);
    let slides = document.querySelectorAll('.banner-slide');
    if (slides.length === 0) return;
    let currentIndex = 0;

    slideInterval = setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 7000);
}

function openModal(type) {
    const modal = document.getElementById('legal-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');

    if (type === 'privacy') { title.innerText = "Kebijakan Privasi"; body.innerHTML = storeData.legal.privacy; }
    else if (type === 'terms') { title.innerText = "Syarat & Ketentuan"; body.innerHTML = storeData.legal.terms; }
    else if (type === 'refund') { title.innerText = "Refund Policy"; body.innerHTML = storeData.legal.refund; }
    else if (type === 'faq') { title.innerText = "FAQ (Tanya Jawab)"; body.innerHTML = storeData.legal.faq; }

    modal.style.display = 'flex';
}
function closeModal() { document.getElementById('legal-modal').style.display = 'none'; }

function populateAdmin() {
    document.getElementById('admin-wa').value = storeData.whatsapp;
    document.getElementById('admin-marquee').value = storeData.marquee;
    document.getElementById('admin-flash-end').value = storeData.flashSaleEnd;
    
    // Fitur Unggulan
    if (storeData.features) {
        document.getElementById('feat-heading').value = storeData.features.heading || "";
        document.getElementById('feat-desc').value = storeData.features.desc || "";
        for(let i = 0; i < 6; i++) {
            if (storeData.features.items[i]) {
                document.getElementById(`feat-t-${i+1}`).value = storeData.features.items[i].title;
                document.getElementById(`feat-d-${i+1}`).value = storeData.features.items[i].desc;
            }
        }
    }

    document.getElementById('cs-wa').value = storeData.cs.wa;
    document.getElementById('cs-tele').value = storeData.cs.tele;
    document.getElementById('cs-ig').value = storeData.cs.ig;
    document.getElementById('cs-x').value = storeData.cs.x;
    document.getElementById('cs-tk').value = storeData.cs.tk;
    document.getElementById('cs-fb').value = storeData.cs.fb;
    document.getElementById('cs-email').value = storeData.cs.email;
    document.getElementById('cs-address').value = storeData.cs.address;

    document.getElementById('soc-wa').value = storeData.soc.wa;
    document.getElementById('soc-tele').value = storeData.soc.tele;
    document.getElementById('soc-ig').value = storeData.soc.ig;
    document.getElementById('soc-x').value = storeData.soc.x;
    document.getElementById('soc-tk').value = storeData.soc.tk;
    document.getElementById('soc-fb').value = storeData.soc.fb;

    document.getElementById('legal-privacy').value = storeData.legal.privacy;
    document.getElementById('legal-terms').value = storeData.legal.terms;
    document.getElementById('legal-refund').value = storeData.legal.refund;
    document.getElementById('legal-faq').value = storeData.legal.faq;

    populateDatalists();
    renderAdminList();
}

function populateDatalists() {
    const cats = [...new Set(storeData.products.map(p => p.category))];
    const ops = [...new Set(storeData.products.map(p => p.operator))];
    const noms = [...new Set(storeData.products.map(p => p.nominal))];

    document.getElementById('list-category').innerHTML = cats.map(c => `<option value="${c}">`).join('');
    document.getElementById('list-operator').innerHTML = ops.map(o => `<option value="${o}">`).join('');
    document.getElementById('list-nominal').innerHTML = noms.map(n => `<option value="${n}">`).join('');

    const filter = document.getElementById('admin-filter-category');
    const currentFilter = filter.value;

    filter.innerHTML = `<option value="Semua">Semua Kategori</option>` + cats.map(c => `<option value="${c}">${c}</option>`).join('');
    if (cats.includes(currentFilter)) filter.value = currentFilter;
}

async function saveGeneralSettings() {
    // 1. Simpan Logo & Favicon
    const logoInput = document.getElementById('admin-logo');
    if (logoInput && logoInput.files && logoInput.files[0]) {
        storeData.logoUrl = await toBase64(logoInput.files[0]);
    }

    const favInput = document.getElementById('admin-favicon');
    if (favInput && favInput.files && favInput.files[0]) {
        storeData.faviconUrl = await toBase64(favInput.files[0]);
    }

    // 2. Simpan Pengaturan Lainnya
    storeData.whatsapp = document.getElementById('admin-wa').value;
    storeData.marquee = document.getElementById('admin-marquee').value;
    storeData.flashSaleEnd = document.getElementById('admin-flash-end').value;

    // Simpan Fitur Unggulan
    storeData.features.heading = document.getElementById('feat-heading').value;
    storeData.features.desc = document.getElementById('feat-desc').value;
    for(let i = 0; i < 6; i++) {
        storeData.features.items[i].title = document.getElementById(`feat-t-${i+1}`).value;
        storeData.features.items[i].desc = document.getElementById(`feat-d-${i+1}`).value;
    }

    storeData.cs.wa = document.getElementById('cs-wa').value;
    storeData.cs.tele = document.getElementById('cs-tele').value;
    storeData.cs.ig = document.getElementById('cs-ig').value;
    storeData.cs.x = document.getElementById('cs-x').value;
    storeData.cs.tk = document.getElementById('cs-tk').value;
    storeData.cs.fb = document.getElementById('cs-fb').value;
    storeData.cs.email = document.getElementById('cs-email').value;
    storeData.cs.address = document.getElementById('cs-address').value;

    storeData.soc.wa = document.getElementById('soc-wa').value;
    storeData.soc.tele = document.getElementById('soc-tele').value;
    storeData.soc.ig = document.getElementById('soc-ig').value;
    storeData.soc.x = document.getElementById('soc-x').value;
    storeData.soc.tk = document.getElementById('soc-tk').value;
    storeData.soc.fb = document.getElementById('soc-fb').value;

    storeData.legal.privacy = document.getElementById('legal-privacy').value;
    storeData.legal.terms = document.getElementById('legal-terms').value;
    storeData.legal.refund = document.getElementById('legal-refund').value;
    storeData.legal.faq = document.getElementById('legal-faq').value;

    for (let i = 1; i <= 5; i++) {
        const input = document.getElementById(`b-input-${i}`);
        if (input && input.files && input.files[0]) {
            const base64 = await toBase64(input.files[0]);
            storeData.banners[i - 1] = base64;
        }
    }

    for (let i = 1; i <= 8; i++) {
        const input = document.getElementById(`c-input-${i}`);
        if (input && input.files && input.files[0]) {
            const base64 = await toBase64(input.files[0]);
            storeData.customerCarousel[i - 1] = base64;
        }
    }

    await saveToDB(storeData);
    alert("Semua Pengaturan Berhasil Disimpan!");
    renderCustomer();
}

async function addProduct() {
    const cat = document.getElementById('prod-category').value || "Pulsa";
    const op = document.getElementById('prod-operator').value;
    const desc = document.getElementById('prod-desc').value;
    let nom = document.getElementById('prod-nominal').value;

    if (nom === 'Lainnya') {
        nom = document.getElementById('prod-nominal-manual').value;
        if (!nom) return alert("Harap isi nominal!");
    }

    const prc = parseInt(document.getElementById('prod-price').value);
    if (!op || !nom || !prc) return alert("Harap lengkapi Operator, Nominal, dan Harga!");

    const isTrend = document.getElementById('prod-trending').checked;
    const isFlash = document.getElementById('prod-flash').checked;

    storeData.products.push({
        id: Date.now(), category: cat, operator: op, nominal: nom,
        description: desc, price: prc, isActive: true,
        isTrending: isTrend, isFlashSale: isFlash
    });

    await saveToDB(storeData);
    renderAdminList(); resetForm();
}

function renderAdminList() {
    populateDatalists();

    const list = document.getElementById('admin-product-list');
    const filterVal = document.getElementById('admin-filter-category').value;
    const searchQ = (document.getElementById('admin-search')?.value || '').trim().toLowerCase();

    list.innerHTML = '';

    let filteredProducts = storeData.products;

    if (filterVal !== "Semua") filteredProducts = filteredProducts.filter(p => p.category === filterVal);

    if (searchQ) {
        filteredProducts = filteredProducts.filter(p => {
            const hay = [
                p.category, p.operator, p.nominal, p.description || '', String(p.price ?? '')
            ].join(' ').toLowerCase();
            return hay.includes(searchQ);
        });
    }

    filteredProducts.forEach(p => {
        const statusClass = p.isActive === false ? 'inactive' : '';
        const statusText = p.isActive === false ? 'Tampilkan' : 'Sembunyikan';
        const statusColor = p.isActive === false ? '#10b981' : '#f59e0b';
        const displayDesc = (p.description && p.description.trim() !== "") ? p.description : '-';

        let badgesHtml = "";
        if (p.isTrending) badgesHtml += `<span style="background:#ea580c;color:white;padding:2px 5px;border-radius:4px;font-size:0.6rem;">Trending</span>`;
        if (p.isFlashSale) badgesHtml += `<span style="background:#ef4444;color:white;padding:2px 5px;border-radius:4px;font-size:0.6rem;margin-top:3px;">Flash</span>`;

        // Kolom HARGA dipindah sebelum DESKRIPSI
        list.innerHTML += `
            <div class="product-item ${statusClass}">
                <span><strong>${p.category}</strong><small style="color:var(--text-muted); display:block; margin-top:3px;">${p.operator}</small></span>
                <span>${p.nominal}</span>
                <span style="color:var(--primary); font-weight:700">Rp ${p.price.toLocaleString('id-ID')}</span>
                <span>${displayDesc} <div style="margin-top:5px; display:flex; gap:3px; flex-direction:column; align-items:center;">${badgesHtml}</div></span>
                <div class="actions">
                    <button class="btn-toggle" style="background:${statusColor}" onclick="toggleStatus(${p.id})">${statusText}</button>
                    <button class="btn-edit" onclick="editProduct(${p.id})">Edit</button>
                    <button class="btn-del" onclick="deleteProduct(${p.id})">Hapus</button>
                </div>
            </div>
        `;
    });
}

async function toggleStatus(id) {
    const p = storeData.products.find(item => item.id === id);
    if (p) {
        p.isActive = p.isActive === false ? true : false;
        await saveToDB(storeData);
        renderAdminList(); renderCustomer();
    }
}

function editProduct(id) {
    const p = storeData.products.find(item => item.id === id);
    document.getElementById('edit-id').value = p.id;
    document.getElementById('prod-category').value = p.category;
    document.getElementById('prod-operator').value = p.operator;
    document.getElementById('prod-nominal').value = p.nominal;
    document.getElementById('prod-desc').value = p.description || '';
    document.getElementById('prod-price').value = p.price;
    document.getElementById('prod-trending').checked = p.isTrending || false;
    document.getElementById('prod-flash').checked = p.isFlashSale || false;

    document.getElementById('btn-add').style.display = 'none';
    document.getElementById('btn-update').style.display = 'inline-block';
    document.getElementById('btn-cancel').style.display = 'inline-block';
    document.getElementById('form-title').innerText = "Edit Produk";

    switchAdminPage('admin-tambah-produk', document.getElementById('menu-tambah'));
}

async function updateProduct() {
    const id = parseInt(document.getElementById('edit-id').value);
    const index = storeData.products.findIndex(p => p.id === id);

    storeData.products[index].category = document.getElementById('prod-category').value || "Pulsa";
    storeData.products[index].operator = document.getElementById('prod-operator').value;
    storeData.products[index].description = document.getElementById('prod-desc').value;
    storeData.products[index].nominal = document.getElementById('prod-nominal').value;
    storeData.products[index].price = parseInt(document.getElementById('prod-price').value);
    storeData.products[index].isTrending = document.getElementById('prod-trending').checked;
    storeData.products[index].isFlashSale = document.getElementById('prod-flash').checked;

    await saveToDB(storeData);
    renderAdminList(); resetForm();
    switchAdminPage('admin-daftar-produk', document.querySelectorAll('#admin-menu li')[4]);
}

function resetForm() {
    document.getElementById('btn-add').style.display = 'inline-block';
    document.getElementById('btn-update').style.display = 'none';
    document.getElementById('btn-cancel').style.display = 'none';
    document.getElementById('form-title').innerText = "Tambah Produk Baru";
    document.getElementById('prod-price').value = '';
    document.getElementById('prod-desc').value = '';
    document.getElementById('prod-nominal').value = '';
    document.getElementById('prod-operator').value = '';
    document.getElementById('prod-trending').checked = false;
    document.getElementById('prod-flash').checked = false;
}

async function deleteProduct(id) {
    if (confirm("Hapus produk ini secara permanen?")) {
        storeData.products = storeData.products.filter(p => p.id !== id);
        await saveToDB(storeData);
        renderAdminList(); renderCustomer();
    }
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader(); reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result); reader.onerror = error => reject(error);
});

init();
