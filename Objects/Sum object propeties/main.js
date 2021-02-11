let obj = {
     one : 1,
     two : 2,
     three : 3,
}
let sum = 0;
for (let prop in obj) {
     sum += obj[prop]
}

