export default function formatScore(data) {

    let newScore = -1
    if (data.hasOwnProperty('todayScore')) {
        newScore = data.todayScore * 100;
    }
    else {
        newScore = data.score * 100;
    }
    let formated = { ...data, score: newScore };
    return formated;
}

