import './App.css';

const App = (props) => {
  const src = props.dogs[2].src;
  return (
    <>
    <h1>APP COMPONENT</h1>
    <img src={src}></img>
    </>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "./dog-images/richard-brutyo-Sg3XwuEpybU-unsplash.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "./dog-images/richard-brutyo-Sg3XwuEpybU-unsplash.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "./dog-images/richard-brutyo-Sg3XwuEpybU-unsplash.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "./dog-images/richard-brutyo-Sg3XwuEpybU-unsplash.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}
// console.log(App);

export default App;