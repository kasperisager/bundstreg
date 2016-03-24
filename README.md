# Bundstreg

> Functional alternatives to many native JavaScript methods and then some

[![Build Status](https://travis-ci.org/kasperisager/bundstreg.svg?branch=master)](https://travis-ci.org/kasperisager/bundstreg) [![Coverage Status](https://coveralls.io/repos/github/kasperisager/bundstreg/badge.svg?branch=master)](https://coveralls.io/github/kasperisager/bundstreg?branch=master) [![Code Climate](https://codeclimate.com/github/kasperisager/bundstreg/badges/gpa.svg)](https://codeclimate.com/github/kasperisager/bundstreg) [![Inline docs](http://inch-ci.org/github/kasperisager/bundstreg.svg?branch=master)](http://inch-ci.org/github/kasperisager/bundstreg)

Bundstreg is a set of utility functions designed to replace many native JavaScript methods with often faster alternatives in the same vein as [Underscore](http://underscorejs.org/), [Lodash](https://lodash.com/), and the likes. The thing that Bundstreg does differently from these libraries is its focus on minimalism and speed. Functions found in Bundstreg are not generic and make a few basic assumptions about the data that you pass them. If in doubt then you probably want to use another library.

## Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [API](#api)
-   [License](#license)

## Installation

```console
$ npm install --save bundstreg
```

## Usage

```js

```

## API

### concat

Join a number of arrays to a single array.

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The first array to concatenate.
-   `rest` **...[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The rest of the arrays to concatenate.

**Examples**

```javascript
concat([1, 2], [3, 4], [5, 6]);
// => [1, 2, 3, 4, 5, 6]
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The concatenated array.

### contains

Check if a string contains a specific substring.

**Parameters**

-   `string` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The string to check.
-   `query` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The substring to check for.
-   `position` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)=** The position at which to start looking. (optional, default `0`)

**Examples**

```javascript
const s = 'Hello World';
contains(s, 'orl');
// => true
```

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** `true` if the string contains the substring, otherwise `false`.

### each

Loop over an array and invoke an iteratee on each array element.

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The array to loop over.
-   `iteratee` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** The iteratee to invoke on each element.

**Examples**

```javascript
const a = [1, 2, 3];
each(a, (e, i) => console.log(e, i));
```

### endsWith

Check if a string ends with a specific substring.

**Parameters**

-   `string` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The string to check.
-   `query` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The substring to check for.
-   `position` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)=** The position at which to stop looking. (optional, default `string.length`)

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** `true` if the string ends with the substring, otherwise `false`.

### entries

Get the entries of an object as an array of `[key, value]` pairs.

**Parameters**

-   `object` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The object whose entries to get.

**Examples**

```javascript
const o = {foo: 1, bar: 2};
entries(o);
// => [['foo', 1], ['bar', 2]]
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The entries of the object.

### every

Check if a predicate returns truthy for all elements of an array.

> **Note:** Iteration stops as soon as an element is found for which the predicate returns falsy.

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The array to check.
-   `predicate` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** The predicate to invoke on each element.

**Examples**

```javascript
const a = [2, 4, 6];
every(a, (e, i) => e % 2 === 0);
// => true
```

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** `true` if the predicate returns truthy for all elements of the array, otherwise `false`.

### filter

Filter an array by only keeping elements for which a predicate returns truthy.

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The array to filter.
-   `predicate` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** The predicate to invoke on each element.

**Examples**

```javascript
const a = [1, 2, 3, 4];
filter(a, (e, i) => e % 2 === 0);
// => [2, 4]
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The filtered array.

### find

Find the first element of an array for which a predicate returns truthy.

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The array to look for an element in.
-   `predicate` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** The predicate to invoke on each element.

**Examples**

```javascript
const a = [1, 2, 3];
find(a, (e, i) => e % 2 === 0);
// => 2
```

Returns **Any** The first element for which the predicate returns truthy, or `undefined`.

### includes

Check if an array includes a specific element.

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The array to check.
-   `query` **Any** The element to check for.
-   `position` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)=** The position at which to start looking. (optional, default `0`)

**Examples**

```javascript
const a = [1, 2, 3];
includes(a, 2);
// => true
```

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** `true` if the array includes the element, otherwise `false`.

### is

**Parameters**

-   `x` **Any** 
-   `y` **Any** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### join

Join the elements of an array to a string using a separator.

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The array whose elements to join.
-   `separator` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)=** The separator to use for joining the elements. (optional, default `','`)

**Examples**

```javascript
const a = [1, 2, 3];
join(a, ' + ');
// => '1 + 2 + 3'
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The resulting string.

### keys

Get the keys of an object as an array.

**Parameters**

-   `object` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The object whose keys to get.

**Examples**

```javascript
const o = {foo: 1, bar: 2};
keys(o);
// => ['foo', 'bar']
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The keys of the object.

### map

Create an array of values returned from invocations of an iteratee on each element of an array.

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The array to map over.
-   `iteratee` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** The iteratee to invoke on each element.

**Examples**

```javascript
const a = [1, 2, 3];
map(a, (e, i) => e * 2);
// => [2, 4, 6]
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The array of values returned from each invocation of the iteratee.

### reduce

Reduce an array to a value accumulated by invoking an iteratee on each element of the array.

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The array to reduce.
-   `iteratee` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** The iteratee to invoke of each element.
-   `accumulator` **Any=** The initial value. (optional, default `array[0]`)

**Examples**

```javascript
const a = [1, 2, 3];
reduce(a, (s, n) => s + n);
// => 6
```

Returns **Any** The accumulated value.

### replace

Replace occurences of a pattern in a string with a replacement.

**Note:** If a string is used as pattern then only the first occurence of the string will be replaced. To perform a
global replacement use a regular expression with the `g` flag.

**Parameters**

-   `string` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The string to perform the replacement in.
-   `pattern` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)\|[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp))** The pattern to replace.
-   `replacement` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)\|[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function))** The replacement for the pattern.

**Examples**

```javascript
const s = 'Hello World';
replace(s, 'Hello', 'Howdy');
// => 'Howdy World'
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The string with occurences of the pattern replaced by the replacement.

### some

Check if a predicate returns truthy for any element of an array.

> **Note:** Iteration stops as soon as an element is found for which the predicate returns truthy.

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The array to check.
-   `predicate` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** The predicate to invoke on each element.

**Examples**

```javascript
const a = [1, 2, 3];
some(a, (e, i) => e % 2 === 0);
// => true
```

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** `true` if the predicate returns truthy for any element of the array, otherwise `false`.

### split

Split a string into an array of substrings.

**Note:** If no separator is provided then the returned array will contain a single substring consisting of the
entire original string. If the separator is the empty string then the string will be split on every character.

**Parameters**

-   `string` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The string to split.
-   `separator` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)\|[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp))=** The separator to use for splitting the string.
-   `limit` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)=** The number of splits to be made.

**Examples**

```javascript
const s = 'Hello World';
split(s, ' ');
// => ['Hello', 'World']
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).&lt;[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>** The array of substrings.

### startsWith

Check if a string starts with a specific substring.

**Parameters**

-   `string` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The string to check.
-   `query` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The substring to check for.
-   `position` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)=** The position at which to start looking. (optional, default `0`)

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** `true` if the string starts with the substring, otherwise `false`.

### toLower

Lowercase a string.

**Parameters**

-   `string` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The string to lowercase.

**Examples**

```javascript
const s = 'Hello World';
toLower(s);
// => 'hello world'
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The lowercased string.

### toUpper

Uppercase a string.

**Parameters**

-   `string` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The string to uppercase.

**Examples**

```javascript
const s = 'Hello World';
toUpper(s);
// => 'HELLO WORLD'
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The uppercased string.

### trim

Trim trailing whitespace from a string.

**Parameters**

-   `string` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The string to trim.

**Examples**

```javascript
const s = '  Hello World \t';
trim(s);
// => 'Hello World'
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The trimmed string.

### values

Get the values of an object as an array.

**Parameters**

-   `object` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The object whose values to get.

**Examples**

```javascript
const o = {foo: 1, bar: 2};
keys(o);
// => [1, 2]
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The values of the object.

## License

Copyright © 2016 [Kasper Kronborg Isager](https://github.com/kasperisager). Licensed under the terms of the [MIT license](LICENSE.md).
