import { Link, useNavigate } from "react-router-dom";



const Post = ({post}) => {

const {id, title } = post ; 

const postStyle ={
    border: "2px solid red" ,
    pading:" 5 px " ,
    borderRadius: "20px " ,

    
}

const navigate = useNavigate() ;

const seeMoreDetails = () =>{
navigate(`/post/${id}`)
}

    return (
        <div style={postStyle}>
            <h2>Tile: {title}</h2>
            <p>Id: {id}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <br />
            <Link to={`/post/${id}`}><button>Show Details</button> </Link>
            <br />
            <button onClick={seeMoreDetails}>Click to See Details</button>
        </div>
    );
};

export default Post;