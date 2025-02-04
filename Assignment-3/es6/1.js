// Callback Function

// function add(a,b, display){
//     // return a+b
//     let c = a+b
//     display(c)
// }
// display: callback function
// add: higher-order function
// function add(a,b, callback){
//     // return a+b
//     let c = a+b
//     // display(c)
//     callback(c)
// }

// function display(x){
//     console.log(x);
// }

// let c = add(10, 20, display)
// display(c)
// display



// add(100, 200, function(data){
//     console.log(data);
// })


// function double(num, clback){
//     let n = num*2;
//     clback(n)

// }
// double(10, function(num){
//     let x = num*3;
//     console.log(x);
// })

// function hello(){
//     console.log("Hello JS!");
// }

// setTimeout(hello, 3000)

// setTimeout(function(){
//     console.log("New Hello JS!");
// }, 3000)

// let c = 0;
// setInterval(function(){
//     console.log("hi ", c++);
// }, 1000)

let display = document.getElementById("display")
let c = 0;
// setInterval(function(){
//     display.innerHTML = c++
// }, 1000)
// let interval = setInterval(function(){
//     display.innerHTML = ++c
//     if(c >= 5){
//         clearInterval(interval)
//     }
// }, 1000)

setInterval(function(){
    let dt = new Date()
    let time = dt.toLocaleTimeString()
    console.log(time);
    display.innerHTML = time
}, 1000)
