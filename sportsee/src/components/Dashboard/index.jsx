import './../../styles/_dashboard.scss'

import Macronutrients from './../Macronutrients'
import ScorePieChart from '../ScorePieChart'
import DailyActivityBarChart from '../DailyActivityBarChart'
import PerformanceRadarChart from '../PerformanceRadarChart'
import AverageLineChart from '../AverageLineChart';
function Dashboard({ data }) {
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
                <DailyActivityBarChart />
                <div className="App-Dashboard-data-charts">
                    <AverageLineChart />
                    <PerformanceRadarChart />
                    <ScorePieChart score={data.score} />
                </div>
                <Macronutrients macronutrients={data.keyData} />
            </div>
        </div>
    )
}
export default Dashboard
