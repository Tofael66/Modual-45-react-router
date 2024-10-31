import { Link } from "react-router-dom";




const UserData = ({user}) => {
  // console.log(user)

  const {name, email , address , id, phone} = user ;

  const userStyle ={
    border: "2px solid red" ,
    pading:" 5 px " ,
    borderRadius: "20px " ,

    
}
    return (

        <div style={userStyle} >
       <p>{name}</p>
       <p>email: {email}</p>
       <p> phone: {phone}</p>
       <Link to={`/user/${id}`}>Show Details</Link>
       <br />
       <Link to = {`/user/${id}`}> <button>Click me</button></Link>
  
            
        </div>
    );
};

export default UserData;