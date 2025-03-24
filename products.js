document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            id: 1,
            name: "Adaptive Snap-On Top – Versatile & Comfortable",
            price: "199 TL",
            image: "images/products/top/image1.jpg",
            description: "Designed for ease, accessibility, and ultimate comfort, this adaptive top supports independent dressing while ensuring a secure and stylish fit."
        },
        {
            id: 2,
            name: "Adaptive Elastic Waist Pants – Comfortable & Accessible",
            price: "299 TL",
            image: "images/products/pants/image1.jpg",
            description: "Comfortable adaptive pants with an elastic waist for easy dressing."
        },
        {
            id: 3,
            name: "Esneva Adaptive Open-Front Underwear",
            price: "299 TL",
            image: "images/products/underwear/image4.jpg",
            description: "Soft and comfortable adaptive underwear for everyday use."
        },
        {
            id: 4,
            name: "Adaptive Front-Closure Bra – Easy & Comfortable",
            price: "299 TL",
            image: "images/products/bra/image2.jpg",
            description: "Front-closure design for easy dressing and all-day comfort."
        }
    ];

    const modal = document.getElementById("product-modal");
    const modalImage = document.getElementById("modal-product-image");
    const modalName = document.getElementById("modal-product-name");
    const modalPrice = document.getElementById("modal-product-price");
    const modalDescription = document.getElementById("modal-product-description");
    const addToCartBtn = document.querySelector(".add-to-cart");
    const addToFavoritesBtn = document.querySelector(".add-to-favorites");

    let modalProductId = null;
    modal.style.display = null;

    function openModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) {
            console.error("Product not found!");
            return;
        }

        modalImage.src = product.image;
        modalName.textContent = product.name;
        modalPrice.textContent = `Price: ${product.price}`;
        modalDescription.textContent = product.description;
        modalProductId = productId;

        modal.style.display = "flex";  // Açılırken `flex` olarak ayarla
    }

    function closeModal() {
        modal.style.display = "none";
    }

    function addToCart(productId) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const product = products.find(p => p.id === productId);
        if (!product) return;

        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function addToFavorites(productId) {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const product = products.find(p => p.id === productId);
        if (!product) return;

        favorites.push(product);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    document.querySelectorAll(".details-btn").forEach(button => {
        button.addEventListener("click", function () {
            const productId = parseInt(this.getAttribute("data-id"));
            openModal(productId);
        });
    });

    document.querySelector(".close-modal").addEventListener("click", closeModal);

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    addToCartBtn.addEventListener("click", function () {
        if (modalProductId) addToCart(modalProductId);
    });

    addToFavoritesBtn.addEventListener("click", function () {
        if (modalProductId) addToFavorites(modalProductId);
    });
});
