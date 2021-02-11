function Calculator() {

     this.read = function() { 
       this.firstNum = +prompt("first number");
       this.secondNum = +prompt("second number");
     };
   
     this.sum = function() {
       return this.firstNum + this.secondNum;
     };
   
     this.mul = function() {
       return this.firstNum * this.secondNum;
     };
}
   
let calculator = new Calculator();
calculator.read();
   
alert( "Sum=" + calculator.sum() );
 alert( "Mul=" + calculator.mul() );