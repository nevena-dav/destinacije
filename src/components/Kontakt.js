import React from 'react'
import levo from '../components/levo.png'
import { Button } from './Button';
import './Kontakt.css'

function Kontakt() {
  return (
    <div>
          <div className="kontakt">
                
                <div className='forma-info'>


                <div className='forma-levo'>
                        
                        
                   <img className='slika-levo' src={levo} />

                    </div>

                    <div className='forma-desno'>
                        
                        <form className='forma'>
                            <h2 className='h2send'>Prijavite se na newsletter</h2>
                    

                            <div className='forme-div'>

                            <label className='forma-label'>Ime</label> <br></br>
                            <input className='forma-input' type='text' name='ime' placeholder='Ime' required/>

                             </div>

                             <div className='forme-div'>

                            <label className='forma-label'>Prezime</label> <br></br>
                            <input className='forma-input' type='text' name='prezime' placeholder='Prezime' required/>

                             </div>

                             <div className='forme-div'>

                            <label className='forma-label'>E-mail</label> <br></br>
                            <input className='forma-input' type='email' name='prezime' placeholder='Vaša email adresa' required/>

                             </div>

                             <div className='forme-div'>

                            <label className='forma-label'>Koje destinacije biste voleli da vidite u ponudi?</label> <br></br>
                            <textarea className='forma-input-textarea' placeholder='Vaša poruka' name="poruka" cols="50" rows="10" required></textarea>

                             </div>
                             <br></br>
                            <Button buttonSize='btn--large' buttonStyle='btn--outline' onClick={(e) => { window.confirm('Your subscription was successful') } }  >
                                Subscribe
                            </Button>
                        </form>
                    </div>
        


                   



                </div>
                </div>
    </div>
  )
}

export default Kontakt