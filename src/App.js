
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <About />
      break
    case "/portfolio":
      component = <Portfolio />
      break  
    case "/contact":
      component = <Contact />
      break  
  }
  return (
    <div>
      <Navbar />
      {component}
    </div>
  );
}

export default App;
