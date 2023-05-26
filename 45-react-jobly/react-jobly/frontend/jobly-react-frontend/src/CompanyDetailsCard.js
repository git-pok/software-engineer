import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './models/JoblyApi';
import ButtonReq from './ButtonReq.js';
import LoadingAnimation from './LoadingAnimation.js';
import JoblyContext from './context/JoblyContext.js';
import './CompanyDetailsCard.css';

const CompanyDetailsCard = ({ findJobApps }) => {

  const [ isLoading, setIsLoading ] = useState(false);
  const { userData } = useContext(JoblyContext);
  const userName = userData ? userData.username : null;

  const currUrlObj = useParams();
  const currUrl = currUrlObj.handle;
  const [ jobDetail, setJobDetail ] = useState(null);
  const [ coDetail, setCoDetail ] = useState(null);
  const [ userJobApps, setUserJobApps ] = useState(null);
  
  useEffect(() => {
    const getCompOrJob = async (endpoint, isJob) => {
      setIsLoading(state => true);
      setJobDetail(state => []);
      setCoDetail(state => []);
  
      const request = await JoblyApi.getCompOrJob(
                                        endpoint, isJob
                                    );

      const reqData = JSON.parse(JSON.stringify([request.data.company]));
      const reqDataJobs = JSON.parse(JSON.stringify([reqData[0].jobs]));
      setCoDetail(state => reqData);
      setJobDetail(state => reqDataJobs);
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

    getCompOrJob(currUrl, false);
    getUserData();

  }, [currUrl])

  return (
    <div className="CompanyDetailsCard-div">
      {
        isLoading ?
          <LoadingAnimation ldgObj={{
            color: "#c07f00",
            class: "fa-solid fa-sun fa-spin"
          }} />
        : null
      }
      <h1>Company Details</h1>
      <div className="CompanyDetailsCard">
      <h2>Company Details</h2>
        { coDetail
          ?
            coDetail.map(val => (
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
        <h2 className="CompanyDetailsCard-nested-h2">Jobs</h2>
        { jobDetail
          ?
          jobDetail.map(obj => (
            obj.map(val => (
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
            ))))
          :
            null
        }
      </div>
    </div>
  );
}

export default CompanyDetailsCard;
