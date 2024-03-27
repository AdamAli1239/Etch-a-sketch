const container = document.querySelector("#container");
for(let i=0;i<256;i++){
    const div = document.createElement('div')
    div.classList.add("haha")
    container.appendChild(div)

}


const selectedDiv = document.querySelector(".haha");


selectedDiv.addEventListener("mouseover",event=>{
    event.target.style.backgroundColor="yellow"
})


console.log(selectedDiv)