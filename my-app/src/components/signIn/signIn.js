import { useState ,useEffect,useRef} from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {GoogleLogin} from "react-google-login"
import "./signIn.css"
import { useNavigate } from 'react-router-dom';
import {createUser} from "../../actions/index"
import {useDispatch} from "react-redux"
import FileBase from 'react-file-base64';

function  SignIn() {
    const navigate=useNavigate();
    const [toggle,setToggle]=useState(true);
    const [UserData,setUserData]=useState({username:'',email:'',password:'',domain:'',gender:'',about:''})
    const dispatch=useDispatch()

    const handleToggle=()=>{
        setToggle(!toggle)
    }
  
  const HandleSubmit= (e)=>{
  e.preventDefault()
  if(UserData.username==='' || UserData.email==='' || UserData.password==='' || UserData.domain==='' || UserData.gender==='') {
    alert("All the fields are mandatory!")
  }
  
  else{
 dispatch(createUser(UserData));
 navigate('/home')
    setUserData({username:'',email:'',password:'',domain:'',gender:'',about:''})
  }
  }
  const clientId="58927125457-1e2s4kidkjgstbf4o2ok053b71m4ptr0.apps.googleusercontent.com"
  
  const onsuccess=(res)=>{
    navigate('/home')
  }

  const onFailure=(res)=>{
    console.log("Login failed! res:",res);
  }
  return (
 
    <div className='form-main'>
       {toggle ? <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit" >
       Login
      </Button>
      <div id="signInButton">
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onsuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>
   
      {/* <Button variant="primary" size='xl' 
      style={{marginLeft:"10px",width:"43vh"}}
      onClick={HandleGoogleAuth}>login via google</Button> */}
      <Form.Text className="text-muted" style={{paddingLeft:"5px",cursor:"pointer",fontSize:"18px"}}
     onClick={handleToggle} >
          Don't have an account?first create it.
        </Form.Text>
    </Form> :

    <Form>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter name"  value={UserData.username} name="name"
          onChange={(e)=>setUserData({...UserData,username:e.target.value})}
        />
     
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
          value={UserData.email} name="email"
          onChange={(e)=>setUserData({...UserData,email:e.target.value})}
        />
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
           value={UserData.password}
          onChange={(e)=>setUserData({...UserData,password:e.target.value})} />
      </Form.Group>
    
      <Form.Select aria-label="Default select example"    
       value={UserData.domain}
          onChange={(e)=>setUserData({...UserData,domain:e.target.value})}>
      <option>Choose your Domain</option>
      <option value="UPSC">UPSC</option>
      <option value="IIT">IIT</option>
      <option value="NEET">NEET</option>
      <option value="UPPCS">UPPCS</option>
      <option value="NDA">NDA</option>
      <option value="CDS">CDS</option>
    </Form.Select>
    
    <Form.Select aria-label="Default select example"  
       value={UserData.gender}
          onChange={(e)=>setUserData({...UserData,gender:e.target.value})}>
      <option>Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </Form.Select>

    <Form.Group className="mb-3" controlId="about">
        <Form.Label>About</Form.Label>
        <Form.Control type="text" placeholder="write regarding your preparation in about 10 words..."
           value={UserData.about}
          onChange={(e)=>setUserData({...UserData,about:e.target.value})} />
      </Form.Group>
      <Button variant="primary" type="submit" style={{marginTop:"10px"}}
      onClick={HandleSubmit} >
       create account
      </Button>
      <Form.Text className="text-muted" style={{paddingLeft:"5px",cursor:"pointer",fontSize:"18px",marginTop:"10px"}}
      onClick={handleToggle}>
         Already have an account? Login.
        </Form.Text>
    </Form>}
    </div>
  )
}

export default SignIn;