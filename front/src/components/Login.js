import React, {Component} from 'react';
import {Form,Button,Card} from 'react-bootstrap';
import axios from 'axios';

class Login extends Component {
  constructor(props){
      super(props);
       this.state = {
           email: ' ',
           password:' ',   
          status:false
    
         };
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
  }
  change(e){
      this.setState({
          [e.target.name]:e.target.value
        
      })
  }

  async submit(e) {
    try{
      e.preventDefault();
       await axios.post('/auth',{
        email:this.state.email,
        password:this.state.password,
        
        status:this.state.status=true
        
      
      }).then(response =>{
       
        console.log(response);
          localStorage.setItem('cool-jwt',(response.data.token));
          localStorage.setItem('id', response.data._id);
       
          window.location = '/Dashboard?'+localStorage.getItem('id');
           
        
        
      })
      
     
       
      
    
    
    }catch(e){
      return console.log(e);
    }
    
  }
 
  render(){
      return (
        <Form onSubmit={e=>this.submit(e)}>
        <Card style={{margin:" 0 auto", float:'none', width:'30rem'}}>
            <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={e => this.change(e)} value={this.state.email.value} />
            </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" onChange={e => this.change(e)} value={this.state.password.value} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Card>
</Form>
      )
  }

}


export default Login;