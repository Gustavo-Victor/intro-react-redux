import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../features/user/userSlice";
import { Button, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 


const Logout = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch(); 


    const handleLogout = () => {
        dispatch(logout()); 
    }

    return (
        <>
        {user.isLogged && (
            <Container className="logout p-4">
                <Button className="btn-secondary" onClick={handleLogout}>Logout</Button>
            </Container>
        )}
        </>
    );
};

export default Logout; 