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

// Product Data
const products = [
    {
        id: 1,
        name: "Top Wear T-Shirt",
        price: 199,
        image: "product1.jpg",
        category: "Top Wear",
        description: "Comfortable and stylish t-shirt."
    },
    {
        id: 2,
        name: "Bottom Wear Pants",
        price: 299,
        image: "product2.jpg",
        category: "Bottom Wear",
        description: "Comfortable pants."
    },
    {
        id: 3,
        name: "Accessory - Hat",
        price: 129,
        image: "product3.jpg",
        category: "Accessory",
        description: "Trendy and comfortable hat."
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
            <p>Fiyat: ${product.price} TL</p>
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
                modalPrice.textContent = `${product.price} TL`;
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
