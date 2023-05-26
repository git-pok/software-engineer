import { Link } from 'react-router-dom';
import './CoOrJobCard.css';

const CoOrJobCard = ({ data, title, jobs=false }) => {

  return (
    <>
    <div className="CoOrJobCard-div">
    <h1>{title}</h1>
    { data
      ?
        data.map((val, idx) => (
          <Link
            exact="true"
            to={!jobs ? `/companies/${val.handle}` : `/jobs/${val.id}`}
            key={!jobs ? `link-${val.name}` : `link-${val.id}`}
          >
            <div
              key={!jobs ? `${val.name}` : `${val.id}`}
              className="CoOrJobCard">
              <h2>{val.name || val.title}</h2>
              <p>{val.description || val.companyName}</p>
              { val.salary ? <p>Salary: {val.salary}</p> : null}
              { val.equity ? <p>Equity: {val.equity || "N/A"}</p> : null}
            </div>
          </Link>
        ))
      :
        null
    }
    </div>
    </>
  );
}

export default CoOrJobCard;
