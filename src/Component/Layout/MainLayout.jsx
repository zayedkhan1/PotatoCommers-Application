import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../SharedPage/Navbar';
import Footer from '../SharedPage/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;