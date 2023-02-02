import PostContext from "../context/PostContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {

  const [formFields, setFormFields] = useState({
    title: '',
    description: ''
  });

  const { addNewPost } = useContext(PostContext);

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const newPost = {
      title: formFields.title,
      description: formFields.description,
      id: Date.now()
    };
    addNewPost(newPost);
    navigate('/home')
  }  

  return ( 
    <>
     <div className="FormAddPost">
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input 
              type="text" 
              name="title"
              value={formFields.title}
              onChange={(e) => setFormFields({ ...formFields, title: e.target.value })}
            />
          </label>
          <label>
            Description:
            <textarea 
              type="text" 
              name="description"
              value={formFields.description}
              onChange={(e) => setFormFields({ ...formFields, description: e.target.value })}
            />
          </label>
          <input type="submit" value="Create new Post" />
        </form>
      </div>
    </>
   );
}
 
export default Add;