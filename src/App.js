import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./screens/Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Orderpage from "./screens/Orderpage";
import Vechicalpage from "./screens/Vechicalpage";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/Registerpage";
import ProfilePage from "./screens/Profilepage";
import ShippingPage from "./screens/ShippingPage";
import Payment from "./components/Payment";
import PlaceOrderPage from "./screens/PlaceOrderPage";
import OrderDetailPage from "./screens/OrderDetailPage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Container>
            <Route path="/" component={Homepage} exact />
            <Route path="/register" component={RegisterPage}  />
            <Route path="/placeorder" component={PlaceOrderPage} />
            <Route path="/login" component={LoginPage}  />
            <Route path="/shipping" component={ShippingPage}  />
            <Route path="/order/:id" component={OrderDetailPage}  />
            <Route path="/profile" component={ProfilePage}  />
            <Route path="/vechical/:id" component={Vechicalpage} />
            <Route path="/cart/:id?" component={Orderpage} />
            <Route path="/payment" component={Payment} />
          </Container>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
