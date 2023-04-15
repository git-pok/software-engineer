// Renders a div with instances of Person.
const App = () => {
    return (
        <div>
            <Person
                name="fvin"
                age={25}
                hobbies={[
                    "Software Engineering",
                    "Exercise", "Music",
                    "Shoppping"]} />
            <Person
                name="Bowser Castle"
                age={23}
                hobbies={["robots", "programming"]} />
            <Person
                name="Wario"
                age={26}
                hobbies={[]} />
            <Person
                name="Vector Gru"
                age={17}
                hobbies={["Science"]} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));