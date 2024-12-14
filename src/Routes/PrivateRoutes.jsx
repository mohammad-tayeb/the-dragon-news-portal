import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const loaction = useLocation();

    if (loading) {
        //jsut showing a spinner while loading the data
        return <div className="flex items-center justify-center min-h-screen">
            <span className="loading loading-spinner text-primary"></span>
        </div>
    }
    //jodi user take tahole children ortath "privateRoute" er peter bitor component e jabe
    // nahole force fully login e redirect kore dibe
    if (user) {
        return children
    }
    return <Navigate state={loaction.pathname} to="/login"></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}
export default PrivateRoutes;