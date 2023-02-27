import {createContext} from "react";

const AuthContext = createContext({
    user: null,
    userType: 'organizer',
    accessToken: null,
    loading: false,
    login: () => {},
    logout: () => {},
    refresh: () => {}
});

export default AuthContext