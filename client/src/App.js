import BookingPage from "./pages/BookingPage";
import Navbar from "./components/Navbar";
import Login from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BusList from "./components/BusList";
import ComplaintPage from "./components/ComplaintPage";
import CheckoutPage from "./components/CheckoutPage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/busses" element={<BusList />}></Route>
          <Route path="/compaint" element={<ComplaintPage />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/checkout/:id" element={<CheckoutPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
