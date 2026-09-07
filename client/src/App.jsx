import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import BookVisitPage from "./pages/BookAVisitPage";

const App = () => {
  return (
    <BrowserRouter>
      {/* <nav className="p-4 bg-base-300 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/bookvisit" element={<BookVisitPage/>}></Route>
        <Route path="/services" element={<div>Services Page</div>}></Route>
        <Route path="/contact" element={<div>Contact Page</div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
