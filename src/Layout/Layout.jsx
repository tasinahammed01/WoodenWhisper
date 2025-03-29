import React from 'react';
import Header from '../Componentes/SharedComponents/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Componentes/SharedComponents/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;