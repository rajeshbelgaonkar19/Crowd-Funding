import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import GoogleSignIn from "../components/GoogleSignIn";
import "./Signup.css"; // Import the CSS file

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Email & Password Signup with Verification
    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Send email verification
            await sendEmailVerification(user);
            alert("Verification email sent! Please verify your email before logging in.");
            navigate("/login"); // Redirect to login page after signup
        } catch (error) {
            setError(error.message);
        }
    };

    // Google Sign-Up
    const handleGoogleSignup = async () => {
        try {
            const userCredential = await signInWithPopup(auth, provider);
            const user = userCredential.user;
            
            // Ensure Google account has a verified email
            if (user.emailVerified) {
                navigate("/"); // Redirect to home if verified
            } else {
                alert("Please verify your email before accessing the platform.");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            {error && <p className="error-text">{error}</p>}
            
            <form className="signup-form" onSubmit={handleSignup}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Sign Up</button>
            </form>

            <p>Or sign up with</p>
            <button className="google-signin-btn" onClick={handleGoogleSignup}>
                Sign Up with Google
            </button>

            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
}

export default Signup;
