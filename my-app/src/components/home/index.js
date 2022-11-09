import { GoogleLogout } from "react-google-login";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../cards/index";
import Form from 'react-bootstrap/Form';
import { Grid } from "@material-ui/core";
import { getUsers } from "../../actions";
export const Home = () => {
  const navigate = useNavigate();
  const [stream,setStream]=useState('ALL')
  const clientId =
    "58927125457-1e2s4kidkjgstbf4o2ok053b71m4ptr0.apps.googleusercontent.com";
  const dispatch = useDispatch();
  const onLogoutSuccess = () => {
    navigate("/");
  };
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      
      <Link to="/">
        <h2> Go to Home Page</h2>
        </Link>
     
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => setStream(e.target.value)}
      >
        <h1> Choose Peoples with your interest</h1>
        <option key="ALL" value="ALL">
          ALL
        </option>
        <option key="UPSC" value="UPSC">
          UPSC
        </option>
        <option key="IIT" value="IIT">
          IIT
        </option>
        <option key="NEET" value="NEET">
          NEET
        </option>
        <option key="UPPCS" value="UPPCS">
          UPPCS
        </option>
        <option key="NDA" value="NDA">
          NDA
        </option>
        <option key="CDS" value="CDS">
          CDS
        </option>
      </Form.Select>
      <Grid item xs={12} sm={8} md={10}>
        <Card stream={stream}/>
      </Grid>
      {/* <div id="signOutButton">
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
     
      </div> */}
    </>
  );
};
