function Destinacija({res, dodaj,mod,izbaci}) {


    return (
     <div className = 'destinacije' >

        <div className="card"   >
        <img src={res.slika} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-title">{res.naziv}</p>
          <p className="card-text">{res.opis} <br /> Ocena: {res.ocena} <br/> Telefon: {res.telefon} <br /> Adresa: {res.adresa} <br /> </p>
          {mod==1 ?
            <button className="btnDodaj"
            style={{marginLeft: "20px" , opacity: "80%", padding:"5px", paddingLeft: "10px", paddingRight: "10px", border: "3px solid #EEEFEB"}} 
            onClick={()=>dodaj(res.id)}>Dodaj u omiljene</button>
            :
            <button className="btnIzbaci" 
            style={{marginLeft: "20px" , opacity: "80%", padding:"5px", paddingLeft: "10px", paddingRight: "10px", border: "3px solid #EEEFEB"}}
            onClick={()=>izbaci(res.id)}>Izbaci iz omiljenih</button>
          }
        </div>
      </div>

    </div>
    );
  }

  export default Destinacija;