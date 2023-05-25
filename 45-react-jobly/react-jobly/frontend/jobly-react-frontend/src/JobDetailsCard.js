import './JobDetailsCard.css';

const JobDetailsCard = ({ data }) => {
  // if (data) console.log("JOB DETAILS DATA", data);
  // console.log("isJobs", isJobs);
  return (
    <div className="JobDetailsCard-div">
      <h1>Job Details</h1>
      <div className="JobDetailsCard">
      <h2>Job Details</h2>
        { data.length !== 0
          ?
          data.map(val => (
              <div
                key={val.id}
                className="JobDetailsCard-job">
                <h3>{val.title}</h3>
                <ul>
                  <li>
                    Job Id: {val.id}
                  </li>
                  <li>
                    Salaray: {val.salary}
                  </li>
                  <li>
                    Equity: {val.equity}
                  </li>
                </ul>
              </div>
            ))
          :
            null
        }
        <h2>Company Details</h2>
        { data.length !== 0
          ?
            data[0]["company"].map(val => (
              <div
                key={val.name}
                className="JobDetailsCard-company">
                <h3>{val.name}</h3>
                <p>
                  {val.description}
                </p>
                <p>Employees: {val.numEmployees}</p>
              </div>
            ))
          :
            null
        }
      </div>
    </div>
  );
}

export default JobDetailsCard;
