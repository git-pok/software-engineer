// import './JoblyCard.css';

const JoblyCard = ({ companies, jobs}) => {
  // const coData = companies;
  // console.log("F CO", companies.map(val => ( val )));
  console.log("F CO", companies);
  return (
    <>
    <h1>COMPANIES</h1>
    { companies ?
      companies.map((val, idx) => (
        <div key={val.name} className="JoblyCard">
        <h2>{val.name}</h2>
        <p>{val.description}</p>
        </div>
      ))
      : null
    }
    </>
  );
}

export default JoblyCard;
