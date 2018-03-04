/*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
    
    The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).
*/
var handler = {
    get (target, key) {
        console.log(`Get on property ${key}`);
        return target[key];
    }
};

var proxy = new Proxy({}, handler);
proxy.a = 'b';
console.log(proxy.a);

var handler2 = {
    get (target, key){
        check(key, 'get')
        return target[key];
    },
    set(target, key, value){
        check(key, 'set')
        target[key] = value;
        return true;
    }
}

/*
    Validate property access and control property setting.
    Can define an object schema
*/
function check(key, action) {
    if(key[0] === '_'){
        throw new Error(`Invalid attempt to ${action} private "${key}" property`);
    }
}

const proxy2 = new Proxy({}, handler2);
// proxy2._prop; // Private property
proxy2.a = "a";
console.log(proxy2.a);

let handler3 = {
    setPrototypeOf(target, prototype){
        console.log(`Prototype of ${target.name} linked to ${prototype.name}`);
        Object.setPrototypeOf(target, prototype);
        return true;
    }
}

var obj1 = {};
var obj2 = {};
var proxy3 = new Proxy(obj1, handler3);
Object.setPrototypeOf(proxy3, obj2);
console.log(obj2.isPrototypeOf(proxy3));