const container = document.querySelector("#container");
for(let i=0;i<256;i++){
    const div = document.createElement('div')
    div.classList.add("haha")
    container.appendChild(div)

}


const selectedDiv = document.querySelectorAll(".haha");


selectedDiv.forEach(element =>{
    element.addEventListener("mouseover",event=>{
        event.target.style.backgroundColor="yellow"
    })
})