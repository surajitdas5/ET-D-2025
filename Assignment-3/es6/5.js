let arr = [1, 4, 3, 2, 5, 10, 17, 21, 33]
// let arr = ["A", "BB", "AA", "C", "AAAA"]
// arr.push(10)
// console.log(arr);
// arr.pop()
// console.log(arr);
// console.log(arr.indexOf(30));
// console.log(arr.includes(30));

// forEach
// arr.forEach(function(num, index){
//     console.log(`${index} -> ${num}`);
// })

// map
// let newArr = arr.map(function(num, index){
//     let newnum = num * 10;
//     return newnum
// })
// console.log(newArr);

// filter
// let newArr = arr.filter(function(num){
//     if(num % 2 === 0){
//         return true 
//     } else {
//         return false
//     }
// })
// let newArr = arr.filter(num => num%2 !== 0)
// console.log(newArr);

// reduce
// let s = 0;
// for(let i=0; i<arr.length; i++){
//     s += arr[i]
// }
// let s = arr.reduce(function(s, n){
//     return s+n
// } ,0)
// let s = arr.reduce((s, n) => s+n ,0)
// console.log(s);

// let largest = arr.reduce((largest, n) =>{
//     if(n>largest) return n
//     else return largest
// }, arr[0])
// let largest = arr.reduce((largest, n) => n>largest ? n : largest, arr[0])
// console.log(largest);


// sort
// arr.sort(function(a, b){
//     if(a>b){
//         return 1
//     } else if( b>a){
//         return -1
//     } else {
//         return 0
//     }
// })

// arr.sort((a,b) => a-b)
// console.log(arr);

