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
        setReq(req => {
        if (!req) return 1;
        else return req === 1 ? 2 : 1;  
    })
  }

    useEffect(() => {

        async function getJokes() {
        try {
            if (!req) return;
            else {
                setJokes(jokes => null);
                const jokesData = [];
                const jokeIds = [];
                let iterationCnt = 0;
                setIsLoading(() => true);

                while (iterationCnt < 10) {
                  const res = await axios.get("https://icanhazdadjoke.com", {
                      headers: { Accept: "application/json" }
                  });

                  const jokeId = res.data.id;
                  // console.log(jokeIds.indexOf(jokeId) === -1);
                  // console.log(jokeId);
                  if (jokeIds.indexOf(jokeId) === -1) {
                    jokesData.push({
                        id: res.data.id,
                        joke: res.data.joke,
                        votes: 0
                    })
                    jokeIds.push(jokeId);
                  }

                  if (jokesData.length === 5) break;
                  iterationCnt++
                }

                addJokes(jokesData);
                setIsLoading(() => false);

            }
      
          } catch (err) {
            setIsLoading(() => false);
            console.error(`ERROR!!!\n${err}`);
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
                  )) 
                : 
                  null 
              }
            </div>
        }
        </>
      )
}
  
  export default JokeList;