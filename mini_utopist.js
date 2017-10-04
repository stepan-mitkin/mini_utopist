// mini_utopist, world's smallest JavaScript framework for conceptual programming.
// Inspired by the UTOPIST programming language.
// License: PUBLIC DOMAIN
// Stepan Mitkin
// DRAKON Labs
// https://drakon-editor.com/


function mini_utopist_def() {
    
    function complexGetter(obj, fieldName, algorithm) {
        var value = obj[fieldName]
        if (value === null) {
            value = algorithm.call(obj)
            obj[fieldName] = value
        }
        return value
    }
    
    function simpleGetter(obj, fieldName, newValue) {
        if (typeof newValue === "undefined") {
            return obj[fieldName]
        }
        obj[fieldName] = newValue
    }    
    
    this.addProperty = function(obj, propertyName, algorithm) {
        var fieldName = "_" + propertyName
        obj[fieldName] = null
        if (algorithm) {
            obj[propertyName] = function() {
                return complexGetter(this, fieldName, algorithm)
            }
        } else {
            obj[propertyName] = function(newValue) {
                return simpleGetter(this, fieldName, newValue)
            }
        }
    }
}

mini_utopist = new mini_utopist_def()

if (typeof exports != "undefined") {
    exports.addProperty = mini_utopist.addProperty
}
