import './../../styles/_macronutrients.scss'
import { ReactComponent as CaloriesIcon } from './../../assets/calories-icon.svg'
import { ReactComponent as FatIcon } from './../../assets/fat-icon.svg'
import { ReactComponent as ProteinIcon } from './../../assets/protein-icon.svg'
import { ReactComponent as CarbsIcon } from './../../assets/carbs-icon.svg'
import propTypes from 'prop-types'

/**
 *
 * @param {object} macronutrients
 * @returns jsx with fetched data
 */
export default function Macronutrients(macronutrients) {
    const data = macronutrients.macronutrients
    return (
        <div className="App-Dashboard-data-keyData">
            {Object.keys(data).map(function (property) {
                return (
                    <>
                        {property === 'calorieCount' ? (
                            <div
                                key={data[property]}
                                className="App-Dashboard-data-keyData-box"
                            >
                                <CaloriesIcon />
                                <div className="App-Dashboard-data-keyData-box-data">
                                    <p className="App-Dashboard-data-keyData-box-data-nb">
                                        {data[property].toLocaleString()}kCal
                                    </p>
                                    <p className="App-Dashboard-data-keyData-box-data-type">
                                        Calories
                                    </p>
                                </div>
                            </div>
                        ) : property === 'lipidCount' ? (
                            <div
                                key={data[property]}
                                className="App-Dashboard-data-keyData-box"
                            >
                                <FatIcon />
                                <div className="App-Dashboard-data-keyData-box-data">
                                    <p className="App-Dashboard-data-keyData-box-data-nb">
                                        {data[property]}g
                                    </p>
                                    <p className="App-Dashboard-data-keyData-box-data-type">
                                        Lipides
                                    </p>
                                </div>
                            </div>
                        ) : property === 'proteinCount' ? (
                            <div
                                key={data[property]}
                                className="App-Dashboard-data-keyData-box"
                            >
                                <ProteinIcon />
                                <div className="App-Dashboard-data-keyData-box-data">
                                    <p className="App-Dashboard-data-keyData-box-data-nb">
                                        {data[property]}g
                                    </p>
                                    <p className="App-Dashboard-data-keyData-box-data-type">
                                        Proteines
                                    </p>
                                </div>
                            </div>
                        ) : property === 'carbohydrateCount' ? (
                            <div
                                key={data[property]}
                                className="App-Dashboard-data-keyData-box"
                            >
                                <CarbsIcon />
                                <div className="App-Dashboard-data-keyData-box-data">
                                    <p className="App-Dashboard-data-keyData-box-data-nb">
                                        {data[property]}g
                                    </p>
                                    <p className="App-Dashboard-data-keyData-box-data-type">
                                        Glucides
                                    </p>
                                </div>
                            </div>
                        ) : null}
                    </>
                )
            })}
        </div>
    )
}

Macronutrients.propTypes = {
    macronutrients: propTypes.object,
}
