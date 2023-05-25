import './DetailsCard.css';

const DetailsCard = ({ data, title, isJobs=false }) => {

  return (
    <div className="DetailsCardDiv">
      <h1>{title}</h1>
      <div className="DetailsCard">
        <h2>{title}</h2>
        { data
          ?
            data.map((val, idx) => (
              <div
                key={!isJobs ? `${val.name}` : `${val.id}`}
                className="DetailsCard-company">
                <h3>{ !isJobs ? `${val.name}` : `${val.title}`}</h3>
                <p>
                  { !isJobs ? `${val.description}` : `Job Id: ${val.id}`}
                </p>
                { !isJobs ?
                      <p>Employees: {val.numEmployees}</p>
                      : <p>Salary: {val.salary}</p>
                }
                { isJobs ? <p>Equity: {val.equity}</p> : null }
              </div>
            ))
          :
            null
        }
        <h2>{ !isJobs ? "Jobs" : "Company Details"}</h2>
        { data.length !== 0
          ?
          data[0][!isJobs ? "jobs" : "company" ].map((val, idx) => (
              <div
                key={val.id}
                className="DetailsCard-job">
                <h3>{val.title || val.name}</h3>
                <ul>
                  <li>
                    { val.description ||`Salaray:` + " " + val.salary}
                  </li>
                  <li>
                    {`Employees:` + " " + val.numEmployees || `Equity:` + " " + val.equity}
                  </li>
                  {!isJobs ? <li>Job Id: {val.id}</li> : null}
                </ul>
              </div>
            ))
          :
            null
        }
      </div>
    </div>
  );
}

export default DetailsCard;
