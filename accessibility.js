window.addEventListener("DOMContentLoaded", () => {
    const contrastBtn = document.getElementById("contrast-toggle");
    const contrastLabel = document.getElementById("contrast-label");
    const logo = document.getElementById("site-logo");

    const readBtn = document.getElementById("read-toggle");
    const readLabel = document.getElementById("read-label");

    const chatBtn = document.getElementById("chatbot-toggle");
    const chatWidget = document.getElementById("chat-widget");

    let reading = false;

    // High Contrast Toggle
    contrastBtn.addEventListener("click", () => {
	document.body.classList.toggle("high-contrast");

	const isHighContrast = document.body.classList.contains("high-contrast");
	contrastLabel.innerHTML = isHighContrast ? "&#9681" : "&#9681";
	logo.src = isHighContrast ? "logo_black.png" : "logo.png"; // Logoların adını senin dosyalarına göre ayarladım
    });

    function readAloud() {
	if (!reading) {
	    const textToRead = getTextFromBody();
	    if (textToRead.trim().length === 0) return;

	    const utterance = new SpeechSynthesisUtterance(textToRead);
	    utterance.lang = "en-US";
	    speechSynthesis.speak(utterance);

	    readLabel.innerHTML = "&#9632;"; // Stop icon
	    reading = true;

	    utterance.onend = () => {
		readLabel.innerHTML = "&#9654;"; // Play icon
		reading = false;
	    };
	} else {
	    speechSynthesis.cancel();
	    readLabel.innerHTML = "&#9654;";
	    reading = false;
	}
    }

    function stopReading() {
	if (reading) {
	    speechSynthesis.cancel();
	    readLabel.innerHTML = "&#9654;";
	    reading = false;
	} 
    }
    
    // Read Aloud Toggle
    readBtn.addEventListener("click", () => {
	readAloud();
    });

    // Chatbot Toggle
    chatBtn.addEventListener("click", () => {
	if (chatWidget.style.display === "none") {
	    chatWidget.style.display = "block";
	} else {
	    chatWidget.style.display = "none";
	}
    });

    let recognition;
    let recognizing = false;

    if ('webkitSpeechRecognition' in window) {
	recognition = new webkitSpeechRecognition();
	recognition.lang = 'en-US';
	recognition.continuous = false;
	recognition.interimResults = false;

	recognition.onstart = () => recognizing = true;
	recognition.onend = () => recognizing = false;

	recognition.onresult = function (event) {
	    const command = event.results[0][0].transcript.toLowerCase().trim();
	    handleVoiceCommand(command);
	};
    }

    
    function matchCommand(input, patterns) {
	return patterns.some(p => input.toLowerCase().includes(p.toLowerCase()));
    }

    
    function handleVoiceCommand(command) {
	console.log("Voice command:", command);

	if (matchCommand(command, ["go to home", "open home", "navigate to home"])) {
	    window.location.href = "index.html";
	} else if (matchCommand(command, ["go to products", "open products"])) {
	    window.location.href = "products.html";
	} else if (matchCommand(command, ["open cart", "go to cart", "show cart"])) {
	    window.location.href = "cart.html";
	} else if (matchCommand(command, ["open favorites", "go to favorites", "show favorites"])) {
	    window.location.href = "favorites.html";
	} else if (matchCommand(command, ["open community", "go to community"])) {
	    window.location.href = "community.html";
	} else if (matchCommand(command, ["read again", "read page"])) {
	    document.getElementById("btn-read-again")?.click();
	    readAloud();
	} else if (matchCommand(command, ["stop reading", "stop voice"])) {
	    document.getElementById("btn-stop-reading")?.click();
	    stopReading()
	} else if (matchCommand(command, ["close modal", "close popup"])) {
	    document.querySelector(".close-modal")?.click();
	} else if (matchCommand(command, ["next page", "next"])) {
	    document.getElementById("nextBtn")?.click();
	} else if (matchCommand(command, ["previous page", "back page", "previous"])) {
	    document.getElementById("prevBtn")?.click();
	} else if (command.includes("show me")) {
	    const parts = command.split("show me ");
	    if (parts[1]) {
		const category = parts[1].trim().toLowerCase().replace(/\s+/g, "-");
		window.location.href = `products.html#${category}`;
	    }
	} else {
	    alert("Command not recognized: " + command);
	}
    }

    document.getElementById("voice-toggle").addEventListener("click", () => {
	if (!recognizing) {
	    recognition.start();
	} else {
	    recognition.stop();
	}
    });
});

function getTextFromBody() {
  let collectedText = "";

  // 1. Tüm görünür ürün kartlarını da al
  document.querySelectorAll(".product-card").forEach(card => {
    collectedText += card.textContent + ". ";
  });

  // 2. Normal başlık ve paragraf taraması
  const mainSections = document.querySelectorAll("main, section");
  mainSections.forEach(section => {
    const headings = section.querySelectorAll("h1, h2, h3");
    const paragraphs = section.querySelectorAll("p");

    headings.forEach(h => (collectedText += h.textContent + ". "));
    paragraphs.forEach(p => (collectedText += p.textContent + " "));
  });

  return collectedText;
}



const menuToggle = document.getElementById("menu-toggle");
const drawer = document.getElementById("accessibility-drawer");

menuToggle.addEventListener("click", () => {
  drawer.classList.toggle("open");
});

