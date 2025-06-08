document.addEventListener('keydown', function(event) {    
    switch (event.key) {
    case 'j':
    case 'J': 
	window.location.href = "products.html";
        break;
	
    case 'a':
    case 'A':
	window.location.href = "products.html#self-dressing";
	break;
    case 'b':
    case 'B':
	window.location.href = "products.html#assisted-dressing";
	break;
    case 'c':
    case 'C':
	window.location.href = "products.html#clothing";
	break;
    case 'd':
    case 'D':
	window.location.href = "products.html#wheelchair-accessories";
	break;
    case 'e':
    case 'E':
	window.location.href = "products.html#footwear";
	break;
    case 'f':
    case 'F':
	window.location.href = "products.html#prosthesis";
	break;
    case 'g':
    case 'G':
	window.location.href = "products.html#mobility";
	break;
    case 'h':
    case 'H':
	window.location.href = "products.html#sensory";
	break;
    case 'i':
    case 'I':
	window.location.href = "products.html#independent";
	break;
	
    default:
        break;
    }    
});

const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
canvas.width = canvas.offsetWidth;
canvas.height = document.querySelector('.shop-by-needs').offsetHeight;

const particles = [];
for (let i = 0; i < 90; i++) {
    particles.push({
	x: Math.random() * canvas.width,
	y: Math.random() * canvas.height,
	r: Math.random() * 4 + 1,
	dx: Math.random() * 0.5 - 0.25,
	dy: Math.random() * 0.5 - 0.25
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
	ctx.beginPath();
	ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
	ctx.fillStyle = '#fff';
	ctx.fill();
	p.x += p.dx;
	p.y += p.dy;
	if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
	if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(draw);
}
draw();
