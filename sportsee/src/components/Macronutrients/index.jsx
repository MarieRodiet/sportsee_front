import './../../styles/_macronutrients.scss'
import { ReactComponent as CaloriesIcon } from './../../assets/calories-icon.svg'
import { ReactComponent as FatIcon } from './../../assets/fat-icon.svg'
import { ReactComponent as ProteinIcon } from './../../assets/protein-icon.svg'
import { ReactComponent as CarbsIcon } from './../../assets/carbs-icon.svg'

function Macronutrients(macronutrients) {
    const data = macronutrients.macronutrients
    return (
        <div className="App-Dashboard-data-keyData">
            {Object.keys(data).map(function (property) {
                return (
                    <div
                        key={data[property]}
                        className="App-Dashboard-data-keyData-box"
                    >
                        <div className="App-Dashboard-data-keyData-box-icon">
                            {property === 'calorieCount' ? (
                                <CaloriesIcon />
                            ) : property === 'lipidCount' ? (
                                <FatIcon />
                            ) : property === 'proteinCount' ? (
                                <ProteinIcon />
                            ) : property === 'carbohydrateCount' ? (
                                <CarbsIcon />
                            ) : null}
                        </div>
                        {property === 'calorieCount' ? (
                            <div className="App-Dashboard-data-keyData-box-data">
                                <p className="App-Dashboard-data-keyData-box-data-nb">
                                    {data[property].toLocaleString()}kCal
                                </p>
                                <p className="App-Dashboard-data-keyData-box-data-type">
                                    Calories
                                </p>
                            </div>
                        ) : property === 'lipidCount' ? (
                            <div className="App-Dashboard-data-keyData-box-data">
                                <p className="App-Dashboard-data-keyData-box-data-nb">
                                    {data[property]}g
                                </p>
                                <p className="App-Dashboard-data-keyData-box-data-type">
                                    Lipides
                                </p>
                            </div>
                        ) : property === 'proteinCount' ? (
                            <div className="App-Dashboard-data-keyData-box-data">
                                <p className="App-Dashboard-data-keyData-box-data-nb">
                                    {data[property]}g
                                </p>
                                <p className="App-Dashboard-data-keyData-box-data-type">
                                    Proteines
                                </p>
                            </div>
                        ) : property === 'carbohydrateCount' ? (
                            <div className="App-Dashboard-data-keyData-box-data">
                                <p className="App-Dashboard-data-keyData-box-data-nb">
                                    {data[property]}g
                                </p>
                                <p className="App-Dashboard-data-keyData-box-data-type">
                                    Glucides
                                </p>
                            </div>
                        ) : null}
                    </div>
                )
            })}
        </div>
    )
}
export default Macronutrients
