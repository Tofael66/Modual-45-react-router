
import Header from "../Header/Header";
import Footer from "../../Footer/Footer";
import { Outlet, useLocation, useNavigation } from "react-router-dom";




const Homes = () => {
  const navigations =  useNavigation() ;
const location = useLocation() ;
console.log(location) 
    return (

        <div>
            <Header></Header>
        {
          navigations.state ==="loading" ?  <p>Loading...</p>:
           <Outlet></Outlet>
        }
      
           
        
          
            <Footer></Footer>
          

        </div>
    );
};

export default Homes;