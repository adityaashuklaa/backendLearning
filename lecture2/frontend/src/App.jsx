import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get("/api/jokes")
    .then((response) => {
      console.log(response);
      
      setJokes(response.data) // There no need to parse the response into JSON format, Pros of axios
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])
  return (
    <>
      <h1>Frontend is here!!</h1>
    <p>Jokes : {jokes.length}</p>
    {jokes.map((item) => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
      </div>
    ))}
    </>
  )
}

export default App
