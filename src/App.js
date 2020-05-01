import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./styles.css";

export default function App() {

  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setList(res.data))
  }, [])

  return (
    <div className="App">
      <ul>
        {
          list.map(data => {
            return (
              <li>
                <h1>{data.title}</h1>
                <h5>{data.id}</h5>
                <h4>{data.body}</h4>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
