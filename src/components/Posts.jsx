import Post from "./Post";
import { useContext } from "react";
import PostContext from "../context/PostContext";

const Posts = () => {

  const { posts } = useContext(PostContext);

  return ( 
    <>
    {
      posts?
      posts.map(item =>
        <Post
          key={item.id}
          data={item}
        />
        ):
        <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading"/>
    }
    </>
   );
}
 
export default Posts;