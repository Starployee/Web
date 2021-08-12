import './about.css';

import BarraFerramentas from '../layout/BarraFerramentas';
import { Link } from 'react-router-dom'

function About() {
  return (
    /*Barra de ferramentas */
    <div className="App">
      <header>
        <BarraFerramentas />
      </header>
      
      <div className="about-section">
        
      <Link to="/"><i className='fas fa-chevron-left' /></Link> 
        <div className="about-label">
          <h1>Sobre</h1>
          <hr></hr> 
        </div>
        
        <div className="about-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
        </div>
      </div>

    </div>
    
  );
}
export default About;
