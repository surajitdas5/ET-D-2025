function UserCard(data){
    // function UserCard(name, email){
    // console.log(data)
    const {name, email} = data.user
    // const {name, email} = data
      return (
        <div className="card m-2" style={{width: "200px"}}>
          <div className="card-body">
            {/* <h3>{data.name}</h3>
            <p>{data.email}</p> */}
            <h3>{name}</h3>
            <p>{email}</p>
          </div>
        </div>
      )
    }

export default UserCard;