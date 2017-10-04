# mini_utopist
World's smallest JavaScript framework for conceptual programming

## How to program with mini_utopist

1. Design the model of the task.

- Add input variables.
- Add output variables.
- Define algorithms that compute the output variables.
- If necessary, add intermediary variables.
- Define algorithms that compute the intermediary variables.

*Important rule*

Algorithms that compute variables must be pure functions.
They can read variables of the model and return a value.
Writing to the task object from inside an algorithm is not allowed.

2. Create the task object.

3. Fill in the input variables.

4. Read the output variables in any order. They will be calculated on demand.

// Create the task object
var equation = new Quadric()

// Fill in the input variables
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
