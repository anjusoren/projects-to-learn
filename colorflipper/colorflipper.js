const changeBgEl = document.getElementById("changebg-el")
const btnEl = document.getElementById("btn-el")
const colorEl = document.getElementById("color-el")

const colors =["red","brown","green","yellow","blue","green","grey","white"]

//change background-color on click event 
btnEl.addEventListener("click",function(){
   
    let color = colors[Math.floor(Math.random() * colors.length)]
    changeBgEl.style.backgroundColor = color;
    btnEl.style.backgroundColor = color;
    colorEl.textContent = color;
        
})