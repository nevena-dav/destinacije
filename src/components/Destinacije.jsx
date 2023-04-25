import Destinacija from "./Destinacija";


  function Destinacije({destinacije, kriterijum, dodaj}) {
   
    return (
      <div className="destinacije">
    <div className="row">
    {kriterijum==""
        ?
        destinacije.map((res)=> <div className="col-sm-3"><Destinacija dodaj={dodaj} key={res.id} res={res} mod={1}></Destinacija><br /></div>)
        :
        <>
        {destinacije.filter((res)=>res.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((res)=> <div className="col-sm-3"><Destinacija dodaj={dodaj} key={res.id} res={res} mod={1}></Destinacija><br /></div>)}
        </>
        } 
    </div>
   
    </div>
        );

  }

  export default Destinacije;