// click space and get marking
// don't let players repeat the same space
// alternate x and o
// check for winner


class Board{
    constructor(){
        this.board = Array.from(document.querySelectorAll('.space'))
        this.board.forEach(space => space.addEventListener('click', (e)=>{this.choice(e)}))
        let winner = document.querySelector('#winner')
        let playAgain = document.querySelector('button')
        this.count = 0;
        this.isX = true; 
        this.gameOver = false;
        this.gameWinner = undefined;
        playAgain.addEventListener('click', this.restart)
    }
   
    choice(e){
        if(e.target.innerText){
            return
        }
        e.target.innerText = (this.isX)?'X':'O';
        this.isX = !this.isX;
  
       this.checkWin();
    }
    checkWin(){
        let winPossibilities = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        this.count += 1;
        this.gameOver = winPossibilities.some(winCellGroup=>{
            if (this.board[winCellGroup[0]].innerText !== '' && 
                this.board[winCellGroup[0]].innerText === this.board[winCellGroup[1]].innerText &&
                this.board[winCellGroup[0]].innerText === this.board[winCellGroup[2]].innerText) {
                
                this.gameWinner = this.board[winCellGroup[0]].innerText;
                return true;
            }
        });
        if (this.gameOver) {
            winner.innerText = `${this.gameWinner} wins!`
            this.openPop(); 
        }
        else if (this.count === 9){
            winner.innerText = "Tie!"
            this.openPop()
        }

    }
    restart(e){
        window.location.reload()
    }
    openPop(){
        document.querySelector('#popup').classList.add('active')
        document.querySelector('#overlay').classList.add('active')
    }
}
window.addEventListener('load',()=>{
    let board1 = new Board();

});

