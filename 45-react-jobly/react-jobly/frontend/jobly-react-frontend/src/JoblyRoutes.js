import { Route, Switch, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import CoOrJobCard from './CoOrJobCard.js';
import ContentCard from './ContentCard.js';
import CompanyDetailsCard from './CompanyDetailsCard.js';
import JobDetailsCard from './JobDetailsCard.js';
import ProfileCard from './ProfileCard.js';
import SearchBox from './SearchBox.js';
import LogInForm from './LogInForm.js';
import SignupForm from './SignupForm.js';
import UserProfileEditForm from './UserProfileEditForm.js';
import JoblyContext from './context/JoblyContext.js';

const JoblyRoutes = ({ companies, jobs }) => {

  const { userData, setUserData } = useContext(JoblyContext);
  const userToken = userData ? userData.token : null;

  const findJobApps = (data, id) => {
    const jobApps = data.indexOf(id);
    return jobApps === -1;
  }

  return (
    <Switch>
      <Route exact path="/">
        <ContentCard
          dataObj={{
            title: "Welcome to the Jobly App!",
            description: "Enjoy!" 
          }}
        />
      </Route>
    { !userToken && 
      <Route exact path="/login">
        <LogInForm />
      </Route>
    }
      <Route exact path="/logout">
        <Redirect exact to="/" />
      </Route>
      <Route exact path="/signup">
        <SignupForm />
      </Route>
    { userToken &&
      <Route exact path="/companies">
        <SearchBox />
        <CoOrJobCard
          data={companies}
          title="Companies" />
      </Route>
    }
    { userToken &&
      <Route exact path="/jobs">
        <CoOrJobCard
          data={jobs}
          title="Jobs"
          jobs={true} />
      </Route>
    }
    { userToken &&
      <Route exact path="/profile">
        <ProfileCard />
      </Route>
    }
    { userToken &&
      <Route exact path="/companies/:handle">
        <CompanyDetailsCard findJobApps={findJobApps} />
      </Route>
    }
    { userToken &&
      <Route exact path="/jobs/:id">
        <JobDetailsCard findJobApps={findJobApps} />
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
