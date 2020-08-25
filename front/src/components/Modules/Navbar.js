import React from "react";
import {Navbar,Form,Nav,Button,FormControl} from 'react-bootstrap';


const NavBar = props => {


    return (
        <>

            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/Dashboard">Dashboard</Navbar.Brand>
            <Nav className="mr-auto">
           
        
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar>

        </>
        );
  };

  export default NavBar;