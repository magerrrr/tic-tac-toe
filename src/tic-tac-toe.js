class TicTacToe {
    constructor() {
        this.square3X3 = [ [ null, null, null ], [ null, null, null ], [ null, null, null ] ];
        this.currentPlayer = "x";
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) { 
        if (this.square3X3[columnIndex][rowIndex] === null) {
            this.square3X3[columnIndex][rowIndex] = this.currentPlayer;
            
            if (this.currentPlayer === "x") {
                this.currentPlayer = "o";
            } else {
                this.currentPlayer = "x";
            }
    
            this.checkWinner();

        } else {
            return null;
        }
    }

    isFinished() {
        if ((this.winner !== null) || (this.isDraw() === true)) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        if (this.winner !== null) {
            return this.winner;
        } else {
            return null;
        }
    }

    checkWinner() {
        function checkCombination (string) {
            if (string.match(/[x]{3}|[o]{3}/)) {
                return string[0];
            } else {
                return null;
            }
        }

        function getVerticalWinner(array, winner) {
            let combination = "";
            for (let y = 0; y < array.length; y++){
                combination = array[y].join("");
                winner = checkCombination(combination);
                if (winner !== null) {
                    break;
                }
            }
            return winner;
          }
      
        function getHorizontalWinner (array, winner) {
            for (let y = 0; y < array.length; y++){
                let combination = [];
                    for (let x = 0; x <array[y].length; x++){
                        combination.push(array[x][y]);
                    }
                winner = checkCombination(combination.join(""));
                    if (winner !== null) {
                        break;
                    }
            }
            return winner;
          }
      
        function getDiagonalOneWinner (array, winner) {
            let x = 0;
            let combination = [];
            for (let y = 2; y >=0; y--){
                combination.push(array[y][x]);
                x++;
            }
            winner = checkCombination(combination.join(""));
            return winner;
          }
      
        function getDiagonalTwoWinner (array, winner) {
            let x = 0;
            let combination = [];
            for (let y = 0; y < array.length; y++){
                combination.push(array[y][x]);
                x++;
            }
            winner = checkCombination(combination.join(""));
            return winner;
        }

        if (!this.winner) this.winner = getVerticalWinner(this.square3X3, this.winner);
        if (!this.winner) this.winner = getHorizontalWinner(this.square3X3, this.winner);
        if (!this.winner) this.winner = getDiagonalOneWinner(this.square3X3, this.winner);
        if (!this.winner) this.winner = getDiagonalTwoWinner(this.square3X3, this.winner);
    }

    noMoreTurns() {
        let fullSquare = false;
        for (let i = 0; i < this.square3X3.length; i++){
            fullSquare = this.square3X3[i].indexOf(null);

            if (fullSquare !== -1) {
                fullSquare = false;
                break;
            } else {
                fullSquare = true;
            }
        }
        return fullSquare;
    }

    isDraw() {
        if ((this.noMoreTurns() === true) && (this.winner === null)) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.square3X3[colIndex][rowIndex];
    }
}

module.exports = TicTacToe;
