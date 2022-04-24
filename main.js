const player = (name, sign) => {
    let _name = name;
    let _sign = sign;

    const getSign = () => _sign;
    const setSign = (sign) => {
        _sign = sign;
    }

    const getName = () => _name;
    const setName = (name) => {
        _name = name;
    }

    return {
        getSign,
        setSign,
        getName,
        setName
    };
}

const gameBoard = (() => {
    const board = new Array(9);
    
    const getCell = (index) => board[index];
    const setCell = (index, player) => {
        const cell = document.querySelectorAll(`.game-board button:nth-child(${index + 1})`);
        cell.textContent = board[index] = player.getSign();
    };
})();

const startBtn = document.getElementById('btn-start');
const startingGame = document.getElementById('starting-game');
const overlay = document.getElementById('overlay');

const startGame = (e) => {
    e.preventDefault();

    getPlayerForm();

    closeStartingGame();
}

const getPlayerForm = () => {
    const xName = document.getElementById('xName').value;
    const oName = document.getElementById('oName').value;
    const difficult = document.getElementById('difficult').value;

    setNamePlayers(xName, oName);
}

const setNamePlayers = (x, o) => {
    const xName = document.getElementById('x-name');
    const oName = document.getElementById('o-name');

    xName.textContent = x;
    oName.textContent = o;
}

const openStartingGame = () => {
    startingGame.classList.add('active');
    overlay.classList.add('active');
}

const closeStartingGame = () => {
    startingGame.classList.remove('active');
    overlay.classList.remove('active');
}

startBtn.onclick = startGame;

const gameController = (() => {

})();
const displayController = () => {};