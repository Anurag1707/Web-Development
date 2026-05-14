
// //promise concept 
// let promise = new Promise((res,reject)=>{
// setTimeout(()=>{
//     res()
// },3000)
// })
// console.log(promise);


// //set time out concept
// setTimeout(()=>{
//     console.log("jdhfgk")
// },3000)


//messge in promise
// let promise = new Promise((res,reject)=>{
//     // res()
//     // reject()
// })
// promise.then(()=>{
//     console.log("doneee"); // ye tbhi chlega jab resolve chlega 
    
// }).catch(()=>{
//     console.log("errroorr");
// })





// // await key word aur insta feature
// function step1(){
//     return new Promise((res,reject)=>{
//         setTimeout(()=>{
//             console.log("selectedddd");
//             res()
//         },5000)
//     })
// }
// function step2(){
//     return new Promise((res,reject)=>{
//         setTimeout(()=>{
//             console.log("captionnn likhoo");
//             res()
//         },4000)
//     })
// }

// async function call() {
//     await step1()
//     await step2()
// }
// call()


//API (application programimng interface)

// fetch() //promise return krta h
let h2 = document.querySelector("h2")
fetch("https://jsonplaceholder.typicode.com/todos").then((data)=>{
    return data.json()
    
}).then((val)=>{
    console.log(val);
    h2.innerText=val[0].title
    
})
.catch((err)=>{
    console.log(err)
})
