import { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "leaflet/dist/leaflet.css";
import LandingPage from './Pages/LandingPage/LandingPage';
import Category from './Pages/Category/Category';
import WishlistPage from './Pages/WishListPage/WishlistPage';
import ShopingCartPage from './Pages/ShoppingCartPage/ShopingCartPage';
import ProductDetailPage from './Pages/ProductDetailPage/ProductDetailPage';
import CheckoutPage from './Pages/Checkout/CheckoutPage';
import AccountPage from './Pages/Account/AccountPage';
import SettingPage from './Pages/SettingPage/SettingPage';
import WalletPage from './Pages/Wallet/WalletPage';
import OrderPage from './Pages/Order/OrderPage';
import ContactPage from './Pages/ContactUs/ContactPage';
import AddressPage from './Pages/Address/AddressPage';
import OrderDetails from './Pages/Order/OrderDetails';
import LoginPage from './Pages/Authnticate/Login/LoginPage';
import SignupPage from './Pages/Authnticate/Signup/SignupPage';
import ForgotPassword from './Pages/Authnticate/ForgotPassword/ForgotPassword';
import ResetPassword from './Pages/Authnticate/ResetPassword/ResetPassword';
import AuthPage from './Pages/Authnticate/AuthPage';
import VerifyCode from './Pages/Authnticate/Verify/VerifyCode';
import RefundPolicy from './Pages/Refund Policy/RefundPolicy';      
import ReturnPolicy from './Pages/Return Policy/ReturnPolicy';
import FAQs from './Pages/FAQs/FAQs';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Blog1 from './Pages/Blogs/Blog1';
import PaymentFailure from './Pages/Payment Failure/PaymentFailure';
import PaymentSuccess from './Pages/Payment Success/PaymentSuccess';
import ErrorPage from './Pages/Error Page/ErrorPage';
import MainHomepage from './Pages/Main Homepage/MainHomepage';



function App() {


  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };


  return (
    <BrowserRouter>
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/verifyCode" element={<VerifyCode />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/" element={<AuthPage setAuthStatus={setIsAuthenticated} />} />

      {/* Protected Routes */}
      <Route
        path="*"
        element={
          <ProtectedRoute>
              <div className="content w-100 py-3">
                <Routes>
                  <Route path="/home" element={<LandingPage></LandingPage>} /> 
                  <Route path="/category" element={<Category />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/shoppingCart" element={<ShopingCartPage />} />
                  <Route path="/productDetails" element={<ProductDetailPage />} />
                  <Route path="/checkOut" element={<CheckoutPage />} />
                  <Route path="/account" element={<AccountPage />} />
                  <Route path="/setting" element={<SettingPage />} />
                  <Route path="/wallet" element={<WalletPage />} />
                  <Route path="/orders" element={<OrderPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/address" element={<AddressPage />} />
                  <Route path="/orderDetails" element={<OrderDetails />} />
                  <Route path="/refundpolicy" element={<RefundPolicy />} />
                  <Route path="/returnpolicy" element={<ReturnPolicy/>} />
                  <Route path="/FAQs" element={<FAQs/>} />
                  <Route path="/About" element={<About/>} />
                  <Route path="/Blogs" element={<Blogs/>} />
                  <Route path="/Blog1" element={<Blog1/>} />
                  <Route path="/PaymentFailure" element={<PaymentFailure/>} />
                  <Route path="/PaymentSuccess" element={<PaymentSuccess/>} />
                  <Route path="/ErrorPage" element={<ErrorPage/>} />
                  <Route path="/MainHomepage" element={<MainHomepage/>} />

                  

                </Routes>
              </div>
            
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
