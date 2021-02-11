function go() {
     showCircle(150, 150, 100).then(div => {
       div.classList.add('message-ball');
       div.append("Hello, world!");
     });
}
 
function showCircle(cx, cy, radius) {
     let div = document.createElement('div');
     div.style.width = 0;
     div.style.height = 0;
     div.style.left = cx + 'px';
     div.style.top = cy + 'px';
     div.className = 'circle';
     document.body.append(div);
 
     return new Promise(resolve => { // create a new promise 
       setTimeout(() => {
         div.style.width = radius * 2 + 'px';
         div.style.height = radius * 2 + 'px';
 
         div.addEventListener('transitionend', function handler() {
           div.removeEventListener('transitionend', handler);
           resolve(div); // used the resolve from the promise insted the callback
         });
       }, 0);
     })
}
