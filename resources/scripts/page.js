const toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener("click", ()=>{
    let barList = document.getElementById("bar-list");
    if(barList.style.display === ""){
        barList.style.display = "flex";
        toggleButton.innerHTML = "Close";
    }else{
        barList.style.display = "";
        toggleButton.innerHTML = "Menu";
    }
});