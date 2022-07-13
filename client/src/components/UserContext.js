import{createContext}from "react";

  export const UserContext=createContext(null);


// export function UserProvider({children}){
//    const [currentUser,setCurrentUser] =useState("");

   
//  return(
//    <UserContext.Provider value={{currentUser,setCurrentUser}}>{children}</UserContext.Provider>
//    );
// }

// export default UserContext;