import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from 'recharts'
import './../../styles/_averageRadarChart.scss'
import useFetch from '../../services/Api'
import { useParams } from 'react-router-dom'
import formatPerformance from '../../services/Formaters/formatPerformance'

function AverageRadarChart() {
    const mockedData = [
        {
            subject: 'intensity',
            value: 90,
        },
        {
            subject: 'speed',
            value: 200,
        },
        {
            subject: 'strength',
            value: 50,
        },
        {
            subject: 'endurance',
            value: 140,
        },
        {
            subject: 'energy',
            value: 120,
        },
        {
            subject: 'cardio',
            value: 80,
        },
    ]
    const { id } = useParams()
    const mockedDataUrl = `/data/performance${id}.json`
    const localServerUrl = `http://localhost:3000/user/${id}/performance`
    const { data, isLoading, hasError } = useFetch(mockedDataUrl, id)

    let formatedData = data && formatPerformance(data['data'])
    console.log('formatedData')
    console.log(formatedData)
    return (
        <div className="App-Dashboard-data-charts-performance">
            {formatedData && (
                <ResponsiveContainer
                    width="90%"
                    height="90%"
                    className="App-Dashboard-data-charts-box-chart"
                >
                    <RadarChart
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                        data={formatedData}
                    >
                        <PolarGrid stroke="#FFFFFF" radialLines={false} />
                        <PolarAngleAxis
                            dataKey="kind"
                            stroke="#FFFFFF"
                            axisLine={false}
                            tickLine={false}
                        />
                        <PolarRadiusAxis tick={false} axisLine={false} />
                        <Radar
                            dataKey="value"
                            fill="#FF0101"
                            fillOpacity={0.7}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            )}
        </div>
    )
}
export default AverageRadarChart
