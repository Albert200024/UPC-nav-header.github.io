import './App.css';
import Nav from './Nav';
import Section1 from './Section1';
import Slaq from './Slaq';

import back1 from "./img/image-corusel1.jpg"
import back2 from "./img/image-corusel2.jpg"

function App() {
  const items = [
    { 
      imgUrl:back1,
      titleMas1: 'Welcome to ', 
      titleMas2:"Univaersal Programing Company",  
      content: "Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate business purposes."
    },
    { 
      imgUrl:back2,
      titleMas1: 'Create Web Site', 
      titleMas2:"Award-Winning Software", 
      content: 'The software solutions developed by our company have been numerously awarded for usability and innovative features.' 
    },
    { 
      imgUrl:back1,
      titleMas1: 'Welcome to ', 
      titleMas2:"Univaersal Programing Company",  
      content: "Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate business purposes."
    },
  ];

  return (
    <div className="App">
      <header className='header'>
         <Nav/>
      </header>
      <Section1 items={items} />
      <Slaq/>
    </div>
  );
}

export default App;
