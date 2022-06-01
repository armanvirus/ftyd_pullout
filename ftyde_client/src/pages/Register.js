import react from 'react';

function Login(){
    return(
        <div className="login">
            <div className="form-wraper">
                {/* <div className="social-login">
                <a href="">login with google</a>
                <a href="">login with facebook</a>
                </div> */}
                <form>
                    <input type='text' placeholder="Full Name"/>
                    <input type='email' placeholder="Email"/>
                    <input type='password' placeholder="Password"/>
                    <button>Register</button>
                    {/* <p>don't have an account? <br/> create now!</p> */}
                </form>
            </div>
        </div>
    )
}

export default Login