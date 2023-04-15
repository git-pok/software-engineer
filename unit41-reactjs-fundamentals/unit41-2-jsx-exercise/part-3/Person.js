// Renders a p tag which displays “Learn
// some information about this person”, an h3 tag
// for vote dialogue, and a ul of hobbies.
// Person Properties: name, age, hobbies.
const Person = (props) => {
    const propsArrHobbiesInc = Array.from(Object.entries(props));
    const propsArr = propsArrHobbiesInc.filter(val => val[0] !== "hobbies");
    let h3;
    const nameProp = props.name;
    const nameLen = nameProp.length;
    const ageProp = props.age;
    const hobbies = [];
    const hobbiesLen = props.hobbies.length;

    if (!hobbiesLen) hobbies.push("No Hobbies");
    else props.hobbies.forEach(hobby => hobbies.push(hobby));
     
    const styleEditsArr = propsArr.map((val) => {
        val[0] = val[0][0].toUpperCase() + val[0].slice(1);
        if (val[0] === "Name" && nameLen > 6) val[1] = val[1].slice(0, 6);
        return [val[0], val[1]];
    })

    if ( ageProp >= 18) h3 = <h3>Please go vote!</h3>;
    else h3 = <h3>You must be 18 to vote!</h3>;

    return (
        <div className="div-vote">
            <p>Learn some information about this person!</p>
            <ul className="ul-vote">
                {
                  styleEditsArr.map((val) => (
                    <li>{ val[0] }: { val[1] }</li>
                  ))  
                }
                <li>
                    Hobbies:
                    <ul className="ul-vote">
                        { 
                            hobbies.map(val => (
                                <li>{ val }</li>
                            ))
                        }
                    </ul>
                </li>
            </ul>
            { h3 }
        </div>
    )
}