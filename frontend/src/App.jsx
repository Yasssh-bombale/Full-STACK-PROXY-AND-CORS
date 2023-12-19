import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
function App() {
  const [jokes, setJokes] = useState([{}]);
  console.log(jokes);
  useEffect(() => {
    const getJokes = async () => {
      const { data } = await axios.get("/api/jokes");
      setJokes(data);
    };
    getJokes();
  });
  return (
    <>
      <h1>FULL STACK PROXY AND CORS</h1>
      <h2>JOKES Count :{jokes.length}</h2>

      {/* {jokes.map((joke) => (
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <h4>{joke.content}</h4>
        </div>
      ))} */}
    </>
  );
}

export default App;
