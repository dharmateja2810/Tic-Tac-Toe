function nextTurn(mat){
    let row,col;
    let bestScore = -Infinity
    for (let i=0;i<3;i++){
        for (let j=0;j<3;j++){
            if(mat[i][j]==""){
                mat[i][j] = ai;
                let score = mini_max(mat,0,false);
                mat[i][j] = "";
                if(score>bestScore){
                    bestScore = score;
                    row = i;
                    col = j; 
                }
            }
        }
    }
    mat[row][col] = ai;
    let curTile = document.getElementById(String(row)+String(col));
    curTile.innerText = "X";
}

function mini_max(mat,depth,isMaximizing){
    let res = checkWinner();
    if(res){
        return scores[res];
    }
    if(isMaximizing){
        let bestScore = -Infinity
        for (let i=0;i<3;i++){
            for (let j=0;j<3;j++){
                if(mat[i][j]==""){
                    mat[i][j] = ai;
                    let score = mini_max(mat,depth+1,false);
                    mat[i][j] = "";
                    if(score>bestScore){
                        bestScore = score;
                    }
                }
            }
        }
        return bestScore;
    }
    else{
        let bestScore = Infinity
        for (let i=0;i<3;i++){
            for (let j=0;j<3;j++){
                if(mat[i][j]==""){
                    mat[i][j] = human;
                    let score = mini_max(mat,depth+1,true);
                    mat[i][j] = "";
                    if(score<bestScore){
                        bestScore = score;
                    }
                }
            }
        }
        return bestScore;
    }
}