import { useLoaderData } from "react-router-dom";
import UserData from "../UserData/UserData";
import './Users.css'


const Users = () => {

    const users = useLoaderData() ;
console.log(users)
    return (

        <div>
            <h1>I am form UserS</h1>
            <h2>Our user: {users.length}</h2>

            <div className="users">
                {
                    users.map(user => <UserData key={user.id} user={user}></UserData>)
                }
            </div>
            
        </div>
    );
};

export default Users;