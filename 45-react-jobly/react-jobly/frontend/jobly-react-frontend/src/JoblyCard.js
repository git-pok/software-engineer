import { Link } from 'react-router-dom';
import JoblyApi from './models/JoblyApi.js';
import './JoblyCard.css';

const JoblyCard = ({ data, title, setCoState }) => {

  const getCompDetails = async (endpoint) => {
    const request = await JoblyApi.getCompany(endpoint);
    console.log([request.data.company]);
    setCoState(state => [request.data.company]);
  }
  // console.log("JOBLY CARD DATA", data[0].handle);
  return (
    <>
    <div className="JoblyCardDiv">
    <h1>{title}</h1>
    { data
      ?
        data.map((val, idx) => (
          <Link
            exact="true"
            to={`/companies/${val.handle}`}
            key={`link-${val.name || val.id}`}
            onClick={() => getCompDetails(val.handle)}>
            <div key={val.name || val.id} className="JoblyCard">
              <h2>{val.name || val.title}</h2>
              <p>{val.description || val.companyName}</p>
              { val.salary ? <p>Salary: {val.salary}</p> : null}
              { val.equity ? <p>Equity: {val.equity || "N/A"}</p> : null}
            </div>
          </Link>
        ))
      :
        null
    }
    </div>
    </>
  );
}

export default JoblyCard;
