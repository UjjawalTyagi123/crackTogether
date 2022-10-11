import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers,getbydomain } from "../../actions/index";
import Student from "./card/card";
import { Button } from "bootstrap";
import Form from 'react-bootstrap/Form';
import { Grid, CircularProgress } from '@material-ui/core';
import { Link } from "react-router-dom";
function Card(){
    const [domain,setDomain]=useState("ALL")
    const dispatch=useDispatch()
    const users=useSelector((state)=>state.user.data)
    domain==='ALL'?dispatch(getUsers()):dispatch(getbydomain(domain))
    return(
        <>
        <Form.Select aria-label="Default select example"
        onChange={(e)=>setDomain(e.target.value)}  >
    <h1> Choose Peoples with your interest</h1>
      <option value="ALL">ALL</option>
      <option value="UPSC">UPSC</option>
      <option value="IIT">IIT</option>
      <option value="NEET">NEET</option>
      <option value="UPPCS">UPPCS</option>
      <option value="NDA">NDA</option>
      <option value="CDS">CDS</option>
    </Form.Select>
        <Link to="/home">
        <button style={{marginTop:'5rem'}}>back to home</button>
        </Link>
          {
          users ?(
            <Grid  container alignItems="stretch" spacing={1} style={{marginLeft:'2rem'}}>
        {users.map((user) => (
          <Grid key={user.id} item xs={12} sm={6} md={3}>
          <Student user={user}/>
          </Grid>
        ))}
      </Grid>
         ):<CircularProgress/>
          }
        </>
    )
}

export default Card

