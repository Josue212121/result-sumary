function updateStatistics() {
    // generate random values for Reaction, Memory, and Verbal
    const reactionValue = Math.floor(Math.random() * 101);
    const memoryValue = Math.floor(Math.random() * 101);
    const verbalValue = Math.floor(Math.random() * 101);
    const resultNumbers = document.getElementById("summary-component");
    let number = 100;




    // update the values in the summary
    document.getElementById("reaction").innerHTML = reactionValue;
    document.getElementById("memory").innerHTML = memoryValue;
    document.getElementById("verbal").innerHTML = verbalValue;
    document.getElementById("visual").innerHTML = verbalValue;
  
    function updateNumber() {
        // update the value of the number as required
        number -= 10;}

// set the background color based on the value of the number
if (number >= 85) {
    resultNumbers.style.backgroundColor = "blue";
  } else if (number >= 75) {
    resultNumbers.style.backgroundColor = "green";
  } else if (number >= 45) {
    resultNumbers.style.backgroundColor = "yellow";
  } else {
    resultNumbers.style.backgroundColor = "red";
  }

  // update the displayed value of the number
  resultNumbers.textContent = number;
}

// call updateNumber whenever needed, for example on a button click
document.getElementById("update").addEventListener("click", updateNumber);