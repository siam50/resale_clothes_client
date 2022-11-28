import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        fetch(`https://resale-clothes-server.vercel.app/users/seller/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setIsSeller(data.isSeller)
                setIsSellerLoading(false)
            })
    }, [user?.email]);

    if (loading || isSellerLoading) {
        return <progress className="progress w-56"></progress>;
    }

    if (user && isSeller) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRoute;