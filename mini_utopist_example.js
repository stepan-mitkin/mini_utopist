// Test application for the mini_utopist module
// License: PUBLIC DOMAIN
// Stepan Mitkin
// DRAKON Labs
// https://drakon-editor.com/


mini_utopist = require("./mini_utopist.js")

// Define the algorithms that calculate values for the variables.
// Function names do not matter.
function Quadric_discriminant() {

    var b = this.b()
    var a = this.a()
    var c = this.c()

    return b * b - 4 * a * c
}

function Quadric_numberOfRoots() {

    if (this.discriminant() > 0) {

        return 2
    } else {

        if (this.discriminant() == 0) {

            return 0
        } else {
 
            return 1
        }
    }
}

function Quadric_x1() {

    if (this.numberOfRoots() == 0) {

        return null
    } else {

        var b = this.b()
        var a = this.a()
        var discriminant = this.discriminant()

        return (-b + Math.sqrt(discriminant)) / (2 * a)
    }
}

function Quadric_x2() {

    if (this.numberOfRoots() < 2) {

        return null
    } else {

        var b = this.b()
        var a = this.a()
        var discriminant = this.discriminant()

        return (-b - Math.sqrt(discriminant)) / (2 * a)
    }
}

// Define the task model.
// The model is a JavaScript object that has properties.
function Quadric() {
    // Input variables
    mini_utopist.addProperty(this, "a", null)
    mini_utopist.addProperty(this, "b", null)
    mini_utopist.addProperty(this, "c", null)
    
    // Variables that are calculated from the input variables
    mini_utopist.addProperty(this, "numberOfRoots", Quadric_numberOfRoots)
    mini_utopist.addProperty(this, "discriminant", Quadric_discriminant)
    mini_utopist.addProperty(this, "x1", Quadric_x1)
    mini_utopist.addProperty(this, "x2", Quadric_x2)
}

// Create task object
var equation = new Quadric()

// Fill out the input variables
equation.a(8)
equation.b(-6)
equation.c(1)

console.log("equation a:", equation.a(), "b:", equation.b(), "c:", equation.c())

// Read the output variables in any order. They will be calculated on demand.
console.log("number of roots", equation.numberOfRoots())
console.log("x1", equation.x1())
console.log("x2", equation.x2())
	
var check1 = equation.x1() * equation.x1() * equation.a() + equation.x1() * equation.b() + equation.c()
var check2 = equation.x2() * equation.x2() * equation.a() + equation.x2() * equation.b() + equation.c()
console.log("check1", check1, "check2", check2)

    