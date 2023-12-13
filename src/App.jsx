import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchInput from "./components/SearchInput/SearchInput";
import TrendingSection from "./components/TrendingSection/TrendingSection";
import RecommendedSection from "./components/RecommendedSection/RecommendedSection";
import MoviesTab from "./components/MoviesTab/MoviesTab";
import "./App.scss";
import TVTab from "./components/TVTab/TVTab";

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState("home");

  return (
    <>
      <Navbar
        selectedNavItem={selectedNavItem}
        setSelectedNavItem={setSelectedNavItem}
      />
      <main>
        <SearchInput />
        {selectedNavItem === "home" && (
          <>
            <TrendingSection />
            <RecommendedSection />
          </>
        )}
        {selectedNavItem === "movies" && <MoviesTab />}
        {selectedNavItem === "tv" && <TVTab />}
      </main>
    </>
  );
}

export default App;
