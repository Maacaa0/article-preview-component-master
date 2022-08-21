let shareBtn = document.getElementById("share-icon"); 
let popUpBox = document.getElementById("pop-up");

shareBtn.addEventListener("click", showBox);

function showBox() {
    if (popUpBox.style.opacity == "0") {
        return popUpBox.style.opacity = "1"
    } else {
        return popUpBox.style.opacity = "0"
    }
}

