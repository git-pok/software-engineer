// import './JoblyCard.css';

const JoblyCard = ({ data }) => {
  // console.log("JOBLY CARD DATA", data);  
  return (
    <>
    <h1>JBLY CARD</h1>
    { data 
      ?
        data.map((val, idx) => (
          <div key={val.name || val.id} className="JoblyCard">
          <h2>{val.name || val.title}</h2>
          <p>{val.description || val.companyName}</p>
          { val.salary ? <p>Salary: {val.salary}</p> : null}
          { val.equity ? <p>Equity: {val.equity || "N/A"}</p> : null}
          </div>
        ))
      :
        null
    }
    </>
  );
}

export default JoblyCard;
