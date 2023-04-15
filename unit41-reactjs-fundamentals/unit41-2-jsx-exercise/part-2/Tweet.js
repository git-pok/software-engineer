// Renders a ul that should accept a property of:
// username of the user who wrote the tweet, the name
// of the user who wrote the tweet, the date of
// the tweet, and the message being tweeted.
const Tweet = (props) => {
    const propsArr = Array.from(props);
    const propsEnts = Array.from(Object.entries(props));
    const propsLen = propsEnts.length;

    const styleEditsArr = propsEnts.map(val => {
        if (val[0] !== "message") {
            val[0] = `Author ${val[0][0].toUpperCase() + val[0].slice(1)}`
            return [val[0], val[1]]
        } else {
            val[0] = val[0][0].toUpperCase() + val[0].slice(1);
            return [val[0], val[1]]
        }
    });

    if (!propsLen) styleEditsArr && styleEditsArr.push(
        ["No Data", "Empty Tweet Component"]
    );

    return (
        <ul className="ul-tweet">
            {
                styleEditsArr.map(val => (
                    <li>
                        { val[0] }: { val[1] }
                    </li>
                ))
            }
        </ul>
    )
}