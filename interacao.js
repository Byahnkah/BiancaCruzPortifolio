function bolinhas(event){
	var x = event.clientX;
    var y = event.clientY;

	let circulo = document.createElement("div");
	circulo.setAttribute("class", "circulo");
	document.body.appendChild(circulo);

	circulo.style.borderColor = "white";

	circulo.style.left = event.clientX + 'px';
	circulo.style.top = event.clientY + 'px';

	circulo.style.transition = "all 0.5s linear 0s"

	circulo.style.left = circulo.offsetLeft - 20 + 'px';
	circulo.style.top = circulo.offsetTop - 20 + 'px';

	circulo.style.width = "50px";
	circulo.style.height = "50px";
	circulo.style.borderWidth = "1px";
	circulo.style.opacity = 0;
	
	setTimeout(function() { circulo.remove(); }, 500);
}