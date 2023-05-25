import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './models/JoblyApi';
import './JobDetailsCard.css';

const JobDetailsCard = () => {
  const currUrlObj = useParams();
  const currUrl = currUrlObj.id;
  const [ jobDetail, setJobDetail ] = useState(null);
  const [ coDetail, setCoDetail ] = useState(null);

  useEffect(() => {
    const getCompOrJob = async (endpoint, isJob) => {

      setJobDetail(state => []);
      setCoDetail(state => []);
  
      const request = await JoblyApi.getCompOrJob(
                                        endpoint, isJob=true
                                    );

      const reqData = JSON.parse(JSON.stringify([request.data.job]));
      const reqDataCompany = JSON.parse(JSON.stringify([reqData[0].company]));
      setCoDetail(state => reqDataCompany);
      setJobDetail(state => reqData);
    }
    getCompOrJob(currUrl);
  }, [currUrl])

  return (
    <div className="JobDetailsCard-div">
      <h1>Job Details</h1>
      <div className="JobDetailsCard">
      <h2>Job Details</h2>
        { jobDetail
          ?
          jobDetail.map(val => (
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
        { coDetail
          ?
          coDetail.map(val => (
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
