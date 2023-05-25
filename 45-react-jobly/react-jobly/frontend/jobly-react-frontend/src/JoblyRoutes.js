import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import JoblyCard from './JoblyCard.js';
// import DetailsCard from './DetailsCard.js';
import CompanyDetailsCard from './CompanyDetailsCard.js';
import JobDetailsCard from './JobDetailsCard.js';
import ProfileCard from './ProfileCard.js';
import SearchBox from './SearchBox.js';
import LogInForm from './LogInForm.js';
import SignupForm from './SignupForm.js';
import UserProfileEditForm from './UserProfileEditForm.js';
// import JoblyApi from './models/JoblyApi.js';
import JoblyContext from './context/JoblyContext.js';
import JoblyApi from './models/JoblyApi.js';

const JoblyRoutes = ({ companies, jobs }) => {

  const [ details, setDetails ] = useState([]);
  const { userData } = useContext(JoblyContext);
  // const [ profileData, setProfileData ] = useState([]);
  const [ profileRoute, setProfileRoute ] = useState(false);
  const userToken = userData ? userData.token : null;
  const currLocation = useLocation();
  const currUrl = currLocation.pathname;
  const userName = userData ? userData.username : null;
  // console.log("CURR URL", currUrl);
  // useEffect(() => {
  //   const makeUserReq = async (endpoint) => {
  //     if (currUrl === "/profile") {
  //     const req = await JoblyApi.getEndpoint({endpoint});
  //     const userData =  req.user;
  //     const userDataArray = [ JSON.parse(JSON.stringify(userData))];
  //     setProfileData(data => userDataArray);
  //     console.log("RAN");
  //     }
  //   }

    // makeUserReq(`users/${userName}`);
    // setProfileRoute(state => true);
    // if (currUrl === "/profile") {
      // makeUserReq(`users/${userName}`)
    // };
  // }, [])

  return (
    <Switch>
      <Route exact path="/">
        <h1>HOME</h1>
      </Route>
      <Route exact path="/login">
        <h1>LOG IN</h1>
        <LogInForm />
      </Route>
      <Route exact path="/logout">
        <Redirect exact to="/" />
      </Route>
      <Route exact path="/signup">
        <h1>SIGN UP</h1>
        <SignupForm />
      </Route>
    { userToken &&
      <Route exact path="/companies">
        <SearchBox />
        <JoblyCard
          data={companies}
          title="Companies"
          setDetails={setDetails} />
      </Route>
    }
    { userToken &&
      <Route exact path="/jobs">
        <JoblyCard
          data={jobs}
          title="Jobs"
          jobs={true}
          setDetails={setDetails} />
      </Route>
    }
    { userToken &&
      <Route exact path="/profile">
        <ProfileCard />
        {/* <ProfileCard data={profileData} /> */}
      </Route>
    }
    { userToken &&
      <Route exact path="/users">
        <h1>USERS</h1>
      </Route>
    }
    { userToken &&
      <Route exact path="/companies/:handle">
        <CompanyDetailsCard
          data={details} />
      </Route>
    }
    { userToken &&
      <Route exact path="/jobs/:id">
        <JobDetailsCard
          data={details} />
      </Route>
    }
    { userToken &&
      <Route exact path="/users/:username">

      </Route>
    }
    { userToken &&
      <Route exact path="/users/:username/edit">
        <UserProfileEditForm />
      </Route>
    }
      <Redirect to="/" />
    </Switch>
  );
}

export default JoblyRoutes;
