// import React,{createContext,useState} from 'react';
// import auth from '@react-native-firebase/auth';

// export const AuthContext=createContext();

// export const AuthProvider=({children})=>{

//   const[user,setUser]=useState(null);
//   return (
//       <AuthContext.Provider
//        value={{
//         user,
//         setUser,

//         login:async (email,password)=>{
//           try{
//             await  auth().signInWithEmailAndPassword(email,password);
//           }
//           catch(e){
//              console.log(e);
//           }
//         },

//         signup:async (email,password)=>{
//           try{
//             await  auth().createUserWithEmailAndPassword(email,password);
//           }
//           catch(e){
//              console.log(e);
//           }
//         },

//         logout:async()=>{
//           await auth().signOut()
//         }
//        }}
//       >
//         {children}
//       </AuthContext.Provider>
//   );
// }
