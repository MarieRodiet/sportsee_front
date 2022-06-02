import './../styles/_App.scss'
import useFetch from './../services/Api/index.js'
import Nav from '../components/Nav';
import Error from '../components/Error';
import Dashboard from '../components/Dashboard';
import { useParams } from 'react-router-dom';

function App() {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, hasError } = useFetch(id);
  hasError ? console.log("there is an error") : console.log("data is loaded");

  return (
    <div className="App">
      <Nav />
      {data ? <Dashboard data={data} /> : <Error />}
      {isLoading && <p className="App-Loading">loading</p>}

    </div>
  )
}

export default App
