import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from 'recharts'
import './../../styles/_averageRadarChart.scss'
import './../../styles/_charts.scss'
import useFetch from '../../services/Api/useFetch'
import { useParams } from 'react-router-dom'
import formatPerformance from '../../services/Formaters/formatPerformance'

export default function PerformanceRadarChart({ urlForUseFetch }) {
    const { id } = useParams()

    const { data, isLoading, hasError } = useFetch(
        urlForUseFetch,
        'performance',
        id
    )

    let formatedData = data && formatPerformance(data['data'])

    return (
        <div className="App-Dashboard-data-charts-performance">
            {formatedData ? (
                <ResponsiveContainer
                    width="90%"
                    height="90%"
                    className="App-Dashboard-data-charts-performance-container"
                >
                    <RadarChart
                        className="App-Dashboard-data-charts-performance-container-radar"
                        data={formatedData}
                        outerRadius="67%"
                    >
                        {/* <RadarChart outerRadius="60%" data={formatedData}>*/}
                        <PolarGrid stroke="#FFFFFF" radialLines={false} />
                        <PolarAngleAxis
                            dataKey="kind"
                            stroke="#FFFFFF"
                            axisLine={false}
                            tickLine={false}
                            //tick={{ fontSize: '0.5rem' }}
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
                <p>Error</p>
            ) : isLoading ? (
                <p>it is loading</p>
            ) : null}
        </div>
    )
}
