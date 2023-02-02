import { useState} from "react";
import { createContext } from "react";
import { useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [users, setUsers] = useState([])

  
  useEffect(()=>{
    const userData = async () => {
      const res = await fetch('http://localhost:5000/users');
      const data = await res.json();
      setUsers(data);
    }
    userData()
  }, []);

  


  return (
    <UserContext.Provider 
    value= {{
      users
    }}
    >
      {children}
    </UserContext.Provider>
  )
}

export {UserProvider};
export default UserContext;