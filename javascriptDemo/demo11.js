//Immidiately invokable function expression

var greefunc=function(name){
    console.log("hello"+name);
};
greefunc("John");

var greeting = (function (name){
    console.log("Hello"+name);
})("smith"); //Immediately invoking the function

console.log(greeting);