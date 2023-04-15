// Renders a p that should accept a property of “name”
// and display text “My name is name”.
const NamedComponent = (props) => {
    return <p>My name is { props.name }</p>
}