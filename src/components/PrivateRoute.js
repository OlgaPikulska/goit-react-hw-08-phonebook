import { useAuth } from "hooks/useAuth"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    console.log("from private", isLoggedIn)

    const shouldRedirect = !isLoggedIn && !isRefreshing
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component
}
