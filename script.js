document.addEventListener('keydown', function(event) {    
    switch (event.key) {
    case '1': 
        window.location.href = "index.html";
        break;
    case '2': 
        window.location.href = "products.html";
        break;
    case '3': 
        window.location.href = "contact.html";
        break;
    case '4': 
        window.location.href = "about.html";
        break;
    case '5': 
        window.location.href = "favorites.html";
        break;
    case '6': 
        window.location.href = "cart.html";
        break;

    default:
        break;
    }    
});

function speakText(text) {

    
    if ('speechSynthesis' in window) {
	speechSynthesis.cancel();

	const utterance = new SpeechSynthesisUtterance(text);
	utterance.lang = 'en-US'; 
	speechSynthesis.speak(utterance);
    } else {
	alert('This browser does not support text to voice.');
    }
}

document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    const cat = card.getAttribute("data-category");
    window.location.href = `products.html#${cat}`;
  });
});

let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

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

function startVoiceReading() {
    document.getElementById('voice-permission-modal').style.display = 'none';

    const synth = window.speechSynthesis;

    if (!synth) {
	alert("Tarayıcınız sesli okuma özelliğini desteklemiyor.");
	return;
    }

    const contentElements = document.querySelectorAll('h1, h2, h3, p'); 
    const textsToRead = [];

    contentElements.forEach(el => {
	const text = el.textContent.trim();
	if (text.length > 0) {
	    textsToRead.push(text);
	}
    });

    // Teker teker oku
    function speakNext(index) {
	if (index >= textsToRead.length) return;

	const utterance = new SpeechSynthesisUtterance(textsToRead[index]);
	utterance.lang = "en-US";

	utterance.onend = () => speakNext(index + 1);
	synth.speak(utterance);
    }

    speakNext(0);
}

window.onload = () => {
    showSlides();

    const modal = document.getElementById("voice-permission-modal");
    modal.style.display = "flex";

    document.getElementById("voice-yes").addEventListener("click", () => {
	localStorage.setItem("esneva-voice-consent", "true");
        modal.style.display = "none";
	startVoiceReading();
    });

    document.getElementById("voice-no").addEventListener("click", () => {
	localStorage.setItem("esneva-voice-consent", "false");
	modal.style.display = "none";
    });
};

function toggleHighContrast() {
  document.body.classList.toggle("contrast-toggle");
  const logo = document.getElementById("site-logo");

  if (document.body.classList.contains("high-contrast")) {
    logo.src = "logo_black.png"; // siyah logo
  } else {
    logo.src = "logo.png"; // beyaz logo
  }
}
