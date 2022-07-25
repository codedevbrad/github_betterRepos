import { createContext , useState } from "react";

export const AuthContext = createContext();

const UserContextWrapper = ( props ) => {
    const [ user , setUser ] = useState({});

    // login

    // logout  

    // user data

    // hold repos

    return (
      <AuthContext.Provider value={{ user , setUser }}>
        {props.children}
      </AuthContext.Provider>
    );
}

export default UserContextWrapper;