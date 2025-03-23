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
        name: "Aksesuar - Þapka",
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
<button class="view-details" data-id="1">Ürün Detaylarý</button>
        `;

        productsContainer.appendChild(productItem);
    });

    // Butonlara týklanma olaylarýný ekleyelim
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
