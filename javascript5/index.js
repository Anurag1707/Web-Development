// localStorage.setItem("key","hellloo")
// let data= localStorage.getItem("key")
// // localStorage.removeItem("key")
// console.log(data)

let formData=document.querySelector("#formData")

   let h2= document.querySelector("h2")
   let h1= document.querySelector("h1")
   let h3= document.querySelector("h3")

   let saveData=    JSON.parse(localStorage.getItem("userdata"))
   if(saveData){
      h1.innerText=saveData.name
      h2.innerText=saveData.email
      h3.innerText=saveData.pass

   } 
formData.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    let data={
        name:formData[0].value,
        email:formData[1].value,
        pass:formData[2].value,
    }
    console.log(data);
    localStorage.setItem("userdata",JSON.stringify(data))
})

let loginData=document.querySelector("#loginData")
loginData.addEventListener("submit",(e)=>{
    e.preventDefault()

    let login={
        email:loginData[0].value,
        pass:loginData[1].value,
    }

    let localdata= localStorage.getItem("userdata") //data lene ke liye
    console.log(localdata);
    let mainData= JSON.parse(localdata)
    console.log(mainData);

if(login.email===mainData.email && login.pass===mainData.pass){
    alert("doneeee")
}else{
    alert("nahhh baba")
}
     
})

let h1=document.querySelector(h1)
