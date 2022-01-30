import Intro from "./components/introduction/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { useContext} from "react";
import { ThemeContext } from "./context";


const App =  () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="App" style={{ backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white" }}>
         <Toggle />
         <Intro />
         <About />
         <ProductList />
         <hr/>
         <Contact />
    </div>
  );
}

export default App;
