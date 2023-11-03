const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : window.location.assign('/');
};

export default PrivateRoute;