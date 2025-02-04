// class Student{
//     constructor(name){
//         console.log("Obj crearted");
//         this.name = name
//     }

//     display(){
//         console.log("name is "+this.name);
//     }
// }

// let s = new Student("raj")
// s.display()


let std = {
    name: "john",
    // getName: function(){
    //     console.log(this.name);
    // }
    getName: () => {
        console.log(this.name);
    }
}

std.getName()