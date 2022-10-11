import SignIn from "./components/signIn/signIn";
import "bootstrap/dist/css/bootstrap.min.css"
import { Home } from "./components/home";
import { useEffect, useState } from "react";
import {gapi} from "gapi-script"
import {Routes,route, Route} from "react-router-dom"
import { useDispatch ,useSelector} from "react-redux";
import { getUsers } from "./actions/index";
import Card from "./components/cards/index";
function App() {
  

  const clientId="58927125457-1e2s4kidkjgstbf4o2ok053b71m4ptr0.apps.googleusercontent.com"
  const dispatch=useDispatch()

 useEffect(()=>{
  // dispatch(getUsers())
  function start(){
    gapi.client.init({
      clientId:clientId,
      scope:""
    })
  }
 gapi.load('client:auth2',start)

 },[dispatch])

  return (
    <>
   <Routes>
     <Route path="/home" element={<Home/>}/>
     <Route exact path="/" element={<SignIn/>}/>
     <Route path="/students" element={<Card/>}/>
   </Routes>
  </>
  )
}

export default App;
