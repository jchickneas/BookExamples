function isEven(n) {
    return (n%2===0 ? true : false);
}

function getRows (n) {
    var even = isEven(n);

    var numPairs = (even ? n/2 : (n-1)/2);
    var wFRow = "";
    var bFRow = "";
    for (i = 0; i < numPairs; i++){
        wFRow = wFRow.concat(" #");
    }

    if (!even) {
        wFRow = wFRow.concat(" ");
    }

    bFRow = wFRow.substring (1);

    if (!even) {
        bFRow = bFRow.concat("#");
    }
    else {
        bFRow = bFRow.concat(" ");
    }

    return [wFRow.concat("\n"), bFRow.concat("\n")];
}




function Chessboard (n, m, wf) {
    [wfr, bfr] = getRows (n);
    var pairOfRows = "";
    var board = "";

    if (wf === true) {
        pairOfRows = pairOfRows.concat(wfr, bfr);
    }
    else {
        pairOfRows = pairOfRows.concat(bfr,wfr);
    }

    var even = isEven(m);

    var numPairs = (even ? m/2 : (m-1)/2);

    for (i = 0; i < numPairs; i++) {
        board = board.concat(pairOfRows);
    }

    if (!even) {
        if (wf === true) {
            board = board.concat(wfr);
        }
        else {
            board = board.concat(bfr);
        }

    }

return board;
} 

const board  =Chessboard (20,20,true);
console.log (board);