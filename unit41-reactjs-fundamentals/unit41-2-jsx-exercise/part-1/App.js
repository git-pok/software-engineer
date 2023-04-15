// Renders a div with instances of the other two components.
// <NamedComponent name="Fvin" />
const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Fvin" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));