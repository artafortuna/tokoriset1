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
    
    // TEMPLATE HALAMAN LEGAL & INFO
    legal: {
        privacy: `UMUM

- Kebijakan Privasi ini merupakan kesepakatan antara {{BRAND}} dan Pengguna.
- Kebijakan Privasi ini merupakan bagian yang tidak terpisahkan dari Syarat dan Ketentuan pada {{BRAND}}.
- {{BRAND}} berhak untuk mengubah Kebijakan Privasi untuk disesuaikan dengan perkembangan teknologi, praktik bisnis, atau hukum.

KETENTUAN HUKUM

Bahwa kebijakan privasi pada platform {{BRAND}} tunduk kepada PerUndang-Undangan dan hukum yang berlaku di Indonesia yang berkaitan dengan sistem elektronik dan perlindungan data pribadi diantaranya Undang-Undang Nomor 1 Tahun 2024 tentang Informasi dan Transaksi Elektronik jis. Undang-Undang Nomor 27 Tahun 2022 tentang Perlindungan Data Pribadi jis. Peraturan Pemerintah Nomor 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik atau Peraturan PerUndang-Undangan yang berkaitan.

DATA PENGGUNA

- Pihak {{BRAND}} dalam mendukung dan mengoptimalkan layanan pada Platform {{BRAND}} berhak meminta data pribadi Pengguna yang dibutuhkan.
- Dengan memberikan informasi pribadi kepada {{BRAND}}, Pengguna melepaskan hak atas kerugian, tuntutan, dan gugatan yang mungkin timbul terkait dengan pemanfaatan, atau pengungkapan informasi kepada Pihak {{BRAND}}.
- Pengguna memanfaatkan layanan {{BRAND}} dengan memberikan informasi yang dibutuhkan oleh {{BRAND}} maka Pengguna telah memberikan izin kepada Pihak {{BRAND}} menerima, mengelola, menyimpan, dan aktivitas lainnya dalam sistem {{BRAND}}.
- Pengguna menyatakan pemberian informasi pribadi pada sistem {{BRAND}} dilakukan dengan sadar, dan dalam kondisi cakap.
- Pengguna menyatakan jika data pribadi yang diinput ke dalam sistem {{BRAND}} adalah asli dan merupakan hak milik pribadi Pengguna.
- Pengguna berhak untuk melakukan pemutakhiran data pribadi yang telah diinput pada sistem {{BRAND}}.
- {{BRAND}} berhak untuk meminta Pengguna melakukan pemutakhiran data pribadi pada sistem {{BRAND}} bilamana Pengguna belum melakukan pemutakhiran data terbaru.
- Pengguna membebaskan {{BRAND}} dari segala tuntutan ganti rugi, atau tuntutan lain yang diakibatkan oleh kegagalan proses transaksi oleh karena kurang lengkapnya data pribadi Pengguna pada sistem {{BRAND}}.
- {{BRAND}} akan melindungi data pribadi termasuk menjaga kerahasiaan data pribadi yang diberikan Pengguna pada sistem {{BRAND}}.

PENGUMPULAN

1. Mekanisme pengumpulan data Pengguna dilakukan mulai dari Pengguna menggunakan layanan pada platform {{BRAND}} dengan cara mengisi identitas yang diminta.
2. Data pribadi Pengguna akan disimpan secara otomatis pada sistem {{BRAND}} ketika Pengguna menyetujui segala Syarat dan Ketentuan maupun Kebijakan Privasi yang ditetapkan oleh {{BRAND}}.

PENGGUNAAN

1. Bahwa dalam menggunakan data Pengguna {{BRAND}} memiliki tujuan untuk melancarkan proses layanan dan transaksi produk dari Pengguna.
2. Dalam menggunakan data Pengguna, {{BRAND}} juga bertujuan untuk menyediakan, meningkatkan, maupun mengembangkan layanan pada {{BRAND}} atau untuk menganalisa masalah yang timbul pada {{BRAND}}.
3. Dalam menggunakan data Pengguna, {{BRAND}} juga bertujuan untuk menawarkan atau merekomendasikan fitur, produk, atau layanan pada platform {{BRAND}}.
4. Dalam menggunakan data Pengguna, {{BRAND}} bertujuan untuk mematuhi kewajiban hukum yang diminta oleh otoritas maupun lembaga hukum yang berwenang.
5. Bahwa data Pengguna yang digunakan oleh {{BRAND}} juga bertujuan untuk mempermudah komunikasi antara Pengguna dengan {{BRAND}}.
6. {{BRAND}} dalam menggunakan data pribadi milik Pengguna untuk memudahkan layanan Pengguna dengan Pihak Ketiga (apabila dibutuhkan). Pengguna tidak diperkenankan untuk memberikan data pribadinya secara langsung ke Pihak Ketiga tanpa melalui situs dari {{BRAND}}. Apabila terdapat hal-hal yang merugikan oleh karena hal tersebut, maka menjadi tanggung jawab Pengguna sepenuhnya.
7. {{BRAND}} akan menggunakan data pribadi Pengguna untuk mendeteksi atau mencegah adanya tindakan pelanggaran hukum.
8. {{BRAND}} menggunakan data pribadi Pengguna untuk tujuan lain selain yang tertuang dalam kebijakan privasi ini yang disampaikan kepada Pengguna untuk tujuan dan kepentingan hukum.

PENYIMPANAN

1. {{BRAND}} berhak menyimpan data pribadi Pengguna untuk tujuan layanan pada Platform {{BRAND}}, tujuan kebijakan privasi, serta untuk tujuan yang ditetapkan oleh hukum dan Peraturan perUndang-Undangan.
2. Data pribadi Pengguna akan disimpan oleh Platform {{BRAND}} dari awal Pengguna mengisi identitas pada sistem {{BRAND}} hingga Pengguna berhenti menggunakan layanan {{BRAND}}.

PENGHAPUSAN

Bahwa {{BRAND}} akan melakukan penghapusan data Pengguna apabila:

- Pengguna tidak lagi menggunakan layanan {{BRAND}} dengan tetap memperhatikan ketentuan waktu penyimpanan data pribadi pada layanan {{BRAND}} yakni selama 2 tahun setelah akun dihapus oleh Pengguna.
- Pengguna mengajukan penghapusan data pribadi kepada {{BRAND}} dengan menyertakan formulir penghapusan data, bukti KTP atau identitas diri lainnya, dan alasan penghapusan data pribadi dari layanan {{BRAND}}.
- {{BRAND}} dapat menolak perubahan atau penghapusan data pribadi Pengguna apabila alasan penghapusan data pribadi Pengguna bertentangan dengan hukum.
- {{BRAND}} akan menghapus data pribadi milik Pengguna apabila {{BRAND}} menganggap data pribadi milik Pengguna sudah tidak lagi diperlukan atau menurut hukum terdapat kewajiban untuk menghapus data pribadi Pengguna.

TANGGUNG JAWAB

- Pengguna bertanggung jawab atas keamanan data pribadi Pengguna. Oleh karenanya Pengguna disarankan untuk melakukan pengamanan yang kuat terhadap kata sandi, PIN, serta melakukan pembatasan terhadap akun miliknya.
- Pengguna bertanggung jawab atas data pribadi saat menggunakan layanan {{BRAND}} saat akun Pengguna digunakan atau diakses oleh Pihak Ketiga.
- Bahwa Pengguna harus segera melakukan laporan kepada {{BRAND}} saat mengetahui bahwa data pribadinya dalam menggunakan layanan {{BRAND}} disalahgunakan oleh Pihak Ketiga atau lainnya yang tidak bertanggung jawab.
- Bahwa {{BRAND}} tidak bertanggung jawab atas kelalaian Pengguna dalam hal memberikan data pribadinya kepada Pihak lain.
- Bahwa {{BRAND}} tidak bertanggung jawab atas input data yang dilakukan oleh anak dibawah 18 tahun tanpa pengawasan orang tua.
- Bahwa {{BRAND}} dilepaskan dari segala tanggung jawab yang berkaitan dengan pengamanan data pribadi Pengguna apabila terdapat keadaan yang diluar kendali atau kontrol {{BRAND}}.

HUBUNGI KAMI

Pengguna dapat mengajukan keluhan dan saran pada kontak person {{BRAND}} melalui:

WhatsApp : {{WA}}
Email    : {{EMAIL}}`,
        
        terms: `UMUM

- Syarat dan Ketentuan ini mengatur penggunaan layanan pada platform {{BRAND}} oleh seluruh Pengguna.
- Dengan mendaftar dan/atau menggunakan layanan {{BRAND}}, Pengguna dianggap telah membaca, memahami, dan menyetujui seluruh isi Syarat dan Ketentuan ini.
- {{BRAND}} berhak mengubah Syarat dan Ketentuan sewaktu-waktu sesuai kebutuhan layanan dan ketentuan hukum yang berlaku.

DEFINISI

- "Platform" berarti situs, aplikasi, dan seluruh layanan digital yang dioperasikan oleh {{BRAND}}.
- "Pengguna" berarti setiap orang yang mengakses atau menggunakan layanan pada Platform {{BRAND}}, baik sebagai tamu maupun member terdaftar.
- "Produk" berarti pulsa, paket data, token listrik, voucher game, pembayaran tagihan, dan layanan digital lain yang dijual melalui Platform {{BRAND}}.

AKUN MEMBER

- Member wajib memberikan data yang benar, akurat, dan terkini saat pendaftaran.
- Member bertanggung jawab penuh atas keamanan username, password, PIN, dan API Key miliknya.
- {{BRAND}} berhak menonaktifkan, menangguhkan, atau menghapus akun yang melanggar ketentuan, melakukan kecurangan, atau merugikan pihak lain.

TRANSAKSI

- Seluruh transaksi yang sudah berhasil diproses oleh sistem bersifat final dan tidak dapat dibatalkan secara sepihak oleh Pengguna.
- Pengguna wajib memastikan nomor tujuan, ID game, atau data pelanggan lainnya sudah benar sebelum melakukan pembayaran. Kesalahan input bukan tanggung jawab {{BRAND}}.
- Waktu pemrosesan transaksi mengikuti waktu pemrosesan dari provider/operator dan dapat tertunda di luar kendali {{BRAND}}.

PEMBAYARAN

- Pembayaran dilakukan melalui metode pembayaran yang tersedia pada Platform {{BRAND}}.
- Pengguna tidak diperkenankan melakukan pembayaran di luar metode resmi yang disediakan {{BRAND}}.
- Saldo deposit member tidak dapat ditarik kembali dalam bentuk uang tunai dan hanya dapat digunakan untuk transaksi pada Platform {{BRAND}}.

PENGEMBALIAN DANA (REFUND)

- Pengembalian dana hanya dilakukan untuk transaksi yang gagal diproses oleh sistem/provider.
- Dana akan dikembalikan ke saldo member atau metode pembayaran asal sesuai kebijakan {{BRAND}}.
- {{BRAND}} berhak menolak pengajuan refund yang tidak memenuhi syarat atau terindikasi kecurangan.

LARANGAN

Pengguna dilarang:

- Menggunakan layanan {{BRAND}} untuk kegiatan yang melanggar hukum, penipuan, pencucian uang, atau aktivitas ilegal lainnya.
- Mengakses sistem {{BRAND}} secara tidak sah, melakukan reverse engineering, atau menyerang infrastruktur layanan.
- Menyalahgunakan API, melakukan abuse rate limit, atau menjual ulang akses yang melanggar ketentuan.
- Menggunakan data palsu, identitas orang lain, atau alat pembayaran yang bukan miliknya secara sah.

BATASAN TANGGUNG JAWAB

- {{BRAND}} tidak bertanggung jawab atas kerugian yang timbul akibat kesalahan input data oleh Pengguna.
- {{BRAND}} tidak bertanggung jawab atas gangguan layanan akibat keadaan kahar (force majeure), gangguan jaringan, gangguan provider, atau gangguan pihak ketiga lainnya.
- Tanggung jawab maksimal {{BRAND}} atas setiap transaksi terbatas pada nilai transaksi yang bersangkutan.

PERUBAHAN LAYANAN

- {{BRAND}} berhak menambah, mengubah, atau menghentikan sebagian atau seluruh fitur layanan tanpa pemberitahuan terlebih dahulu.
- Harga produk dapat berubah sewaktu-waktu mengikuti harga dari provider.

HUKUM YANG BERLAKU

Syarat dan Ketentuan ini tunduk pada hukum yang berlaku di Republik Indonesia. Setiap sengketa yang timbul akan diselesaikan secara musyawarah, dan apabila tidak tercapai akan diselesaikan melalui jalur hukum yang berlaku.

HUBUNGI KAMI

Pertanyaan terkait Syarat dan Ketentuan ini dapat disampaikan kepada {{BRAND}} melalui:

WhatsApp : {{WA}}
Email    : {{EMAIL}}`,

        refund: `SIFAT PRODUK DIGITAL

{{BRAND}} ({{DOMAIN}}) menjual produk digital seperti voucher game, top up diamond/UC/CP, pulsa, paket data, e-money, token PLN, dan layanan digital lainnya. Karena produk dikirim secara otomatis dan instan ke ID/nomor tujuan, transaksi yang telah berhasil diproses dan terkirim tidak dapat dibatalkan.

KONDISI YANG BERHAK ATAS PENGEMBALIAN DANA

Pengembalian dana (refund) hanya diberikan apabila terjadi salah satu kondisi berikut:

- Pembayaran sudah berhasil diterima, namun produk gagal/tidak terkirim dan tidak dapat diproses ulang oleh sistem maupun supplier.
- Terjadi pembayaran ganda (double payment) untuk satu pesanan yang sama.
- Produk/layanan sedang tidak tersedia setelah pembayaran dilakukan dan tidak dapat digantikan dengan produk setara.
- Terjadi kesalahan harga atau kesalahan sistem dari pihak {{BRAND}}.

KONDISI YANG TIDAK DAPAT DIKEMBALIKAN

- Kesalahan input ID/nomor tujuan, server, atau nominal yang dilakukan oleh pelanggan.
- Produk sudah berhasil terkirim sesuai data yang dimasukkan pelanggan.
- Pelanggan berubah pikiran setelah transaksi selesai.
- Pelanggaran terhadap Syarat & Ketentuan, kecurangan, atau penyalahgunaan promo.

CARA MENGAJUKAN PENGEMBALIAN DANA

- Hubungi Layanan Pelanggan kami melalui tombol Customer Service di pojok kanan bawah halaman atau email {{EMAIL}}.
- Sertakan nomor invoice/ID transaksi, tanggal transaksi, dan bukti pembayaran.
- Pengajuan refund maksimal 7 (tujuh) hari sejak tanggal transaksi.

PROSES & WAKTU PENGEMBALIAN

- Pengajuan akan diverifikasi terlebih dahulu oleh tim kami dalam 1x24 jam hari kerja.
- Apabila disetujui, dana dapat dikembalikan ke saldo {{BRAND}} (instan) atau ke metode pembayaran/rekening asal.
- Pengembalian ke rekening/metode pembayaran asal umumnya membutuhkan waktu 3-14 hari kerja tergantung kebijakan bank/penyedia pembayaran.
- Dana yang dikembalikan adalah nominal transaksi; biaya layanan pihak ketiga (jika ada) dapat dipotong sesuai ketentuan penyedia pembayaran.

KONTAK

Untuk pertanyaan terkait Kebijakan Pengembalian Dana ini, hubungi Layanan Pelanggan kami melalui kontak yang tersedia, atau email {{EMAIL}}.`,

        faq: `1. Apa itu {{BRAND}}?
{{BRAND}} ({{DOMAIN}}) adalah platform top up digital yang menyediakan pengisian voucher game, top up diamond/UC/CP, pulsa, paket data, e-money, token PLN, dan layanan digital lainnya secara cepat, aman, dan otomatis 24 jam.

2. Bagaimana cara melakukan pemesanan?
- Pilih game atau produk yang ingin dibeli.
- Masukkan ID/nomor tujuan dan pilih nominal/paket.
- Pilih metode pembayaran yang tersedia.
- Lakukan pembayaran, lalu produk akan otomatis dikirim ke ID/nomor tujuan.

3. Metode pembayaran apa saja yang tersedia?
Kami menerima berbagai metode pembayaran resmi seperti transfer bank, Virtual Account, e-wallet (QRIS, dll), kartu kredit/debit, saldo {{BRAND}}. Pilihan metode dapat berbeda tergantung produk dan wilayah.

4. Berapa lama pesanan saya diproses?
Sebagian besar pesanan diproses otomatis dan instan setelah pembayaran terverifikasi. Pada kondisi tertentu (gangguan supplier atau jam sibuk), proses dapat memerlukan beberapa menit hingga maksimal 1x24 jam.

5. Pesanan saya belum masuk, apa yang harus dilakukan?
Pastikan ID/nomor tujuan yang dimasukkan sudah benar. Jika pembayaran sudah berhasil namun produk belum diterima dalam waktu wajar, hubungi Customer Service kami dengan menyertakan nomor invoice/ID transaksi dan bukti pembayaran.

6. Apakah saya bisa membatalkan atau refund pesanan?
Produk digital yang sudah berhasil terkirim tidak dapat dibatalkan. Pengembalian dana hanya berlaku pada kondisi tertentu (mis. produk gagal terkirim atau pembayaran ganda). Selengkapnya lihat Kebijakan Pengembalian Dana.

7. Apakah harga di {{BRAND}} sudah final?
Harga yang tertera adalah harga yang Anda bayar. Harga dapat berubah sewaktu-waktu mengikuti harga pasar. Untuk wilayah non-Indonesia, harga ditampilkan dalam mata uang setempat sesuai kurs yang berlaku.

8. Apakah transaksi di {{BRAND}} aman?
Ya. Pembayaran diproses melalui penyedia pembayaran (payment gateway) resmi dan tersertifikasi. Kami tidak menyimpan data sensitif kartu Anda. Lihat Kebijakan Privasi dan Syarat & Ketentuan.

9. Bagaimana cara menghubungi Customer Service?
Hubungi kami melalui link kontak yang tersedia, atau email {{EMAIL}}. Tim kami siap membantu setiap hari.`
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
        featuresWrap.style.display = isCustomerMode ? 'block' : 'none';
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
            let defaultFeatures = { ...storeData.features };
            let defaultLegal = { ...storeData.legal };
            
            storeData = { ...storeData, ...saved };
            storeData.cs = { ...{ wa: "", tele: "", ig: "", x: "", tk: "", fb: "", email: "", address: "" }, ...(saved.cs || {}) };
            storeData.soc = { ...{ wa: "", tele: "", ig: "", x: "", tk: "", fb: "" }, ...(saved.soc || {}) };
            
            // Terapkan data legal dari database jika ada
            storeData.legal = saved.legal ? { ...defaultLegal, ...saved.legal } : defaultLegal;
            
            // --- FIX: PAKSA TIMPA JIKA DATABASE MASIH MENYIMPAN TEKS LAMA ---
            if (storeData.legal.privacy === "Informasi Kebijakan Privasi Toko belum diatur.") {
                storeData.legal.privacy = defaultLegal.privacy;
                storeData.legal.terms = defaultLegal.terms;
                storeData.legal.refund = defaultLegal.refund;
                storeData.legal.faq = defaultLegal.faq;
                await saveToDB(storeData); // Simpan otomatis template baru ke database
            }
            // -----------------------------------------------------------------
            
            storeData.features = saved.features ? { ...defaultFeatures, ...saved.features } : defaultFeatures;
            if (!storeData.features.items || storeData.features.items.length === 0) {
                storeData.features.items = defaultFeatures.items;
            }

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

    const featContainer = document.getElementById('features-container');
    if (featContainer && storeData.features && storeData.features.items) {
        let itemsHtml = storeData.features.items.map(item => `
            <div class="feature-card">
                <i class="${item.icon} feature-icon"></i>
                <h3>${item.title || ''}</h3>
                <p>${item.desc || ''}</p>
            </div>
        `).join('');

        let headingHtml = storeData.features.heading ? `<h2 class="features-heading">${storeData.features.heading}</h2>` : "";
        let descHtml = storeData.features.desc ? `<p class="features-desc">${storeData.features.desc}</p>` : "";

        featContainer.innerHTML = `
            ${headingHtml}
            ${descHtml}
            <div class="features-grid">
                ${itemsHtml}
            </div>
        `;
    }

    renderCustomerCarousel();

    const contactSec = document.getElementById('customer-contact');
    let contactHtml = "";

    const hasCs = Object.values(storeData.cs).some(val => val.trim() !== "");
    const hasSoc = Object.values(storeData.soc).some(val => val.trim() !== "");

    if (hasCs || hasSoc) {
        contactHtml += `<div style="display:flex; flex-direction:column; gap:20px;">`;
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

// ==============================================
// LOGIKA CERDAS PENGGANTI VARIABEL DALAM MODAL
// ==============================================
function openModal(type) {
    const modal = document.getElementById('legal-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');

    let rawText = "";
    if (type === 'privacy') { title.innerText = "Kebijakan Privasi"; rawText = storeData.legal.privacy; }
    else if (type === 'terms') { title.innerText = "Syarat & Ketentuan"; rawText = storeData.legal.terms; }
    else if (type === 'refund') { title.innerText = "Refund Policy"; rawText = storeData.legal.refund; }
    else if (type === 'faq') { title.innerText = "FAQ (Tanya Jawab)"; rawText = storeData.legal.faq; }

    // Mengambil data identitas toko untuk disisipkan
    const brandName = "ARTA FORTUNA";
    const domainName = window.location.hostname || "artafortuna.com";
    const csWA = storeData.cs.wa || storeData.whatsapp || "Belum ada nomor WA";
    const csEmail = storeData.cs.email || "Belum ada email";

    // Melakukan replace pada kurung kurawal
    let parsedText = rawText
        .replace(/{{BRAND}}/g, brandName)
        .replace(/{{DOMAIN}}/g, domainName)
        .replace(/{{WA}}/g, csWA)
        .replace(/{{EMAIL}}/g, csEmail);

    // Mengubah spasi enter murni menjadi tag <br> HTML agar paragraf rapi
    parsedText = parsedText.replace(/\n/g, '<br>');

    body.innerHTML = parsedText;
    modal.style.display = 'flex';
}

function closeModal() { document.getElementById('legal-modal').style.display = 'none'; }

function populateAdmin() {
    document.getElementById('admin-wa').value = storeData.whatsapp;
    document.getElementById('admin-marquee').value = storeData.marquee;
    document.getElementById('admin-flash-end').value = storeData.flashSaleEnd;
    
    if (storeData.features) {
        document.getElementById('feat-heading').value = storeData.features.heading || "";
        document.getElementById('feat-desc').value = storeData.features.desc || "";
        for(let i = 0; i < 6; i++) {
            if (storeData.features.items[i]) {
                document.getElementById(`feat-t-${i+1}`).value = storeData.features.items[i].title || "";
                document.getElementById(`feat-d-${i+1}`).value = storeData.features.items[i].desc || "";
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

    // Mengisi kolom di admin panel
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
    const logoInput = document.getElementById('admin-logo');
    if (logoInput && logoInput.files && logoInput.files[0]) {
        storeData.logoUrl = await toBase64(logoInput.files[0]);
    }

    const favInput = document.getElementById('admin-favicon');
    if (favInput && favInput.files && favInput.files[0]) {
        storeData.faviconUrl = await toBase64(favInput.files[0]);
    }

    storeData.whatsapp = document.getElementById('admin-wa').value;
    storeData.marquee = document.getElementById('admin-marquee').value;
    storeData.flashSaleEnd = document.getElementById('admin-flash-end').value;

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
