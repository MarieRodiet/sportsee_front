import './../styles/_App.scss'
import Nav from '../components/Nav';
import Dashboard from '../components/Dashboard';

function App() {
  //TRUE => data for all 4 useFetch from local server
  //FALSE => data for all 4 useFetch from within project folder
  const isMockedUrl = true;

  return (
    <div className="App">
      <Nav />
      <Dashboard urlForUseFetch={isMockedUrl ? "/data/user/" : "http://localhost:3000/user/"} />
    </div>
  )
}

export default App
