/*
  INHERITANCE allows a object to inherit another object's methods and properties
  For example, 
  Circle, Square, Triangle can inherit from a Shape Object
  The Shape object is referred to as Base/Super/Parent object
  Circle, Square are referred to as Derived/Sub/Child object

  So a Classical definition of inheritance would be IS-A, i.e 
  Circle is-a Shape, Square is-a Shape

  But in JavaScript we don't have the concept of Class, this is where Prototypical Inheritance comes in
  So in JS, we have 2 types of inheritance
  Classical and Prototypical Inheritance

  All object in JS have a Prototype except the base Object

  PROTOTYPICAL INHERITANCE
    When you try to access a property or a method from an object in JS, 
    the JS engine try to locate the property or method on the object itself
    if can't find it, then it look for it on the prototype for that object,
    again if it can't find it, it look for it on the next super object 
    all the way up to the base object.
    It throws an error if it can't find it then
    This concept is called Prototypical Inheritance

    All objects created by a given constructor will have the same prototype
*/
