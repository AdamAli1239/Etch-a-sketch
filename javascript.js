const container = document.querySelector("#container");
for(let i=0;i<256;i++){
    const div = document.createElement('div')
    div.classList.add("haha")
    container.appendChild(div)

}


const selectedDiv = document.querySelectorAll(".haha");


selectedDiv.forEach(element =>{
    element.addEventListener("mouseenter",event=>{
        event.target.style.backgroundColor="yellow"
    })
})

selectedDiv.forEach(element =>{
    element.addEventListener("mouseleave",event=>{
        event.target.style.backgroundColor="blue"
    })
})

const promptUser = document.querySelector("#button")

promptUser.addEventListener("click",() =>{
    let userInput = prompt("Please enter the number of squares per side for the new grid (max is 100)")
   
})