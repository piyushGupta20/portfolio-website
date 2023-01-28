import './App.css';
import Home from './Screens/Home';
import Footer from './Screens/Footer';
import Navbar from './components/Navbar';
import About from './Screens/About';
import Qualification from './Screens/Qualification';
import Projects from './Screens/Projects';
import ContactMe from './Screens/contactMe';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Qualification/>
      <Projects/>
      <ContactMe/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
