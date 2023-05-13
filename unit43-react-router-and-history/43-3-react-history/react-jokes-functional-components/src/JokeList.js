import { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke.js";
import "./JokeList.css";

const JokeList = ({ numJokesToGet }) => {

    const [ jokes, setJokes ] = useState(null);
    const [ isLoading, setIsLoading ] = useState();
    const [ jokesLength, setJokesLength ] = useState(0);
    const [ req, setReq ] = useState(false);

    // let seenJokes = new Set();
    // console.log("TOP LEVEL JOKES", jokes);
    const addJokes = (data) => {

        setJokes(jokes => {
            if (!jokes || jokes.length === 0) return [...data];
            else return [...jokes, data];
        })
    }

    const reqMade = () => {
        setReq(() => {
        if (!req) return 1;
        else if (req === 1) return 2;
        else return 1; 
        });  
    }

    useEffect(() => {
        async function getJokes() {
        try {
            if (!req) return;
            else {
                setJokes(jokes => null);
                setJokesLength(jokesLength => 0);
                let jokeDataJokes = 0;
                const jokesData = [];
                const jokeIds = {};

                while (jokeDataJokes < 5) {
                    const res = await axios.get("https://icanhazdadjoke.com", {
                        headers: { Accept: "application/json" }
                    });

                    const jokeId = res.data.id;
                    jokeIds[jokeId] = jokeId;

                    if (!jokeIds.jokeId) {

                        jokesData.push({
                            id: res.data.id,
                            joke: res.data.joke,
                            votes: 0
                        })

                        setJokesLength(jokesLength => jokesLength + 1);
                        jokeDataJokes++;
                    }
                }

                addJokes(jokesData);

            }
            // }

            //   const { joke } = res.data;

            //   addJokes(joke);
      
            //   if (!seenJokes.has(joke.id)) {
            //     seenJokes.add(joke.id);
            //     setJokes(jokes => ({
            //         ...jokes,
            //         ...joke,
            //         votes: 0

            //     }))
                // jokes.push({ ...joke, votes: 0 });
            //   } else {
                // console.log("duplicate found!");
            //   }
            
      
          } catch (err) {
            console.error(err);
          }
        }

        getJokes();
    
    }, [req])

    // console.log("JOKES", jokes.length);
  
    /* empty joke list, set to loading state, and then call getJokes */
  
    // generateNewJokes() {
    //   this.setState({ isLoading: true});
    //   this.getJokes();
    // }
  
    /* change vote for this id by delta (+1 or -1) */
  
    // vote(id, delta) {
    //   this.setState(st => ({
    //     jokes: st.jokes.map(j =>
    //       j.id === id ? { ...j, votes: j.votes + delta } : j
    //     )
    //   }));
    // }
  
    /* render: either loading spinner or list of sorted jokes. */
    // let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);
    //   let sortedJokes = [...this.state.jokes].sort((a, b) => b.votes - a.votes);
    //   if (this.state.isLoading) {
    //     return (
    //       <div className="loading">
    //         <i className="fas fa-4x fa-spinner fa-spin" />
    //       </div>
    //     )
    //   }
  
      return (
        <div className="JokeList">
          <button
            className="JokeList-getmore"
            onClick={reqMade}
          >
            Get New Jokes
          </button>
  
          {/* {sortedJokes.map(j => ( */}
          {/* {jokes.map(j => (
            <Joke
              text={j.joke}
              key={j.id}
              id={j.id}
              votes={j.votes}
              vote={this.vote}
            />
          ))} */}
          { jokes ? jokes.map(j => (
            <Joke
              text={j.joke}
              key={j.id}
              id={j.id}
              votes={j.votes}
            //   vote={this.vote}
            />
          )) : null}
        </div>
      );
    }

  JokeList.defaultProps = {
    numJokesToGet: 5
  };
  
  export default JokeList;