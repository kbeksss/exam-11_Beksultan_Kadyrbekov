import React from 'react';
import './App.css';
import Toolbar from "./components/UI/Toolbar/Toolbar";
import {Route, Switch} from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import ByCategory from "./containers/ByCategory/ByCategory";
import SingleProduct from "./containers/SingleProduct/SingleProduct";
import AddProduct from "./containers/AddProduct/AddProduct";

function App() {
    return (
        <>
            <Toolbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/product/:productId' exact component={SingleProduct}/>
                <Route path='/category/:categoryId' exact component={ByCategory}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/register' exact component={Register}/>
                <Route path='/add-product' exact component={AddProduct}/>
            </Switch>
        </>
    );
}

export default App;
