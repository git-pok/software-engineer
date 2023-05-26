import { useState, useEffect, useRef } from 'react';
import useToggleState from './hooks/useToggleState.js';
import JoblyApi from './models/JoblyApi.js';
// import './ButtonReq.css';

const ButtonReq = ({ buttonObj }) => {
  const [ request, setRequest ] = useState(null);
  const [ hasApplied, setHasApplied ] = useToggleState(false);
  
  useEffect(() => {

    const jobApplyReq = async () => {
      const jobApplyResult = await JoblyApi.getEndpoint(
                        {
                          endpoint: buttonObj.reqUrl,
                          method: buttonObj.method
                        }
                      );

      if (!jobApplyResult) {
        setHasApplied(state => true);
        setTimeout(() => (
          setHasApplied(state => false)
        ), 2000);
      }

      setRequest(req => null);
    }

    if (request !== null) jobApplyReq();

  }, [request])

  const jobApply = () => {
    const findJobApp = buttonObj.onClick;
    const jobApps = buttonObj.state;
    const jobId = buttonObj.key;
    const hasApplied = findJobApp(jobApps, jobId);
    if (!hasApplied) setRequest(req => true);
  }

  return (
      <div key={buttonObj.key} className="Button">
        {hasApplied === true && <h1>Has Failed!!!</h1>}
          <button
            onClick={jobApply}
          >
              {buttonObj.buttonText}
          </button>
      </div>
  );
}

export default ButtonReq;
