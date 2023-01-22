let cart = document.getElementById("bag");
let cartProductsLS = [];
let x = localStorage.getItem("cart");
if (x !== null) {
    cartProductsLS = JSON.parse(x);
}
let estimatedTotal =0;
let subTotal = 0;
let salesTax = 0;
let shippingTax = 0;
let bag = document.getElementById("bag");
display(cartProductsLS);



function display(data) {
    let bag = document.getElementById("bag");
    bag.innerHTML = "";
    subTotal = 0;
    if(data.length == 0){
        alert("THE BAG IS EMPTY")
        estimatedTotal = 0;
        salesTax = 0;
        shippingTax = 0;
    } else {
        estimatedTotal =150;
        salesTax = 50;
        shippingTax = 100;
    data.forEach(element => {
        let imageTag = document.createElement("img");
        imageTag.setAttribute("src", element.image);
        let smallCart = document.createElement("div");
        let desc = document.createElement("p");
        desc.innerText = element.desc;
        let price = document.createElement("p");
        price.innerText = element.price;
        let cart = document.createElement("p");
        cart.setAttribute("id", "cart");
        cart.innerText = "Remove";
        cart.style.cursor = "pointer";
        cart.addEventListener("click", (event) => {
            deleteLS(element);
        })
        
        let btnIncrease = document.createElement("button");
        btnIncrease.innerText = "+";
        btnIncrease.style.cursor = "pointer";
        btnIncrease.setAttribute("id","btnIncColor");
        btnIncrease.addEventListener("click",(event)=>{
            increaseProduct(element);
        })
        let spanTag = document.createElement("span");
        spanTag.innerText = Number(element.quantity);
        let btnDecrease = document.createElement("button");
        btnDecrease.style.cursor = "pointer";
        btnDecrease.setAttribute("id","btnDecColor");
        btnDecrease.innerText = "-";
        btnDecrease.addEventListener("click",(event)=>{
            decreaseProduct(element);
        })
        subTotal = Number(subTotal) + Number(element.quantity)*Number(element.price);
        console.log(typeof(estimatedTotal),estimatedTotal);

        smallCart.append(imageTag, desc, price, cart,btnIncrease,spanTag,btnDecrease);
        smallCart.setAttribute("id","card");
        bag.append(smallCart);
    });
    }
    let sale = document.getElementById("salesTax");
    sale.innerText = salesTax;
    let shipping = document.getElementById("shippingTax");
    shipping.innerText = shippingTax;
    let totalAmount = document.getElementById("total");
    let estimatedTotalAmount = document.getElementById("estimatedTotal");
    totalAmount.innerText = subTotal;
    estimatedTotal = estimatedTotal + subTotal;
    estimatedTotalAmount.innerText = estimatedTotal;
}


function deleteLS(obj){
    let obj1 = JSON.stringify(obj);
    let newLS = cartProductsLS.filter((element)=>{
        let obj2 = JSON.stringify(element);
        if(obj1 == obj2){
            return false;
        } else {
            return true;
        }
    });
    cartProductsLS = newLS;
    localStorage.setItem("cart",JSON.stringify(cartProductsLS));
    display(cartProductsLS);
}

let coupon = document.getElementById("coupon");
coupon.addEventListener("change", event => {
    let message = document.getElementById("couponMsg");
    let percentage = document.getElementById("couponDis");
    let estimatedTotalAmount = document.getElementById("estimatedTotal");
    let couponSelected = event.target.value;
    if(couponSelected == ""){
        estimatedTotalAmount.innerText = estimatedTotal;
        message.style.display = "none";
    } else {
        message.style.display = "";
        let discountedPrice = estimatedTotal;
        if(couponSelected == "IDFCPF10") {
            discountedPrice = discountedPrice - Math.floor(estimatedTotal * 0.1);
            percentage.innerText = "10%";
        } else if(couponSelected == "AMEXMKPF5" || couponSelected == "RBLPF5") {
            discountedPrice = discountedPrice - Math.floor(estimatedTotal * 0.05);
            percentage.innerText = "5%";
        } else if(couponSelected == "ICICIPF15") {
            discountedPrice = discountedPrice - Math.floor(estimatedTotal * 0.15);
            percentage.innerText = "15%";
        } else {
            discountedPrice = discountedPrice - Math.floor(estimatedTotal * 0.2);
            percentage.innerText = "20%";
        }
        estimatedTotalAmount.innerText = discountedPrice;
    }
})

function increaseProduct(obj){
    let obj1 = JSON.stringify(obj);
    cartProductsLS.forEach((element)=>{
        let obj2 = JSON.stringify(element);
        if(obj1 == obj2){
            let x = element.quantity;
            element.quantity = x + 1;
        }
    });
    localStorage.setItem("cart",JSON.stringify(cartProductsLS));
    display(cartProductsLS);
}

function decreaseProduct(obj){
    let obj1 = JSON.stringify(obj);
    cartProductsLS.forEach((element) =>{
        let obj2 = JSON.stringify(element);
        if(obj1 == obj2){
            let x = element.quantity;
            if(x == 1){
                element.quantity = 1;
            } else {
                
            element.quantity = x - 1;
            }
        }
    })
    localStorage.setItem("cart",JSON.stringify(cartProductsLS));
    display(cartProductsLS);
}

