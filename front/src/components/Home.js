import React from 'react';
import {Navbar,Nav,Form,Jumbotron,Button} from 'react-bootstrap';

const Home =(props)=>{
 


    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Financial Module</Navbar.Brand>
        <Nav className="mr-auto"  >

          <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
          
     
        </Nav>
        <Form inline>
        
        <Button href="/Login">Login</Button>
 
     
    </Form>

    
  </Navbar>
  <Jumbotron>
  <h1>Hello!, Happy Hacking</h1>
  <p>
    This is the financial module for my last year project
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>


</div>
    )
};
export default Home;