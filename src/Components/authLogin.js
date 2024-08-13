import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

const AuthLogin = () => {
    const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
    const navigate = useNavigate();

    const handleLogin = async () => {
        await loginWithRedirect({
            redirectUri: `${ window.location.origin }/admin`
        });
    };

    const handleLogout = async () => {
        logout({ returnTo: window.location.origin });
        navigate('/');
    };

    if(isLoading){
        return <div>Loading...</div>
    }


    return(
        <>
            { isAuthenticated ? (
                <button onClick ={ handleLogout }>Log Out</button>
                ) : (
                <button onClick = { handleLogin }>Log In</button>

            )}
        </>
    )
}

export default AuthLogin;

