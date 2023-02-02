import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [formFields, setFormFields] = useState({
    eMail: '',
    password: ''
  })

  const [failedLogIn, setFailedLogIn] = useState(false);

  const { users } = useContext(UserContext);

  const navigate =  useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const successfulLogin = users.find(user => user.email === formFields.eMail && user.password === formFields.password)
    if (successfulLogin){
      console.log('sucess');
      navigate('/home');
    } else {
      console.log('fail');
      setFailedLogIn(true);
    }
  }

  return ( 
    <>
    <div>
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
          <input type="submit" value="Log In" />
          {
            failedLogIn && <p>Wrong log in info</p>
          }
        </form>
      </div>
    </>
   );
}
 
export default Login;