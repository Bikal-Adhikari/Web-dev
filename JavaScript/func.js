//https://stanford.edu/~cpiech/karel/ide.html



function main(){
    moveFourTimes();
    turnLeft();
    moveFourTimes();
  }
   function moveFourTimes(){
      move();
       move();
        move();
         move();
      }


      //Diagonal move with beeper

      function main(){
        putBeeper();
        diagonalMoveAndBeeper();
        diagonalMoveAndBeeper();
        diagonalMoveAndBeeper();
        diagonalMoveAndBeeper();
        }
        
        function diagonalMoveAndBeeper(){
           move();
           turnLeft();
           move();
           putBeeper();
           turnRight();
           }