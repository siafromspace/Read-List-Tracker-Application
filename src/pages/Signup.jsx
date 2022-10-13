import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <section className="w-full h-full grid justify-center items-center px-4 text-black">
            <form className="max-w-md md:max-w-2xl space-y-4 py-8">
                <h1 className="text-3xl md:text-4xl text-hibiscus font-bold w-full text-center mb-6">Hello! Sign Up To Get Started.</h1>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" className="bg-white px-2 py-2 rounded-xl focus:outline-none" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="bg-white px-2 py-2 rounded-xl focus:outline-none" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="bg-white px-2 py-2 rounded-xl focus:outline-none" />
                </div>
                <div className="pb-4 pt-2">
                    <button className="bg-hibiscus text-bon-jour w-full py-2 text-center text-lg rounded-xl">Sign Up</button>
                </div>
                <hr />
                <p className="text-center w-full pt-4">Already have an account? <br></br> <Link to="/login" className="inline-block text-hibiscus font-semibold">Log In</Link></p>
            </form>
        </section>
    );
}

export default Signup;