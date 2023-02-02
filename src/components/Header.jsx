import UserContext from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  return ( 
    <>
      {loggedInUser ? 
        <div>
          <Link to='/home'>Home</Link>
          <Link to='/add'>Add</Link>
        </div>
        :
        <div>
          <Link to='/'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>

      }
    </>
  );
}
 
export default Header;