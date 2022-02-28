import React from 'react';
import { Navigate } from 'react-router';
import Layout from '../../components/shared/Layout';
import useAuth from '../../hooks/useAuth';
import Login from '../Login';


const UserDashboard = () => {
    const { auth } = useAuth()

    if (!auth) {
        Navigate(<Login/>)
    }
    
    return (
        <>
            <Layout className="page-dashboard">
                <div>
                    <h1>Dashboard</h1>
                </div>
            </Layout>   
        </>
    )
}

export default UserDashboard
