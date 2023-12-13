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
        {selectedNavItem === "home" && (
          <>
            <SearchInput placeholder="Search for movies or TV series" />
            <TrendingSection />
            <RecommendedSection />
          </>
        )}
        {selectedNavItem === "movies" && (
          <>
            <SearchInput placeholder="Search for movies" />
            <MoviesTab />
          </>
        )}
        {selectedNavItem === "tv" && (
          <>
            <SearchInput placeholder="Search for TV series" />
            <TVTab />
          </>
        )}
      </main>
    </>
  );
}

export default App;
