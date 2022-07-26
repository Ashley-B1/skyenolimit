import Introduction from "./components/Introduction";
import About from "./components/About";
import ExperienceList from "./components/ExperienceList";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Introduction />
      <About />
      <ExperienceList />
      <ProductList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
