import DogRoutes from './DogRoutes.js';
import DogNav from './DogNav.js';
import './App.css';
import whiskey from '/Users/ivy/Documents/USF/git/unit43-react-router-and-history/43-2-react-router-patterns/dog-finder/src/dog-images/whiskey.jpg';
import duke from '/Users/ivy/Documents/USF/git/unit43-react-router-and-history/43-2-react-router-patterns/dog-finder/src/dog-images/duke.jpg';
import perry from '/Users/ivy/Documents/USF/git/unit43-react-router-and-history/43-2-react-router-patterns/dog-finder/src/dog-images/perry.jpg';
import tubby from '/Users/ivy/Documents/USF/git/unit43-react-router-and-history/43-2-react-router-patterns/dog-finder/src/dog-images/tubby.jpg';


const App = (dogData) => {
  
  const getNames = (dogData) => dogData.dogs.map(val => val.name);
  const dogNames = getNames(dogData);

  return (
    <>
    <DogNav dogNames={dogNames} />
    <DogRoutes dogData={dogData} />
    </>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
