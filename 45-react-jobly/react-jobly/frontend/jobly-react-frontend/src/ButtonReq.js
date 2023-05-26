import { useState, useEffect, useContext } from 'react';
import Message from './Message.js';
import useToggleState from './hooks/useToggleState.js';
import JoblyApi from './models/JoblyApi.js';
import './ButtonReq.css';

const ButtonReq = ({ buttonObj }) => {
  const [ request, setRequest ] = useState(null);
  const [ hasApplied, setHasApplied ] = useToggleState(false);
  const [ appliedSuccs, setAppliedSuccs ] = useToggleState(false);

  useEffect(() => {

    const jobApplyReq = async () => {

      const jobApplyResult = await JoblyApi.getEndpoint(
                        {
                          endpoint: buttonObj.reqUrl,
                          method: buttonObj.method
                        }
                      );

      const findJobApp = buttonObj.onClick;
      const jobApps = buttonObj.state;
      const jobId = buttonObj.key;
      const userHasntApplied = findJobApp(jobApps, jobId);

      if (!jobApplyResult && !userHasntApplied) {
        setHasApplied();
        setTimeout(setHasApplied, 2000);
        setRequest(req => null);
      } else {
        setAppliedSuccs();
        setTimeout(setAppliedSuccs, 2000);
        jobApps.push(jobId);
        setRequest(req => null);
      }
    }

    if (request !== null) jobApplyReq();

  }, [request])

  const jobApply = () => {
    setRequest(req => true);
  }

  return (
      <div key={buttonObj.key} className="ButtonReq">
        { 
          hasApplied &&
          <Message msgObj={
            {
              class: "fail",
              msg: "Already applied to job!"
            }
          } />
        }
        { 
          appliedSuccs &&
          <Message msgObj={
            {
              class: "success",
              msg: "Applied to job!"
            }
          } />
        }
          <button
            onClick={jobApply}
          >
              {buttonObj.buttonText}
          </button>
      </div>
  );
}

export default ButtonReq;
