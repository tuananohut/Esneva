document.addEventListener('keydown', function(event) {    
    switch (event.key) {
    case 'j':
    case 'J': 
	window.location.href = "products.html";
        break;
	
    case 'a':
    case 'A':
	window.location.href = "products.html#everyday";
	break;
    case 'b':
    case 'B':
	window.location.href = "products.html#intimates";
	break;
    case 'c':
    case 'C':
	window.location.href = "products.html#mobility";
	break;
    case 'd':
    case 'D':
	window.location.href = "products.html#vision";
	break;
    case 'e':
    case 'E':
	window.location.href = "products.html#orthopedic";
	break;
    case 'f':
    case 'F':
	window.location.href = "products.html#footwear";
	break;
    case 'g':
    case 'G':
	window.location.href = "products.html#hygiene";
	break;
    case 'h':
    case 'H':
	window.location.href = "products.html#balance";
	break;
    case 'i':
    case 'I':
	window.location.href = "products.html#clothes";
	break;
	
    default:
        break;
    }    
});

