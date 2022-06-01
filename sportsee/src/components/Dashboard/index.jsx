import './../../styles/_dashboard.scss'

function Dashboard({ keyData, userInfos }) {
    console.log(keyData)
    return (
        <div className="App-Dashboard">
            <div className="App-Dashboard-greeting">
                <h1>Bonjour</h1>
                <h1 className="App-Dashboard-greeting-name">&nbsp;Cecilia</h1>
                <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
            </div>
            <div className="App-Dashboard-data">
                <div className="App-Dashboard-data-dailyActivity"></div>
                <div className="App-Dashboard-data-charts">
                    <div className="App-Dashboard-data-charts-box"></div>
                    <div className="App-Dashboard-data-charts-box"></div>
                    <div className="App-Dashboard-data-charts-box"></div>
                </div>
                <div className="App-Dashboard-data-keyData">
                    <div className="App-Dashboard-data-keyData-box"></div>
                    <div className="App-Dashboard-data-keyData-box"></div>
                    <div className="App-Dashboard-data-keyData-box"></div>
                    <div className="App-Dashboard-data-keyData-box"></div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard
