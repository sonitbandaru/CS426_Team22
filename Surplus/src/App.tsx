import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/HomePage/Footer";
import HomePage from "./pages/HomePage";
import PickupScheduler from "./pages/PickupScheduler";
//import DonationForm from "./pages/DonationForm";
//import MealSearch from "./pages/MealSearch";
//import AccountHome from "./pages/Account";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pickup-scheduler" element={<PickupScheduler />} />
        {/*<Route path="/donation-form" element={<DonationForm />} />
        <Route path="/meal-search" element={<MealSearch />} />
        <Route path="/account-home" element={<Account />} />*/}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
