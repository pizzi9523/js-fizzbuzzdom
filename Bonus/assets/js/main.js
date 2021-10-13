const fullNameInputElement = document.getElementById("user-name");
const ageElement = document.getElementById("age");
const distanceElement = document.getElementById("distance");
const generateButtonElement = document.getElementById("generate");
const cancelButtonElement = document.getElementById("cancel");
const prezzoElement = document.getElementById("prezzo");
let message;


generateButtonElement.addEventListener("click", function () {
    const passengerName = fullNameInputElement.value;
    const passengerAge = ageElement.value;
    const numberKm = distanceElement.value;
    let ticketPrice = numberKm * 0.21;
    // console.log(ticketPrice);

    if (passengerAge == "minorenne") {
        ticketPrice -= (ticketPrice * 20) / 100
        message = "Hai diritto al 20% di sconto"
        //console.log(ticketPrice);
    }
    else if (passengerAge == "over65") {
        ticketPrice -= (ticketPrice * 40) / 100
        message = "Hai diritto al 40% di sconto"

        // console.log(ticketPrice);
    }
    else {
        message = "Non hai diritto a nessuno sconto"
    }

    prezzoElement.innerHTML = `Ciao ${passengerName}! ${message} il prezzo del biglietto è ${ticketPrice.toFixed(2)} €`

    // console.log(`Il prezzo del biglietto è ${ticketPrice.toFixed(2)} €`);
    // console.log(passengerAge);
    // console.log(numberKm);

})

cancelButtonElement.addEventListener("click", function () {
    fullNameInputElement.value = "";
    ageElement.value = "";
    distanceElement.value = "";
    prezzoElement.innerHTML = "";

})

