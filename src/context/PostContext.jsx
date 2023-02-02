import { createContext, useState, useEffect } from "react";

const PostContext = createContext();
const PostProvider = ({ children }) => {

const [posts, setPosts] = useState(null);

  useEffect(()=>{
    const postData = async () => {
      const res = await fetch('http://localhost:5000/posts');
      const data = await res.json();
      setPosts(data)
    }
    postData()
  }, []);
    
  return (
    <PostContext.Provider
      value={{
        posts
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider };
export default PostContext;