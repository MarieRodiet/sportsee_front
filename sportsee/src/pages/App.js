import './../styles/_App.scss'
import Nav from '../components/Nav';
import Dashboard from '../components/Dashboard';
import getRightUrl from '../services/Api/getRightUrl.js';

function App() {
  const isMockedUrl = true;
  const url = getRightUrl(isMockedUrl);

  return (
    <div className="App">
      <Nav />
      <Dashboard urlForUseFetch={url} />
    </div>
  )
}

export default App
