import { useState, useEffect } from 'react';
import JoblyRoutes from './JoblyRoutes.js';
import JoblyNavbar from './JoblyNavbar.js';
import JoblyApi from './models/JoblyApi.js';
import JoblyContext from './context/JoblyContext.js';
import useLocalStorage from './hooks/useLocalStorage.js';
// import './JoblyApp.css';

const JoblyApp = () => {

  const [ jobCoData, setJobCoData ] = useState({});
  
  const [ userData, setUserData ] = useLocalStorage("userData", null);
  // const [ userData, setUserData ] = useState(() => (
  //   JSON.parse(window.localStorage.getItem("userData")) || null
  // ));

  useEffect(() => {
    async function getJobsAndCos (...args) {
      const reqResults = await JoblyApi.companyJobReqs(...args);
      const data = await Promise.all(reqResults);
      const dataObj = {};

      data.forEach(val => {
        const data = val.data.companies || val.data.jobs;
        const dataKeys = Object.keys(val.data);
        console.log(dataKeys);
        dataObj[dataKeys] = data;
      })

      setJobCoData(data => (
        dataObj
      ));
    }

    const getUserData = async (endpoint) => {
      // const userName = userData.username;
      // console.log("USERNAME USE EFFECT", userName)
      const req = await JoblyApi.getEndpoint({endpoint});
      const userReqData =  req.user;
      console.log("userReqData", userReqData);
      console.log("userData", userData);
      const userApps = userReqData.applications;
      const userAppsArray = JSON.parse(JSON.stringify(userApps));
      setUserData(() => ({
        ...userData,
        userApps
      }));

      // setFormData(() => initialState);
      // setIsSubmitted();
    }

    // if (isSubmitted) login();
    // if (isSubmitted) getUserData();
    // if (isSubmitted) getUserData(`users/${userData.username}`);
    if (userData) getUserData(`users/${userData.username}`)
    getJobsAndCos ({endpoint: "companies" }, {endpoint: "jobs" });

  }, [])
  // console.log("STATE TOKEN", userData);
  const logOut = () => {
    setUserData(() => null);
    window.localStorage.clear();
  }

  return (
    <>
    <JoblyContext.Provider
        value={{
                setJobCoData,
                setUserData,
                userData
              }}>
      <JoblyNavbar
        linkNames={["companies", "jobs", "profile"]}
        // userData={userData}
        logOut={logOut} />
      <JoblyRoutes
        companies={jobCoData.companies}
        jobs={jobCoData.jobs} />
      </JoblyContext.Provider>
    </>
  );
}

export default JoblyApp;
