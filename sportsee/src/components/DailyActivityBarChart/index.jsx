import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts'
import { useParams } from 'react-router-dom'
import useFetch from '../../services/Api/useFetch.js'
import formatDailyActivity from '../../services/Formaters/formatDailyActivities.js'
import PropTypes from 'prop-types'
import './../../styles/_dailyActivities.scss'
import AverageLineChart from '../AverageLineChart/index.jsx'

/**
 * 
 * @param {string} urlForUseFetch
 * @returns jsx with BarChart using fetched data
 */
export default function DailyActivityBarChart({ urlForUseFetch }) {
    const { id } = useParams()
    const { data, isLoading, hasError } = useFetch(
        urlForUseFetch,
        'activity',
        id
    )
    let formatedData = data && formatDailyActivity(data['sessions'])
    return (
        <div className="App-Dashboard-container-data-recharts-dailyActivity">
            <p className="App-Dashboard-container-data-recharts-dailyActivity-title">
                Activité quotidienne
            </p>
            {formatedData ? (
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        barGap={6}
                        data={formatedData}
                        margin={{
                            top: 40,
                            right: 20,
                            left: 40,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <Legend
                            iconType="circle"
                            align="right"
                            iconSize="8"
                            width={300}
                            wrapperStyle={{
                                top: -10,
                                right: 20,
                            }}
                        />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            dy={10}
                            stroke="#9B9EAC"
                        />
                        <YAxis
                            dataKey="kilogram"
                            stroke="#9B9EAC"
                            orientation="right"
                            yAxisId="right"
                            domain={['dataMin -2', 'dataMax + 2']}
                            axisLine={false}
                            tickLine={false}
                            allowDataOverflow={true}
                            dx={20}
                            dy={-4}
                        />
                        <YAxis
                            dataKey="calories"
                            stroke="#9B9EAC"
                            orientation="left"
                            yAxisId="left"
                            domain={['dataMin - 35', 'dataMax + 35']}
                            allowDataOverflow={true}
                            axisLine={false}
                            tickLine={false}
                            hide={true}
                        />

                        <Tooltip content={<CustomTooltip />} />
                        <Bar
                            yAxisId="right"
                            name="Poids (kg)"
                            dataKey="kilogram"
                            fill="#282D30"
                            radius={[10, 10, 0, 0]}
                            barSize={10}
                        />
                        <Bar
                            yAxisId="left"
                            barSize={10}
                            name="Calories brûlées (kCal)"
                            dataKey="calories"
                            fill="#E60000"
                            radius={[10, 10, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            ) : hasError ? (
                <p className="App-Dashboard-container-data-recharts-dailyActivity-error">
                    Error
                </p>
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
                <p className="custom-tooltip-label">{`${payload[0].value}kg`}</p>
                <p className="custom-tooltip-desc">
                    {`${payload[1].value}`}Kcal
                </p>
            </div>
        )
    }

    return null
}

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
}

AverageLineChart.propTypes = {
    urlForUseFetch: PropTypes.string.isRequired,
}
