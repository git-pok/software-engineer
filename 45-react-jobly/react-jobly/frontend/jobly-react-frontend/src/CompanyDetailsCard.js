import './CompanyDetailsCard.css';

const CompanyDetailsCard = ({ data }) => {
  // if (data) console.log("COMPANY DETAILS DATA", data);
  // console.log("isJobs", isJobs);
  return (
    <div className="CompanyDetailsCard-div">
      <h1>Company Details</h1>
      <div className="CompanyDetailsCard">
        <h2>Company Details</h2>
        { data.length !== 0
          ?
            data.map(val => (
              <div
                key={val.name}
                className="CompanyDetailsCard-company">
                <h3>{val.name}</h3>
                <p>
                  {val.description}
                </p>
                <p>
                  Employees: {val.numEmployees || "N/A"}
                </p>
              </div>
            ))
          :
            null
        }
        <h2>Jobs</h2>
        { data.length !== 0
          ?
          data[0]["jobs"].map(val => (
              <div
                key={val.id}
                className="CompanyDetailsCard-job">
                <h3>{val.title}</h3>
                <ul>
                  <li>
                    Salaray: {val.salary}
                  </li>
                  <li>
                    Equity: {val.equity}
                  </li>
                  <li>Job Id: {val.id}</li>
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

export default CompanyDetailsCard;
