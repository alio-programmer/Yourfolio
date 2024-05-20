import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Helper Page/Header";
import Adminlogin from "./pages/Adminlogin";
import Dashboard from "./pages/Dashboard";
import Addproject from "./pages/Addproject";

function App() {
  const user = localStorage.getItem("token");
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          {user && <Route exact path="/admin" element={<Dashboard />} />}
          <Route exact path="/add" element={<Addproject />} />
          <Route exact path="/" element={<Home />} />
          {!user && <Route exact path="/login" element={<Adminlogin />} />}
          <Route path="*" element={<h1>404 page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
