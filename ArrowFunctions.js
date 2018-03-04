/*
1.) Less verbose
2.) 'this' is picked up from lexical upper scope. (Cleans up: bind or that = this);
3.) Alternative to bind
*/

/*
    Arrow function syntax

    () => { ... } // no parameter
     x => { ... } // one parameter, an identifier
    (x, y) => { ... } // several parameters
*/

var styleIs1 = () => ("Nice and Clean 1");
console.log(styleIs1());
var styleIs2 = () => { return "Nice and Clean 2"; }
console.log(styleIs2());
var styleIs3 = a => { return "Nice and Clean " + a; }
console.log(styleIs3("3"));
var x = x => x * x;
console.log(x(5));

/*
    Pitfalls

    Arrow functions bind loosely!

    console.log(typeof () => {});
    console.log(typeof (() => {}));
*/

function a() {
    this.answer = "yes";
    setTimeout(function func() {
        let ans = typeof this.answer == 'undefined' ? "no" : this.answer;
        console.log("Did I inherit this from upper lexical scope? " + ans);
    }, 1000);
}
a();

function b() {
    this.answer = "yes";
    setTimeout(() => {
        ans = typeof this.answer == 'undefined' ? "no" : this.answer;
        console.log("Did I inherit this from upper lexical scope? " + ans);
    }, 1000);
}
b();

function UiComponent() {
    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        console.log('CLICK');
        this.handleClick(); // lexical `this`
    });
}