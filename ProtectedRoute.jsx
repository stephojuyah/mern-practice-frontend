// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem('userinfo');
    const person = JSON.parse(user)

    console.log(person)

    if (!person) {
        return <Navigate to="/login" replace />; // redirect if no token
    }

    return children; // otherwise, show protected page


    
};

export default ProtectedRoute;