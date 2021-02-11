let object = {
     counter: 0,
     up() {
       this.counter++;
       return this;
     },
     down() {
       this.counter--;
       return this;
     },
     showStep() {
       alert( this.counter );
       return this;
     }
};