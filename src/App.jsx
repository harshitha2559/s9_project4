import { BrowserRouter, Routes, Route } from "react-router-dom";
import Master from "./components/Master";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function MenuPage() {
  return (
    <div className="page">
      <h1>This is the Menu page</h1>
      <p>I'm belongs to {localStorage.getItem("course")}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout route */}
        <Route path="/" element={<Master />}>
          <Route index element={<MenuPage />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;