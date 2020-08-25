import React,{useState} from 'react';
import {Form,Button,Card,Col,InputGroup} from 'react-bootstrap';
import axios from 'axios';

 const Register =(event) =>{
    const [validated, setValidated] = useState(false);
    const [form,setState]= useState({

      FirstName : '',
      LastName:  '',
       email : '',
       password : '',
       BirthD : '',
       Adress : '',
       CIN : '',
       CNSS : '',
       RIB : 0,
       NetSalary : 0,
       bsalary : 0,
       BrutSalary: '',
       FamilyStatus: ''
      
    });

    const updateField = event => {
      setState ({
        ...form, 
        [event.target.name]:event.target.value
      });
    }

    const   handleSubmit =  (event) => {
        const formv = event.currentTarget;
        if (formv.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          
        }
        setValidated(true);
        event.preventDefault();
        const token = localStorage.getItem('cool-jwt');
        try {
          axios.post('/employes',form,{headers:{'Authorization':'jwt '+token }})
          .then(response=>{
               console.log(response);
          })
          
        }catch(event){
          return console.log(event);
        }
       

        

      

      };
        return(
            <Card>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="3" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  name="FirstName"
                  value = {form.FirstName}
                  onChange = {updateField}
            
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  name="LastName"
                  value = {form.LastName }
                  onChange = {updateField}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    required
                    type="text"
                    placeholder="email"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    value = {form.email}
                  onChange = {updateField}
                    
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationpwd">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  name="password"
                  value = {form.password }
                  onChange = {updateField}
                />
                <Form.Control.Feedback type="invalid">Enter valid date format</Form.Control.Feedback>
               
              </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} md="3" controlId="validationbd">
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="YYYY/MM/DD"
                  name="BirthD"
                  value = {form.BirthD }
                  onChange = {updateField}
                  
                />
                <Form.Control.Feedback type="invalid">Enter valid date format</Form.Control.Feedback>
         
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom03">
                <Form.Label>Adress</Form.Label>
                <Form.Control  name="Adress" type="text" placeholder="Adress" required
                   value = {form.Adress}
                  onChange = {updateField}
                 />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Adress.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>CIN</Form.Label>
                <Form.Control  name="CIN" type="text" placeholder="CIN" required
                    value = {form.CIN }
                  onChange = {updateField}
                 />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid CIN.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>CNSS</Form.Label>
                <Form.Control  name="CNSS" type="text" placeholder="CNSS" required 
                      value = {form.CNSS }
                  onChange = {updateField}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid CNSS.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="3" controlId="validationCustom06">
              <Form.Control  name="RIB" type="text" placeholder="RIB" required 
                    value = {form.RIB }
                  onChange = {updateField}
              />
                <Form.Control.Feedback type="invalid">
                Please provide a valid RIB  .
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom07">
              <Form.Control  name="NetSalary" type="text" placeholder="Net Salary" required
                    value = {form.NetSalary}
                  onChange = {updateField}
               />
                <Form.Control.Feedback type="invalid">
                Please provide a valid Net Salary  .
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom08">
              <Form.Control  name="BrutSalary" type="text" placeholder="Brut Salary" required 
                    value = {form.BrutSalary }
                  onChange = {updateField}
              />
                <Form.Control.Feedback type="invalid">
                Please provide a valid Brut Salary  .
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom09">
              <Form.Control  name="FamilyStatus" type="text" placeholder="Family Status" required
                    value = {form.FamilyStatus}
                  onChange = {updateField}
               />
                <Form.Control.Feedback type="invalid">
                Please provide a valid Family Status  .
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            {/* <Form.Group>
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
              />
            </Form.Group> */}
            <Button type="submit">Submit form</Button>
          </Form>
          </Card>
        )
};

export default Register;