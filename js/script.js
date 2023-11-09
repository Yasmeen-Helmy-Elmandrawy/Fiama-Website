//Variables
var allProducts = document.querySelectorAll(".product-content .product-item");
var productName = document.querySelector("#productName");
var productPrice = document.querySelector("#productPrice");
var btn1 = document.querySelector("#showPrice");
var totalPrice = document.getElementById("#totalPrice");
var div1 = document.querySelector("#div1");

allProducts.forEach(function (item) {
    item.onclick = function (){
        totalPrice +=  +(item.getAttribute("price"));
        productName.innerHTML = item.textContent;
        productPrice.innerHTML = +(item.getAttribute("price"));
        if (productName.innerHTML != ""){
            btn1.style.display = "block"; 
        }
    }
    btn1.onclick = function (){
        div1.innerHTML = "$" + totalPrice;
        //console.log(totalPrice)
    }
})