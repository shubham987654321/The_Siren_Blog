import React, { Component } from 'react';
import { Container  } from 'react-bootstrap';

import {Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './../styles/navigation.css'



// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";




class Navigation extends Component {
     
    
 


   


    render() {
        return (
            <>
            

              
              
           <Navbar collapseOnSelect expand="lg"   className="class1" >
    <Container>
     <Navbar.Brand className="c1"> <span className="n1">The</span>
          <span className="n2">Siren</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav"   >
    <Nav className="me-auto">
    
    <NavLink to="/home"  style={{ textDecoration:"none", marginLeft:"10%",  color: "black"}}>Home</NavLink>
     <NavLink   to={{pathname:"/bollywood"}} style={{ textDecoration:"none", marginLeft:"10%" ,  color: "black"}} >Bollywood</NavLink>
     <NavLink  to="/technology"  style={{ textDecoration:"none", marginLeft:"10%" ,  color: "black"}}>Technology</NavLink>
     <NavLink  to="/hollywood"  style={{ textDecoration:"none", marginLeft:"10%" ,  color: "black"}}>Hollywood</NavLink>
     <NavLink  to="/fitness"  style={{ textDecoration:"none", marginLeft:"10%",  color: "black"}}>Fitness</NavLink>
     <NavLink  to="food"  style={{ textDecoration:"none", marginLeft:"10%", marginRight:"5%",  color: "black"}}>Food</NavLink>
    
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>





            
            </>
        )
    }
    
      
}


export default Navigation;