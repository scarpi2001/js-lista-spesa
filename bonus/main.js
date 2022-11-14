/*Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, 
e poi fare lo stesso con il while (che lasciate attivo).*/

//crea lista
const listaSpesa = ["uova","formaggio","latte","pane","burro"]; 
console.log(listaSpesa);

const lista = document.getElementById("lista");
const text = document.getElementById("text");
const myButton = document.getElementById("button");

//stampa elementi

//CICLO FOR
/*
for (let i = 0; i < lista.length; i++) {

    lista.innerHTML += `<li>${listaSpesa[i]}</li>`;
    
}
*/

//CICLO WHILE
let i = 0;
while (i < listaSpesa.length) {

lista.innerHTML += `<li>${listaSpesa[i]}</li>`;
i++;

}

myButton.addEventListener("click",

    function(){
        
        listaSpesa.push(text.value);
        lista.innerHTML += `<li>${text.value}</li>`;
        text.value = "";

    }
);










