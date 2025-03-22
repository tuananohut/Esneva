// Klavye kısa yolları
document.addEventListener('keydown', function(event) {
    if (event.altKey) {
        switch (event.key) {
            case 'a': // Ana Sayfa
                document.querySelector('a[accesskey="1"]').focus();
                break;
            case 'b': // Ürünler
                document.querySelector('a[accesskey="2"]').focus();
                break;
            case 'c': // İletişim
                document.querySelector('a[accesskey="3"]').focus();
                break;
            case 'd': // Hakkında
                document.querySelector('a[accesskey="4"]').focus();
                break;
            case 'e': // Favoriler
                document.querySelector('.favorites').focus();
                break;
            case 'f': // Sepet
                document.querySelector('.cart').focus();
                break;
            case 'g': // Dil Seçenekleri
                document.querySelector('.languages').focus();
                break;
            default:
                break;
        }
    }
});

// Kategoriler tıklanabilir olduğunda bir işlem yapılması için
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

// Ürün listesi (örnek)
const products = [
    {
        id: 1,
        name: "Üst Giyim T-Shirt",
        price: 199,
        image: "product1.jpg",
        category: "Üst Giyim"
    },
    {
        id: 2,
        name: "Alt Giyim Pantolon",
        price: 299,
        image: "product2.jpg",
        category: "Alt Giyim"
    },
    {
        id: 3,
        name: "Aksesuar - Şapka",
        price: 129,
        image: "product3.jpg",
        category: "Aksesuar"
    }
];

// Ürünleri sayfaya ekleme fonksiyonu
function renderProducts() {
    const productsContainer = document.querySelector(".products");

    if (!productsContainer) return;

    productsContainer.innerHTML = ""; // Önce temizle

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>Fiyat: ${product.price} TL</p>
            <button class="add-to-favorites" data-id="${product.id}"><i class="fas fa-heart"></i></button>
            <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-shopping-cart"></i></button>
<button class="view-details" data-id="1">Ürün Detayları</button>
        `;

        productsContainer.appendChild(productItem);
    });

    // Butonlara tıklanma olaylarını ekleyelim
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            addToCart(this.getAttribute("data-id"));
        });
    });

    document.querySelectorAll(".add-to-favorites").forEach(button => {
        button.addEventListener("click", function () {
            addToFavorites(this.getAttribute("data-id"));
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".view-details").forEach(button => {
            button.addEventListener("click", function () {
		const productId = this.getAttribute("data-id");
		window.location.href = `product-detail.html?id=${productId}`;
            });
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
        alert(`${product.name} sepete eklendi!`);
    }
}

// Favorilere ekleme fonksiyonu
function addToFavorites(productId) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let product = products.find(p => p.id == productId);

    if (product) {
        favorites.push(product);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert(`${product.name} favorilere eklendi!`);
    }
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", renderProducts);
