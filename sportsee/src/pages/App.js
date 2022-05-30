import './../styles/App.css'
import useFetch from './../services/Api/index.js';
import { useState, useEffect } from 'react';

function App() {
  const { data, isLoading, hasError } = useFetch(`http://localhost:3000/user/18`)
  console.log(data);
  return (
    <div className="App" >
      <header className="App-header">
        {data && (<p>there is data</p>)}
        {isLoading && (<p>loading</p>)}
        {hasError && (<p>there is an error</p>)}
      </header>
    </div>
  )
}

export default App
