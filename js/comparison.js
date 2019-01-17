'use strict';

function testFalseLooseEqualityComparison(){
  var a = 0;
  var b = 1;
  return a == 1;
}

function testTrueLooseNonEqualityComparison(){
  var a = 0;
  var b = 1;
  return a != b;
}

function testTrueLooseEqualityComparison(){
  var a = 1;
  var b = "1";
  return a == b;
}

function testFalseStrictEqualityComparison(){
  var a = 1;
  var b = "1";
  return a === b;
}

function testTrueStrictEqualityComparison(){
  var a = 1;
  var b = parseInt("1");
  return a === b;
}