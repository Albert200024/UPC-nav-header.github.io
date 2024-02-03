import './App.css';
import Nav from './Nav';
import Section1 from './Section1';
import Slaq from './Slaq';

function App() {
  return (
    <div className="App">
      <header className='header'>
         <Nav/>
      </header>
      <Section1/>
      <Slaq/>
    </div>
  );
}

export default App;
