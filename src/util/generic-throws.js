const _throws = {
    Error: message => {throw new Error(message)},
    EvalError: message => {throw new EvalError(message)},
    RangeError: message => {throw new RangeError(message)},
    ReferenceError: message => {throw new ReferenceError(message)},
    SyntaxError: message => {throw new SyntaxError(message)},
    TypeError: message => {throw new TypeError(message)},
    URIError: message => {throw new URIError(message)}
};
const assignThrow = (count, errorType) => {
    switch(errorType) {
        case "Error": return _throws.Error;
        case "EvalError": return _throws.EvalError;
        case "RangeError": return _throws.RangeError;
        case "ReferenceError": return _throws.ReferenceError;
        case "SyntaxError": return _throws.SyntaxError;
        case "TypeError": return _throws.TypeError;
        case "URIError": return _throws.URIError;
        default: throw new Error("[@arg:" + count + ":2] `" + errorType + "` is not a valid error type");
    }
};
module.exports = assignThrow;