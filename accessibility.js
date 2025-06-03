let isHighContrast = false;
let isReading = false;
let currentReadText = "";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("contrast-toggle").addEventListener("click", () => {
	isHighContrast = !isHighContrast;
	document.body.classList.toggle("high-contrast", isHighContrast);
    });

    document.getElementById("read-toggle").addEventListener("click", () => {
	if (!isReading) {
	    const main = document.querySelector("main");
	    if (main) {
		const textToRead = Array.from(main.querySelectorAll("h1,h2,h3,p"))
		      .map(el => el.textContent.trim())
		      .filter(Boolean)
		      .join(". ");
		currentReadText = textToRead;

		const utterance = new SpeechSynthesisUtterance(currentReadText);
		utterance.lang = 'en-US';
		window.speechSynthesis.speak(utterance);
	    }
	    document.getElementById("read-toggle").innerText = "⏹";
	} else {
	    window.speechSynthesis.cancel();
	    document.getElementById("read-toggle").innerText = "▶";
	}
	isReading = !isReading;
    });

    document.getElementById("chat-toggle").addEventListener("click", () => {
	alert("AI Chatbot not implemented yet.");
    });
    
});



