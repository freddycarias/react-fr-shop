import '../styles/golbal.css';
import Layout from '../containers/layout';
import Login from '../containers/login';
import RecoveryPassword from "../containers/RecoveryPassword"
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Layout>
                    <Route exact path="/" element = {<Home/>}/>
                    <Route path="/login" element = {<Login />} />
                    <Route path="/recovery-password" element = {<RecoveryPassword/>} />
                    <Route path="*" element = {<NotFound />} />
                </Layout>
            </Routes>
        </BrowserRouter>  
    );
}

export default App;