import { useParams } from 'react-router-dom'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Rectangle,
} from 'recharts'
import useFetch from '../../services/Api/useFetch'
import formatAverage from '../../services/Formaters/formatAverage'
import './../../styles/_charts.scss'
import './../../styles/_averageLineChart.scss'
import propTypes from 'prop-types'

/**
 *
 * @param {string}  urlForUseFetch
 * @returns jsx with LineChart using fetched data
 */
export default function AverageLineChart({ urlForUseFetch }) {
    const { id } = useParams()
    const { data, isLoading, hasError } = useFetch(
        urlForUseFetch,
        'average-sessions',
        id
    )
    const formated = data && formatAverage(data['sessions'])

    return (
        <div className="App-Dashboard-data-charts-average">
            <p className="App-Dashboard-data-charts-average-title">
                Durée moyenne des sessions
            </p>
            {formated ? (
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={formated}
                        margin={{
                            top: 40,
                            right: 10,
                            left: 10,
                            bottom: 15,
                        }}
                    >
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            stroke="#FFFF"
                            tickSize="16"
                        />
                        <YAxis axisLine={false} tickLine={false} hide={true} />
                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={<CustomCursor />}
                        />
                        <Line
                            type="monotone"
                            dataKey="sessionLength"
                            stroke="#FFFF"
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            ) : hasError ? (
                <p>Error</p>
            ) : isLoading ? (
                <p>it is loading</p>
            ) : null}
        </div>
    )
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="custom-tooltip-label">{`${payload[0].value} min`}</p>
            </div>
        )
    }
    return null
}

const CustomCursor = (props) => {
    const { points, width, height } = props
    const { x, y } = points[0]
    return (
        <Rectangle
            fill="#E50000"
            stroke="#E50000"
            x={x}
            y={y - 40}
            width={width + 30}
            height={height + 45}
        />
    )
}

AverageLineChart.propTypes = {
    urlForUseFetch: propTypes.string.isRequired,
}

CustomTooltip.propTypes = {
    active: propTypes.bool,
    payload: propTypes.array,
}

CustomCursor.propTypes = {
    props: propTypes.object,
}
