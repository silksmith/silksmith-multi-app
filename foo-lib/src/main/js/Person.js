goog.provide("foo.Person");
/**
 *
 * @constructor
 * @param {string} firstName
 * @param {string} lastName
 *
 */
foo.Person = function (firstName, lastName) {

    /**
     *
     * @type {string}
     */
    this.firstName = firstName;
    /**
     *
     * @type {string}
     */
    this.lastName = lastName;

};
foo.Person.prototype.sayHi = function () {

    alert("Hello, I'm " + this.firstName + " " + this.lastName);
};
