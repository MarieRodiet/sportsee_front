import propTypes from 'prop-types';

export default function formatScore(data) {
    console.log()
    //let newScore = -1
    // if (data.hasOwnProperty('todayScore')) {
    //     console.log("data.hasOwnProperty todayScore")
    //     newScore = data.todayScore * 100;
    // }
    // else {
    //     console.log("DOES NOT HAVE data.hasOwnProperty todayScore")
    //     newScore = data.score * 100;
    // }
    return data.hasOwnProperty('todayScore') ?
        { ...data, todayScore: data.todayScore * 100 } : {
            ...data, todayScore: data.score * 100
        };
}

formatScore.propTypes = {
    data: propTypes.object.isRequired
}

