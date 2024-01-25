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


    // Chess Board

    function main(){
        beepersRight();
        goUpTurnLeft();
        beepersLeft();
        goUpTurnRight();
           beepersRight();
        goUpTurnLeft();
        beepersLeft();
        goUpTurnRight();
           beepersRight();
     }
      
     function goUpTurnRight() {
        turnRight();
        move();
        turnRight();
     }
      
     function goUpTurnLeft() {
        turnLeft();
        move();
        turnLeft();
     }
      
     function beepersRight() {
        putBeeper();
        move();
        move();
        putBeeper();
        move();
        move();
        putBeeper();  
     }
      
     function beepersLeft() {
        move();
        putBeeper();
        move();
        move();
        putBeeper();
        move();
     }