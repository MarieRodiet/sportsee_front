import propTypes from 'prop-types';

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
