import './../styles/App.scss'
import useFetch from './../services/Api/index.js'
import Nav from '../components/Nav'

function App() {
  const { data, isLoading, hasError } = useFetch(
    `http://localhost:3000/user/18`
  )

  return (
    <div className="App">
      <Nav />
      {data && <div>there is data</div>}

      {isLoading && <p className="App-Loading">loading</p>}

      {hasError && <p className="App-Error">there is an error</p>}
    </div>
  )
}

export default App
