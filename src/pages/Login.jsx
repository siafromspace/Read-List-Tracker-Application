import { Link } from "react-router-dom"

const Login = () => {
    return (
        <form>
            <h1>Hello Again! Welcome Back.</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <div>
                <button>Log In</button>
                <button>Forgot Password?</button>
            </div>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </form>
    );
}

export default Login;