document.getElementById('submitOrder').onclick = function() {
    let type = document.getElementById('petType').value;
    let quantity = document.getElementById('quantity').value;
    let color = document.getElementById('color').value;
    if(quantity > 1) {
        type += "s"
    }
    document.getElementById('output').innerHTML = ("You ordered " + quantity + " " + color + " " + type);
}