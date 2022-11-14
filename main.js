/*Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, 
e poi fare lo stesso con il while (che lasciate attivo).*/

//crea lista
const listaSpesa = ["uova","formaggio","latte","pane","burro"]; 
const lista = document.getElementById("lista");

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
