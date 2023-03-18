import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUser } from "../features/user/userSlice"; 
import  { Form, FormGroup, Input, Col, Row, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Login = () => {
    const [name, setName] = useState(""); 
    const dispatch = useDispatch(); 

    const handleChange = (e) => {
        setName(e.target.value); 
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setName('');
        dispatch(changeUser(name)); 
    }

    return (
        <Form id="login-form" className="login-form bg-light p-4">
            <h1>Login</h1>
            <Row className="login-container">
                <Col md="6" sm="12">
                    <FormGroup>
                        <Input type="text" className="form-control" placeholder="Name..." onChange={handleChange} value={name || ""} />
                    </FormGroup>
                </Col>
                <Col md="6" sm="12">
                    <FormGroup>
                        <Button type="submit" id="submit" name="submit" className="btn-primary" onClick={handleSubmit}>Submit</Button>
                    </FormGroup>
                </Col>
            </Row>
            <hr />
        </Form>
    );
};

export default Login; 