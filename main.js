function buttonDiscount (){
    let budger = document.getElementById("amount").value;
    let percentoff = Number(budger * .2)

    document.getElementById("capas").innerHTML =`
            <div class="container bg-secondary rounded mt-5">
            <p class="text-light">Discounted Fare: <span class="bg-dark">${percentoff}</span></p>
        </div>`;
}   

function regularFare(){
    let pickup = Number(document.getElementById("pickup").value);
    let dropoff = Number(document.getElementById("dropoff").value);
    let stationDistance = 1;
    let baseFarePerKm = 50;
    let stationsBetween = Math.abs(pickup - dropoff);
    let distanceKm = stationsBetween * stationDistance;
    let fare = distanceKm * baseFarePerKm;
    
    document.getElementById("fareDisplay").innerHTML =
        "Fare: ₱" + fare.toFixed(2);
}

function discountFare(){
    let pickup = Number(document.getElementById("pickup").value);
    let dropoff = Number(document.getElementById("dropoff").value);
    let stationDistance = 1;
    let baseFarePerKm = 50;
    let stationsBetween = Math.abs(pickup - dropoff);
    let distanceKm = stationsBetween * stationDistance;
    let fare = distanceKm * baseFarePerKm;
    let discounted = fare - (fare * 0.2);

    document.getElementById("fareDisplay").innerHTML =
        "Discounted Fare: ₱" + discounted.toFixed(2);
}