 import {GoogleLogout} from "react-google-login"
 import Button from 'react-bootstrap/Button';
import { useNavigate,Link} from "react-router-dom"


 export const  Home=()=>{
   

    const navigate=useNavigate()
    const clientId="58927125457-1e2s4kidkjgstbf4o2ok053b71m4ptr0.apps.googleusercontent.com"
  
    const onLogoutSuccess=()=>{
        navigate('/')
      }
    return(
        <>
            <h2>home page</h2>
            <div id="signOutButton">
        <GoogleLogout
          clientId={clientId}
          butttonText={"Logout"}
          onLogoutSuccess={onLogoutSuccess}
        />
      </div>
      <div className="mb-2">
      <Link to="/students"> 
      <Button variant="primary" size="lg">
         go to students page
        </Button>
      </Link>
     
      </div>
        </>
    )
}