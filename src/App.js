
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Introduction from './Components/Introduction/Introduction';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Top from './Components/Top';



function App() {
  return (
    <div className="App">
     <Navbar />
     <Introduction />
      <About />
      <Top />
      <Contact />
    
     {/* <div></div> */}

    </div>
  );
}

export default App;
