import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Page from "./pages/home";
import Shop from "./pages/shop";
import Offers from "./pages/offers";
import BestSellers from "./pages/bestseller";
import NewArrivals from "./pages/newarrivals";
import About from "./pages/about";
import Help from "./pages/help";

function App() {
  const [bannerList, setBannerList] = useState<string[]>([]);

  useEffect(() => {
    axios.get("http://192.168.0.104:8000/banners")
      .then((res) => setBannerList(res.data.filenames))
      .catch((err) => console.error("Failed to load banners:", err));
  }, []);

  return (
    <Router>
      <Navbar />

      <main style={{ padding: "2rem", minHeight: "70vh" }}>
        <h1>Welcome to SROBON.com</h1>

        {/* ✅ Show all banner images from /assets/ */}
        {bannerList.length > 0 ? (
          bannerList.map((filename, index) => (
            <img
              key={index}
              src={`/assets/${filename}`}
              alt={`Banner ${index + 1}`}
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "1.5rem",
                objectFit: "cover"
              }}
            />
          ))
        ) : (
          <p>Loading banner...</p>
        )}

        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/bestsellers" element={<BestSellers />} />
          <Route path="/newarrivals" element={<NewArrivals />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
