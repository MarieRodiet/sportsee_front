import { PieChart, Pie, Cell } from 'recharts'
import './../../styles/_charts.scss'
import propTypes from 'prop-types'
/**
 *
 * @param {object} score
 * @returns PieChart with formated score data
 */
export default function ScorePieChart(score) {
    const data = [
        { name: 'score', value: score.score },
        { name: 'rest', value: 100 - score.score },
    ]
    const COLORS = [' #ff0101', '#ffffff']
    return (
        <div className="App-Dashboard-container-data-recharts-charts-score">
            <div className="App-Dashboard-container-data-recharts-charts-box-whiteCircle"></div>
            <p className="App-Dashboard-container-data-recharts-charts-box-title">
                Score
            </p>
            <div className="App-Dashboard-container-data-recharts-charts-box-details">
                <p className="App-Dashboard-container-data-recharts-charts-box-details-percent">
                    {score.score}%
                </p>
                <p className="App-Dashboard-container-data-recharts-charts-box-details-objectif">
                    de votre objectif
                </p>
            </div>
            <PieChart
                width={200}
                height={170}
                className="App-Dashboard-container-data-recharts-charts-box-pieChart"
            >
                <Pie
                    data={data}
                    cx={95}
                    cy={90}
                    innerRadius={60}
                    outerRadius={70}
                    cornerRadius={40}
                    paddingAngle={0}
                    dataKey="value"
                    fill="#ffffff"
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
            </PieChart>
        </div>
    )
}
ScorePieChart.propTypes = {
    score: propTypes.number,
}
