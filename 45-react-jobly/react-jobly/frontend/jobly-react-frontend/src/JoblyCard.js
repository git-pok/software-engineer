import './JoblyCard.css';

const JoblyCard = ({ data, title }) => {
  // console.log("JOBLY CARD DATA", data); 
  return (
    <>
    <div className="JoblyCardDiv">
    <h1>{title}</h1>
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
    </div>
    </>
  );
}

export default JoblyCard;
