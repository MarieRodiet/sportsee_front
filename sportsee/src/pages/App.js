import './../styles/App.scss'
import useFetch from './../services/Api/index.js'
import Nav from '../components/Nav';
import Error from '../components/Error';

function App() {
  const { data, isLoading, hasError } = useFetch(
    `http://localhost:3000/user/18`
  )

  return (
    <div className="App">
      <Nav />
      {data && <div>there is data</div>}

      {isLoading && <p className="App-Loading">loading</p>}

      {hasError && <Error />}
    </div>
  )
}

export default App
