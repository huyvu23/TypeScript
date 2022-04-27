import "./App.css";
import Header from "./component/Header";
import Cart from "./component/Cart";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import Login from "./component/Login";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapShot) => {
      let temItems = [];
      temItems = snapShot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(temItems);
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <Router>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <div className="App">
          <Header user={user} cartItems={cartItems} signOut={signOut} />
          <Routes>
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
