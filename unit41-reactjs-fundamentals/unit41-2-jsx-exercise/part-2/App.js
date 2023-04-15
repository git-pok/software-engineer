// Renders a div with instances of Tweet.
const App = () => {
    return (
        <div>
            <Tweet
                username="fvin"
                name="Vincent"
                date="04:15:23"
                message="HELLO FROM FVIN!!!" />
            <Tweet
                username="e"
                name="Bowser"
                date="04:15:23"
                message="HELLO FROM BOWSER!!!" />
            <Tweet />
            <Tweet
                username="M"
                name="Wario"
                date="04:15:23" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));