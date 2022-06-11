import "./App.css";
import HomeScreen from "./Components/HomeScreen";
import ProfileScreen from "./Components/ProfileScreen";
import Login from "./Components/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uiu,
            email: userAuth.email,
          }),
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]); // eslint-disable-line
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path='/profile' element={<ProfileScreen/>}/>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
