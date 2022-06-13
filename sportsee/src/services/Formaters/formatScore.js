import propTypes from 'prop-types';

/**
 * format score data 
 * @param {object} data - data coming from useFetch on server
 * @returns object with a property score * 100
 */
export default function formatScore(data) {
    return data.hasOwnProperty('todayScore') ?
        { ...data, score: data.todayScore * 100 } : {
            ...data, score: data.score * 100
        };
}

formatScore.propTypes = {
    data: propTypes.object.isRequired
}

