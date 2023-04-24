import Destinacija from "./Destinacija";

function Omiljene({destinacije,kriterijum, izbaci}) {
    return (
    <div className="omiljene">
        <div className="row">
        {kriterijum==""
        ?
        destinacije.map((res)=> <div className="col-sm-3"><Destinacija  key={res.id} res={res} mod={2} izbaci={izbaci} ></Destinacija><br /></div>)
        :
        <>
        {destinacije
        .filter((res)=>res.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((res)=> <div className="col-sm-3"><Destinacija  key={res.id} res={res} mod={2} izbaci={izbaci} ></Destinacija><br /></div>)}
        </>
        }

      </div>
      </div>
      
    );
  }

  export default Omiljene;