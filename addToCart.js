let cart = document.getElementById("bag");
let cartProductsLS = [];
let x = localStorage.getItem("cart");
if (x !== null) {
    cartProductsLS = JSON.parse(x);
}
let subTotal = 0;
let estimatedTotal =150;
let bag = document.getElementById("bag");
display(cartProductsLS);



function display(data) {
    if(data.length == 0){
        alert("THE BAG IS EMPTY")
    } else {
        
    data.forEach(element => {
        let bag = document.getElementById("bag");
        let imageTag = document.createElement("img");
        imageTag.setAttribute("src", element.image);
        let smallCart = document.createElement("div");
        let desc = document.createElement("p");
        desc.innerText = element.desc;
        let price = document.createElement("p");
        price.innerText = element.price;
        let cart = document.createElement("p");
        cart.setAttribute("id", "cart");
        cart.addEventListener("click", (event) => {
            addToLS(element);
        })
        cart.innerText = "Delete";
        let btnIncrease = document.createElement("button");
        btnIncrease.innerText = "+";
        let spanTag = document.createElement("span");
        spanTag.innerText = Number(element.quantity);
        let btnDecrease = document.createElement("button");
        btnDecrease.innerText = "-";
        subTotal = Number(subTotal) + Number(element.quantity)*Number(element.price);
        estimatedTotal = Number(estimatedTotal) + Number(subTotal);
        console.log(typeof(estimatedTotal),estimatedTotal);

        smallCart.append(imageTag, desc, price, cart,btnIncrease,spanTag,btnDecrease);
        smallCart.setAttribute("id","card");
        bag.append(smallCart);
    });
    let totalAmount = document.getElementById("total");
    let estimatedTotalAmount = document.getElementById("estimatedTotal");
    totalAmount.innerText = subTotal;
    estimatedTotalAmount.innerText = estimatedTotal;
    }
}

