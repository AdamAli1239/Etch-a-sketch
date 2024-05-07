const container = document.querySelector("#container");
for(let i=0;i<256;i++){
    const div = document.createElement('div')
    div.classList.add("cube")
    container.appendChild(div)

}



const promptUser = document.querySelector("#button")

promptUser.addEventListener("click",() =>{
    let userInput = prompt("Please enter the number of squares per side for the new grid (max is 100)")
    container.innerHTML=''
    //this gets rid of all the other squares that were in the container by setting the inner part to an empty string
    let userInt = parseInt(userInput)
    for (let i=0;i<userInt;i++){
        const divvy = document.createElement('div')
        divvy.classList.add("cube")
        container.appendChild(divvy)
    }

const selectedDiv = document.querySelectorAll(".cube");


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


   
})
const selectedDiv = document.querySelectorAll(".cube");


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
