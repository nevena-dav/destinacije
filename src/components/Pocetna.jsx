import { Button } from './Button';
import { Link } from 'react-router-dom';
import Kontakt from './Kontakt';
function Pocetna() {
    return (
      <div  className='pocetna'>

      <div className="pocetna-text">
          <h1  > Putujte na najlepše destinacije sa nama ! <br /> Budite među prvima koji će dobiti nove ponude! 
          <br /><br />
          <Link to='/kontakt'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--medium'
        >
          SUBSCRIBE
        </Button>
        </Link>
        </h1> 
      </div>

      <br /><br /><br /><br /><br />
      <div className="flex-container">
          <div>
              <h2>Ko smo mi?</h2>
              <p> Naša turistička agencija je posvećena pronalaženju najlepših svetskih destinacija. Nudimo vam nezaboravno iskustvo, bez brige o 
                planiranju i nalaženju odgovarajućeg smeštaja. Mi smo tu da rešimo sve, vi samo odaberite mesto!  
                
                 </p>
          </div>
          <div> 
          <h2>Informacije: </h2>
              <p> 
                 Na našem sajtu možete videti koje sve destinacije nudimo u našem aranžmanu. Možete pretraživati i dodavati ih u vaše omiljne. </p>
          </div>

        </div>  

    </div>

    );
  }

  export default Pocetna;