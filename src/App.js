import React from 'react';
// import { Route, Routes, Link } from "react-router-dom";
import {  BrowserRouter as Router,  Route,  Routes,  Navigate} from "react-router-dom";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// class App extends React.Component {
//   render() {
//       return (
//         <div className="App">
//           <div>
//             <nav>
//               <ul id="navigation">
//                 <li>
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                 <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                 <Link to="/contact">Contact</Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           <Routes>
//             <Route exact path="/">
//               <About />
//             </Route>
//             <Route path="/portfolio">
//               <Portfolio />
//             </Route>
//             <Route path="/contact">
//               <Contact />
//             </Route>
//             <Route path="/resume">
//               <Resume />
//             </Route>
//           </Routes>
//           </div>
//             );
//   }
// }

// class App extends React.Component {
//   render() {
//       return (
            
      
      
//         <div className="App">
//           <Navbar />
//             <Routes>
//             <Route exact path="/">
//               <About />
//             </Route>
//             <Route path="/portfolio">
//               <Portfolio />
//             </Route>
//             <Route path="/contact">
//               <Contact />
//             </Route>
//             <Route path="/resume">
//               <Resume />
//             </Route>
//           </Routes>
//           <Footer />
//           </div>
//             );
//   }
// }

function App() {
  // let component
  // switch (window.location.pathname) {
  //   case "/portfolio":
  //     component = <Portfolio />
  //     break  
  //   case "/contact":
  //     component = <Contact />
  //     break  
  //   case "/resume":
  //     component = <Resume />
  //     break; 
  //   default:
  //   component = <About />
  // }
  return (

    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
    </Router>
    // <div>
    //   <Navbar />
    //   {component}
    //   <Footer />
    // </div>
  );
}

export default App;
