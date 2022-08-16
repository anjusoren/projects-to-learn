const profile =[
    {
        id:1,
        image:"./images/56.jpg",
        "name": "Susan Smith",
        designation:"WEB DEVELOPER",
        description:`I am baby meggings twee health goth +1. 
        Bicycle rights tumeric chartreuse before they sold out 
        chambray pop-up. Shaman humbleberg pickled coloring book salvia 
        hoodie, cold-pressed four dollar everyday carry.`
    },

    {   
        id:2,
        image:"./images/75.jpg",
        name: "Jaden Worse",
        designation:"UX/UI DESIGNER",
        description:`It wasn't supposed to end that way. The plan 
        had been meticulously thought out and practiced again and again. 
        There was only one possible result once it had been implemented, 
        but as they stood there the result wasn't anything close to what it 
        should have been. They all blankly looked at each wondering how this
         could have happened.`
    },

    {
        id:3,
        image:"./images/76.jpg",
        name: "Fredrick Paul",
        designation:"BACKEND ENGINEER",
        description:`Sometimes it's simply better to ignore the haters. 
        That's the lesson that Tom's dad had been trying to teach him,
        but Tom still couldn't let it go. He latched onto them and their 
        hate and couldn't let it go, but he also realized that this wasn't healthy.
         That's when he came up with his devious plan.`
    },  
    {
        id:4,
        image:"./images/77.jpg",
        name: "Mathias Scover",
        designation:"TECHNICAL LEAD",
        description:`There was little doubt that the bridge was unsafe.
         All one had to do was look at it to know that with certainty. 
         Yet Bob didn't see another option. He may have been able to work 
         one out if he had a bit of time to think things through, but time 
         was something he didn't have. A choice needed to be made,
         and it needed to be made quickly.`
    },
    
    {
        id:5,
        image:"./images/78.jpg",
        name: "Tobias Methew",
        designation:"WEB DESIGNER",
        description:`His mother had always taught him not to ever 
        think of himself as better than others. He'd tried to live by
         this motto. He never looked down on those who were less fortunate or
          who had less money than him. But the stupidity of the
         group of people he was talking to made him change his mind.`
    },

    {
        id:6,
        image:"./images/80 (1).jpg",
        name: "Jerry Nick",
        designation:"INTERN",
        description:`He slowly poured the drink over a large chunk of 
        ice he has especially chiseled off a larger block. He didn't
         particularly like his drinks cold, but he knew that the drama of 
         chiseling the ice and then pouring a drink over it looked far more
          impressive than how he actually liked it. It was all about image and 
        he'd managed to perfect the image that he wanted to project.`
    },             
]


const prevBtn = document.getElementById("prev-el")
const nextBtn = document.getElementById("next-el")
const surpriseBtn = document.getElementById("surprise-me-el")

const imageEl = document.getElementById("profile-image")
const nameEl = document.getElementById("name-el")
const desigEl = document.getElementById("desig-el")
const descEl = document.getElementById("desc-el")

let empId=0
nextBtn.addEventListener("click", function(){
    empId += 1
    imageEl.src= profile[empId].image
    nameEl.textContent = profile[empId].name
    desigEl.textContent = profile[empId].designation
    descEl.textContent = profile[empId].description
})

prevBtn.addEventListener("click", function(){
    empId -= 1
    imageEl.src= profile[empId].image
    nameEl.textContent = profile[empId].name
    desigEl.textContent = profile[empId].designation
    descEl.textContent = profile[empId].description
})

surpriseBtn.addEventListener("click",function(){
    imageEl.src= profile[empId].image
    empId = Math.floor(Math.random()*profile.length)
    nameEl.textContent = profile[empId].name
    desigEl.textContent = profile[empId].designation
    descEl.textContent = profile[empId].description
    console.log(empId)
})
//console.log(profile[empId].name)