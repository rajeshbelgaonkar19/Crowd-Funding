import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Donate from "./pages/Donate";
import CreateCampaign from "./pages/CreateCampaign"; // Import CreateCampaign Page
import Footer from "./components/Footer";
import { auth } from "./firebase/firebaseConfig";
import "./App.css";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/campaigns" element={<Campaigns />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                
                {/* Ensure Authentication Before Accessing Certain Pages */}
                <Route 
                    path="/donate/:title" 
                    element={auth.currentUser ? <Donate /> : <Login />} 
                />
                <Route 
                    path="/create-campaign" 
                    element={auth.currentUser ? <CreateCampaign /> : <Login />} 
                />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
