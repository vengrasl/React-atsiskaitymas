import { createContext, useState, useEffect } from "react";

const PostContext = createContext();
const PostProvider = ({ children }) => {

const [posts, setPosts] = useState(null);

  useEffect(()=>{
    const postData = async () => {
      const res = await fetch('http://localhost:5000/posts');
      const data = await res.json();
      setPosts(data);
    }
    postData();
  }, []);

  const addNewPost = async (newPost) => {
    const res = await fetch('http://localhost:5000/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {'Content-Type': 'application/json'}
    });
    const uptatedData = await res.json();
    setPosts([...posts, uptatedData]);
  }
    
  return (
    <PostContext.Provider
      value={{
        posts,
        addNewPost
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider };
export default PostContext;