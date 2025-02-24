import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";

const GoogleSignIn = ({ onSuccess }) => {
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("User signed in:", result.user);
            if (onSuccess) onSuccess(result.user);
        } catch (error) {
            console.error("Google Sign-In Error:", error.message);
        }
    };

    return (
        <button onClick={handleGoogleSignIn} className="google-signin-btn">
            Sign Up with Google
        </button>
    );
};

export default GoogleSignIn;
