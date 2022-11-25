import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isSeller, setIsSeller] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/users/seller/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setIsSeller(data.isSeller)
            })
    }, [user.email]);

    useEffect(() => {
        fetch(`http://localhost:5000/users/admin/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin)
            })
    }, [user.email])

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                        <>
                            {
                                isSeller &&
                                <>
                                    <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                                    <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                                </>
                            }
                        </>
                        <>
                            {
                                isAdmin &&
                                <>
                                    <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                    <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                </>
                            }
                        </>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;