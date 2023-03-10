import UserContext from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import headerLogo from "../images/logo.png"
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const navigation = useNavigate();

  const logout = () => {
    setLoggedInUser(null);
    navigation('/');
  }
  
  return ( 
    <header>
      <div className="headerLogo">
        <img src={headerLogo} alt="headerLogo" />
      </div>
      <div className="headerLinks">
      {loggedInUser ? 
        <div className="headerTwoLinks">
          <Link to='/home'><p>Home</p></Link>
          <Link to='/add'><p>Add a post</p></Link>
          <div>|</div>
          <p className="logout" onClick={logout}>Logout</p>
        </div>
        :
        <div className="headerTwoLinks">
          <Link to='/'><p>Login</p></Link>
          <Link to='/register'><p>Register</p></Link>
        </div>
      }
      </div>
    </header>
  );
}
 
export default Header;