import { useLoaderData, useNavigate, useParams } from "react-router-dom";




const PostDetails = () => {
const details =useLoaderData() ;
 // console.log(details) 
 const {id, body , title} = details ;
// const params = useParams() ;
  // console.log(params) 
  const {postId} =useParams() ;
  console.log(postId)




 const navigate = useNavigate() ;

 const handleBack = () => {
navigate(-1)
 }

    return (
        <div>
            <h2>PostDetails: {id}</h2>
            <h2>Tile: {title}</h2>
            <p><small>{body}</small></p>
            
           <button onClick={handleBack}>Go Back</button>
            
        </div>
    );
};

export default PostDetails;