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

    // Read Aloud Toggle
    readBtn.addEventListener("click", () => {
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
    });

    // Chatbot Toggle
    chatBtn.addEventListener("click", () => {
	if (chatWidget.style.display === "none") {
	    chatWidget.style.display = "block";
	} else {
	    chatWidget.style.display = "none";
	}
    });

    // Mikrofon butonunu daha sonra entegre edeceğiz
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

