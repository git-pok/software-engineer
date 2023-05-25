import { useContext } from 'react';
import ButtonLink from './ButtonLink.js';
import JoblyContext from './context/JoblyContext.js';
import './ProfileCard.css';

const ProfileCard = ({ data }) => {
  const isData = data && data.length !== 0;
  const { userData } = useContext(JoblyContext);
  const userName = userData.username;
  // console.log("JDJDJDJDJ", isData);
  return (
    <div className="ProfileCard-div">
      <h1>User Profile</h1>
      <div className="ProfileCard">
      <h2>User Details</h2>
        { isData
          ?
          data.map(val => (
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
