import { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

const JokeList = ({ numJokesToGet }) => {
    // console.log(numJokesToGet);
    const [ jokes, setJokes ] = useState(null);
    const [ isLoading, setIsLoading ] = useState();
    const [ req, setReq ] = useState(false);
    let seenJokes = new Set();
    const addJokes = (data) => {
        setJokes(() => ({
            ...data
        }))
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
            // load jokes one at a time, adding not-yet-seen jokes
            // let jokes = [];
            let seenJokes = new Set();
            // const jokesLen = jokes.length;
            // while (seenJokes.length < 5)
            if (!req) return;
            else {
                const jokesData = [];
                console.log("ELSE RAN");
                console.log("JOKES LENGTH", jokesData.length);
                let jl = 0;
                console.log("JL", jl);
                while (jl < 5) {
                // if (jl <= 5) {
                    // for (let i = 0; i < numJokesToGet; i++) {
            // if (req === null) return addJokes([ ]);
                        const res = await axios.get("https://icanhazdadjoke.com", {
                        // params: {limit: 5 },
                        headers: { Accept: "application/json" }
                        });
                        console.log("RESULT", res);
                        if (!res.data.id) {
                            jokesData[res.data.id] = res.data.joke;
                            jl++
                        } else jl = jl;
                    // }
                }
                // addJokes(jokesData);
                console.log("JOKES", jokesData);
            //   addJokes(res.data);
            // addJokes({one: 1});

            //   console.log("RESULT", res);
                // console.log("JOKES", jokes.length);
            

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
            
            console.log("JOKES DATA", jokesData);
            addJokes(jokesData);
            
        }
      
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
        </div>
      );
    }

  JokeList.defaultProps = {
    numJokesToGet: 5
  };
  
  export default JokeList;