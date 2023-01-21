let data = [
    {
        desc: "WIDE LEG",
        price: 900,
        image: "./images/jeans/1a.png",
        alt: "./images/jeans/1b.png",
        cart: "Add to cart"
    },
    {
        desc: "LOW & LOOSE",
        price: 1110,
        image: "./images/jeans/2a.png",
        alt: "./images/jeans/2b.png",
        cart: "Add to cart"
    },
    {
        desc: "FLARE",
        price: 999,
        image: "./images/jeans/3a.png",
        alt: "./images/jeans/3b.png",
        cart: "Add to cart"
    },
    {
        desc:"JEGGINGS",
        price:1799,
        image: "./images/jeans/4a.png",
        alt: "./images/jeans/4b.png",
        cart: "Add to cart"
    },
    {
        desc:"90S BAGGY",
        price:999,
        image: "./images/jeans/5a.png",
        alt: "./images/jeans/5b.png",
        cart: "Add to cart"
    },
    {
        desc:"Athletic Fit Chinos",
        price:799,
        image: "./images/jeans/6a.png",
        alt: "./images/jeans/6b.png",
        cart: "Add to cart"
    },
    {
        desc:"Athletic Fit Chinos",
        price:4999,
        image: "./images/jeans/7a.png",
        alt: "./images/jeans/7b.png",
        cart: "Add to cart"
    },
    {
        desc:"Athletic Fit Chinos",
        price:1799,
        image: "./images/jeans/8a.png",
        alt: "./images/jeans/8b.png",
        cart: "Add to cart"
    },
    {
        desc:"Chicago Bulls Mesh Shorts",
        price:4999,
        image: "./images/jeans/9a.png",
        alt: "./images/jeans/9b.png",
        cart: "Add to cart"
    },
    {
        desc:"Los Angeeles Lakers Bomber Jacket",
        price:5899,
        image: "./images/jeans/10a.png",
        alt: "./images/jeans/10b.png",
        cart: "Add to cart"
    }
];

let products = document.getElementById("products");

data.forEach(element => {
    let imageTag = document.createElement("img");
    imageTag.setAttribute("src",element.image);
    let smallCart= document.createElement("div");
    let desc = document.createElement("p");
    desc.innerText=element.desc;
    let price=document.createElement("p");
    price.innerText=element.price;
    let cart = document.createElement("p");
    cart.setAttribute("id","cart");
    cart.addEventListener("click",(event)=>{
        addToLS(element);
    })
    
    cart.innerText = element.cart;
    smallCart.append(imageTag,desc,price,cart);
    products.append(smallCart);
});

function addToLS(obj){
    let arrLS = [];
    let x = localStorage.getItem("cart");
    if(x !== null){
        arrLS = JSON.parse(x);
    }
    let obj1 = JSON.stringify(obj);
    let hasEntered = false;
    arrLS.forEach(element => {
        let obj2 = JSON.stringify(element);
        if(obj1 == obj2){
            hasEntered = true;
        }
    });
    if(!hasEntered){
        obj["quantity"] = 1;
        arrLS.push(obj);
        obj.quantity = 1;
        localStorage.setItem("cart",JSON.stringify(arrLS));
        alert("Product Added To The Cart");
    } else {
        alert("Product Already In Cart");
    }
}









