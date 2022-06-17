import './../../styles/_macronutrients.scss'
import { ReactComponent as CaloriesIcon } from './../../assets/calories-icon.svg'
import { ReactComponent as FatIcon } from './../../assets/fat-icon.svg'
import { ReactComponent as ProteinIcon } from './../../assets/protein-icon.svg'
import { ReactComponent as CarbsIcon } from './../../assets/carbs-icon.svg'
import { PropTypes } from 'prop-types'

/**
 *
 * @param {object} macronutrients
 * @returns jsx with fetched data
 */
export default function Macronutrients({ macronutrients }) {
    return (
        <div className="App-Dashboard-data-keyData">
            {macronutrients.map((element) => (
                <div key={element['kind']}>
                    {element['kind'] === 'Calories' ? (
                        <div
                            key={element['kind']}
                            className="App-Dashboard-data-keyData-box"
                        >
                            <CaloriesIcon />
                            <div className="App-Dashboard-data-keyData-box-data">
                                <p className="App-Dashboard-data-keyData-box-data-nb">
                                    {element['quantity']}
                                </p>
                                <p className="App-Dashboard-data-keyData-box-data-type">
                                    {element['kind']}
                                </p>
                            </div>
                        </div>
                    ) : element['kind'] === 'Lipides' ? (
                        <div
                            key={element['kind']}
                            className="App-Dashboard-data-keyData-box"
                        >
                            <FatIcon />
                            <div className="App-Dashboard-data-keyData-box-data">
                                <p className="App-Dashboard-data-keyData-box-data-nb">
                                    {element['quantity']}
                                </p>
                                <p className="App-Dashboard-data-keyData-box-data-type">
                                    {element['kind']}
                                </p>
                            </div>
                        </div>
                    ) : element['kind'] === 'Proteines' ? (
                        <div
                            key={element['kind']}
                            className="App-Dashboard-data-keyData-box"
                        >
                            <ProteinIcon />
                            <div className="App-Dashboard-data-keyData-box-data">
                                <p className="App-Dashboard-data-keyData-box-data-nb">
                                    {element['quantity']}
                                </p>
                                <p className="App-Dashboard-data-keyData-box-data-type">
                                    {element['kind']}
                                </p>
                            </div>
                        </div>
                    ) : element['kind'] === 'Glucides' ? (
                        <div
                            key={element['kind']}
                            className="App-Dashboard-data-keyData-box"
                        >
                            <CarbsIcon />
                            <div className="App-Dashboard-data-keyData-box-data">
                                <p className="App-Dashboard-data-keyData-box-data-nb">
                                    {element['quantity']}
                                </p>
                                <p className="App-Dashboard-data-keyData-box-data-type">
                                    {element['kind']}
                                </p>
                            </div>
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    )
}

Macronutrients.propTypes = {
    macronutrients: PropTypes.object.isRequired,
}
