import UserCard from "../components/UserCard";

function First(){
    let ver = 19;
    let name = "Sam";
    let h1 = <h1>This is a heading tag</h1>
    
    console.log(name);
    console.log(h1);
    const style1 = {
      color: 'green',
      backgroundColor: 'pink',
      fontSize: '50px'
    }
    // let user = {
    //   name: "sam Smith",
    //   email: "sam@gmail.com"
    // }

    let users = [
        {name: "Ram Sharm", email: "ram@gmail.com"},
        {name: "Shayam", email: "shayam@gmail.com"},
        {name: "Hari", email: "hari@gmail.com"},
        {name: "Arjun", email: "arjun@gmail.com"},
    ]
    
    return (
      // Fragemnt
      <> 
        {/* <h1 style={style1}>Hello React!</h1>
        <h2 style={{color: 'red', textDecoration: 'underline'}}>React {ver} is a Library</h2>
        <p className="myclass">{name}</p>
        <h3>{1+1}</h3>
        <br></br>
        <br/>
        <label htmlFor=""></label>
        <input />
        <h2 className="text-danger bg-dark">Hello bootstrap!</h2>
        {h1} */}
        {/* <h1>John Smith</h1>
        <p>john@gmail.com</p>
        <h1>Jane Smith</h1>
        <p>jane@gmail.com</p> */}
  
        {/* {UserCard("John Doe", "john@email.com")}
        {UserCard("Jane Doe", "jane@email.com")} */}
  
        {/* <UserCard /> */}
        {/* <UserCard name={"John Doe"} email={"john@gmail.com"}/>
        <UserCard name={"Jane Doe"} email={"jane@gmail.com"}/> 
        */}
  
        {/* <UserCard user={user} /> */}

        {
            users.map((user, index )=> (
                <UserCard key={index} user={user} />
            ))
        }
  
      </>
    )
}

export default First;