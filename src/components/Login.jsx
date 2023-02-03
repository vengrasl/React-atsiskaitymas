import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from 'react-router-dom';
import loginImage from "../images/login-img.png";

const Login = () => {

  const [formFields, setFormFields] = useState({
    eMail: '',
    password: ''
  })

  const { users, setLoggedInUser } = useContext(UserContext);

  const [failedLogIn, setFailedLogIn] = useState(false);

  const navigate =  useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedInUser  = users.find(user => user.email === formFields.eMail && user.password === formFields.password)
    if (loggedInUser){
      setLoggedInUser(loggedInUser)
      navigate('/home');
    } else {
      setFailedLogIn(true);
    }
  }

  return ( 
    <div className="login">
        <img src={loginImage} alt="loginImage" />
        <form onSubmit={handleSubmit}>
          <label>
            E-mail adress:
            <input 
              type="email" 
              name="eMail"
              value={formFields.eMail}
              onChange={(e)=>setFormFields({...formFields, eMail:e.target.value})}
            />
          </label>
          <label>
            Password:
            <input 
              type="password" 
              name="password"
              value={formFields.password}
              onChange={(e)=>setFormFields({...formFields, password:e.target.value})}
            />
          </label>
          <input className="loginButton" type="submit" value="Log In" />
        </form>
        {
          failedLogIn && <p className="failedLogin">Wrong log in info</p>
        }
      </div>
   );
}
 
export default Login;