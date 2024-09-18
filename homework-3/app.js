function calctotalInterest() {
    const principle = document.getElementById("principle").value;
    const rate = document.getElementById("rate").value;
    const time = document.getElementById("time").value;
    const answer = principle * (1 + rate * time);
    const resultsAfterAnswer = answer - principle;
    
    document.querySelector("#results").innerHTML += `With a beginning principal of $${principle} and with a growth rate of ${rate}% for ${time} years, your total interest will be$ ${resultsAfterAnswer.toFixed(2)} with a grand total of $${answer.toFixed(2)}.`
}

