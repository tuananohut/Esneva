document.addEventListener('keydown', function(event) {    
    switch (event.key) {
    case '1': // Ana Sayfa
        window.location.href = "index.html";
        break;
    case '2': // Ürünler
        window.location.href = "products.html";
        break;
    case '3': // İletişim
        window.location.href = "contact.html";
        break;
    case '4': // Hakkında
        window.location.href = "about.html";
        break;
    case '5': // Favoriler
        window.location.href = "favorites.html";
        break;
    case '6': // Sepet
        window.location.href = "cart.html";
        break;
    case '7': // Dil Seçenekleri
        // window.location.href = "partnerships.html";
        break;
    default:
        break;
    }
    
});

const categories = document.querySelectorAll('.category');
categories.forEach(category => {
    category.addEventListener('click', function() {
        alert('Kategori: ' + category.querySelector('h2').innerText);
    });
});

// Slayt gösterisi için
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    // Tüm slaytları gizle
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Şu anki slaytı göster
    slides[slideIndex - 1].style.display = "block";

    // 3 saniyede bir slayt değiştir
    setTimeout(showSlides, 3000); // 3 saniyelik gecikme
}

// Sayfa yüklendiğinde slayt gösterisini başlat
window.onload = () => {
    showSlides();
    renderProducts(products);
};

const products = [
    {
	id: 2,
	name: "Adaptive Elastic Waist Pants – Comfortable & Accessible",
	price: "299 TL",
	image: "images/products/pants/image1.jpg",
	description: "Designed for ease, accessibility, and everyday comfort, these adaptive pants make dressing simple while offering style and practicality.",
	features: [
            "Easy Pull-On Design – Perfect for individuals with limited dexterity or mobility",
            "Internal Pull-Up Loops – Two discreet inner loops for an easier grip when pulling up",
            "Adjustable Elastic Waist – Expands effortlessly for maximum comfort",
            "Seamless Stitching – Reduces irritation and ensures a smooth feel on the skin",
            "Wheelchair-Friendly Fit – Wide seat area & no back pockets for improved accessibility",
            "Convertible Design – Can be worn as pants or shorts",
            "Side Zippers for Prosthetic Users – Easy-to-open leg zippers with grip loops for effortless handling",
            "Tactile Markers for Accessibility – Small raised details help visually impaired users distinguish clothing",
            "Enhanced Grip Loops – Loops on waist & zipper closures for easy handling and dressing",
            "Breathable & Durable Fabric – 53% Cotton, 45% Polyester, 2% Spandex for all-day comfort"
	],
	careInstructions: "Machine Wash & Tumble Dry – Wrinkle-resistant and easy to care for. High-Quality Fabric – Soft cotton twill that stays comfortable all day.",
	medicalNotice: "⚠ Magnetic closures should not be worn by individuals with pacemakers or implanted medical devices."
    },
    {
	id: 1,
	name: "Adaptive Snap-On Top – Versatile & Comfortable",
	price: "199 TL",
	image: "images/products/top/image1.jpg",
	description: "Designed for maximum comfort, accessibility, and style, this adaptive top is perfect for post-surgery recovery, medical use, and independent dressing.",
	features: [
            "3 Wearing Options – Available in sleeved, short-sleeved, and sleeveless styles",
            "Easy Dressing – Snap closures on shoulders and sides allow for effortless dressing from the bottom up",
            "Modular Sleeve Design – Sleeves can be attached or detached using snap buttons, creating customizable styles",
            "Medical Access Made Simple – Shoulder snaps open for IV lines & medical procedures without full removal",
            "Seamless & Ultra-Soft Fabric – Ideal for sensitive skin & all-day comfort",
            "Tactile Markers for Accessibility – Small raised details on the collar and cuffs help visually impaired users distinguish clothing",
            "Enhanced Grip Loops – Loops on shoulders and closures for easier handling and dressing"
	],
	careInstructions: "Machine Washable – Made of 95% Modal - 5% Spandex, breathable, and durable. Wrinkle-Resistant & Soft – Maintains shape and comfort through repeated washing.",
	medicalNotice: ""
    },
    {
	id: 3,
	name: "Adaptive Front-Closure Bra – Easy & Comfortable",
	price: "299 TL",
	image: "images/products/bra/image2.jpg",
	description: "Designed for ease, accessibility, and ultimate comfort, this adaptive bra supports independent dressing while ensuring a secure and stylish fit.",
	features: [
            "Magnetic Front Closure – Effortless dressing with secure magnetic fasteners",
            "Quick & Struggle-Free Dressing – Reduces dressing time and upper body strain",
            "Easy Access Design – Ideal for individuals with limited arm mobility",
            "Tactile Markers for Accessibility – Small raised details help visually impaired users distinguish clothing",
            "Enhanced Grip Loops – Loops near closure points for better handling and independence",
            "No Pressure Points – Wide adjustable straps for extra support & comfort",
            "Seamless & Soft Fabric – Perfect for sensitive skin and all-day wear",
            "Full Coverage & Adaptive Fit – Designed for comfort, security, and style"
	],
	careInstructions: "Machine Washable – Made of 95% Polyester, 5% Spandex. Durable – Maintains shape & comfort through multiple washes.",
	medicalNotice: "⚠ Magnetic closures should not be worn by individuals with pacemakers or implanted medical devices."
    }
];


// Modal ve ürün detayları
const modal = document.getElementById("product-modal");
const modalImage = document.getElementById("modal-product-image");
const modalName = document.getElementById("modal-product-name");
const modalPrice = document.getElementById("modal-product-price");
const modalDescription = document.getElementById("modal-product-description");
const closeModal = document.querySelector(".close-modal");
const addToCartButton = document.querySelector(".add-to-cart");
const addToFavoritesButton = document.querySelector(".add-to-favorites");

// Ürünleri render etme
function renderProducts() {
    const productsContainer = document.querySelector(".products");
    if (!productsContainer) return;

    productsContainer.innerHTML = "";

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>Fiyat: ${product.price}</p>
            <button class="add-to-favorites" data-id="${product.id}"><i class="fas fa-heart"></i></button>
            <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-shopping-cart"></i></button>
            <button class="details-btn" data-id="${product.id}"><i class="fas fa-info-circle"></i> View Details</button>
        `;
	
        productsContainer.appendChild(productItem);
    });

    document.querySelectorAll(".details-btn").forEach(button => {
        button.addEventListener("click", function () {
            const productId = this.getAttribute("data-id");
            const product = products.find(p => p.id == productId);
            
            if (product && modal) {
                modalImage.src = product.image;
                modalName.textContent = product.name;
                modalPrice.textContent = `${product.price}`;
                modalDescription.textContent = product.description;
                modal.style.display = "block";

                addToCartButton.onclick = function () {
                    addToCart(productId);
                };
                addToFavoritesButton.onclick = function () {
                    addToFavorites(productId);
                };
            }
        });
    });
}


// Sepete ekleme fonksiyonu (localStorage ile saklama)
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = products.find(p => p.id == productId);

    if (product) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

// Favorilere ekleme fonksiyonu
function addToFavorites(productId) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let product = products.find(p => p.id == productId);

    if (product) {
        favorites.push(product);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
}

// Modal kapatma
closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// Modalı dışarı tıkladığınızda kapatma
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Sayfa yüklendiğinde ürünleri render et
renderProducts();

document.addEventListener("DOMContentLoaded", renderProducts);
