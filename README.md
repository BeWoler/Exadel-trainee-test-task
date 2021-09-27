Task 1: 
Read data from "input.txt" file using node.js module fs.
If the number is prime, write true to the "output.txt" file, otherwise, write false.

Task 2:
Read data from "input.txt" file using node.js module fs.
Convert data from the "input.txt" file to the numeric array.
Sort array in descending order.
Write to the "output.txt" file numbers from the sorted array. Numbers must be separated by commas.

Task 3: 
Read data from "input.txt" file using node.js module fs.
Implement a function that will take the order number and return a corresponding number from the Fibonacci sequence.
Write the result of function execution to "output.txt" file.

Task 4:
Read data from "input1.txt" and "input2.txt" files using node.js module fs.
Convert the data from the "input1.txt" file to the array "numbersArr".
Implement the rangeFiltering (array, from, to) function, that searches elements between "from" and "to" and returns an array of those elements. "from" and "to" use from file "input2.txt"
Write to the "output.txt" file all numbers from "rangeItems". Numbers must be separated by commas.

Task 5: 
Read data from "keys.txt" and "values.txt" files using node.js module fs.
Convert data from "keys.txt" file to "keys" array.
Convert data from "values.txt" file to "values" array.
Create an object where the key and value are equal to "keys" and "values" array elements, respectively.
Write an object (JSON) to the "output.txt" file as a string.

Task 6: 
Read data from "input.txt" file using node.js module fs.
Convert data from "input.txt" file to object (JSON).
Write to the "output.txt" file the value types of all properties of the object, observing the same order. Types must be separated by commas.

Task 7:
Read data from "input.txt" file using node.js module fs.
Convert data from "input.txt" to array.
Write to the new array "positiveNumbers" all numbers from an array that are greater than 0.
Write to the new array "negativeNumbers" all numbers from an array that are less than 0.
Write all numbers from "positiveNumbers" array to "output1.txt" file.
Write all numbers from "negativeNumbers" array to "output2.txt" file.

Task 8: 
Imports function "func1" from file "script1.js";
Reads a string from the "input.txt";
Calls "func1" with an argument equal to the string;
Waits until the received Promise has state: "fulfilled" and then outputs the result to the file "output.txt".

Task 9:
  1. Reads an object from a file.
  2. Finds the sum of all primitives contained in an object, as well as in nested objects and arrays:
      The nested object can contain primitives, objects, arrays.
      A nested array can also contain primitives, objects, arrays.
      If the primitive is number, use it.
      If the primitive is boolean, then true to convert to 1, false to 0.
      Consider null and undefined primitives equal to 0.
      The string, BigInt, symbol primitives will not be used.
  3. Writes the result to the file "output.txt".