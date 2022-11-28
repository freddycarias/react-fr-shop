import React from'react';
import {BrowserRouter, Routes, Route} from'react-router-dom';
import  Home  from'../pages/Home';
import  Layout  from'../containers/layout';
import  Login  from'../containers/login';
import  RecoveryPassword  from'../containers/RecoveryPassword';
import  NotFound  from'../pages/NotFound';
import'../styles/golbal.css';

const App = () => {
    return (
        <BrowserRouter>      
            <Layout>
                <Routes>
                    <Route exactpath='/'element={<Home/>} />
                    <Route exactpath='/login'element={<Login/>} />
                    <Route exactpath='/recoveryPassword'element={<RecoveryPassword/>} />
                    <Route path='*'element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
export default App;