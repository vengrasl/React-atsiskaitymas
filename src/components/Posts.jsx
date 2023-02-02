import Post from "./Post";
import { useContext } from "react";
import PostContext from "../context/PostContext";
import { Link } from "react-router-dom";

const Posts = () => {

  const { posts } = useContext(PostContext);

  return ( 
    <>
    {
      posts ?
      posts.length > 0 ?
      posts.map(item =>
        <Post
          key={item.id}
          data={item}
        />
      ) : 
      <p>There are no posts at this time. Be the first one to Add a post by clicking <Link to='/add'>HERE</Link> </p>
      :
      <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading"/>
    }
    </>
  );
}
 
export default Posts;