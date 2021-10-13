// Esegui un ciclo da 1 a 100 e per ogni iterazione aggiungi un elemento html nel container
const containerElement = document.querySelector(".container");


for (let i = 0; i <= 100; i++) {
    //console.log(i);
    const number = document.createElement("p");
    number.append(i)
    containerElement.append(number)
}
// A seconda del valore dell'indice imposto uno stile differende per multipli di 3 e di 5 e/o entrambi

