 const _typeMap = {
    // isValidType
    "undefined": "undefined",
    "null": "null",
    "object": "object",
    "array": "array", 
    "boolean": "boolean", 
    "function": "function", 
    "number": "number", 
    "bigint": "bigint", 
    "string": "string", 
    "symbol": "symbol",

    // thisType
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object",
    "[object Array]": "array", 
    "[object Boolean]": "boolean", 
    "[object Function]": "function", 
    "[object Number]": "number", 
    "[object BigInt]": "bigint", 
    "[object String]": "string", 
    "[object Symbol]": "symbol",

    // thisType
    "[object Float32Array]": "array",
    "[object Float64Array]": "array",
    "[object Int8Array]": "array",
    "[object Int16Array]": "array",
    "[object Int32Array]": "array",
    "[object Uint8Array]": "array",
    "[object Uint8ClampedArray]": "array",
    "[object Uint16Array]": "array",
    "[object Uint32Array]": "array",
    "[object BigInt64Array]": "array",
    "[object BigUint64Array]": "array"
};
const isValidType = (type) => {
    return (_typeMap[type] === undefined) ? false : true;
};
const thisType = (value) => {
    const type = Object.prototype.toString.call(value);
    return (_typeMap[type] === undefined) ? "object" : _typeMap[type];
};
module.exports = {
    isValidType: isValidType,
    thisType: thisType
};