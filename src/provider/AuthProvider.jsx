import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user,setUser]= useState(null);
    const [loading,setLoading] = useState(true);

    //    Register Section
    const createUser = (name, email, password) => {
    
        return createUserWithEmailAndPassword(auth, email, password)
    
      };

      //   email & pass log in section
   
    const signIn =(email,password) =>{

       
        return signInWithEmailAndPassword(auth,email,password)
        
    }

      // google log in
      const googleProvider = new GoogleAuthProvider();

      const googleLogIn =() =>{
        
        const auth = getAuth(app);
        

        
        return signInWithPopup(auth,googleProvider)
    }
    
     // log out section
    
     const logOut = ()=>{
        return signOut(auth)
    }


      // observing
      useEffect(()=>{

        const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
               setUser(currentUser)
               console.log(currentUser)
               setLoading(false)
           });
           return () => unsubscribe()
           
   
       },[])

    
    
    
      const info ={
        auth,
        createUser,
        signIn,
        googleLogIn,
        logOut,
        user,
        loading

    }
    return (
        <AuthContext.Provider value={info}>
            {children}

            
        </AuthContext.Provider>
    );
};

export default AuthProvider;