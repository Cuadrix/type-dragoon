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
		case "Error": return throws.Error; break;
		case "EvalError": return throws.EvalError; break;
		case "RangeError": return throws.RangeError; break;
		case "ReferenceError": return throws.ReferenceError; break;
		case "SyntaxError": return throws.SyntaxError; break;
		case "TypeError": return throws.TypeError; break;
		case "URIError": return throws.URIError; break;
		default: throw new Error("[@arg:" + index + ":2] `" + errorType + "` is not a valid error type");
	}
};