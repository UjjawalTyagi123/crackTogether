import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers,getbydomain } from "../../actions/index";
import Student from "./card/card";
import { Button } from "bootstrap";
import Form from 'react-bootstrap/Form';
import { Grid, CircularProgress } from '@material-ui/core';
import { Link } from "react-router-dom";
function Card(props){

    let {isloading,users}=useSelector((state)=>state.users)

   
    if(props.stream!== 'ALL')
       {
        users=users.filter(data=>{
                  return props.stream===data.domain 
          })
          if(!users.length) return `no user found with domain ${props.stream}`
       }
    
 

   if(!users.length && !isloading) return "no user found"
    return(
      
        <>
          {
           (isloading)?<CircularProgress/>:(
            <Grid  container alignItems="stretch" spacing={1} style={{marginLeft:'2rem'}}>
        {users.map((user) => (
          <Grid key={user.id} item xs={12} sm={6} md={3}>
          <Student user={user} props={props.props}/>
          </Grid>
        ))}
      </Grid>
         )
          }
        </>
    )
}

export default Card

