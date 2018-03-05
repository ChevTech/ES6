/*
    Extend core object with new function getNextDay
*/
Date.prototype.getNextDay = function() {
    let today = this.getDate();
    return new Date(this.setDate(today + 1));
}

let date = new Date();
console.log(date);
console.log(date.getNextDay());

