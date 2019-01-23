/* The for principles of "this"; 
In your own words, explain the four principle for the "this" keyword below:

* 1. Global Binding - when we are in the global scope, the value of this will be windowconsole Object. That means, that is we 
create function in global scope, const myFunction = function() {console.log(this)}, this will refer to window Object.

* 2. Implicit Binding - The object that is standing before the dot is what this keyword will be bound to. Whenever a function is called by a preceding dot, the object left to dot is this. 

* 3. New Binding - Whenever we use constructor function, this reffers to a specific instance of the object that is created and returned by he constructor function.

* 4. Explicit Binding - When we call or apply method is used, we explicitly define this.
*
* write out a code example of each explanation above
*/

// Principle 1 = Global Binding
const myFunction = function() {
	console.log(this.a);
};

var a = 4;
myFunction();

// Principle 2 = Implicit Binding
const john = {
	name: "John",
	greet: function(person) {
		console.log("Hi " + person + ", my name is " + this.name);
	}
};

john.greet("Mark");

// Principle 3 = New Binding

function Plant(plantName, plantHeight) {
	this.plantName = plantName;
	this.plantHeight = plantHeight;
}

Plant.prototype.watterPlant = function() {
	console.log(`${this.plantName} has been wattered!`);
};

const cactus = new Plant("cactus", "50 cm");

cactus.watterPlant();

// Principle 4 = Ecplicit Binding
function doIt() {
	console.log(this);
}

const myObj = {
	doIt: doIt
};
doIt.call({ name: "Jerry" });
