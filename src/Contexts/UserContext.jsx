import React, {useState, createContext} from 'react'

export const UserContext = createContext(0);

export function UserProvider({childern}) {

    const[user, setUser] = useState({name: 'Ganesh', age: 10})

  return (
    <UserContext.Provider value={user}>
        {childern}
    </UserContext.Provider>
  )
}
