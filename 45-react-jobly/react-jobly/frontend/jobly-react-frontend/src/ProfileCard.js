import { useContext, useState, useEffect } from 'react';
import ButtonLink from './ButtonLink.js';
import JoblyContext from './context/JoblyContext.js';
import JoblyApi from './models/JoblyApi.js';
import './ProfileCard.css';

const ProfileCard = () => {
  const [ profileData, setProfileData ] = useState(null);
  const { userData } = useContext(JoblyContext);
  const userName = userData.username;

  useEffect(() => {
    const makeUserReq = async (endpoint) => {
      const req = await JoblyApi.getEndpoint({endpoint});
      const userData =  req.user;
      const userDataArray = [ JSON.parse(JSON.stringify(userData))];
      setProfileData(data => userDataArray);
      console.log("RAN");
    }

    makeUserReq(`users/${userName}`);

  }, [])

  return (
    <div className="ProfileCard-div">
      <h1>User Profile</h1>
      <div className="ProfileCard">
      <h2>User Details</h2>
        { profileData
          ?
          profileData.map(val => (
              <div
                key={val.firstName}
                className="ProfileCard-user">
                <h3>{val.firstName} {val.lastName}</h3>
                <ul>
                  <li>
                    First Name: {val.firstName}
                  </li>
                  <li>
                    Last Name: {val.lastName}
                  </li>
                  <li>
                    Username: {val.username}
                  </li>
                  <li>
                    Email: {val.email}
                  </li>
                  <li>
                    Job Applications: {val.applications.length}
                  </li>
                </ul>
              </div>
            ))
          :
            null
        }
        
        <ButtonLink
          buttonArray={[{
            buttonText: "EDIT",
            username: userName
          }]}
        />
      </div>
    </div>
  );
}

export default ProfileCard;
