import react from 'react';
import {Link} from "react-router-dom";
import {FaGoogle} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaTelegramPlane} from "react-icons/fa"

function Login(){
    return(
        <div className="login">
            <div className="form-wraper">
                <div className="social-login">
                <a href=""><FaGoogle/>login with google</a>
                <a href=""><FaFacebook/>login with facebook</a>
                </div>
                <form>
                    {/* <input placeholder="Full Name"/> */}
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button type="submit">Login <FaTelegramPlane/> </button>
                    <p>don't have an account? <br/> <Link to="/register">Create</Link> now!</p>
                </form>
            </div>
        </div>
    )
}

export default Login