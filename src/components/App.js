import {  onAuthStateChanged } from "firebase/auth";
import { Outlet } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import { auth } from "../utils/firebase";
import {  useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
function App() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid ,displayName ,email} = user;
        dispatch(addUser({
          uid:uid,
          email:email,
          name:displayName
        }))
        navigate("/browser")


      } else {
        dispatch(removeUser())
        navigate("/")
      }

  },[])
});
  return (
    <div >
      
      <Header/>
      <Outlet/>
      
      
    </div>
  );
}




export default App;
