import { PropTypes } from 'prop-types';

/**
 * format score data 
 * @param {object} data - data coming from useFetch on server
 * @returns object with a property score * 100
 */
export default function formatData(data) {
    const keyData = { ...data.keyData }
    let formated = [];
    for (let element in keyData) {
        if (element === "calorieCount")
            formated.push({
                kind: "Calories",
                quantity: keyData[element].toLocaleString() + "kCal"
            })
        if (element === "lipidCount")
            formated.push({
                kind: "Lipides",
                quantity: keyData[element] + "g"
            })
        if (element === "proteinCount")
            formated.push({
                kind: "Proteines",
                quantity: keyData[element] + "g"
            })
        if (element === "carbohydrateCount")
            formated.push({
                kind: "Glucides",
                quantity: keyData[element] + "g"
            })
    }

    return data.hasOwnProperty('todayScore') ?
        { ...data, score: data.todayScore * 100, keyData: formated } : {
            ...data, score: data.score * 100, keyData: formated
        };
}

formatData.propTypes = {
    data: PropTypes.object.isRequired,
}

