let data = [
    {
        desc: "Chicago Bulls Bomber Jacket",
        price: 900,
        image: "./../images/mens/20.jpg",
        cart: "Add to cart"
    },
    {
        desc: "Rick And Morty Graphic Tee",
        price: 250,
        image: "./../images/mens/5.jpg",
        cart: "Add to cart"
    },
    {
        desc: "Beach Chino Shorts 7.5",
        price: 240,
        image: "./../images/mens/18.jpg",
        cart: "Add to cart"
    },
    {
        desc:"Los Angeles Lakers Graphic Tee",
        price:540,
        image: "./../images/mens/2.jpg",
        cart: "Add to cart"
    },
    {
        desc:"Athletic Fit Chinos",
        price:799,
        image: "./../images/mens/11.jpg",
        cart: "Add to cart"
    },
    {
        desc:"Athletic Fit Chinos",
        price:799,
        image: "./../images/mens/12.jpg",
        cart: "Add to cart"
    },
    {
        desc:"Athletic Fit Chinos",
        price:779,
        image: "./../images/mens/10.jpg",
        cart: "Add to cart"
    },
    {
        desc:"Athletic Fit Chinos",
        price:1799,
        image: "./../images/mens/13.jpg",
        cart: "Add to cart"
    },
    {
        desc:"Chicago Bulls Mesh Shorts",
        price:499,
        image: "./../images/mens/19.jpg",
        cart: "Add to cart"
    },
    {
        desc:"Los Angeeles Lakers Bomber Jacket",
        price:1999,
        image: "./../images/mens/17.jpg",
        cart: "Add to cart"
    },
    {
        desc:"Slim Hemp Denim Shorts",
        price:199,
        image: "./../images/mens/15.jpg",
        cart: "Add to cart"
    },
    {
        desc:"New York Knicks Graphic Tee",
        price:999,
        image: "./../images/mens/3.jpg",
        cart: "Add to cart"
    },
    {
        desc:"Skinny Premium Jeans",
        price:1000,
        image: "./../images/mens/9.jpg",
        cart: "Add to cart"
    },
    {
        desc:"Athletic Premium Air Denim Shorts",
        price:799,
        image: "./../images/mens/16.jpg",
        cart: "Add to cart"
    },
    {
        desc:"Chicago Bulls Pullover Hoodie",
        price:1600,
        image: "./../images/mens/6.jpg",
        cart: "Add to cart"
    },
    {
        desc:"Aeropostale Logo Spliced Graphic Tee",
        price:400,
        image: "./../images/mens/1.jpg",
        cart: "Add to cart"
    },
    {
        desc:"Premium Air Athletic Skinny Jean",
        price:1700,
        image: "./../images/mens/8.jpg",
        cart: "Add to cart"
    },
    {
        desc:"Air Softspun Tech Fleece Bomber Jacket",
        price:4000,
        image: "./../images/mens/7.jpg",
        cart: "Add to cart"
    },
    {
        desc:"A87 Logo Pique Polo",
        price:1199,
        image: "./../images/mens/14.jpg",
        cart: "Add to cart"
    },
    {
        desc:"Aero Block Logo Heritage Pullover Hoodie",
        price:1199,
        image: "./../images/mens/21.jpg",
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









