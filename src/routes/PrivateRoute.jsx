/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext); // Assuming you have a token in your AuthContext
    const location = useLocation();
    console.log(location.pathname);
    if (loading) {
        return <span className="loading loading-spinner text-primary"></span>;
    }

    if (user) { 
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace />; // Use "replace" to avoid adding a new entry in the browser history.
};

export default PrivateRoute;
