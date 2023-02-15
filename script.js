const tiles = document.querySelectorAll('.tile');
const button = document.querySelector('button');
let mark;
const marker = () => {
	if (mark === 'X') {
		mark = 'O';
	} else {
		mark = 'X';
	}
	return mark;
};

const gameBoard = {
	one: '',
	two: '',
	three: '',
	four: '',
	five: '',
	six: '',
	seven: '',
	eight: '',
	nine: '',
};
function populateDisplay() {
	tiles.forEach((element) => {
		const tileId = element.classList[0];
		// eslint-disable-next-line no-param-reassign
		element.innerText = gameBoard[tileId];
	});
}

function lineBetweenThreePositions(a, b, c) {
	if (a === b && b === c && a !== '') {
		return true;
	}
	return false;
}
function checkIfFinished() {
	let boardFull = true;
	Object.values(gameBoard).forEach((element) => {
		if (element === '') {
			boardFull = false;
		}
	});
	if (boardFull) {
		console.log('full');
	}
	if (
		lineBetweenThreePositions(gameBoard.one, gameBoard.two, gameBoard.three) ||
		lineBetweenThreePositions(gameBoard.four, gameBoard.five, gameBoard.six) ||
		lineBetweenThreePositions(gameBoard.seven, gameBoard.eight, gameBoard.nine) ||
		lineBetweenThreePositions(gameBoard.one, gameBoard.four, gameBoard.seven) ||
		lineBetweenThreePositions(gameBoard.two, gameBoard.five, gameBoard.eight) ||
		lineBetweenThreePositions(gameBoard.three, gameBoard.six, gameBoard.nine) ||
		lineBetweenThreePositions(gameBoard.one, gameBoard.five, gameBoard.nine) ||
		lineBetweenThreePositions(gameBoard.three, gameBoard.five, gameBoard.seven)
	) {
		console.log('line');
	}
}

function placeMark() {
	const tileId = this.classList[0];

	if (this.innerText === '') {
		gameBoard[tileId] = marker();
		populateDisplay();
		checkIfFinished();
	}
}

tiles.forEach((element) => {
	element.addEventListener('click', placeMark);
});

function resetGame() {
	tiles.forEach((element) => {
		// eslint-disable-next-line no-param-reassign
		element.innerText = '';
	});
	Object.keys(gameBoard).forEach((element) => {
		gameBoard[element] = '';
	});
	console.table(gameBoard);
}

button.addEventListener('click', resetGame);
