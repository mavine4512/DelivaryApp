import React from 'react';
import { addUser } from '../model/data';

export const AuthContext = React.createContext();

// import React,{createContext,useState} from 'react';
// import auth from "@react-native-firebase/auth"

// export const AuthContext = createContext();

// export const AuthProvider= ({children})=>{

//     const [user, setUser]= useState(null)

// return(
//     <AuthContext.Provider
// value={{
//     user,
//     setUser,
//     login:async (email,password)=>{
//         try{
//            await auth().signInWithEmailAndPassword(email,password)
//         }catch(e){
//            console.log(e);
//         }
//     },

    register: async (email,password)=>{
        try{
         //  await auth().createUserWithEmailAndPassword(email,password)
         const user={
             email:email,
             password:password
         }
         addUser(user).then(r=>{

         }).catch(err=>{
             console.log("user error",err)
         })
        }catch(e){
           console.log(e,'Context 1r');
        }
    }

//     logout: async ()=>{
//         try{
//            await auth().signOut();
//         }catch(e){
//            console.log(e);
//         }
//     }, 

// }}
//     >
//       {children}
//     </AuthContext.Provider>
// )
// } ;