import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {routes} from "../Routes";
import {AnimatePresence} from "framer-motion";
import {useLoadDishes} from "../hooks/loadDishes";


const Router = () => {

    const location = useLocation();
     useLoadDishes('');

    return (
        <>
        <AnimatePresence exitBeforeEnter >
            <Routes location={location} key={location.pathname}>
                {routes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>}/>)}
            </Routes>
        </AnimatePresence>
        </>
    );
};

export default Router;