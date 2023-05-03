const nameGame = {
    nameGame: 'Mafia II'
}

const ratingGame = {
    ratingGame: 80
}

const mechanicsGame = {
    shooting: true,
    driving: true,
    flying: false,
}

const genreGame = {
    firstGenre: '3rd person',
    secondGenre: 'Action'
}

const mafia2 = {
    ...nameGame,
    ...genreGame,
    ...mechanicsGame
}

console.table(mafia2)