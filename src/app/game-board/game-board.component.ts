import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponentComponent } from '../modal-component/modal-component.component';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent {
  constructor(private modalService: NgbModal) {}

  // Define the game board grid
  grid: (string | null)[][] = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
  ];

  // Define player A and player B
  playerA = { turn: true, pawnsLeft: 21, color: 'red' };
  playerB = { turn: false, pawnsLeft: 21, color: 'yellow' };

  // Open the result modal with a message
  openResultModal(result: string) {
    const modalRef = this.modalService.open(ModalComponentComponent);
    modalRef.componentInstance.result = result;
    modalRef.componentInstance.newGameFunction = this.newGame.bind(this);
  }

  // Start a new game by resetting the grid and player pawns
  newGame() {
    this.grid = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ];
    this.playerA.pawnsLeft = 21;
    this.playerB.pawnsLeft = 21;
  }

  // Check for a winner or a draw
  checkTheWinner(): string | null | void {
    const rows = this.grid.length;
    const cols = this.grid[0].length;
    let modalOpened = false; // Flag to track if the modal has been opened

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const playerColor = this.grid[row][col];

        if (playerColor) {
          // Check horizontal alignment
          let horizontalCount = 1;
          for (let i = col - 1; i >= 0 && this.grid[row][i] === playerColor; i--) {
            horizontalCount++;
          }
          for (let i = col + 1; i < cols && this.grid[row][i] === playerColor; i++) {
            horizontalCount++;
          }

          if (horizontalCount === 4 && !modalOpened) {
            if (playerColor === "red") {
              this.openResultModal('player 1 is the Winner');
              modalOpened = true;
              return;
            }
            this.openResultModal('player 2 is the Winner');
            modalOpened = true;
            return;
          }

          // Check vertical alignment
          let verticalCount = 1;
          for (let i = row + 1; i < rows && this.grid[i][col] === playerColor; i++) {
            verticalCount++;
          }

          if (verticalCount === 4 && !modalOpened) {
            if (playerColor === "red") {
              this.openResultModal('player 1 is the Winner');
              modalOpened = true;
              return;
            }
            this.openResultModal('player 2 is the Winner');
            modalOpened = true;
            return;
          }

          // Check diagonal alignments (top-left to bottom-right)
          let diagonalCount1 = 1;
          for (let i = 1; i < 4 && row + i < rows && col + i < cols && this.grid[row + i][col + i] === playerColor; i++) {
            diagonalCount1++;
          }

          for (let i = 1; i < 4 && row - i >= 0 && col - i >= 0 && this.grid[row - i][col - i] === playerColor; i++) {
            diagonalCount1++;
          }

          if (diagonalCount1 === 4 && !modalOpened) {
            if (playerColor === "red") {
              this.openResultModal('player 1 is the Winner');
              modalOpened = true;
              return;
            }
            this.openResultModal('player 2 is the Winner');
            modalOpened = true;
            return;
          }

          // Check diagonal alignments (top-right to bottom-left)
          let diagonalCount2 = 1;
          for (let i = 1; i < 4 && row + i < rows && col - i >= 0 && this.grid[row + i][col - i] === playerColor; i++) {
            diagonalCount2++;
          }

          for (let i = 1; i < 4 && row - i >= 0 && col + i < cols && this.grid[row - i][col + i] === playerColor; i++) {
            diagonalCount2++;
          }

          if (diagonalCount2 === 4 && !modalOpened) {
            if (playerColor === "red") {
              this.openResultModal('player 1 is the Winner');
              modalOpened = true;
              return;
            }
            this.openResultModal('player 2 is the Winner');
            modalOpened = true;
            return;
          }
        }
      }
    }
    if (this.playerA.pawnsLeft + this.playerB.pawnsLeft === 0) {
      this.openResultModal('Draw');
    }
  }

  // Handle a cell click event
  onCellClick(rowIndex: number, colIndex: number): void {
    if (this.grid[rowIndex][colIndex] === null) {
      if (this.playerA.turn) {
        this.grid[rowIndex][colIndex] = 'red';
        this.playerA.pawnsLeft = this.playerA.pawnsLeft - 1;
      } else {
        this.grid[rowIndex][colIndex] = 'yellow';
        this.playerB.pawnsLeft = this.playerB.pawnsLeft - 1;
      }
      this.checkTheWinner();
      this.playerA.turn = !this.playerA.turn;
      this.playerB.turn = !this.playerB.turn;
    }
  }
}
