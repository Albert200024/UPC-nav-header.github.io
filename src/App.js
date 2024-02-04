import './App.css';
import Nav from './Nav/Nav';
import Corusel from './Corusel/Corusel';
import Slaq from './Slaq';

import back1 from "./img/image-corusel1.jpg"
import back2 from "./img/image-corusel2.jpg"

function App() {
  const items = [
    { 
      imgUrl:back1,
      titleMas1: '1Welcome to Univaersal', 
      titleMas2:"Programing Company",  
      content: "Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate business purposes."
    },
    { 
      imgUrl:back2,
      titleMas1: '2Create Web Site', 
      titleMas2:"Award-Winning Software", 
      content: 'The software solutions developed by our company have been numerously awarded for usability and innovative features.' 
    },
    { 
      imgUrl:back1,
      titleMas1: '3Welcome to Univaersal ', 
      titleMas2:"Programing Company",  
      content: "Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate business purposes."
    },
  ];

  return (
    <div className="App">
      <header className='header'>
         <Nav/>
      </header>
      <Corusel items={items} />
      <Slaq/>
    </div>
  );
}

export default App;
