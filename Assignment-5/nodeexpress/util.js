function add(a, b) {
    return a+b
}

function sub(a,b){
    return a-b
}

const PI = 3.14

class Student{
    display(){
        console.log("Display of Student");
    }
}

let s = new Student();
module.exports = s

// module.exports = add
// module.exports = sub
// module.exports = PI

// module.exports = {"add": add, "sub": sub, "PI": PI}
// module.exports = {"sum": add, "sub": sub, "PI": PI}
// module.exports = {add, sub, PI}