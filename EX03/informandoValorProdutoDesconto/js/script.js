/*
Para cada produto informado (nome, preço e quantidade), escreva o nome do produto 
comprado e o valor total a ser pago, considerando que são oferecidos descontos pelo 
número de unidades compradas, segundo a tabela abaixo:  

a. Até 10 unidades: valor total 
b. de 11 a 20 unidades: 10% de desconto 
c. de 21 a 50 unidades: 20% de desconto 
d. acima de 50 unidades: 25% de desconto 
*/

const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const productAmount = document.querySelector("#productAmount");
const btn = document.querySelector("#btn-form");

class Calc {

    constructor(productName, productPrice, productAmount){
        this.productName = productName.value;
        this.productPrice = productPrice.value;
        this.productAmount = productAmount.value;
    }

    from0to10(){

    }

    from11to20(){

    }
    
    from21to50(){

    }

    over50(){

    }
}

btn.addEventListener("click", (e) => {

    e.preventDefault();

    const discountResponse = new Calc(productName, productPrice, productAmount)

    if(productAmount > 0){
        //maior que 0
        discountResponse.from0to10();
    } else if(productAmount === 11 || productAmount <= 20){
        //igual a 11 ou menor ou igual a 20
        discountResponse.from11to20();
    } else if(productAmount === 21 || productAmount <= 50){
        //igual a 21 ou menor a 50
        discountResponse.from21to50();
    } else {
        //maior que 50
        discountResponse.over50();
    }

})