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
    navigate('/home');
  }  

  return ( 
    <>
     <div className="addPostDiv">
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
              className="description" 
              type="text" 
              name="description"
              value={formFields.description}
              onChange={(e) => setFormFields({ ...formFields, description: e.target.value })}
            />
          </label>
          <div className="btnDiv">
            <input className="addPostBtn" type="submit" value="Create new Post" />
          </div>
        </form>
      </div>
    </>
   );
}
 
export default Add;