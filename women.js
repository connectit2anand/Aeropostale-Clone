let data = [];
let obj1 = {
    image:"./images/womens/1.jpg",
    desc:"City Oversized Bomber Jacket",
    price:"1000",
    cart:"Add To Cart",
}
data.push(obj1);
let obj2 = {
    image:"./images/womens/2.jpg",
    desc:"Straight Cargo Pants",
    price:"500",
    cart:"Add To Cart",
}
data.push(obj2);

let obj3 = {
    image:"./images/womens/3.jpg",
    desc:"City Oversized Bomber Jacket",
    price:"700",
    cart:"Add To Cart",
}
data.push(obj3);

let obj4 = {
    image:"./images/womens/4.jpg",
    desc:"Straight Cargo Pants",
    price:"600",
    cart:"Add To Cart",
}
data.push(obj4);

let obj5 = {
    image:"./images/womens/5.jpg",
    desc:"Straight Cargo Pants",
    price:"450",
    cart:"Add To Cart",
}
data.push(obj5);

let obj6 = {
    image:"./images/womens/6.jpg",
    desc:"Straight Cargo Pants",
    price:"300",
    cart:"Add To Cart",
}
data.push(obj6);

let obj7 = {
    image:"./images/womens/7.jpg",
    desc:"High-Rise Baggy Parachute Pants",
    price:"250",
    cart:"Add To Cart",
}
data.push(obj7);

let obj8 = {
    image:"./images/womens/8.jpg",
    desc:"High-Rise Baggy Parachute Pants",
    price:"500",
    cart:"Add To Cart",
}
data.push(obj8);

let obj9 = {
    image:"./images/womens/9.jpg",
    desc:"City Oversized Bomber Jacket",
    price:"650",
    cart:"Add To Cart",
}
data.push(obj9);

let obj10 = {
    image:"./images/womens/10.jpg",
    desc:"Favourite Shelf-Bra Cami",
    price:"1000",
    cart:"Add To Cart",
}
data.push(obj10);

let obj11 = {
    image:"./images/womens/11.jpg",
    desc:"Favourite Shelf-Bra Cami",
    price:"200",
    cart:"Add To Cart",
}
data.push(obj11);

let obj12 = {
    image:"./images/womens/12.jpg",
    desc:"Aeropostale New York Full-Zip Hoodie",
    price:"1200",
    cart:"Add To Cart",
}
data.push(obj12);

let obj13 = {
    image:"./images/womens/13.jpg",
    desc:"Black Tee Shirt",
    price:"200",
    cart:"Add To Cart",
}
data.push(obj13);

let obj14 = {
    image:"./images/womens/14.jpg",
    desc:"Burnout Wash Boyfriend Tee",
    price:"700",
    cart:"Add To Cart",
}
data.push(obj14);

let obj15 = {
    image:"./images/womens/15.jpg",
    desc:"Favourite Shelf-Bra Cami",
    price:"790",
    cart:"Add To Cart",
}
data.push(obj15);

let obj16 = {
    image:"./images/womens/16.jpg",
    desc:"Chainless Hoodie",
    price:"450",
    cart:"Add To Cart",
}
data.push(obj16);

let obj17 = {
    image:"./images/womens/17.jpg",
    desc:"Blue Tee Shirt",
    price:"850",
    cart:"Add To Cart",
}
data.push(obj17);

let obj18 = {
    image:"./images/womens/18.jpg",
    desc:"Burnout Wash Boyfriend Tee",
    price:"230",
    cart:"Add To Cart",
}
data.push(obj18);

let obj19 = {
    image:"./images/womens/19.jpg",
    desc:"Favourite Shelf-Bra Cami",
    price:"570",
    cart:"Add To Cart",
}
data.push(obj19);

let obj20 = {
    image:"./images/womens/20.jpg",
    desc:"Favourite Shelf-Bra Cami",
    price:"860",
    cart:"Add To Cart",
}
data.push(obj20);


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









