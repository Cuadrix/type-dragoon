const errorHandler = require("./error-handler");
const genericThrows = require("./generic-throws");

module.exports = (...args) => {
	const jsTypes = [
        "undefined", "object", "boolean", "number", "bigint", "string", "symbol", "function"
	];
	try {
		for (let i = 0; i < args.length; i++) {
			const keys = Object.keys(args[i]);
			const index = i + 1;
			let onWrongType, throwError;
			if (keys.length < 1) {
				throw new Error("[@arg:" + index + "] Too few arguments passed into the list");
			} else if (keys.length > 2) {
				throw new Error("[@arg:" + index+ "] Too many arguments passed into the list");
			} else if (keys.length === 2) {
				onWrongType = args[i][keys[1]];
				if (typeof onWrongType !== "function" && typeof onWrongType !== "string") {
					throw new TypeError("[@arg:" + index + ":2] Expected `function,string` but got `" + typeof onWrongType + "`");
				} else if (typeof onWrongType === "string") {
					throwError = genericThrows(index, keys[1]);
				}
			}
			const types = keys[0].split("|");
			for (let j = 0; j < types.length; j++) {
				types[j] = types[j].trim();
				if (!jsTypes.includes(types[j])) {
					throw new TypeError("[@arg:" + index + ":1] `" + types[j] + "` is not a valid data type");
				}
			}
			const value = args[i][keys[0]];
			if (!types.includes(typeof value)) {
				if (typeof onWrongType === "function") {
					onWrongType();
				} else if (typeof onWrongType === "string") {
					throwError(onWrongType);
				} else {
					throw new TypeError("[@arg:" + index + ":1] Expected `" + types + "` but got `" + typeof value + "`");
				}
			}
		};
	} catch(error) {
		errorHandler(error);
	}
};