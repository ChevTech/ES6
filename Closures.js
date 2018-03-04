function myFunc() {
    var x = 5;

    return function(){
        console.log(x);   
    };
}

var func = myFunc();

func();

const counter = (() => {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
})();

counter();
counter();
counter();