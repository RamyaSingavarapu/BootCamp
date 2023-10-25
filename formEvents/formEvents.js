const form = document.querySelector('form');
const Quantity = document.querySelector('#qty');
const Product = document.querySelector('#product');
const ul = document.querySelector('#list')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newQuantity = Quantity.value;
    const newProduct = Product.value;
    const newLi = document.createElement('li');
    newLi.innerText = `${newQuantity}${newProduct}`;
    ul.appendChild(newLi);
    newQuantity = "";
    newProduct = "";

})