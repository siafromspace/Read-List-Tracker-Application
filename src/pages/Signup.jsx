import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <form>
            <h1>Hello! Sign Up To Get Started.</h1>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <div>
                <button>Sign Up</button>
            </div>
            <p>Already have an account? <Link to="/login">Log In</Link></p>
        </form>
    );
}

export default Signup;