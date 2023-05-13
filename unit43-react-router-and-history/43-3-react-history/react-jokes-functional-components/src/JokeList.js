import { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke.js";
import "./JokeList.css";


const JokeList = ({ numJokesToGet }) => {

    const [ jokes, setJokes ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ req, setReq ] = useState(false);

    const addJokes = (data) => {

        setJokes(jokes => (
            !jokes || jokes.length === 0 ? [...data] : [...jokes, data]
        ))
    }

    const reqTrack = () => {
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
                let jokeDataJokes = 0;
                const jokesData = [];
                const jokeIds = {};

                while (jokeDataJokes < numJokesToGet) {
                    setIsLoading(() => true);
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

                        jokeDataJokes++;
                    }
                }

                addJokes(jokesData);
                setIsLoading(() => false);

            }
      
          } catch (err) {
            console.error(err);
          }
        }

        getJokes();
    
    }, [req])
      return (
        <>
        { isLoading
          ?
            <div className="loading">
              <i className="fas fa-4x fa-spinner fa-spin" />
            </div>
          :
            <div className="JokeList">
              <button
                className="JokeList-getmore"
                onClick={reqTrack}>
                  Get New Jokes
              </button>
              { jokes 
                ? 
                  jokes.map(j => (
                    <Joke
                      text={j.joke}
                      key={j.id}
                      id={j.id}
                      votes={j.votes} />
            //   vote={this.vote}
                  )) 
                : 
                  null 
              }
            </div>
        }
        </>
      )
}

  JokeList.defaultProps = {
    numJokesToGet: 5
  };
  
  export default JokeList;