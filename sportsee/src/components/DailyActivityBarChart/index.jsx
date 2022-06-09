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
import useFetch from './../../services/Api/index.js'
import Error from '../Error/index.jsx'
import formatDailyActivity from '../../services/Formaters/formatDailyActivities.js'
import propTypes from 'prop-types'
import './../../styles/_dailyActivities.scss'
function DailyActivityBarChart() {
    const mockedData = [
        {
            kilogram: 80,
            calories: 240,
            day: '1',
        },
        {
            kilogram: 80,
            calories: 220,
            day: '2',
        },
        {
            kilogram: 81,
            calories: 280,
            day: '3',
        },
        {
            kilogram: 81,
            calories: 290,
            day: '4',
        },
        {
            kilogram: 80,
            calories: 160,
            day: '5',
        },
        {
            kilogram: 78,
            calories: 162,
            day: '6',
        },
        {
            kilogram: 76,
            calories: 390,
            day: '7',
        },
    ]
    const { id } = useParams()
    const mockedDataUrl = `/data/activity${id}.json`
    const localServerUrl = `http://localhost:3000/user/${id}/activity`
    const { data, isLoading, hasError } = useFetch(mockedDataUrl, id)
    let formatedData = formatDailyActivity(data)
    return (
        <div className="App-Dashboard-data-dailyActivity">
            {data ? (
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        barGap={6}
                        width={500}
                        height={300}
                        data={mockedData}
                        margin={{
                            top: 30,
                            right: 20,
                            left: 20,
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
                                right: 30,
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
                            domain={['dataMin -2', 'dataMax + 1']}
                            axisLine={false}
                            tickLine={false}
                            allowDataOverflow={true}
                            dx={10}
                            dy={-4}
                        />
                        <YAxis
                            dataKey="calories"
                            stroke="#9B9EAC"
                            orientation="left"
                            domain={['dataMin -20', 'dataMax + 20']}
                            axisLine={false}
                            tickLine={false}
                            allowDataOverflow={true}
                            dx={-10}
                            dy={-4}
                        />

                        <Tooltip content={<CustomTooltip />} />
                        <Bar
                            name="Poids (kg)"
                            dataKey="kilogram"
                            fill="#282D30"
                            radius={[10, 10, 0, 0]}
                            barSize={10}
                        />
                        <Bar
                            barSize={10}
                            name="Calories brûlées (kCal)"
                            dataKey="calories"
                            fill="#E60000"
                            radius={[10, 10, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            ) : hasError ? (
                <Error />
            ) : null}
        </div>
    )
}
export default DailyActivityBarChart

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="custom-tooltip-label">{`${payload[0].value}`}</p>
                <p className="custom-tooltip-desc">{`${payload[1].value}`}</p>
            </div>
        )
    }

    return null
}

CustomTooltip.propTypes = {
    active: propTypes.bool,
    payload: propTypes.array,
    label: propTypes.string,
}
