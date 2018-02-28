// Fill in the object constructor with the following methods below:
/*
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
*/
//Run the tests to see the expected output for each method.
// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {

    var names = firstAndLast.split(' ');
    var firstName = names[0];
    var lastName = names[1];
    var fullName = firstName + ' ' + lastName;
  
    this.getFullName = function() {
      return fullName;
    };
    
    this.getFirstName = function() {
      return firstName;
    };
    
    this.getLastName = function() {
      return lastName;
    };
  
    this.setFirstName = function(first) {
      firstName = first;
      fullName = firstName + ' ' + lastName;
      return fullName;
    };
  
    this.setLastName = function(last) {
      lastName = last;
      fullName = firstName + ' ' + lastName;
      return fullName;
    };
    
    this.setFullName = function(firstAndLast) {
      names = firstAndLast.split(' ');
      firstName = names[0];
      lastName = names[1];
      fullName = firstName + ' ' + lastName;
      return fullName;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
