import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ButtonReq from './ButtonReq.js';
import JoblyApi from './models/JoblyApi';
import LoadingAnimation from './LoadingAnimation.js';
import JoblyContext from './context/JoblyContext.js';
import './JobDetailsCard.css';

const JobDetailsCard = ({ findJobApps }) => {
  const currUrlObj = useParams();
  const currUrl = currUrlObj.id;
  const [ isLoading, setIsLoading ] = useState(false);
  const [ jobDetail, setJobDetail ] = useState(null);
  const [ coDetail, setCoDetail ] = useState(null);
  const [ userJobApps, setUserJobApps ] = useState(null);
  const { userData } = useContext(JoblyContext);
  const userName = userData ? userData.username : null;

  useEffect(() => {
    const getCompOrJob = async (endpoint, isJob) => {

      setIsLoading(state => true);
      setJobDetail(state => []);
      setCoDetail(state => []);
  
      const request = await JoblyApi.getCompOrJob(
                                        endpoint, isJob=true
                                    );

      const reqData = JSON.parse(JSON.stringify([request.data.job]));
      const reqDataCompany = JSON.parse(JSON.stringify([reqData[0].company]));
      setCoDetail(state => reqDataCompany);
      setJobDetail(state => reqData);
      setIsLoading(state => false);
    }

    const getUserData = async () => {
      const req = await JoblyApi.getEndpoint({endpoint: `users/${userData.username}`});
      const userReqData =  req.user;
      const userApps = userReqData.applications;
      const userAppsArray = JSON.parse(JSON.stringify(userApps));

      setUserJobApps(() => (
        userAppsArray
      ));
    }

    getCompOrJob(currUrl);
    getUserData();

  }, [currUrl])

  return (
    <div className="JobDetailsCard-div">
      {
        isLoading ?
          <LoadingAnimation ldgObj={{
            color: "#c07f00",
            class: "fa-solid fa-sun fa-spin"
          }} />
        : null
      }
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
                <ButtonReq buttonObj={
                  {
                    reqUrl: `users/${userName}/jobs/${val.id}`,
                    method: "post",
                    key: val.id,
                    buttonText: "Apply",
                    onClick: findJobApps,
                    state: userJobApps
                  }} />
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
