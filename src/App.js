import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx"
import Header from "./components/Header/Header.jsx"
import Achivements from "./components/Achivements/Achivements.jsx"
import About from "./components/About/About.jsx"
import Mission from "./components/Mission/Mission.jsx"
import Product from "./components/Product/Product.jsx"
import Machines from "./components/Machines/Machines.jsx"
import Choose from "./components/Choose/Choose.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Achivements />
      <About />
      <Mission />
      <Product />
      <Machines />
      <Choose />
      <Footer />
      

    </div>
  );
}

export default App;
