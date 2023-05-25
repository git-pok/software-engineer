import { useState, useEffect } from 'react';
import useToggleState from './hooks/useToggleState.js';
// import JoblyContext from './context/JoblyContext.js';
import JoblyApi from './models/JoblyApi.js';
// import useToggleState from './hooks/useToggleState.js';
// import './ButtonReq.css';

const ButtonReq = ({ buttonObj }) => {
  const [ request, setRequest ] = useState(null);
  const [ isSubmitted, setIsSubmitted ] = useToggleState(false);

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
    const findJobApp = buttonObj.onClick;
    const jobApps = buttonObj.state;
    const jobId = buttonObj.key;
    const hasApplied = findJobApp(jobApps, jobId);
    console.log(jobApps, jobId, hasApplied);
    if (!hasApplied) setRequest(req => true);
    else throw new Error("Applied to job already");
  }

  return (
      <div key={buttonObj.key} className="Button">
          <button onClick={jobApply}>{buttonObj.buttonText}</button>
      </div>
  );
}

export default ButtonReq;
