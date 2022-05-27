### Copier Coding Challenge
Purpose: Write a class called Copier which deep copies the given argument.

## How to run
1. Clone this repository onto your local computer
2. CD to the clone repository
3. run "npm install" in your terminal
4. run "npm test" to validate that the Copier class passes all tests.

## Requirements
You should be able to initialize the class using new

• The class should take 1 argument.

• The argument will be a value of type string, integer, or object, which can be a plain
object or an instance of Array.

• If no argument is given, the argument should default to undefined

• The class should implement a method get(), which returns the original object after 1
second.

• get() should return a Promise

• The class should implement a method delete(), which throws an Error object after 2
seconds with the message Cannot delete!

• delete() should return a Promise

• The class should implement a method called copy().

• If source value is an object, it should return a deep copy of the original object.

• copy() method should iterate over the source object recursively

## Challenges
1. Could not immediately think of a way to test that the delete method would return after 2 seconds exactly. There is likely a way to do this, but I decided to move onto the more important copy() method and come back to this later if there were more time.

## Opportunities
1. Would like to refactor my test to utilize DRY principles more - there is some general setup/teardown when setting intermediate steps that could likely be improved by using beforeAll, afterAll jest methods.
2. Would like to create more tests to thoroughly evaluate whether or not the copy() method returns a deep copy of a given object.