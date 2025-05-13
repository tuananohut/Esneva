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

const categories = document.querySelectorAll('.category');
categories.forEach(category => {
    category.addEventListener('click', function() {
        alert('Kategori: ' + category.querySelector('h2').innerText);
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

// Sayfa yüklendiğinde slayt gösterisini başlat
window.onload = () => {
    showSlides();
    renderProducts(products);
};

renderProducts();

document.addEventListener("DOMContentLoaded", renderProducts);
