import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './app.css'
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
function App() {
  return (
    <div className="app">
      <div>
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
    </div>
  );
}

export default App;
