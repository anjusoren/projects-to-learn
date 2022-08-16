const countEl = document.getElementById("count-el")
const decEl = document.getElementById("dec-el")
const incEl = document.getElementById("inc-el")
const resetEl = document.getElementById("reset-el")


let count = 0

decEl.addEventListener("click",function(){
    if(count === 0){
        count = 0
    }else{
        count -= 1
    countEl.textContent = count
    }
    
   
})

incEl.addEventListener("click",function(){
    count += 1
    countEl.textContent = count
})

resetEl.addEventListener("click",function(){
    countEl.textContent = 0
})