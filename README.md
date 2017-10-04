# mini_utopist
World's smallest JavaScript framework for conceptual programming

Inspired by the UTOPIST programming language.

## How to program with mini_utopist

1. Design the model of the task.

- Add input variables.
- Add output variables.
- Define algorithms that compute the output variables.
- If necessary, add intermediary variables.
- Define algorithms that compute the intermediary variables.

2. Create the task object.

3. Fill in the input variables.

4. Read the output variables in any order. They will be calculated on demand.

## Pure functions only

**Important rule**

Algorithms that compute variables must be pure functions.
They can read variables from the task object and return a value.
**Writing to the task object from inside an algorithm is not allowed.**

```javascript
// Design the model of the task.
function MyTask() {
    // Add an input variable
    mini_utopist.addProperty(this, "foo", null)
    
    // Add a computed variable. Specify the algorithm that computes its value.
    mini_utopist.addProperty(this, "mid", function() {
        // This is a pure function!
        // It does not write to the task object.
        return this.foo() + 5
    })
    
    // Add an output variable.
    mini_utopist.addProperty(this, "bar", function() {
        return 2 * this.mid()
    })
}

// Create the task object.
var task = new MyTask()

// Fill in the input variables.
task.foo(10)

// Read the output variables in any order.
// They will be calculated on demand.
console.log("bar:", task.bar())
```

Did you know? [DRAKON Editor](https://github.com/stepan-mitkin/drakon_editor/tree/master/examples/JsUtopist) has support for UTOPIST tasks too.
