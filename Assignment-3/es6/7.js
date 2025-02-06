// Spread & Rest
//...

// let arr = [1, 2, 3, 4, 5];

// // let brr = arr
// // spread
// // let brr = [...arr]
// let brr = [...arr, 100, 200, 300]

// brr[0] = 111;

// console.log(arr); // 1 2 3 4 5
// console.log(brr); // 111 2 3 4 5

// let std = {
//     name: "Sam",
//     age: 20
// }

// // let std1 = {...std}
// let std1 = {...std, age: 18}

// console.log(std);
// console.log(std1);

// rest
function add(a, b, ...nums){
    // console.log(nums);
    let s = a+b
    nums.forEach( (n) => {
        s = s+n
    })
    return s
    
    // return a+b+c
}

// console.log(add(10, 20));
// console.log(add(10, 20, 30));
// console.log(add(10, 20, 30, 40));
// console.log(add(10, 20, 30, 40, 50));


// optional chaining
// let std = {
//     name: "John",
//     address: {
//         city: "BBSR",
//         location: {
//             lat: 12.3,
//             long: 67.4
//         }
//     }
// }

// console.log(std?.address?.location?.lat);


