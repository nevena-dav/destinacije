import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Pocetna from './components/Pocetna';
import Destinacije
 from './components/Destinacije';
 import { useState } from 'react';

function App() {
  const[sviRestorani] = useState([

    {
        id:1,
        naziv:"Toro Latin GastroBar",
        slika: "https://www.beogradnocu.com/wp-content/uploads/2021/05/toro-restoran-1.jpg",
        opis:" Restoran Toro Latin GastroBar je kreativna mesavina latinske kulture i ukusa, koji ce vas oboriti sa nogu.",
        ocena: "4.6",
        telefon: "011 3034342",
        adresa:  "Karadjordjeva 2",
        omiljeni: 0

    },
    {
      id:2,
      naziv:"Buena Vida",
      slika: "https://uploads-ssl.webflow.com/61cf014bfba51e62fad747d1/61cf014bfba51e5664d74844_IMG_2358.jpg",
      opis:"Buena Vida restoran nudi veliku ponudu malih tanjira sa autenticnim ukusom meksicke hrane.",
      ocena: "4.5",
      telefon: "060 4660036",
      adresa:  "Bulevar Milutina Milankovica 1i",
      omiljeni: 0

    },
    {
      id:3,
      naziv:"Lavash",
      slika: "https://www.restoranibeograd.com/storage/restaurant/interior/154/restoran_lavash_beton_hala_2.jpg",
      opis:"Lavash donosi meni sa destinacija Balkana i Bliskog Istoka punog ukusa i ambijent koji vas izmešta u neki drugi svet.",
      ocena: "4.4",
      telefon: "062 562751",
      adresa:  "Karadjordjeva 4",
      omiljeni: 0

     },
     {
      id:4,
      naziv:"Vila Maska",
      slika: "https://cityguide.rs/wp-content/uploads/2020/07/DSC_0419-scaled.jpg",
      opis: "Svako ko želi nešto egzotičnije u samom centru grada naći će svoje mesto u Villa Maski koja ne ostavlja ravnodusnim.",
      ocena: "4.7",
      telefon: "062 221873",
      adresa:  "Rankeova 7",
      omiljeni: 0

     },
     {
      id:5,
      naziv:"Lorenzo i Kakalamba",
      slika: "https://lk.rs/uploads/galerija/restoran-mini/restoran-lorenzo-i-kakalamba-11.jpg",
      opis:"Porodični restoran koji se izdvaja svojom originalnošću i jedinstvenim spojem Firence i Pirota u srcu Beograda.",
      ocena: "4.6",
      telefon: "011 3295351",
      adresa:  "Cvijiceva 110",
      omiljeni: 0

     },
     {
      id:6,
      naziv:"Frans",
      slika: "https://www.restoranibeograd.com/storage/restaurant/interior/64/restoran_frans_15.jpg",
      opis:"Frans je restoran sa dugom tradicijom i ambijentom koji se izdvaja od svih restorana u gradu.",
      ocena: "4.7",
      telefon: "011 2641944",
      adresa:  "Bulevar Oslobođenja 18a",
      omiljeni: 0

     },
     {
      id:7,
      naziv:"Rodizio",
      slika: "https://www.kudaveceras.rs/images/news/1608895014-Dozivite-duh-Brazila-u-originalnom-ambijentu-restorana-Rodizio.jpg",
      opis:"Rodizio je jedini restoran u Beogradu koji služi brazilski rodizio i najkvalitetnije agnus meso u gradu.",
      ocena: "4.6",
      telefon: "011 4500895",
      adresa:  "Bulevar Milutina Milankovića 11b",
      omiljeni: 0

     },
     {
      id:8,
      naziv:"Angry Monk",
      slika: "https://www.kudaveceras.rs/slike/offers/1614082996-angry-monk-restoran-03.jpg",
      opis:"Daleko od tipičnog mesta za suši, Angri Monk predlaže japansku i panazijsku hranu punu egzoticnih ukusa.",
      ocena: "4.6",
      telefon: "064 6123123",
      adresa:  "Uzun Mirkova 11",
      omiljeni: 0

     },

  ]);
  return (
    <>
    <BrowserRouter className="App">
     <NavBar />
     <Routes>
            <Route path="/" element={<Pocetna></Pocetna>}></Route>
            <Route path="/destinacije" element={<Destinacije></Destinacije>}></Route>
          </Routes>
     </BrowserRouter>
    
    <Footer/>
    </>
  );
}

export default App;





