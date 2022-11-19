const toggleButton = document.getElementById("navbar--button");
toggleButton.addEventListener("click", ()=>{
    let barList = document.getElementById("navbar--menu");
    if(barList.style.display === ""){
        barList.style.display = "flex";
        toggleButton.innerHTML = "Close";
    }else{
        barList.style.display = "";
        toggleButton.innerHTML = "Menu";
    }
});