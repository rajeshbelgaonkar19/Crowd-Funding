import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import Footer from './components/Footer';
import "./App.css";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/campaigns" element={<Campaigns />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
