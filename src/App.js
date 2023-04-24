import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Pocetna from './components/Pocetna';
import Destinacije from './components/Destinacije';
import { useState } from 'react';
import Omiljene from './components/Omiljene';
import Pagination from './components/Pagination';

function App() {
  const [omiljeneD,setomiljeneD]=useState([]);
  const[sveDestinacije] = useState([

    {
        id:1,
        naziv:"Mjanmar",
        slika: "https://images.unsplash.com/photo-1490077476659-095159692ab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1451&q=80",
        opis:"Mjanmar je zadivljujuća destinacija za putovanja, sa raznolikom kulturnom ponudom, slikovitim pejzažima i toplim gostoprimstvom.",
        cena: "6 noćenja - 700€ po osobi",
        omiljeni: 0

    },
    {
      id:2,
      naziv:"Bali",
        slika: "https://images.unsplash.com/photo-1547291195-54d2471ae3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        opis:"Bali je prelepa i raznolika destinacija za putovanja sa zadivljujućim plažama, živopisnom kulturom i bujnim pejzažima.",
        cena: "9 noćenja - 1100€ po osobi",
        omiljeni: 0

    },
    {
      id:3,
      naziv:"Barselona",
        slika: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        opis:"Barselona je živahna turistička destinacija koja spaja bogatu istoriju i zadivljujuću arhitekturu sa živom kulturnom scenom, odličnom kuhinjom i mediteranskim plažama.",
        cena: "10 noćenja - 600€ po osobi",
        omiljeni: 0

     },
     {
      id:4,
      naziv:"Rio de Žaneiro",
        slika: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=926&q=80",
        opis:"Rio de Žaneiro je poznat po živopisnom karnevalu, prelepim plažama, impresivnim znamenitostima poput Hrista Spasitelja i živoj kulturnoj sceni.",
        cena: "13 noćenja - 1800€ po osobi",
        omiljeni: 0

     },
     {
      id:5,
      naziv:"Tokio",
        slika: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80",
        opis:"Tokio neprimetno spaja ultra-modernu tehnologiju, živu pop kulturu i vekovne tradicije, nudeći posetiocima zaista jedinstveno i nezaboravno iskustvo.",
        cena: "12 noćenja - 2100€ po osobi",
        omiljeni: 0

     },
     {
      id:6,
      naziv:"Rim",
        slika: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80",
        opis:"Mjanmar je zadivljujuća destinacija za putovanja, sa raznolikom kulturnom ponudom, slikovitim pejzažima i toplim gostoprimstvom.",
        cena: "4 noćenja - 250€ po osobi",
        omiljeni: 0

     },
     {
      id:7,
      naziv:"Helsinki",
        slika: "https://images.unsplash.com/photo-1548188500-ab08449b26d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80",
        opis:"Helsinki može da se pohvali bogatim kulturnim nasleđem, zadivljujućom arhitekturom, prelepim pogledom na obalu i opuštenim nordijskim načinom života..",
        cena: "6 noćenja - 700€ po osobi",
        omiljeni: 0

     },
     {
      id:8,
      naziv:"Santorini",
        slika: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        opis:"Santorini oduzima dah i očarava posetioce slikovitim selima sa belim kućama, kristalno čistim morem i spektakularnim zalascima sunca.",
        cena: "10 noćenja - 600€ po osobi",
        omiljeni: 0

     },

  ]);

  const [krterijumPretrage,setKriterijumPretrage]=useState("");

  function pretrazi(kriterijum){
    setKriterijumPretrage(kriterijum);
  }

  function dodaj(id){
    for(var i=0;i<sveDestinacije.length;i++){
      if(sveDestinacije[i].id==id){
        sveDestinacije[i].omiljeni=1;
      }
    }
    var niz = sveDestinacije.filter((res)=>res.omiljeni==1);
    setomiljeneD(niz);
  }

  function izbaci(id){
    for(var i=0;i<sveDestinacije.length;i++){
      if(sveDestinacije[i].id==id){
        sveDestinacije[i].omiljeni=0;
      }
    }
    var niz = sveDestinacije.filter((res)=>res.omiljeni==1);
    setomiljeneD(niz);
  }

  const[currentPage, setCurrentPage] = useState(1);
  const[postsPerPage, setPostsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = sveDestinacije.slice(firstPostIndex, lastPostIndex);

  return (
    <>
    <BrowserRouter>
        <NavBar pretrazi={pretrazi}></NavBar>
        <Routes>
            <Route path="/" element={<Pocetna></Pocetna>}></Route>
            <Route path="/destinacije" element={<Destinacije kriterijum={krterijumPretrage} destinacije={currentPosts} dodaj={dodaj} >    
            </Destinacije>}></Route>
            <Route path="/omiljene" element={<Omiljene kriterijum={krterijumPretrage}  destinacije={omiljeneD} izbaci={izbaci}></Omiljene>}></Route>
          </Routes>
     </BrowserRouter>
     <Pagination totalPosts = {sveDestinacije.length} postsPerPage = {postsPerPage} setCurrentPage = {setCurrentPage} /> 
       <Footer> </Footer>
    </>
  );
}

export default App;





