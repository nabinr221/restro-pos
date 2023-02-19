import React from 'react'
import { Route, Routes } from "react-router-dom"
import Dashboard from '../containers/dashboard/Dashboard';
import Tables from '../containers/tables/Tables';
import Menus from '../containers/menu/Menus';
import AddMenuItem from '../containers/menu/AddMenuItem';
import Login from '../containers/auth/Login';
import { useSelector } from 'react-redux';
import Users from '../containers/users/Users';
import AddUser from '../containers/users/AddUser';
const OptionalRoutes = () => {
    const { usersRole } = useSelector(state => state.user)

    if (usersRole === "admin") {
        return <> <AdminScreens /> </>
    }
    return <AuthScreens />
}
const AuthScreens = () => {
    return (
        <Routes>
            {/* <Route path="*" element={<NotFoundPage />} />
            <Route path="/register" element={<Register />} /> */}
            <Route path="/" element={<Login />} />
        </Routes>
    );
};

const AdminScreens = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/add-menu" element={<AddMenuItem />} />
            <Route path="/users" element={<Users />} />
            <Route path="/add-user" element={<AddUser
            
            
            
            
            />} />
        </Routes>

    );
};





export default OptionalRoutes