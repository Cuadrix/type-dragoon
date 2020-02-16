# type-dragoon
Type enforcer for JavaScript in Node.js
## Installation
```
npm i type-dragoon
```
## Importing
```js
const t = require('type-dragoon');
```
## Usage
#### General
```js
const name = 'Lelouch';
const age = 18;
const alive = false;

t({string: name}, {number: age}, {boolean: alive});
// continues if correct types, else throws an error
```
#### Multiple types
```js
t({'number|string': 18});
```
#### Custom errors
```js
t({boolean: 'not a boolean', TypeError: 'My generic error'});
// throws 'TypeError: My generic error'
```
#### Callback on error
```js
t({object: undefined, onWrongType: () => {
    console.log('My nice callback');
}});
```
## Data types
- undefined
- null
- object
- array
- boolean
- function
- number
- bigint
- string
- symbol

## Error types ([mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types))
- EvalError
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URIError