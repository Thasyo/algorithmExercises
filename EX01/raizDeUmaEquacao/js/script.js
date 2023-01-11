/* Determine  as  raízes  de  uma  equação  de  2º  grau:  ax2  +  bx  +  c  =  0  
(recordar  que  o discriminante Δ = b2 – 4ac, e que a raiz r = (–b ± √Δ)/2a). */

const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const btn = document.querySelector("#btn");



btn.addEventListener("click", (() =>{

    class RaizEq {
        constructor(a, b, c){
            this.a = a.value;
            this.b = b.value;
            this.c = c.value;
        }

        delta(){
            const delta = (Math.pow(this.b, 2)) - (4 * (this.a * this.c));
            return delta;
        }

        raiz01(){
            if(this.delta() < 0 ){
                return console.log("A equação não tem raiz.")
            }

            const raiz01 = (-this.b) + (Math.sqrt(this.delta())) / (2 * this.a);
            return console.log(`1° Raíz: ${raiz01.toFixed(1)}`);
        }

        raiz02(){
            if(this.delta() < 0 || this.delta() === 0){
                return;
            }

            const raiz02 = (-this.b) - (Math.sqrt(this.delta())) / (2 * this.a);
            return console.log(`2° Raíz: ${raiz02.toFixed(1)}`);

        }

    }

    const valueRaizEq = new RaizEq(a, b, c);
    valueRaizEq.raiz01();
    valueRaizEq.raiz02();

}));


