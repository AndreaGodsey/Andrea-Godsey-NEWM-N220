function calctotalInterest() {
    const principle = document.getElementById("principle").value;
    const rate = document.getElementById("rate").value;
    const time = document.getElementById("time").value;
    
    document.querySelector("#results").innerHTML += "Interest: " + principle * 1 + rate * time + "<br/>";
}

