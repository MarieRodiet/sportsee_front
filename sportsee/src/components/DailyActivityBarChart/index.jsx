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

function DailyActivityBarChart() {
    const data = [
        {
            name: 1,
            poids: 4000,
            calories: 2400,
            amt: 2400,
        },
        {
            name: '2',
            poids: 3000,
            calories: 1398,
            amt: 2210,
        },
        {
            name: '3',
            poids: 2000,
            calories: 9800,
            amt: 2290,
        },
        {
            name: '4',
            poids: 2780,
            calories: 3908,
            amt: 2000,
        },
        {
            name: '5',
            poids: 1890,
            calories: 4800,
            amt: 2181,
        },
        {
            name: '6',
            poids: 2390,
            calories: 3800,
            amt: 2500,
        },
        {
            name: '7',
            poids: 3490,
            calories: 4300,
            amt: 2100,
        },
        {
            name: '8',
            poids: 3490,
            calories: 4300,
            amt: 2100,
        },
        {
            name: '9',
            poids: 3490,
            calories: 4300,
            amt: 2100,
        },
        {
            name: '10',
            poids: 3490,
            calories: 4300,
            amt: 2100,
        },
    ]
    return (
        <ResponsiveContainer
            width="100%"
            height="100%"
            className="App-Dashboard-data-dailyActivity"
        >
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="4 4" vertical={false} />
                <Legend
                    width={300}
                    wrapperStyle={{
                        top: 20,
                        right: 10,
                    }}
                    radius={[10, 10, 0, 0]}
                />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                    name="Poids (kg)"
                    dataKey="poids"
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
    )
}
export default DailyActivityBarChart
