import propTypes from 'prop-types';

export default function formatScore(data) {
    return data.hasOwnProperty('todayScore') ?
        { ...data, todayScore: data.todayScore * 100 } : {
            ...data, todayScore: data.score * 100
        };
}

formatScore.propTypes = {
    data: propTypes.object.isRequired
}

