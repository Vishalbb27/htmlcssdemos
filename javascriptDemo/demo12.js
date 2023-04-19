//Closure

function greet(greeting){
    return function(name){
        console.log(greeting+" "+name);
    };
}

var sayHello = greet("Hello");
sayHello("Tony");
