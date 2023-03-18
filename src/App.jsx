import Login from "./components/Login"; 
import Logout from "./components/Logout"; 
import User from "./components/User"; 
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 


function App() {
  return (
    <Container className="bg-white app">
      <Login />
      <User />
      <Logout />
    </Container>
  )
}

export default App
