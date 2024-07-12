import { useAuth0 } from "@auth0/auth0-react";

export const useAuth = () => {
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

    return {
        isAuthenticated,
        user,
        loginWithRedirect,
        logout,
    }
}