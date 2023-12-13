import Navbar from "./components/Navbar/Navbar";
import SearchInput from "./components/SearchInput/SearchInput";
import TrendingSection from "./components/TrendingSection/TrendingSection";
import RecommendedSection from "./components/RecommendedSection/RecommendedSection";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <SearchInput />
        <TrendingSection />
        <RecommendedSection />
      </main>
    </>
  );
}

export default App;
