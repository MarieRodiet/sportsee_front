import propTypes from 'prop-types';

/**
 * @param {array} data - data coming from useFetch on server
 * @returns a array with a property kind from category array
 */
export default function formatPerformance(data) {
    const category = [
        'Intensité',
        'Vitesse',
        'Force',
        'Endurance',
        'Energie',
        'Cardio',
    ];
    function addLabel(object) {
        let index = object["kind"]
        return { ...object, kind: category[index - 1] }
    }
    return data.map((element) => addLabel(element))
}

formatPerformance.propTypes = {
    data: propTypes.array.isRequired
}
