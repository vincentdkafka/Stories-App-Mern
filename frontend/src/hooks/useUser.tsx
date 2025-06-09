import { getAuth, onAuthStateChanged, type User,  } from "firebase/auth"
import { useEffect, useState } from "react"

export default function useUser(){

 const [isLoading, setIsLoading] = useState(true)
 const [user, setUser] = useState<User | null>(null)


 useEffect(()=>{
     const removeAuthListener = onAuthStateChanged(getAuth(), (user)=>{
    setUser(user);
    setIsLoading(false);
 })                             

 return removeAuthListener;
 },[]);
  
 


    return { user, isLoading};
}