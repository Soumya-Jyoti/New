import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add actual API logic here
        setMessage("Password reset instructions sent to your email.");
    };

    return (
        <div
            className="w-screen h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 relative"
            style={{ backgroundImage: "url('/images/New_BG.png')" }}
        >
            {/* Logo */}
            <div className="absolute top-4 left-4 lg:left-8 lg:top-8 flex justify-center lg:justify-start w-full lg:w-auto pr-4">
                <img
                    src="/images/logo.png"
                    alt="Logo"
                    className="w-28 sm:w-24 mx-auto lg:mx-0"
                />
            </div>

            {/* Forgot Password Box */}
            <div className="bg-blur bg-opacity-40 p-6 sm:p-8 rounded-3xl border-3 w-full max-w-md sm:max-w-lg text-white backdrop-blur-md">
                <button
                    className="text-sm text-white mb-4 hover:underline"
                    onClick={() => navigate("/login")}
                >
                    &larr; Back to login
                </button>

                <h2 className="text-2xl font-bold mb-2">Forgot your password?</h2>
                <p className="text-l text-gray-200 mb-6">
                    Don’t worry, happens to all of us. Enter your email below to recover your password
                </p>

                <form onSubmit={handleSubmit}>
                    <label className="block text-l mb-1">Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your Email Address"
                        className="w-full px-4 py-2 rounded-full mb-4 text-black focus:outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="w-full bg-purple-700 text-white rounded-full py-2 font-medium"
                        onClick={() => navigate("/verifycode")}
                    >
                        Get Code
                    </button>

                    {message && <p className="text-green-400 text-sm mt-4">{message}</p>}
                </form>

                <div className="text-center text-xs my-4 text-gray-300">Or login with</div>

                <div className="flex flex-row justify-center items-center gap-2">
                    <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-4 h-4"
                        />
                        Sign in with Google
                    </button>
                    <button className="bg-white p-2 rounded-full">
                        <img
                            src="https://www.svgrepo.com/show/448224/facebook.svg"
                            alt="Facebook"
                            className="w-5 h-5"
                        />
                    </button>
                    <button className="bg-white p-2 rounded-full">
                        <img
                            src="https://www.svgrepo.com/show/511330/apple-173.svg"
                            alt="Apple"
                            className="w-5 h-5"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
