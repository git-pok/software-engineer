import './DetailsCard.css';

const DetailsCard = ({ data, title }) => {
  return (
    <div className="DetailsCardDiv">
      <h1>{title}</h1>
      <div className="DetailsCard">
        <h2>{title}</h2>
        { data
          ?
            data.map((val, idx) => (
              <div
                key={val.name}
                className="DetailsCard-company">
                <h3>{val.name}</h3>
                <p>{val.description}</p>
                <p>Employees: {val.numEmployees}</p>
              </div>
            ))
          :
            null
        }
        <h2>Jobs</h2>
        { data
          ?
            data[0].jobs.map((val, idx) => (
              <div
                key={val.id}
                className="DetailsCard-job">
                <h3>{val.title}</h3>
                <ul>
                  <li>Salary: {val.salary}</li>
                  <li>Equity: {val.equity}</li>
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
