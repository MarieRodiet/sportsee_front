import './../../styles/_error.scss'
/**
 *
 * @returns jsx for displaying Error when fetching data has failed
 */
export default function Error() {
    return (
        <div className="App-Error">
            <h1 className="App-Error-code">404</h1>
            <h2 className="App-Error-text">there is an error!&nbsp;&nbsp;🫤</h2>
        </div>
    )
}
