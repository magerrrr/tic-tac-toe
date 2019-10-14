class TicTacToe {
    constructor() {
        this.field = Array(3).fill(null).map(e => e = Array(3).fill(null));
        this.currentPlayer = "x";
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[columnIndex][rowIndex] != null) return;
        this.field[columnIndex][rowIndex] = this.currentPlayer;
        this.currentPlayer = (this.currentPlayer === "x") ? this.currentPlayer = "o" : this.currentPlayer = "x";

        this.checkWinner();
    }

    isFinished() {
        return ((this.winner != null) || (this.isDraw() === true)) ? true : false;
    }

    getWinner() {
        return (this.winner != null) ? this.winner : null;
    }

    checkWinner() {
        function checkCombination (string) {
        return (string.match(/[x]{3}|[o]{3}/)) ? string[0] : null;
        }

        function getVerticalWinner(array, winner) {
            let combination = "";
            for (let y = 0; y < array.length; y++){
                combination = array[y].join("");
                winner = checkCombination(combination);
                if (winner != null) {
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
                    if (winner != null) {
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
        if (!this.winner) this.winner = getVerticalWinner(this.field, this.winner);
        if (!this.winner) this.winner = getHorizontalWinner(this.field, this.winner);
        if (!this.winner) this.winner = getDiagonalOneWinner(this.field, this.winner);
        if (!this.winner) this.winner = getDiagonalTwoWinner(this.field, this.winner);
        }

    noMoreTurns() {
        let isFull;
        for (let i = 0; i < this.field.length; i++){
            isFull = (this.field[i].indexOf(null) != -1) ? false : true;
        if (isFull === false) break;
        }
        return isFull;
    }

    isDraw() {
        return ((this.noMoreTurns() === true) && (this.winner === null)) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[colIndex][rowIndex];
    }
}

module.exports = TicTacToe;
