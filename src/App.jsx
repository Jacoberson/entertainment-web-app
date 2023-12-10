import Navbar from "./components/Navbar/Navbar";
import SearchInput from "./components/SearchInput/SearchInput";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <SearchInput />
      </main>
    </>
  );
}

export default App;
