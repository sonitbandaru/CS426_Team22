import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/HomePage/Footer";
import Notification from "./components/HomePage/Notification";
import HomePage from "./pages/HomePage";
import PickupScheduler from "./pages/PickupScheduler";
import DonationForm from "./pages/DonationForm";
import MealSearch from "./pages/MealSearch";
import ShoppingCart from "./pages/ShoppingCart";
import UserProvider from "./UserContext";
//import AccountHome from "./pages/Account";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pickup-scheduler" element={<PickupScheduler />} />
          <Route path="/meal-search" element={<MealSearch />} />
          <Route path="/donation-form" element={<DonationForm />} />
          <Route path='/shopping-cart' element={<ShoppingCart />} />
          {/*<Route path="/donation-form" element={<DonationForm />} />
          <Route path="/account-home" element={<Account />} />*/}
        </Routes>
        <Footer />
        <Notification />
      </Router>
    </UserProvider>
  );
}

export default App;