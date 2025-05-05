
document.addEventListener("DOMContentLoaded", function () {
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
	    name: "Esneva Adaptive Open-Front Underwear",
	    price: "149 TL",
	    image: "images/products/underwear/image1.jpg",
	    description: "Effortlessly designed adaptive underwear with a front-opening closure, providing comfort, convenience, and accessibility.",
	    features: [
                "Front-Opening Design – Fully opens at the front for effortless dressing and a perfect fit.",
                "Easy Touch Closures – Secure and simple-to-use fasteners allow for quick on and off.",
                "Super Soft Elastic Waistband – Ensures a comfortable, snug fit without pressure points.",
                "Light Absorbency Layer – Added discreet absorbent layer for extra dryness and confidence.",
                "Enhanced Grip Features – Loops near the waistband and closures provide a better grip for easy handling.",
                "Tactile Markers – Subtle raised details to help visually impaired individuals identify the garment effortlessly."
	    ],
	    careInstructions: "Machine Washable & Dryer Friendly – Easy care for everyday wear. 95% Cotton / 5% Polyester – Soft, breathable, and durable.",
	    medicalNotice: "",
	},
        {
	    id: 4,
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

    const modal = document.getElementById("product-modal");
    const modalImage = document.getElementById("modal-product-image");
    const modalName = document.getElementById("modal-product-name");
    const modalPrice = document.getElementById("modal-product-price");
    const modalDescription = document.getElementById("modal-product-description");
    const modalFeatures = document.getElementById("modal-product-features");
    const modalCareInstructions = document.getElementById("modal-product-care-instructions");
    const modalMedicalNotice = document.getElementById("modal-product-medical-notice");
    const addToCartBtn = document.querySelector(".cart-btn");
    const addToFavoritesBtn = document.querySelector(".add-to-favorites");

    let modalProductId = null;
    modal.style.display = "none";

    function openModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        modalImage.src = product.image;
        modalName.textContent = product.name;
        modalPrice.textContent = `Price: ${product.price}`;
        modalDescription.textContent = product.description;
        
        // Clear any previous features and care instructions
        modalFeatures.innerHTML = '';
        product.features.forEach(feature => {
	    const li = document.createElement('li');
	    li.textContent = feature;
	    modalFeatures.appendChild(li);
        });

        modalCareInstructions.textContent = product.careInstructions;
        modalMedicalNotice.textContent = product.medicalNotice;

        modalProductId = productId;
        modal.style.display = "flex"; 
    }

    function closeModal() {
        modal.style.display = "none";
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

