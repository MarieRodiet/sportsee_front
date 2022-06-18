import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from 'recharts'
import './../../styles/_performanceRadarChart.scss'
import './../../styles/_charts.scss'
import useFetch from '../../services/Api/useFetch'
import { useParams } from 'react-router-dom'
import formatPerformance from '../../services/Formaters/formatPerformance'
import propTypes from 'prop-types'
import Macronutrients from '../Macronutrients'
/**
 *
 * @param {string} urlForUseFetch
 * @returns jsx with RadarChart
 */
export default function PerformanceRadarChart({ urlForUseFetch }) {
    const { id } = useParams()
    const { data, isLoading, hasError } = useFetch(
        urlForUseFetch,
        'performance',
        id
    )
    let formatedData = data && formatPerformance(data['data'])

    return (
        <div className="App-Dashboard-container-data-recharts-charts-performance">
            {formatedData ? (
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                    className="App-Dashboard-container-data-recharts-charts-performance-container"
                >
                    <RadarChart
                        className="App-Dashboard-container-data-recharts-charts-performance-container-radar"
                        data={formatedData}
                        outerRadius="65%"
                    >
                        <PolarGrid stroke="#FFFFFF" radialLines={false} />
                        <PolarAngleAxis
                            dataKey="kind"
                            stroke="#FFFFFF"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: '0.7em' }}
                            dy={5}
                        />
                        <PolarRadiusAxis tick={false} axisLine={false} />
                        <Radar
                            dataKey="value"
                            fill="#FF0101"
                            fillOpacity={0.7}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            ) : hasError ? (
                <p className="App-Dashboard-container-data-recharts-charts-performance-error">
                    There is an error
                </p>
            ) : isLoading ? (
                <p>it is loading</p>
            ) : null}
        </div>
    )
}

Macronutrients.propTypes = {
    macronutrients: propTypes.object.isRequired,
}
