import {useCallback, useEffect, useState} from "react";

export const contextProvider = () => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [userType, setUserType] = useState('user');

    const login = useCallback(() => {

    }, []);

    const logout = useCallback(() => {

    }, []);

    const refresh = useCallback(() => {

    }, []);

    useEffect(() => {
        setUserType('user');
    }, [])

    return { user, accessToken, loading, login, logout, refresh, userType }
}