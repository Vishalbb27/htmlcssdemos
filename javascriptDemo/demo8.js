var person = {};
console.log(person);

person={firstname:"John" , lastname:"Smith"};
console.log(person);

var john = {

    firstname:"john",
    lastname:"doe",
    address:{
        street:"xyz",
        state:"NY",
    },
};

console.log(john);
function great(person){
    console.log("Hello "+person.firstname);
}
great(john);
great ({
    firstname:"Marry",
    lastname:"smith",
});
great("3")