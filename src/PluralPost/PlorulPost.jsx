import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";




const PlorulPost = () => {

    const posts = useLoaderData() ;
  
   // console.log(posts)

    return (

        <div>
  <h1>Post: {posts.length}</h1>

  <div className="users">
    {
        posts.map (post => <Post key={post.id} post={post}> </Post>)
    }
  </div>

        </div>
    );
};

export default PlorulPost;