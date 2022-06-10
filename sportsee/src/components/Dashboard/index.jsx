import './../../styles/_dashboard.scss'
import Macronutrients from './../Macronutrients'
import ScorePieChart from '../ScorePieChart'
import DailyActivityBarChart from '../DailyActivityBarChart'
import PerformanceRadarChart from '../PerformanceRadarChart'
import AverageLineChart from '../AverageLineChart'
import { useParams } from 'react-router-dom'
import Error from '../Error'
import useFetch from '../../services/Api/useFetch.js'
import formatScore from './../../services/Formaters/formatScore.js'
function Dashboard({ urlForUseFetch }) {
    const { id } = useParams()
    let url = ''
    if (urlForUseFetch.includes('http://localhost')) {
        url = `${urlForUseFetch}${id}`
    } else {
        url = `${urlForUseFetch}${id}.json`
    }
    const { data, isLoading, hasError } = useFetch(url, "user")
    const formated = data && formatScore(data)
    return (
        <div className="App-Dashboard">
            {formated ? (
                <>
                    <div className="App-Dashboard-greeting">
                        <h1>Bonjour</h1>
                        <h1 className="App-Dashboard-greeting-name">
                            &nbsp;{formated.userInfos['firstName']}
                        </h1>
                        <h2>
                            Félicitation ! Vous avez explosé vos objectifs hier
                            👏
                        </h2>
                    </div>

                    <div className="App-Dashboard-data">
                        <DailyActivityBarChart
                            urlForUseFetch={urlForUseFetch}
                        />
                        <div className="App-Dashboard-data-charts">
                            <AverageLineChart urlForUseFetch={urlForUseFetch} />
                            <PerformanceRadarChart
                                urlForUseFetch={urlForUseFetch}
                            />
                            <ScorePieChart score={formated.score} />
                        </div>
                        <Macronutrients macronutrients={formated.keyData} />
                    </div>
                </>
            ) : hasError ? (
                <Error />
            ) : isLoading ? (
                <p>it is still loading</p>
            ) : null}
        </div>
    )
}
export default Dashboard
