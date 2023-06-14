import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h2 className='text-orange-600'>Header coming</h2>
            <Outlet></Outlet>
            <h2>footer cooming!</h2>
        </div>
    );
};

export default Main;