const productPrice1 = document.querySelector(".product__price1");
const productPrice2 = document.querySelector(".product__price2");
const productPrice3 = document.querySelector(".product__price3");
const productPrice4 = document.querySelector(".product__price4");


const innerProductPrice1 = productPrice1.innerHTML;
const innerProductPrice2 = productPrice2.innerHTML;
const innerProductPrice3 = productPrice3.innerHTML;
const innerProductPrice4 = productPrice4.innerHTML;


const price1 = Number(innerProductPrice1);
const price2 = Number(innerProductPrice2);
const price3 = Number(innerProductPrice3);
const price4 = Number(innerProductPrice4);

const finalPrice = document.querySelector(".final__price");
const sumPrices = price1 + price2 +  price3 +  price4;
finalPrice.textContent = sumPrices; 

function sale() {
    finalPrice.textContent = sumPrices - (sumPrices/ 100 * 20);
}

document.querySelector(".btn").onclick = sale;

