const {isValidType, thisType} = require("../util/type-util");
const handleError = require("../util/error-handler");
const genericThrows = require("../util/generic-throws");

const typeDragoon = (...args) => {
    try {
        for (let i = 0, count = 1; i < args.length; i++, count++) {
            const keys = Object.keys(args[i]);
            let customError, throwError;
            if (keys.length < 1) {
                throw new Error("[@arg:" + count + "] Too few arguments passed into the list");
            } else if (keys.length > 2) {
                throw new Error("[@arg:" + count + "] Too many arguments passed into the list");
            } else if (keys.length === 2) {
                customError = args[i][keys[1]];
                if (thisType(customError) !== "function" && thisType(customError) !== "string") {
                    throw new TypeError("[@arg:" + count + ":2] Expected `function,string` but got `" + thisType(customError) + "`");
                } else if (thisType(customError) === "string") {
                    throwError = genericThrows(count, keys[1]);
                }
            }
            const types = keys[0].split("|");
            for (let j = 0; j < types.length; j++) {
                types[j] = (types[j].trim()).toLowerCase();
                if (!isValidType(types[j])) {
                    throw new TypeError("[@arg:" + count + ":1] `" + types[j] + "` is not a valid data type");
                }
            }
            const value = args[i][keys[0]];
            if (!types.includes(thisType(value))) {
                if (thisType(customError) === "function") {
                    customError();
                } else if (thisType(customError) === "string") {
                    throwError(customError);
                } else {
                    throw new TypeError("[@arg:" + count + ":1] Expected `" + types + "` but got `" + thisType(value) + "`");
                }
            }
        };
    } catch(error) {
        handleError(error);
    }
};
module.exports = typeDragoon;