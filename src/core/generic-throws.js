const throws = {
    Error: message => {throw new Error(message)},
    EvalError: message => {throw new EvalError(message)},
    RangeError: message => {throw new RangeError(message)},
    ReferenceError: message => {throw new ReferenceError(message)},
    SyntaxError: message => {throw new SyntaxError(message)},
    TypeError: message => {throw new TypeError(message)},
    URIError: message => {throw new URIError(message)}
};

module.exports = (index, errorType) => {
    switch(errorType) {
        case "Error": return throws.Error;
        case "EvalError": return throws.EvalError;
        case "RangeError": return throws.RangeError;
        case "ReferenceError": return throws.ReferenceError;
        case "SyntaxError": return throws.SyntaxError;
        case "TypeError": return throws.TypeError;
        case "URIError": return throws.URIError;
        default: throw new Error("[@arg:" + index + ":2] `" + errorType + "` is not a valid error type");
    }
};