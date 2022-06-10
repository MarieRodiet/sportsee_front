import './../../styles/_error.scss'
import { Link } from 'react-router-dom'
export default function Error() {
    return (
        <div className="App-Error">
            <h1 className="App-Error-code">404</h1>
            <h2 className="App-Error-text">there is an error!&nbsp;&nbsp;🫤</h2>

            <Link className="App-Error-advice" to="/user/12">
                Click to see Karl's results
            </Link>
            <Link className="App-Error-advice" to="/user/18">
                Click to see Cecilia's results
            </Link>
        </div>
    )
}
