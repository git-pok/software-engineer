import { Link } from 'react-router-dom';
import { useContext } from 'react';
import JoblyApi from './models/JoblyApi.js';
import JoblyContext from './context/JoblyContext.js';
import './JoblyCard.css';

const JoblyCard = ({
    data, title, setDetails,
    setJobDtlState, jobs=false}) => {

  const getCompOrJob = async (endpoint, isJob) => {

    setDetails(state => []);
    isJob = jobs === true;

    const request = await JoblyApi.getCompOrJob(
                                      endpoint, isJob
                                  );
    
    const reqData = [ JSON.parse(JSON.stringify(request.data[isJob ? "job" : "company"]))];
    if (isJob) reqData[0].company = [ JSON.parse(JSON.stringify(reqData[0].company))];
    setDetails(state => reqData);
  }

  return (
    <>
    <div className="JoblyCardDiv">
    <h1>{title}</h1>
    { data
      ?
        data.map((val, idx) => (
          <Link
            exact="true"
            to={!jobs ? `/companies/${val.handle}` : `/jobs/${val.id}`}
            key={!jobs ? `link-${val.name}` : `link-${val.id}`}
            onClick={() => getCompOrJob(val[!jobs ? "handle" : "id"])}
          >
            <div
              key={!jobs ? `${val.name}` : `${val.id}`}
              className="JoblyCard">
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
