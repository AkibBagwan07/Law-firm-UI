import './App.css';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import IntroSection from './components/IntroSection/introSection';
import ChooseUs from './components/chooseSection/chooseUs';
import AreaOfPrac from './components/AreaOfPractice/AreaOfPrac';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <IntroSection />
      <ChooseUs />
      <AreaOfPrac />
    </div>
  );
}

export default App;
