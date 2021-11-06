const gameBoard = (() => {
    let gameboardState = [];
    return {gameboardState}
})();

const gameController = (() => {
})();

const player = (name) => {
    const getName = () => name;
    return {getName};
};

const player1 = player('Test Subject 1');
const player2 = player('Test Subject 2');
