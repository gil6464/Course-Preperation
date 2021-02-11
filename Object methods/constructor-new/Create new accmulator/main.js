function Accumulator(startValue) {
     this.value = startValue;
   
     this.read = function() {
       this.value += +prompt("How much to add");
     };
}
   
let accumulator = new Accumulator(0);
accumulator.read();
accumulator.read();
alert(accumulator.value);