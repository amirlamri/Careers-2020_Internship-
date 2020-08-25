import React,{useState} from "react";
import '../Styles/Dashboard.css'
import Register from '../Register'
import {Nav,Button} from "react-bootstrap";


const Content = event => {

  const [path,selected]= useState('');



    return (
     
        <section className="wrapper">
        <Nav className="col-md-2 d-none d-md-block bg-dark sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
            <Button variant="secondary"  href="/" size='lg' block>Home</Button>
            </Nav.Item>
            <Nav.Item>
            <Button variant="secondary"  name="colabs" size='lg'  block>Collaborators</Button>
            </Nav.Item>
            <Nav.Item>
            <Button variant="secondary" name="leave"  size='lg'  block>Leave Management</Button>
            </Nav.Item>
           
            </Nav> 
            <Nav className="col-md-10 cont" >
                <Register />    
            </Nav>
            </section>
     
        );
  };

  export default Content;