import { useLoaderData } from "react-router-dom";


const UserDetails = () => {

    const user =useLoaderData()
    console.log(user)
    const {name , website, email} = user ;


    return (
        <div>

<h1>Hello Im a Details from : {name}</h1>
<p>Wbsite: {website}</p>
<p>Email: {email}</p>
            
        </div>
    );
};

export default UserDetails;