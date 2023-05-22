// import './JoblyCard.css';

const JoblyCard = ({ title, subtitle, details, salary, equity }) => {
  // console.log(linkNames);
  return (
    <>
    <div className="JoblyCard">
      <h2>{title}</h2>
      { subtitle ? <h3>subtitle</h3> : null }
      { details ? <p>{details}</p> : null }
      { salary ? <p>{salary}</p> : null }
      { equity ? <p>{equity}</p> : null }
    </div>
    </>
  );
}

export default JoblyCard;
