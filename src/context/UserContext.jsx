import { useState} from "react";
import { createContext } from "react";
import { useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [users, setUsers] = useState([]);

  const [loggedInUser, setLoggedInUser] = useState();

  useEffect(()=>{
    const userData = async () => {
      const res = await fetch('http://localhost:5000/users');
      const data = await res.json();
      setUsers(data);
    }
    userData()
  }, []);

  const addNewUser = (newUser) => {
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      setUsers([...users, newUser])
      console.log('ivykis')
  }

  


  return (
    <UserContext.Provider 
    value= {{
      users,
      loggedInUser,
      setLoggedInUser,
      addNewUser
    }}
    >
      {children}
    </UserContext.Provider>
  )
}

export {UserProvider};
export default UserContext;