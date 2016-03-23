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

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**
-   `rest` **...[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**

### each

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**
-   `iteratee` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**

### every

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**
-   `predicate` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

### filter

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**
-   `predicate` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**

### find

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**
-   `predicate` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**

Returns **Any**

### includes

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**
-   `query` **Any**
-   `position` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)=**  (optional, default `0`)

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

### join

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**
-   `separator` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)=**  (optional, default `','`)

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

## License

Copyright © 2016 [Kasper Kronborg Isager](https://github.com/kasperisager). Licensed under the terms of the [MIT license](LICENSE.md).
