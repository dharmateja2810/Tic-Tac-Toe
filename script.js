
let board  = document.getElementById("board");
let disp = document.getElementById("result");
const x = "X";
const o = "O";
let cur = false; // X - True O - False
var gameOver = false; // check if game is over 
let moves = 0;
//matrix for board
let mat = [["","",""],["","",""],["","",""]];
let scores = {
    'X' : 1,
    'O' : -1,
    'TIE' : 0
};
let ai = 'X';
let human = 'O';
for (let i=0;i<3;i++){
    for (let j=0;j<3;j++){
    let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.onclick = change
    tile.id = String(i)+String(j);
    board.appendChild(tile);
    }
}
function change(){
    if(!gameOver){
        let i = parseInt(this.id[0]);
        let j = parseInt(this.id[1]);
        if(!mat[i][j]){
            this.innerText = o;
            mat[i][j] = o;
            let res = checkWinner();
            if(res){
                gameOver = true;
                disp.className = "res";
                if(res=="TIE"){
                    disp.innerText = res;
                }
                else{
                    disp.innerText = res+" WINS";
                }
            }
            cur = true;
            nextTurn(mat);
            res = checkWinner();
            if(res){
                gameOver = true;
                disp.className = "res";
                if(res=="TIE"){
                    disp.innerText = res;
                }
                else{
                    disp.innerText = res+" WINS";
                }
            }
        }
    }
}

function checkWinner() {
    for(let i=0;i<3;i++){
        if(mat[i][0] == mat[i][1] && mat[i][1]==mat[i][2]){
            return mat[i][0];
        }
    }
    for (let j = 0;j<3;j++){
        if(mat[0][j]==mat[1][j] && mat[1][j]==mat[2][j]){
            return mat[0][j];
        }
    }
    if(mat[0][0]==mat[1][1] && mat[1][1] == mat[2][2]){
        return mat[0][0];
    }
    if (mat[0][2] == mat[1][1] && mat[1][1] == mat[2][0]){
        return mat[0][2];
    }
    let avail = 0;
    for (let i=0;i<3;i++){
        for (let j=0;j<3;j++){
            if(!mat[i][j]){
                avail++;
            }
        }
    }
    if(avail==0){
        return 'TIE';
    }
    return null;
}
nextTurn(mat);