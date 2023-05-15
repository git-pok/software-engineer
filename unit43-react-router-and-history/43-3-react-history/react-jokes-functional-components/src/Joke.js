import { useState } from "react";
import "./Joke.css";


const Joke = ({ id, votes, text }) => {

    const [ voteVal, setVoteVal ] = useState(votes);

    const addVote = () => {
        setVoteVal(votes => votes + 1);
    }

    const minusVote = () => {
        setVoteVal(votes => (
          votes === 0 ? 0 : votes - 1
        ));
    }

    return (
      <div className="Joke">
        <div className="Joke-votearea">

          <button onClick={minusVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          <button onClick={addVote}>
            <i className="fas fa-thumbs-up" />
          </button>

          {voteVal}
        </div>

        <div className="Joke-text">{text}</div>
      </div>
    );
}

export default Joke;