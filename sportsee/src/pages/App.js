import './../styles/_App.scss'
import useFetch from './../services/Api/index.js'
import Nav from '../components/Nav';
import Error from '../components/Error';
import Dashboard from '../components/Dashboard';
import { useParams } from 'react-router-dom';
import formatScore from '../services/Formaters/formatScore.js';
function App() {
  const { id } = useParams();
  const mockedDataUrl = `/data/user/${id}.json`;
  const localServerUrl = `http://localhost:3000/user/${id}`;

  const { data, isLoading, hasError } = useFetch(mockedDataUrl, id);
  return (
    <div className="App">
      <Nav />
      {data ? <Dashboard data={formatScore(data)} /> : <Error />}
      {isLoading && <p className="App-Loading">loading</p>}

    </div>
  )
}

export default App
