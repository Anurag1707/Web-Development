// let h1 =document.querySelector("h1")
// h1.style.color="red"
// let h= document.getElementsByClassName("one")
// let h3 = document.querySelector("h3")
// h[0].style.color="red"
// h[1].style.color="red"

// let name = prompt("enter name")
// h3.innerText="Name:"+ " "+ name


// let inp =document.querySelector("input")
// let h2 = document.querySelector("h2")
// inp.addEventListener("input",function(e){
//     h2.innerText=e.target.value
//     console.log(e.target.value)
// })


let inp =document.querySelector("input")
let h2 = document.querySelector("h2")
let btn = document.querySelector("button")
// inp.addEventListener("input",function(e){
//     h2.innerText=e.target.value
// })
btn.addEventListener("click",function(){
    let data=inp.value
    for(a of h2 )
    h2.innerText=data
    inp.value=" "
})
