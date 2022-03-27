let conteiner = document.getElementById('field');
let resetBtn = document.getElementById('reset');
let winnerTitle = document.getElementById('winner');
let caseBtns = document.getElementsByClassName('case');
console.log(caseBtns);

conteiner.addEventListener('click', getElement);
resetBtn.addEventListener('click', resetGame);

let matrix = [
    [],
    [],
    []
]

let isFirstTurn = true;
let areHaveWinner = false;

function resetGame() {

    for (let i = 0; i < caseBtns.length; i++) {
        const element = caseBtns[i];
        element.innerHTML = '';
        element.disabled = false;
        isFirstTurn = true
        winnerTitle.hidden=true;
    }
    matrix = [[], [], []]
    console.log(matrix);
}

function getElement(event) {
    // console.log(conteiner);    
    currElement = event.target
    // console.log(event.target);


    if (event.target.value) {

        let row = Math.floor(currElement.value / 10);
        let col = currElement.value % 10;

        // console.log(event.target.value);

        // console.log('row:', row);
        // console.log('col:', col);

        // event.target.innerHTML = 'O'
        let playerSymbol = isFirstTurn ? 'X' : 'O';

        if (matrix[row][col] === undefined) {

            matrix[row][col] = playerSymbol;
            currElement.innerHTML = playerSymbol;
            currElement.disabled = true;
            isFirstTurn = !isFirstTurn;
        }

        checkHorizontal(row, playerSymbol);
        checkVertical(col, playerSymbol);
        checkDiagonal(playerSymbol);
        console.log('==================================================================');
    }

    // check Horizontal

    
    
    // console.log('Hi');    
}

function checkHorizontal(row, name) {
    let firsH = matrix[row][0];
    let secondH = matrix[row][1];
    let thirdH = matrix[row][2];
    checkForWinner(firsH, secondH, thirdH, name)
}

function checkVertical(col, name) {
    let firsH = matrix[0][col];
    let secondH = matrix[1][col];
    let thirdH = matrix[2][col];

    checkForWinner(firsH, secondH, thirdH, name)
}


function checkDiagonal(name) {
    let center = matrix[1][1];
    let upperLeftCourner = matrix[0][0];
    let upperRightCourner = matrix[0][2];
    let bottomLeftCourner = matrix[2][0];
    let bottomRightCourner = matrix[2][2];


    checkForWinner(upperLeftCourner, center, bottomRightCourner, name)
    checkForWinner(upperRightCourner, center, bottomLeftCourner, name)
}


function checkForWinner(firsH, secondH, thirdH, name) {
    if ((firsH !== undefined) && (firsH === secondH) && (secondH === thirdH)) {
        areHaveWinner=true;
        winnerTitle.hidden=false;
        winnerTitle.innerHTML=`${name} WIN!`
        disabledField();
        console.log('VICTORI', name);
        
    }
}

function disabledField() {
    for (let i = 0; i < caseBtns.length; i++) {
        const element = caseBtns[i];
        element.disabled = true;
    }
}

