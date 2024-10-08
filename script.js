const button = document.querySelectorAll('.cellGame');
const cell0 = document.getElementById('0')
const cell1 = document.getElementById('1')
const cell2 = document.getElementById('2')
const cell3 = document.getElementById('3')
const cell4 = document.getElementById('4')
const cell5 = document.getElementById('5')
const cell6 = document.getElementById('6')
const cell7 = document.getElementById('7')
const cell8 = document.getElementById('8')
const cells = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7,
    cell8]

const playBtn = document.querySelector('.playButton');
const resetBtn = document.querySelector('.restartButton');
const nameContainer = document.querySelector('.playersContainer');


let gameBoard = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

let playerRound = "X";
let gameStart = false;
let gameWin = false;

function getPlayer(){
    if(playerRound == "X"){
        if(playerXInput.value != "") return playerXInput.value
        else return "X"
    }else{
        if(playerOInput.value != "") return playerOInput.value
        else return "O"
    }
}

function checkWin(){
    //Checando colunas
    if (gameBoard[0][0] === gameBoard[1][0] && gameBoard[1][0] === gameBoard[2][0] ||
        gameBoard[0][1] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][1] ||
        gameBoard[0][2] === gameBoard[1][2] && gameBoard[1][2] === gameBoard[2][2]) {
            //console.log("O jogador " + playerRound + " Ganhou o jogo");
            const titleGame = document.createElement('h2');
            titleGame.innerHTML = "O jogador " + getPlayer() + " Ganhou o jogo"
            nameContainer.innerHTML = ""
            nameContainer.appendChild(titleGame);
            gameWin = true;
    }//Checando diagonais
    else if(gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] ||
            gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]
     ){
        const titleGame = document.createElement('h2');
        titleGame.innerHTML = "O jogador " + getPlayer() + " Ganhou o jogo"
        nameContainer.innerHTML = ""
        nameContainer.appendChild(titleGame);
        gameWin = true;
    }//Checando colunas
    else if(gameBoard[0][0] === gameBoard[0][1] && gameBoard[0][1] === gameBoard[0][2] ||
            gameBoard[1][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[1][2] ||
            gameBoard[2][0] === gameBoard[2][1] && gameBoard[2][1] === gameBoard[2][2]){
            const titleGame = document.createElement('h2');
            titleGame.innerHTML = "O jogador " + getPlayer() + " Ganhou o jogo"
            nameContainer.innerHTML = ""
            nameContainer.appendChild(titleGame);
            gameWin = true;
    }

    if(isBoardFilled == true){
        titleGame.innerHTML = "O jogo terminou em empate"
        nameContainer.innerHTML = ""
        nameContainer.appendChild(titleGame);
        gameWin = true;
    }
}

function isBoardFilled(board) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] !== "X" && board[i][j] !== "O") {
          return false; // Retorna false se algum valor for diferente de 'X' ou 'O'
        }
      }
    }
    return true; // Retorna true se todos os valores forem 'X' ou 'O'
}

function getCoordinates(id) {
    if (id < 0 || id > 8) {
        throw new Error("ID deve estar entre 0 e 8");
    }
    let row = Math.floor(id / 3); // Divide o id pela quantidade de colunas (3) para obter a linha
    let col = id % 3; // Usa o módulo para obter a coluna
    return [row, col];
}

function changePlayer(player){
    if(player == "X") playerRound = "O"
    else playerRound = "X"
}

function addPlayer(position, player, id){
    if(gameWin == false)
    {
        cells[position].innerHTML = player
        let coordinates = getCoordinates(id);
        gameBoard[coordinates[0]][coordinates[1]] = playerRound;
        checkWin();
        changePlayer(player);
        //console.log("Oi " + gameBoard[coordinates[0], coordinates[1]])
    }
}

function startGame(){
    if(gameStart == false){
        gameStart = true
    }else{
        console.log("O jogo ja iniciou")
        const table = document.querySelectorAll('.cellGame')
        table.forEach((button=>{
            button.innerHTML = ""
        }))
        gameBoard = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ];

        playerRound = "X";
        gameStart = true;
        gameWin = false;

    }
    const titleGame = document.createElement('h2');
    titleGame.innerHTML = "The game is playing"
    nameContainer.innerHTML = ""
    nameContainer.appendChild(titleGame);
}

function restartGame(){
    if(gameStart == true){
        console.log("reiniciar")
        window.location.reload(true);
    }
}


const playerXInput = document.getElementById('playerX');
const playerOInput = document.getElementById('playerO')


playBtn.addEventListener('click', ()=>{
    console.log(gameStart)
    startGame();
})

resetBtn.addEventListener('click', ()=>{
    restartGame();
})

button.forEach((button) =>{
button.addEventListener('click', ()=>{
        let div = document.getElementById(button.id);
        //Verifica se a div que eu cliquei está vazia para adicionar um valor
        if(div.innerHTML.trim() === ""){
            if(gameStart == true) addPlayer(button.id, playerRound, button.id);
        }else{
            //Tem um elemento dentro de la, ou seja, n pode
        }
    })
})

