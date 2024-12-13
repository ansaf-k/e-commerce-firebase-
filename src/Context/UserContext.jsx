import { getAuth } from "firebase/auth";
import { createContext, useEffect } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user?.uid;

    useEffect(() => {
        uid;
    })
    return (
        <>
            <UserContext.Provider value={uid}>
                {children}
            </UserContext.Provider>
        </>
    )
}

UserProvider.propTypes = {
    children: PropTypes.object.isRequired,
}

export default UserProvider 