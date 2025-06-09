const voiceConsent = localStorage.getItem("esneva-voice-consent") === "true";

const products = [
    {
	id: 2,
	name: "Adaptive Pants",
	price: "1850 TL",
	image: "images/products/pants/image1.jpg",
	description: "Designed for ease, accessibility, and everyday comfort, these adaptive pants make dressing simple while offering style and practicality.",
	sizes: ["XS", "S", "M", "L", "XL", "XXL"],
	colors: {
	    black: "images/products/pants/black.jpg",
	    beige: "images/products/pants/image1.jpg",
	},
	need: ["self-dressing", "clothing"],
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
	name: "Adaptive T-Shirt",
	price: "950 TL",
	image: "images/products/t-shirt/gray.jpg",
	description: "Designed for maximum comfort, accessibility, and style, this adaptive top is perfect for post-surgery recovery, medical use, and independent dressing.",
	need: ["self-dressing", "assisted-dressing", "clothing"],
	sizes: ["XS", "S", "M", "L", "XL", "XXL"],
	colors: {
	    white: "images/products/t-shirt/white.jpg",
	    gray: "images/products/t-shirt/gray.jpg",
	    black: "images/products/t-shirt/black.jpg",
	},
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
	name: "Wheelchair Pants",
	price: "1650 TL",
	image: "images/products/wheelchair/pants/black.jpg",
	description: "Engineered specifically for wheelchair users, these pants offer superior seated comfort, discreet functionality, and style—perfect for everyday living without compromise.",
	need: ["self-dressing", "assisted-dressing", "clothing"],
	sizes: ["XS", "S", "M", "L", "XL", "XXL"],
	colors: {
	    black: "images/products/wheelchair/pants/black.jpg.",
	},
	features: [
            "High-Rise Back & Low-Front Design – Provides optimal comfort and coverage while seated",
            "Flat Seams & No Back Pockets – Prevents pressure points and skin irritation",
            "Side Zipper Openings – Allows easier dressing and undressing while seated or lying down",
	    "Elastic Waistband – Accommodates waist movements without tightness",
	    "Extended Leg Lengths – Ensures proper coverage when legs are bent",
	    "Adaptive Fit – Designed to follow natural seated posture",
	    "Breathable & Durable Fabric – Soft blend of cotton and polyester with slight stretch for mobility",
	    "Tear-Resistant Stitching – Reinforced for long-term use and washing",
	    "Tactile Markers for Orientation – Assist visually impaired users in identifying front/back",
	    "Stylish Everyday Look – Functional design without compromising style"
	],
	careInstructions: "Machine Wash Cold, Gentle Cycle – Maintains fabric integrity and fit Tumble Dry Low – Prevents shrinkage, maintains softness Do Not Bleach – Protects fabric color and texture",
	medicalNotice: ""
    },
    {
	id: 4,
	name: "Undergarments (Male)",
	price: "490 TL",
	image: "images/products/undergarments/male/black.jpg",
	description: "",
	need: ["self-dressing", "assisted-dressing", "clothing"],
	sizes: ["XS", "S", "M", "L", "XL", "XXL"],
	colors: {
	    black: "images/products/undergarments/male/black.jpg",
	},
	features: [
            "Front-Opening Design – Fully opens at the front for effortless dressing and a perfect fit.",
            "Easy Touch Closures – Secure and simple-to-use fasteners allow for quick on and off.",
            "Super Soft Elastic Waistband – Ensures a comfortable, snug fit without pressure points.",
	    "Light Absorbency Layer – Added discreet absorbent layer for extra dryness and confidence.",
	    "Enhanced Grip Features – Loops near the waistband and closures provide a better grip for easy handling.",
	    "Tactile Markers – Subtle raised details to help visually impaired individuals identify the garment effortlessly."
	],
	careInstructions: " Premium Breathable Blend – 95% Cotton / 5% Polyester for softness and durability. Brushed Finish – Feels gentle against sensitive skin. Stretchable & Flexible – Provides freedom of movement and a perfect fit. Machine Washable & Dryer Friendly – Easy care for everyday wear.",
	medicalNotice: ""
    },
    {
	id: 5,
	name: "Undergarments (Female)",
	price: "490 TL",
	image: "images/products/undergarments/female/black.jpg",
	description: "",
	need: ["self-dressing", "assisted-dressing", "clothing"],
	sizes: ["XS", "S", "M", "L", "XL", "XXL"],
	colors: {
	    black: "images/products/undergarments/female/black.jpg",
	},
	features: [
            "Front-Opening Design – Fully opens at the front for effortless dressing and a perfect fit.",
            "Easy Touch Closures – Secure and simple-to-use fasteners allow for quick on and off.",
            "Super Soft Elastic Waistband – Ensures a comfortable, snug fit without pressure points.",
	    "Light Absorbency Layer – Added discreet absorbent layer for extra dryness and confidence.",
	    "Enhanced Grip Features – Loops near the waistband and closures provide a better grip for easy handling.",
	    "Tactile Markers – Subtle raised details to help visually impaired individuals identify the garment effortlessly."
	],
	careInstructions: " Premium Breathable Blend – 95% Cotton / 5% Polyester for softness and durability. Brushed Finish – Feels gentle against sensitive skin. Stretchable & Flexible – Provides freedom of movement and a perfect fit. Machine Washable & Dryer Friendly – Easy care for everyday wear. Machine Washable & Dryer Friendly – Easy care for everyday wear.",
	medicalNotice: ""
    },
    {
	id: 6,
	name: "Adaptive Bra",
	price: "580 TL",
	image: "images/products/bra/black.jpg",
	description: "Designed for ease, accessibility, and ultimate comfort, this adaptive bra supports independent dressing while ensuring a secure and stylish fit. Pair with the Esneva Adaptive Open-Front Underwear for a seamless, stylish, and ultra-comfortable lingerie set that prioritizes ease, softness, and everyday confidence.",
	need: ["self-dressing", "assisted-dressing", "clothing"],
	sizes: ["XS", "S", "M", "L", "XL", "XXL"],
	colors: {
	    black: "images/products/bra/black.jpg",
	},
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
	id: 7,
	name: "Assisted Dressing Pants",
	price: "1550 TL",
	image: "images/products/assisted-dressing/pants/black.jpg",
	description: "Designed specifically for individuals who require assistance with dressing, these pants prioritize caregiver ease while preserving wearer comfort and dignity in daily care routines.",
	need: ["assisted-dressing", "clothing"],
	sizes: ["XS", "S", "M", "L", "XL", "XXL"],
	colors: {
	    black: "images/products/assisted-dressing/pants/black.jpg",
	},
	features: ["Back-Opening Design – Allows caregivers to dress the individual from a seated or lying position with minimal effort",
		   "Side Snaps / Velcro Closures – Enables quick and secure fastening without requiring the wearer to stand",
		   "Wide Leg Openings – Makes it easier to accommodate medical devices, casts, or limited mobility",
		   "Reinforced Seams – Built for repeated handling during assisted dressing routines",
		   "Soft Brushed Interior – Provides all-day comfort for sensitive skin",
		   "Discrete Coverage – Maintains dignity and modesty during dressing",
		   "Non-Irritating Waistband – Elastic, stretchable waistband avoids pressure or tightness",
		   "Easy-to-Identify Markers – Visual/tactile cues for left/right leg and front/back orientation"],
	careInstructions: "Machine Washable & Dryer Safe – Withstands frequent laundering in care facilities Fade-Resistant Fabric – Durable cotton-poly blend maintains softness and color over time",
	medicalNotice: ""
    },
    {
	id: 8,
	name: "Assisted Dressing Top",
	price: "1390 TL",
	image: "images/products/assisted-dressing/top/white.jpg",
	description: "Designed for individuals who rely on caregiver assistance, this top supports dignity and comfort during daily dressing, ideal for both home care and long-term care facilities.",
	need: ["assisted-dressing", "clothing"],
	sizes: ["XS", "S", "M", "L", "XL", "XXL"],
	colors: {
	    white: "images/products/assisted-dressing/top/white.jpg",
	},
	features: ["Full Back Overlap Design – Enables dressing from behind without needing to lift arms or twist the body",
		   "Snap / Velcro Closures at Shoulders – Fastens securely without causing discomfort or skin friction",
		   "Open Sleeve Construction – Provides ease of entry for weakened or immobilized arms",
		   "Breathable & Soft Fabric – Gentle against sensitive or fragile skin",
		   "High-Coverage Design – Ensures modesty and comfort while seated or reclined",
		   "Adaptive Fit – Slight A-line shape accommodates body shape and movement without restriction",
		   "Tear-Resistant Seams – Reinforced stitching ideal for regular use in home or institutional care",
		   "Easy Orientation Markings – Left/right and inside/out indicators to assist caregivers in dressing quickly"],
	careInstructions: "Machine Washable & Quick Drying – Made for routine care environments Wrinkle-Resistant Material – Always looks neat with minimal upkeep",
	medicalNotice: ""
    },
    {
	id: 9,
	name: "Backless Top",
	price: "1200 TL",
	image: "images/products/backless-top/white.jpg",
	description: "This backless top is thoughtfully engineered to meet the needs of wheelchair users, offering dignity, convenience, and comfort in a stylish adaptive design.",
	need: ["self-dressing", "assisted-dressing", "clothing", "wheelchair-accessories"],
	sizes: ["XS", "S", "M", "L", "XL", "XXL"],
	colors: {
	    white: "images/products/backless-top/white.jpg",
	    blue: "images/products/backless-top/blue.jpg",
	},
	features: ["Open-Back Construction – Allows effortless dressing without leaning forward or lifting arms",
		   "Snap or Velcro Closure Behind Shoulders – Easy for caregivers or self-dressing with limited range of motion",
		   "No Bunching Behind the Back – Smooth fit for long periods of sitting, eliminating pressure points",
		   "Extended Front Coverage – Keeps the chest and abdomen covered while sitting",
		   "Contoured Fit – Tailored to provide shape and style without restricting movement",
		   "Soft & Breathable Fabric – Comfortable for all-day wear, even in warm climates",
		   "Tactile Markings – Helps visually impaired users find orientation of the garment",
		   "Minimal Seams – Reduces skin irritation and friction"],
	careInstructions: "Machine Wash & Low Tumble Dry – Built for everyday ease Color-Stable Fabric – Designed to retain color and shape through repeated washes",
	medicalNotice: ""
    },
    {
	id: 10,
	name: "Magnetic Shirt",
	price: "1400 TL",
	image: "images/products/magnetic-shirt/white.jpg",
	description: "This Magnetic Shirt merges fashion with functionality, providing dignity and ease for anyone who faces challenges with traditional clothing fasteners.",
	need: ["self-dressing", "assisted-dressing", "clothing"],
	sizes: ["XS", "S", "M", "L", "XL", "XXL"],
	colors: {
	    white: "images/products/magnetic-shirt/white.jpg",
	    black: "images/products/magnetic-shirt/black.jpg",
	},
	features: ["Full-Length Magnetic Front Closure – Enables easy on/off without buttons, ideal for users with limited dexterity or tremors",
		   "Classic Shirt Aesthetic – Looks like a traditional button-up with hidden magnetic panels",
		   "Soft Cotton Blend Fabric – Gentle on the skin and breathable for all-day wear",
		   "Tactile Button Covers – Mimic traditional buttons for visual familiarity while being magnetically functional",
		   "Adaptive Cuff Design – Easy-close cuffs with magnetic or Velcro options",
		   "Structured Fit – Designed to drape naturally while accommodating various body types",
		   "Unisex Style – Suitable for elderly users, post-surgery recovery, or individuals with disabilities",
		   "Quick Dressing Solution – Reduces dressing time and frustration significantly",
		   "Available in Multiple Colors – Easily matches personal style or uniforms"],
	careInstructions: "Machine Wash Cold on Gentle Cycle – Magnetic panels are sewn securely and washing safe Do Not Iron Over Magnetic Areas – Helps maintain magnetic functionality Line Dry or Low Tumble – Preserve shirt shape and closure strength",
	medicalNotice: ""
    },
    {    
	id: 11,
	name: "Adaptive Footwear",
	price: "1050 TL",
	image: "images/products/footwear/black.jpg",
	description: " ",
	need: ["footwear"],
	sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
	colors: {
	    white: "images/products/footwear/white.jpg",
	    black: "images/products/footwear/black.jpg",
	},
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
	id: 12,
	name: "Prosthetic Silicone Liner",
	price: "300 TL",
	image: "images/products/prosthetics/image1.jpg",
	description: " ",
	need: ["prosthesis"],
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
	id: 13,
	name: "Prosthetic Sock",
	price: "300 TL",
	image: "images/products/socks/image1.jpg",
	description: " ",
	need: ["prosthesis"],
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
	id: 14,
	name: "Orthopedic Insole",
	price: "300 TL",
	image: "images/products/orthopedic/image1.jpg",
	description: " ",
	need: ["prosthesis", "footwear"],
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
	id: 15,
	name: "Forearm Crutch",
	price: "300 TL",
	image: "images/products/forearm_crutch/image1.jpg",
	description: " ",
	need: ["mobility"],
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
	id: 16,
	name: "Walking Cane",
	price: "300 TL",
	image: "images/products/cane/image1.jpg",
	description: " ",
	need: ["mobility"],
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
	id: 17,
	name: "Cup Level Indicator",
	price: "300 TL",
	image: "images/products/cups/image1.jpg",
	description: " ",
	need: ["sensory"],
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
	id: 18,
	name: "Color Identifier Device",
	price: "300 TL",
	image: "images/products/color/image1.jpg",
	description: " ",
	need: ["sensory"],
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
	id: 19,
	name: "Dressing Hook",
	price: "300 TL",
	image: "images/products/hook/image1.jpg",
	description: " ",
	need: ["independent"],
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
	id: 20,
	name: "Spill-Proof Spoon",
	price: "300 TL",
	image: "images/products/spoon/image1.jpg",
	description: " ",
	need: ["independent"],
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
	id: 21,
	name: "Spill-Proof Cup",
	price: "300 TL",
	image: "images/products/spill_proof_cup/image1.jpg",
	description: " ",
	need: ["independent"],
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
	id: 22,
	name: "Wheelchair Blanket",
	price: "300 TL",
	image: "images/products/wheelchair/blanket/image1.jpg",
	description: " ",
	need: ["wheelchair-accessories"],
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
	id: 23,
	name: "Knee & Wrist Support",
	price: "300 TL",
	image: "images/products/knee/image1.jpg",
	description: " ",
	need: ["prosthesis"],
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
	id: 24,
	name: "Arm Sling",
	price: "300 TL",
	image: "images/products/arm/image1.jpg",
	description: " ",
	need: ["prosthesis"],
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
	id: 25,
	name: "Wheelchair Side Bag",
	price: "300 TL",
	image: "images/products/wheelchair/bag/image1.jpg",
	description: " ",
	need: ["wheelchair-accessories"],
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
	id: 26,
	name: "Hand Warmer",
	price: "300 TL",
	image: "images/products/handwarmer/image1.jpg",
	description: " ",
	need: ["independent"],
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
	id: 27,
	name: "Carpal Tunnel Gloves",
	price: "300 TL",
	image: "images/products/glove/image1.jpg",
	description: " ",
	need: ["prosthesis"],
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
	id: 28,
	name: "Adaptive Belt",
	price: "300 TL",
	image: "images/products/belt/image1.jpg",
	description: " ",
	need: ["clothing"],
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
	id: 29,
	name: "Adaptive Corset",
	price: "300 TL",
	image: "images/products/corset/image1.jpg",
	description: " ",
	need: ["prosthesis"],
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
	id: 30,
	name: "Compression Stockings",
	price: "300 TL",
	image: "images/products/compression/image1.jpg",
	description: " ",
	need: ["prosthesis"],
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

document.addEventListener("DOMContentLoaded", () => {
    const productsGrid = document.getElementById("productsGrid");
    const pageInfo = document.getElementById("pageInfo");
    const noProducts = document.getElementById("noProducts");

    const categoryButtons = document.querySelectorAll(".category-btn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const modal = document.getElementById("productModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalPrice = document.getElementById("modalPrice");
    const modalDescription = document.getElementById("modalDescription");
    const modalFeatures = document.getElementById("modalFeatures");
    const modalCare = document.getElementById("modalCare");
    const modalMedical = document.getElementById("modalMedical");
    const readAloudBtn = document.querySelector(".read-aloud-btn");
    const closeModalBtn = document.querySelector(".close-modal");
    const modalDetails = document.querySelector(".modal-details");
    
    let currentCategory = "all";
    let currentPage = 0;
    const itemsPerPage = 4;
    let filteredProducts = [];
    let currentProductText = "";

    let modalIsOpen = false;
    
    const validNeeds = [
	"self-dressing", "assisted-dressing", "clothing", "wheelchair-accessories",
	"footwear", "prosthesis", "mobility", "sensory", "independent", "all"
    ];

    // Ortak kategori değiştirme fonksiyonu
    function setCategoryFromHash(hash) {
	if (validNeeds.includes(hash)) {
	    currentCategory = hash;
	    categoryButtons.forEach(b => b.classList.remove("active"));
	    document.querySelector(`.category-btn[data-category="${hash}"]`)?.classList.add("active");
	    currentPage = 0;
	    filterProducts();
	    renderProducts();
	}
    }

    // ========== Product Rendering ==========
    function renderProducts() {
	productsGrid.innerHTML = "";
	const start = currentPage * itemsPerPage;
	const end = start + itemsPerPage;
	const visibleProducts = filteredProducts.slice(start, end);

	if (visibleProducts.length === 0) {
	    noProducts.style.display = "block";
	} else {
	    noProducts.style.display = "none";
	    visibleProducts.forEach(product => {
		const card = document.createElement("div");
		card.className = "product-card";
		card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h4>${product.name}</h4>
          <p>${product.price}</p>
          <button class="view-details" data-id="${product.id} tabindex="0">View Details</button>
        `;
		productsGrid.appendChild(card);
	    });
	}

	updatePagination();
	attachDetailListeners();
    }

    function updatePagination() {
	const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
	const shown = Math.min(filteredProducts.length, (currentPage + 1) * itemsPerPage);
	pageInfo.textContent = `Page ${currentPage + 1} of ${totalPages} • Showing ${shown} of ${filteredProducts.length} products`;

	prevBtn.disabled = currentPage === 0;
	nextBtn.disabled = currentPage >= totalPages - 1;
    }

    // ========== Filtering ==========
    function filterProducts() {
	filteredProducts = currentCategory === "all"
	    ? products
	    : products.filter(p =>
		Array.isArray(p.need) ? p.need.includes(currentCategory) : p.need === currentCategory
            );
    }

    categoryButtons.forEach(btn => {
	btn.addEventListener("click", () => {
	    const cat = btn.dataset.category;
	    window.location.hash = `#${cat}`;
	    setCategoryFromHash(cat);
	});
    });

    // ========== Navigation ==========
    prevBtn.addEventListener("click", () => {
	if (currentPage > 0) {
	    currentPage--;
	    renderProducts();
	}
    });

    nextBtn.addEventListener("click", () => {
	const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
	if (currentPage < totalPages - 1) {
	    currentPage++;
	    renderProducts();
	}
    });

    // ========== Modal ==========
    function attachDetailListeners() {
	document.querySelectorAll(".view-details").forEach(btn => {
	    btn.addEventListener("click", () => {
		const productId = parseInt(btn.dataset.id);
		const product = products.find(p => p.id === productId);
		if (product) openModal(product);
	    });
	});
    }

    function speakEnglish(text) {
	if (!('speechSynthesis' in window)) return;
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.lang = 'en-US';

	const voices = speechSynthesis.getVoices().filter(v => v.lang === 'en-US');
	if (voices.length > 0) utterance.voice = voices[0];

	speechSynthesis.cancel();
	speechSynthesis.speak(utterance);
    }

    function openModal(product) {
	modalImage.src = product.image;
	modalTitle.textContent = product.name;
	modalPrice.textContent = `Price: ${product.price}`;
	modalDescription.textContent = product.description || "";

	modalFeatures.innerHTML = "";
	product.features?.forEach(feature => {
	    const li = document.createElement("li");
	    li.textContent = feature;
	    modalFeatures.appendChild(li);
	});

	modalCare.textContent = product.careInstructions || "";
	modalMedical.textContent = product.medicalNotice || "";

	// Temizle
	document.querySelector(".sizes")?.remove();
	document.querySelector(".colors")?.remove();

	document.querySelector(".cart-btn").dataset.id = product.id;
	document.querySelector(".favorite-btn").dataset.id = product.id;

	modalIsOpen = true;
	document.body.classList.add("modal-open");

	
	// Beden seçenekleri
	if (product.sizes?.length) {
	    const sizeDiv = document.createElement("div");
	    sizeDiv.className = "sizes";
	    sizeDiv.innerHTML = "<label>Size:</label> ";
	    product.sizes.forEach(size => {
		const btn = document.createElement("button");
		btn.className = "size-btn";
		btn.textContent = size;
		sizeDiv.appendChild(btn);
	    });
	    modalDetails.appendChild(sizeDiv);
	}

	// Renk seçenekleri
	if (product.colors && Object.keys(product.colors).length) {
	    const colorDiv = document.createElement("div");
	    colorDiv.className = "colors";
	    colorDiv.innerHTML = "<label>Color:</label> ";
	    for (const color in product.colors) {
		const btn = document.createElement("button");
		btn.className = "color-btn";
		btn.style.background = color;
		btn.dataset.color = color;
		colorDiv.appendChild(btn);
	    }
	    modalDetails.appendChild(colorDiv);

	    // Renk tıklaması
	    document.querySelectorAll(".color-btn").forEach(btn => {
		btn.addEventListener("click", () => {
		    const selectedColor = btn.dataset.color;
		    modalImage.src = product.colors[selectedColor];
		});
	    });
	}

	modal.style.display = "flex";

	currentProductText = `
    ${product.name}.
    Price: ${product.price}.
    ${product.description}.
    Features include: ${product.features?.join(", ") || ""}.
    Care instructions: ${product.careInstructions}.
    Medical notice: ${product.medicalNotice}.
  `;

	if (voiceConsent) {
	    speakEnglish(currentProductText);
	}
    }

    function closeModal() {
	modal.style.display = "none";
	modalIsOpen = false;
	document.body.classList.remove("modal-open");
	window.speechSynthesis.cancel();
    }


    document.getElementById("btn-read-again")?.addEventListener("click", () => {
	speakEnglish(currentProductText);
    });

    document.getElementById("btn-stop-reading")?.addEventListener("click", () => {
	window.speechSynthesis.cancel();
    });

    // Tek seçim için size butonları
    document.querySelectorAll(".size-btn").forEach(btn => {
	btn.addEventListener("click", () => {
            document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
	});
    });

    // Tek seçim için color butonları
    document.querySelectorAll(".color-btn").forEach(btn => {
	btn.addEventListener("click", () => {
            document.querySelectorAll(".color-btn").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");

            const selectedColor = btn.dataset.color;
            if (product.colors[selectedColor]) {
		modalImage.src = product.colors[selectedColor];
            }
	});
    });


    document.querySelector(".cart-btn").addEventListener("click", () => {
	const id = parseInt(document.querySelector(".cart-btn").dataset.id);
	const product = products.find(p => p.id === id);
	const selectedSize = document.querySelector(".size-btn.selected")?.textContent;
	const selectedColor = document.querySelector(".color-btn.selected")?.dataset.color;

	const cart = JSON.parse(localStorage.getItem("cart")) || [];
	cart.push({ ...product, size: selectedSize || null, color: selectedColor || null });
	localStorage.setItem("cart", JSON.stringify(cart));
	alert("Added to cart");
    });

    document.querySelector(".favorite-btn").addEventListener("click", () => {
	const id = parseInt(document.querySelector(".favorite-btn").dataset.id);
	const product = products.find(p => p.id === id);
	const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
	favorites.push(product);
	localStorage.setItem("favorites", JSON.stringify(favorites));
	alert("Added to favorites");
    });
    
    closeModalBtn.addEventListener("click", closeModal);
    window.addEventListener("click", e => {
	if (e.target === modal) closeModal();
    });


    window.addEventListener("click", e => {
	if (e.target === modal) {
	    modal.style.display = "none";
	    window.speechSynthesis.cancel();
	}
    });

    // ========== Hash From URL ==========
    const newHash = window.location.hash.replace("#", "");
    setCategoryFromHash(newHash);

    document.addEventListener("keydown", function (event) {
	if (!modalIsOpen) {
	    const key = event.key.toLowerCase();
	    const keyMap = {
		'a': 'self-dressing',
		'b': 'assisted-dressing',
		'c': 'clothing',
		'd': 'wheelchair-accessories',
		'e': 'footwear',
		'f': 'prosthesis',
		'g': 'mobility',
		'h': 'sensory',
		'i': 'independent',
		'r': 'all'
	    };

	    if (keyMap[key]) {
		window.location.hash = `#${keyMap[key]}`;
		setCategoryFromHash(keyMap[key]);
	    }}
	

	// Sağ/Sol oklarla sayfa geçişi
	if (event.key === "ArrowRight") {
	    document.getElementById("nextBtn")?.click();
	} else if (event.key === "ArrowLeft") {
	    document.getElementById("prevBtn")?.click();
	}

	// a/s/d/f ile ürün detay aç
	const keys = ['x', 'y', 'z', 'w'];
	const index = keys.indexOf(event.key.toLowerCase());
	if (index !== -1) {
	    const visibleButtons = document.querySelectorAll(".view-details");
	    if (visibleButtons[index]) {
		visibleButtons[index].focus();
		visibleButtons[index].click();
	    }
	}

	if (event.key === "Escape") {
	    closeModal();
	}

    });

    // ========== Initialize ==========
    filterProducts();
    renderProducts();
});
