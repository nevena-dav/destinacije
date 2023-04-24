import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
function NavBar({pretrazi}) {
  return (
    <div>
        <nav className="nav">
            <div className="nav__title"><h1>NAJLEPSE DESTINACIJE</h1></div>
                <ul className="nav__list">

                    <li className="nav__item">   <Link to='/'>POCETNA</Link></li>
                    <li className="nav__item"> <Link to='/'>DESTINACIJE</Link></li>
                    <li className="nav__item"> <Link to='/'>OMILJENE</Link></li>
                    <li className="nav__item"> 

                        <input type="text" id="kriterijum" placeholder="Search.." name="search" 
                        onChange={()=>pretrazi(document.getElementById('kriterijum').value)}/>
                        <button type="submit" className='dugmePretraga'  >   <BsSearch></BsSearch> </button>



                    </li>
                </ul>
        </nav>
    </div>
  );
}

export default NavBar;