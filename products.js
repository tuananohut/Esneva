document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
	    id: 2,
	    name: "Adaptive Elastic Waist Pants – Comfortable & Accessible",
	    price: "299 TL",
	    image: "images/products/pants/image1.jpg",
	    description: "Designed for ease, accessibility, and everyday comfort, these adaptive pants make dressing simple while offering style and practicality.",
	    need: ["everyday", "clothes"],
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
	    need: ["everyday", "clothes"],
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
	    price: "299 TL",
	    image: "images/products/underwear/image1.jpg",
	    description: "Effortlessly designed adaptive underwear with a front-opening closure, providing comfort, convenience, and accessibility.",
	    need: ["intimates", "clothes"],
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
	    need: ["intimates", "clothes"],
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
	},
	{
	    id: 5,
	    name: "Prosthetic Silicone Liner – Secure & Comfortable Seal",
	    price: "300 TL",
	    image: "images/products/prosthetics/image1.jpg",
	    description: " ",
	    need: ["mobility"],
	    features: [
		"Medical-Grade Silicone - Skin-friendly and durable",
		"Cushioned Support – Reduces impact and enhances comfort",
		"Snug Fit – Designed to improve suspension and minimize movement",
		"Easy Maintenance – Easy to clean and quick to dry"
	    ],
	    careInstructions: "Hand wash with mild soap, air dry",
	    medicalNotice: " "
	},
	{
	    id: 6,
	    name: "Cup Level Indicator – Spill-Free Pouring Aid",
	    price: "300 TL",
	    image: "images/products/cups/image1.jpg",
	    description: " ",
	    need: ["vision"],
	    features: [
		"Audible Alerts – Beeps when liquid nears the top of the cup",
		"Compact & Portable – Lightweight design for home or travel use",
		"Universal Fit – Works with most cup and mug sizes",
		"Ideal for Low Vision – Makes independent pouring easier"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{
	    id: 7,
	    name: "Prosthetic Sock – Soft & Supportive Liner",
	    price: "300 TL",
	    image: "images/products/socks/image1.jpg",
	    description: " ",
	    need: ["mobility"],
	    features: [
		"Gentle Fabric – Designed to reduce friction and enhance comfort",
		"Seamless Construction – Minimizes skin irritation and pressure points",
		"Moisture-Wicking – Keeps the limb cool and dry all day",
		"Stretchable Fit – Adapts to residual limb size and movement",
		"Ideal for Everyday Use – Compatible with most prosthetic liners"
	    ],
	    careInstructions: "Machine washable, air dry recommended",
	    medicalNotice: " "
	},
	{
	    id: 8,
	    name: "Color Identifier Device – Hear the Colors",
	    price: "300 TL",
	    image: "images/products/color/image1.jpg",
	    description: " ",
	    need: ["vision"],
	    features: [
		"Voice Output – Reads colors aloud for visually impaired users",
		"Compact & Handheld – Easy to carry in pockets or bags",
		"Multi-Surface Detection – Works on fabrics, papers, plastics, etc.",
		"Simple Operation – One-button use for instant feedback"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{
	    id: 9,
	    name: "Dressing Hook for Pants – Hassle-Free Dressing Aid",
	    price: "300 TL",
	    image: "images/products/hook/image1.jpg",
	    description: " ",
	    need: ["mobility"],
	    features: [
		"Easy Pull Tool – Helps individuals with limited hand mobility",
		"Sturdy Grip Handle – Designed for users with weak grip",
		"Compact & Lightweight – Simple to store and carry",
		"Great for One-Handed Use – Enables independent dressing"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{
	    id: 10,
	    name: "Forearm Crutch – Stable & Lightweight Support",
	    price: "300 TL",
	    image: "images/products/forearm_crutch/image1.jpg",
	    description: " ",
	    need: ["balance"],
	    features: [
		"Ergonomic Grip – Reduces pressure on hands and wrists",
		"Adjustable Height – Customizable for individual comfort",
		"Anti-Slip Rubber Tip – Ensures safe movement on various surfaces",
		"Lightweight Frame – Easy to maneuver indoors and outdoors",
		"Durable Build – Designed for long-term use"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{
	    id: 11,
	    name: "Walking Cane – Adjustable & Comfortable",
	    price: "300 TL",
	    image: "images/products/cane/image1.jpg",
	    description: " ",
	    need: ["balance"],
	    features: [
		"Lightweight & Durable – Easy to handle with a non-metal frame.",
		"Adjustable Height – Customizable to fit individual needs.",
		"Ergonomic Handle – Comfortable grip for extended use.",
		"Stable & Supportive – Provides reliable assistance for walking.",
		"Compact & Portable – Easy to carry and store."
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{
	    id: 12,
	    name: "Orthopedic Insole – Cushioned Support for Every Step",
	    price: "300 TL",
	    image: "images/products/orthopedic/image1.jpg",
	    description: " ",
	    need: ["orthopedic"],
	    features: [
		"Arch Support – Relieves pressure and promotes balance",
		"Shock-Absorbing Layer – Reduces impact on joints",
		"Trimmable Edges – Fits various shoe sizes",
		"Breathable Material – Keeps feet cool and dry",
		"Suitable for Daily Use – Ideal for foot fatigue or deformities"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{    
	    id: 13,
	    name: "Adaptive Footwear – Easy-On Comfort Shoes",
	    price: "300 TL",
	    image: "images/products/footwear/image1.jpg",
	    description: " ",
	    need: ["footwear"],
	    features: [
		"Wide Opening – Simplifies foot insertion",
		"Velcro Closures – Secure and adjustable fit",
		"Non-Slip Sole – Designed for safety and stability",
		"Soft Inner Padding – Enhances overall comfort",
		"Diabetes-Friendly Design – Reduces risk of irritation and sores"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{    
	    id: 14,
	    name: "Ostomy Bag Cover – Comfortable & Stylish Protection",
	    price: "300 TL",
	    image: "images/products/bag/image1.jpg",
	    description: " ",
	    need: ["hygiene"],
	    features: [
		"Soft Fabric – Reduces skin irritation",
		"Discreet Look – Helps maintain confidence in daily life",
		"Easy Slip-On – Quick to attach and remove",
		"Machine Washable – Simple to maintain",
		"Various Colors – Allows personal expression"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{    
	    id: 15,
	    name: "Spill-Proof Spoon – Steady Eating Aid",
	    price: "300 TL",
	    image: "images/products/spoon/image1.jpg",
	    description: " ",
	    need: ["hygiene"],
	    features: [
		"Stabilizing Technology – Minimizes hand tremor movement",
		"Ergonomic Handle – Comfortable and easy to grip",
		"Dishwasher Safe – Convenient to clean",
		"Lightweight Design – Easy to use for extended periods",
		"Ideal for Tremor Conditions – Supports independence during meals"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{    
	    id: 16,
	    name: "Spill-Proof Cup – No Mess, More Independence",
	    price: "300 TL",
	    image: "images/products/spill_proof_cup/image1.jpg",
	    description: " ",
	    need: ["hygiene"],
	    features: [
		"Anti-Spill Lid – Prevents accidental leaks",
		"Ergonomic Shape – Easy to grip and hold",
		"Transparent Design – Easily monitor fluid level",
		"Microwave & Dishwasher Safe – Practical for daily use",
		"Suitable for All Ages – Great for people with motor challenges"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{    
	    id: 18,
	    name: "Knee & Wrist Support – Targeted Compression & Stability",
	    price: "300 TL",
	    image: "images/products/knee/image1.jpg",
	    description: " ",
	    need: ["orthopedic"],
	    features: [
		"Adjustable Straps – Customizable fit for all-day comfort",
		"Breathable Fabric – Keeps skin dry and cool",
		"Compression Design – Supports circulation and reduces pain",
		"Easy to Wear – Suitable for one-handed application",
		"Lightweight & Flexible – Comfortable for long use"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{    
	    id: 17,
	    name: "Wheelchair Blanket – Warmth & Coverage On-the-Go",
	    price: "300 TL",
	    image: "images/products/wheelchair/blanket/image1.jpg",
	    description: " ",
	    need: ["mobility"],
	    features: [
		"Contoured Fit – Designed specifically for seated users",
		"Easy-Fasten Straps – Stays securely in place without slipping",
		"Plush Inner Layer – Provides maximum warmth and softness",
		"Water-Resistant Outer Shell – Keeps you dry outdoors",
		"Machine Washable – Convenient for daily use"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{    
	    id: 19,
	    name: "Arm Sling – Comfortable Support for Injured Limbs",
	    price: "300 TL",
	    image: "images/products/arm/image1.jpg",
	    description: " ",
	    need: ["orthopedic"],
	    features: [
		"Soft Shoulder Strap – Prevents neck strain",
		"Easy-On Design – Slip-on style for independent or assisted use",
		"Breathable Mesh – Keeps the arm cool and comfortable",
		"Adjustable Fit – Suitable for both left and right arms",
		"Lightweight Build – Ideal for everyday mobility"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{    
	    id: 20,
	    name: "Wheelchair Side Bag – Practical & Accessible Storage",
	    price: "300 TL",
	    image: "images/products/wheelchair/bag/image1.jpg",
	    description: " ",
	    need: ["mobility"],
	    features: [
		"Easy Attachment – Hooks or Velcros securely to wheelchair arms",
		"Multiple Compartments – Keeps essentials organized and reachable",
		"Durable Fabric – Water-resistant and long-lasting",
		"Universal Fit – Compatible with most wheelchair models",
		"Lightweight & Stylish – Adds function without bulk"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{    
	    id: 21,
	    name: "Hand Warmer – Portable Heat for Cold-Sensitive Users",
	    price: "300 TL",
	    image: "images/products/handwarmer/image1.jpg",
	    description: " ",
	    need: ["hygiene"],
	    features: [
		"Compact Size – Fits easily in pockets or gloves",
		"Long-Lasting Heat – Provides warmth for extended periods",
		"Ideal for Raynaud’s, Arthritis, or Circulation Issues",
		"Soft Exterior – Gentle on skin"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{
	    id: 22,
	    name: "Carpal Tunnel Gloves – Targeted Support for Wrist & Hand",
	    price: "300 TL",
	    image: "images/products/glove/image1.jpg",
	    description: " ",
	    need: ["orthopedic"],
	    features: [
		"Compression Fit – Helps reduce swelling and pain",
		"Breathable & Stretchy Material – All-day comfort",
		"Fingerless Design – Full hand mobility",
		"Easy to Slip On – Suitable for independent use",
		"Ideal for Daily Activities – From typing to housework"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{
	    id: 23,
	    name: "Adaptive Belt – Easy-Fasten Support for Everyday Wear",
	    price: "300 TL",
	    image: "images/products/belt/image1.jpg",
	    description: " ",
	    need: ["orthopedic"],
	    features: [
		"Velcro or Magnetic Closure – Simple to fasten for limited dexterity",
		"Stretchable Fit – Adjusts comfortably to waist shape",
		"No Holes Design – Smooth adjustments without fine motor effort",
		"Lightweight & Discreet – Wears comfortably under clothing",
		"Durable Material – Long-lasting use with daily wear"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{
	    id: 24,
	    name: "Adaptive Corset – Supportive & Easy to Wear for All Body Types",
	    price: "300 TL",
	    image: "images/products/corset/image1.jpg",
	    description: " ",
	    need: ["orthopedic"],
	    features: [
		"Front-Closure System – Easier to wear for mobility-challenged users",
		"Adjustable Fit – Conforms to body shape for optimal support",
		"Breathable Fabric – Reduces sweat and discomfort",
		"Lightweight Structure – Suitable for extended use",
		"Discreet Under Clothing – Offers support without visibility"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{
	    id: 25,
	    name: "Shampoo Cap – Waterless Hair Cleaning for Bedridden Users",
	    price: "300 TL",
	    image: "images/products/cap/image1.jpg",
	    description: " ",
	    need: ["hygiene"],
	    features: [
		"Pre-Moistened Interior – Cleans and conditions without water",
		"One-Step Use – No rinsing required",
		"Gentle on Skin – Safe for sensitive scalps",
		"Microwaveable – For warm and soothing application",
		"Ideal for Post-Surgery or Limited Mobility Use"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	},
	{
	    id: 26,
	    name: "Compression Stockings – Support for Circulation & Comfort",
	    price: "300 TL",
	    image: "images/products/compression/image1.jpg",
	    description: " ",
	    need: ["intimates"],
	    features: [
		"Graduated Compression – Helps reduce swelling and fatigue",
		"Easy to Pull On – Flexible material for independent dressing",
		"Breathable & Soft – Suitable for all-day wear",
		"Reinforced Heel & Toe – Enhances durability",
		"Machine Washable – Easy care for daily use"
	    ],
	    careInstructions: " ",
	    medicalNotice: " "
	}];

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

    const validNeeds = ["everyday", "intimates", "mobility", "vision", "orthopedic", "footwear", "hygiene", "balance", "clothes"];
    const container = document.querySelector(".products-container");

    function renderProducts(filteredProducts) {
	container.innerHTML = '';
	filteredProducts.forEach(product => {
	    const card = document.createElement('div');
	    card.classList.add("product-card");
	    card.setAttribute("data-need", product.need.join(" "));
	    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p class="product-price">${product.price}</p>
        <div class="product-actions">
          <button class="wishlist-btn" onclick="addToFavorites(${product.id})"><i class="fas fa-heart"></i></button>
          <button class="cart-btn" onclick="addToCart(${product.id})"><i class="fas fa-shopping-cart"></i></button>
          <button class="details-btn" data-id="${product.id}"><i class="fas fa-info-circle"></i></button>
</div>
`;
	    container.appendChild(card);


	    card.querySelector(".details-btn").addEventListener("click", function () {
		openModal(product.id);
	    });
	});
    }

    function goToCart() {
	location.href = 'cart.html';
    }

    function goToFavorites() {
	location.href = 'favorites.html';
    }

    
    function openModal(productId) {
	const product = products.find(p => p.id === productId);
        if (!product) return;
	
        modalImage.src = product.image;
        modalName.textContent = product.name;
        modalPrice.textContent = `Price: ${product.price}`;
        modalDescription.textContent = product.description;
        
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

	addToCartBtn.onclick = () => {
	    addToCart(product.id);
	};

	addToFavoritesBtn.onclick = () => {
	    addToFavorites(product.id);
	};
    }

    function closeModal() {
	modal.style.display = "none";
    }

    document.querySelector(".close-modal").addEventListener("click", closeModal);
    
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
	    closeModal();
        }	      
    });

    document.querySelectorAll(".filter-btn").forEach(btn => {
	btn.addEventListener("click", function () {
	    const selected = this.getAttribute("data-need");

	    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
	    this.classList.add("active");

	    if (selected === "all") {
		renderProducts(products);
	    } else {
		// const filtered = products.filter(p => Array.isArray(p.need) ? p.need.includes(selected) : p.need === selected);

		const filtered = products.filter(p =>
		    Array.isArray(p.need) ? p.need.includes(hash) : p.need === hash
		);

		
		renderProducts(filtered);
	    }

	    window.history.replaceState(null, null, " ");
	});
    });
    
    const hash = window.location.hash.replace("#", "");
    if (validNeeds.includes(hash)) {
	const filtered = products.filter(p =>
	    Array.isArray(p.need) ? p.need.includes(hash) : p.need === hash
	);

	renderProducts(filtered);
	document.querySelector(`.filter-btn[data-need="${hash}"]`)?.classList.add("active");
    } else {
	renderProducts(products);
	document.querySelector(`.filter-btn[data-need="all"]`)?.classList.add("active");
    }
});
