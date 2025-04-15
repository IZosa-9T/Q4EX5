function order() {
	var BFS = document.getElementById('choice').value;

	switch (BFS) {
		case "B":
			document.getElementById('result').innerHTML = "Your Burger is on the way. You must be enjoying yourself.";
			break;
		case "F":
			document.getElementById('result').innerHTML = "Your fries may or may not be the last order Gerald ever fulfills.";
			break;
		case "S":
			document.getElementById('result').innerHTML = "Enjoy your soda while Gerald suffers.";
			break;
		default:
			document.getElementById('result').innerHTML = "Your input is thankfully invalid.";
	}
}