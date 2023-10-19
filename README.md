# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kenni.codes/lotide`

**Require it:**

`const _ = require('@kenni.codes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Test the exact values of each array
* `assertEqual(actual, expected)`: Test if the expected result equals the actual return value of a function
* `eqArrays(arr1, arr2)`: Test if the array lengths are equal
* `head(arr)`: Returns the first object in an array
* `middle(arr)`: Returns the middle-most object(s) in an array
* `tail(arr)`: Returns the last object in an array