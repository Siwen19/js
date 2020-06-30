/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    if (board[click[0]][click[1]] === 'M') {
        board[click[0]][click[1]] = 'X';
        return board;
    }
    if (board.length === 1) {
        board[click[0]][click[1]] = 'B';
        return board;
    }
    let directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1]
    ];

    function checkBoard(x, y) {
        board[x][y] = 'B';
        let time = 0;
        for (let direct of directions) {
            let x_new = x + direct[0];
            let y_new = y + direct[1];
            if (0 <= x_new && x_new < board.length &&
                0 <= y_new && y_new < board[1].length && board[x_new][y_new] === 'M'
            ) {
                time++;
            }
        } 
        board[x][y] = time === 0 ? 'B' : time.toString();
        loopBoard(x, y);
    }

    checkBoard(click[0], click[1]);

    function loopBoard(x, y) {
        if (board[x][y] === 'B') {
            for (let direct of directions) {
                let x_new = x + direct[0];
                let y_new = y + direct[1];
                if (0 <= x_new && x_new < board.length &&
                    0 <= y_new && y_new < board[1].length &&
                    board[x_new][y_new] === 'E'
                ) {
                    checkBoard(x_new, y_new);
                }
            }
        }
    }
    return board;
};
