const caclulator = {
     read() {
          this.firstNum = prompt("First number");
          this.secondNum = prompt("Second number");
     },
     sum() {
          return Number(this.firstNum) + Number(this.secondNum);
     },
     mul() {
          return Number(this.firstNum) * Number(this.secondNum);
     },
};

caclulator.read();
alert(caclulator.sum());
alert(caclulator.mul());