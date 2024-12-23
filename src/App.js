import logo from './logo.svg';
import './components/base.css';
import Navbar from "./components/Navbar/Navbar.jsx"
import Header from "./components/Header/Header.jsx"
import Achievements from "./components/Achievements/Achievements.jsx"
import About from "./components/About/About.jsx"
import Mission from "./components/Mission/Mission.jsx"
import Products from "./components/Products/Products.jsx"
import Machines from "./components/Machines/Machines.jsx"
import Choose from "./components/Choose/Choose.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App() {
  return (
    <div className='container'>
      {/* <Navbar />*/}
      <Header /> 
      <Achievements />
      <About />
      <Mission />
      <Products />
      <Machines />
      {/*<Choose />
      <Footer /> */}
    </div>
  );
}

export default App;
