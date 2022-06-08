import './../../styles/_dashboard.scss'
import Macronutrients from './../Macronutrients'
import ScorePieChart from '../ScorePieChart'
function Dashboard({ data }) {
    // console.log('*******data.id: ********')
    // console.log(data.id)
    // console.log('*******data.score: ********')
    // console.log(data.score)
    // console.log('*******data.keyData: ********')
    // console.log(data.keyData)
    // console.log('*******data.userInfos: ********')
    // console.log(data.userInfos)
    return (
        <div className="App-Dashboard">
            <div className="App-Dashboard-greeting">
                <h1>Bonjour</h1>
                <h1 className="App-Dashboard-greeting-name">
                    &nbsp;{data.userInfos['firstName']}
                </h1>
                <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
            </div>
            <div className="App-Dashboard-data">
                <div className="App-Dashboard-data-dailyActivity"></div>
                <div className="App-Dashboard-data-charts">
                    <div className="App-Dashboard-data-charts-box"></div>
                    <div className="App-Dashboard-data-charts-box"></div>
                    <ScorePieChart score={data.score} />
                </div>
                <Macronutrients macronutrients={data.keyData} />
            </div>
        </div>
    )
}
export default Dashboard
