import Navbar from "./components/Navbar/Navbar";
import SearchInput from "./components/SearchInput/SearchInput";
import TrendingSection from "./components/TrendingSection/TrendingSection";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <SearchInput />
        <TrendingSection />
      </main>
    </>
  );
}

export default App;
