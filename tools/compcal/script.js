let calButton = document.getElementById("calButton").addEventListener("click", ()=>{
    let principal = document.getElementById("principal").value;
    let interest = document.getElementById("interest").value;
    let frequency = document.getElementById("frequency").value;
    let period = document.getElementById("period").value;
    let freqtionary = {"annually" : 1, "quarterly" : 4, "monthly" : 12};
    // alert("Principal, Interest and Frequency are given as : " + interest + "," + frequency );
    let times = period * freqtionary[frequency];
    let effectiveInterest = interest / freqtionary[frequency];
    let netValue = principal;
    for(let i=0; i<times; i++){
        netValue = netValue *(1+effectiveInterest/100);
    }
    netValue = Math.round(netValue);
    let displayCon = document.getElementById("displayValue");
    if(displayCon.innerHTML === ""){
        displayCon.innerHTML += "From given information, the amount will compound to a net value of " + netValue;
    }
    // for future purposes
    let valid = true;
    if(valid){
        displayCon.style.display = "block";
    }
});

let clearButton = document.getElementById("clearall").addEventListener("click", ()=>{
    displayCon = document.getElementById("displayValue");
    displayCon.innerHTML = "";
    displayCon.style.display = "none";
});
