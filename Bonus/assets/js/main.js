const fullNameInputElement = document.getElementById("user-name");
const ageElement = document.getElementById("age");
const distanceElement = document.getElementById("distance");
const generateButtonElement = document.getElementById("generate");
const cancelButtonElement = document.getElementById("cancel");
const prezzoElement = document.getElementById("prezzo");
let message;

const passengerNameTicketElement = document.querySelector(".passenger_name");
const offertaElement = document.querySelector(".offerta");
const carrozzaElement = document.querySelector(".n_carrozza");
const codiceCpElement = document.querySelector(".codice_cp");
const costoBigliettoElement = document.querySelector(".ticket_price");


generateButtonElement.addEventListener("click", function () {
    const passengerName = fullNameInputElement.value;
    const passengerAge = ageElement.value;
    const numberKm = distanceElement.value;
    let ticketPrice = numberKm * 0.21;
    // console.log(ticketPrice);

    if (passengerAge == "minorenne") {
        ticketPrice -= (ticketPrice * 20) / 100;
        offertaElement.innerHTML = "Sconto 20%";
        //console.log(ticketPrice);
    }
    else if (passengerAge == "over65") {
        ticketPrice -= (ticketPrice * 40) / 100;
        offertaElement.innerHTML = "Sconto 40%";

        // console.log(ticketPrice);
    }
    else {
        offertaElement.innerHTML = "Biglietto Standard";

    }


    passengerNameTicketElement.innerHTML = passengerName;
    carrozzaElement.innerHTML = Math.floor(Math.random() * 20) + 1;
    codiceCpElement.innerHTML = Math.floor(Math.random() * 100000) + 1;
    costoBigliettoElement.innerHTML = `${ticketPrice.toFixed(2)}€`;
})

cancelButtonElement.addEventListener("click", function () {
    fullNameInputElement.value = "";
    ageElement.value = "";
    distanceElement.value = "";
    prezzoElement.innerHTML = "";
    passengerNameTicketElement.innerHTML = "";
    carrozzaElement.innerHTML = "";
    codiceCpElement.innerHTML = "";
    costoBigliettoElement.innerHTML = "";
    offertaElement.innerHTML = "";


})

