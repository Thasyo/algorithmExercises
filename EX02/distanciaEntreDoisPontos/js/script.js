/*Calcular a distância entre dois pontos. dAB² = (xB – xA)² + (yB – yA)²  */
const xA = document.querySelector("#xA");
const yA = document.querySelector("#yA");
const xB = document.querySelector("#xB");
const yB = document.querySelector("#yB");

const btn = document.querySelector("button");

btn.addEventListener("click", () => {

    const subXBXA = xB.value - xA.value;
    const subYBYA = yB.value - yA.value;

    const distAB = Math.sqrt(Math.pow((subXBXA), 2) + Math.pow((subYBYA),2));
    console.log(distAB.toFixed(2));
})
