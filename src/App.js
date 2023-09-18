import React from "react";
import "./App.css";
import "./styles/globalStyle.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./container/Navbar/navbar";
import { TopStrip } from "./container/TopStrip/TopStrip";
import Footer from "./container/Footer/footer";
import HomePage from "./pages/HomePage";
import CreateNFT from "./pages/CreateNFT";
import ProfilePage from "./pages/ProfilePage";
import ExplorePage from "./pages/ExplorePage";
import SingleNFTPage from "./pages/SingleNFTPage";
import RegisterScreen from "./pages/RegisterScreen";

function App() {
  return (
    <div className="app-css">
      {/* <TopStrip /> */}
      <Navbar />
      <Routes>
        <Route path="*" element={<HomePage />} exact />
        <Route path="create-nft" element={<CreateNFT />}  />
        <Route path="explore" element={< ExplorePage/>}  />
        <Route path="profile" element={<ProfilePage />}  />
        <Route path="nft/id" element={<SingleNFTPage />}  />
        <Route path="register" element={<RegisterScreen />}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
