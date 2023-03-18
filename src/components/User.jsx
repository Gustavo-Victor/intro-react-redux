import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice"; 
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 


const User = () => {
    const user = useSelector(selectUser); 
    return (
        <Container className="user p-4">
            <h3>User: {user.isLogged != '' ? user.username : 'Not authenticated'}</h3>
        </Container>
    );
};

export default User; 