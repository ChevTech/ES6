//Default Binding
function myFunc(){
    console.log(this.a);
}

var a = 'Global Binding';
myFunc();

//Implicit Binding
var obj = {
    a: 'Implicit Binding',
    b: function() { return console.log(this.a)}
}
obj.b();

//Explicit Binding
var obj = {
    a: 'Explicit Binding'
}

function func() { console.log(this.a) };

func.call(obj);

//New Binding
function foo(a){
    this.a = a;
}

var bar = new foo("New Binding");
console.log(bar.a);

function myFunc2() {
    console.log(this.msg);
}

var obj1 = {
    msg: "",
    print: function() {
        console.log(this.msg);
    }
}

var obj2 = {
    msg: "Hard Binding",
}

const obj2Print = obj1.print.bind(obj2);
obj2Print();