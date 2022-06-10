import { useParams } from 'react-router-dom'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'
import useFetch from '../../services/Api/useFetch'
import formatAverage from '../../services/Formaters/formatAverage'
import './../../styles/_charts.scss'
import propTypes from 'prop-types'

export default function AverageLineChart({ urlForUseFetch }) {
    const { id } = useParams()
    const { data, isLoading, hasError } = useFetch(
        urlForUseFetch,
        'average',
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
                        width={500}
                        height={300}
                        data={formated}
                        margin={{
                            top: 50,
                            right: 20,
                            left: 20,
                            bottom: 20,
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
                            cursor={{
                                stroke: '#E50000',
                                strokeWidth: 2,
                            }}
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

CustomTooltip.propTypes = {
    active: propTypes.bool,
    payload: propTypes.array,
}
