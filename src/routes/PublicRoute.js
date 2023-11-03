const PublicRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return !token ? children : window.location.assign('/metrics');
};

export default PublicRoute;