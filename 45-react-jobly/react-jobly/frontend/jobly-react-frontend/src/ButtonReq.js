import { useState, useEffect } from 'react';
import useToggleState from './hooks/useToggleState.js';
// import JoblyContext from './context/JoblyContext.js';
import JoblyApi from './models/JoblyApi.js';
// import useToggleState from './hooks/useToggleState.js';
// import './ButtonReq.css';

const ButtonReq = ({ buttonObj }) => {
  const [ request, setRequest ] = useState(null);
  const [ isSubmitted, setIsSubmitted ] = useToggleState(false);
  // const [ userEditData, setUserEditData ] = useState(null);
  // const { userData } = useContext(JoblyContext);
  // const userName = userData ? userData.username : null;
  // console.log("USER NAME", userName);

  useEffect(() => {

    const jobApplyReq = async () => {
      const jobApplyResult = await JoblyApi.getEndpoint(
                        {
                          endpoint: buttonObj.reqUrl,
                          method: buttonObj.method
                        }
                      );

      console.log("PATCH RESULT", jobApplyResult);
      // setUserEditData(() => null);
      setIsSubmitted();
      setRequest(req => null);
    }

    if (request !== null) jobApplyReq();

  }, [request])

  const jobApply = () => {
    setRequest(req => true);
  }

  return (
      <div key={buttonObj.key} className="Button">
          <button onClick={jobApply}>{buttonObj.buttonText}</button>
      </div>
  );
}

export default ButtonReq;
