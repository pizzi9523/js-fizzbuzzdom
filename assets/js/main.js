// Esegui un ciclo da 1 a 100 e per ogni iterazione aggiungi un elemento html nel container
const containerElement = document.querySelector(".container");


for (let i = 1; i <= 100; i++) {
    //console.log(i);
    const number = document.createElement("p");
    number.append(i)
    containerElement.append(number)

    // A seconda del valore dell'indice imposto uno stile differende per multipli di 3 e di 5 e/o entrambi
    if (i % 3 == 0 && i % 5 == 0) {
        number.style.backgroundColor = "#DE5471";
        number.innerHTML = "fizzbuzz"
    }
    else if (i % 3 == 0) {
        number.style.backgroundColor = "#61D2A4";
        number.innerHTML = "fizz"
    }
    else if (i % 5 == 0) {
        number.style.backgroundColor = "#F9D277";
        number.innerHTML = "buzz"
    }
    else {
        number.style.backgroundColor = "#3D88AE";
    }

}


