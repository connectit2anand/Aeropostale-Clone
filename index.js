let fashionImg = ["p1.jpg"];
fashionImg.forEach(element => {
    let fashion = document.getElementById("fashion");
    let image = document.createElement("img");
    image.setAttribute("src",element);
    fashion.append(image);
});
let str1 = "It's the time of the year to honor our predecessors and the fight constantly give  for equal rights, that small break from reality were we celebrate love and who we are.";
let str2 = "If it wasn't for two brave and ruthless transgender women of color starting a riot, we wouldn't";
let aeroPride = [str1,str2];
let x = document.getElementById("aeroPrideDynamic");
x.setAttribute("id","aeroParagraph2")
let i = 0;
x.innerText = aeroPride[i];
setInterval(function(){
    if(i == aeroPride.length){
        i = 0;
    }
    x.innerText=aeroPride[i];
    i ++;
},7000);



 

