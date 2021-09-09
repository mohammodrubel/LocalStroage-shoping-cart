const addItem = ()=>{
    const inputFeld = document.getElementById('inputFeld')
    const productName = inputFeld.value 
        if (productName == ''){
            return
        }
    // display show product 
    displayProduct(productName)
    // add to localStorage
    addProductToCart(productName)
    inputFeld.value = '';
}

// DISPLAY PRODUCT LIST 
const displayProduct = productName =>{
    const displayProduct = document.getElementById('displayProduct')
    const li = document.createElement('li')
    li.classList.add('list-group-item')
    li.innerText=productName;
    displayProduct.appendChild(li)
}
// LOCALSTORAGE 
const getCart = ()=>{
    const cart = localStorage.getItem('cart')
    let cartObject;
        if (cart){
            cartObject = JSON.parse(cart)
        }else{
            cartObject = {}
        }
    return cartObject
}

const addProductToCart = productName =>{
    const cart = getCart()
        if (cart[productName]){
            cart [productName] = cart [productName] + 1;
        }else{
            cart [productName] = 1;
        }
    const cartStringfy = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringfy)
}
// LOAD LOCALSTORAGE DATA SHOW DISPLAY 
const loadCard = ()=>{
    const cart = getCart()
    for (const product in cart){
        displayProduct(product)
    }
}
loadCard()
// PLACE ORDER OR RESET 
const placeOrder = ()=>{
    document.getElementById('displayProduct').innerText='';
    localStorage.removeItem('cart')
}

// 38-8 (advanced) 
