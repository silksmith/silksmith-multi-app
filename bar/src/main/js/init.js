goog.provide("sample.init");

goog.require("sample.App");

goog.require("foo.Person");

/**
 *
 * @type {sample.App}
 */
var app = new sample.App("Gradle Sample App");
/**
 *
 * @type {foo.Person}
 */
var p1 = new foo.Person("Bill", "Jobs");

var p2 = new foo.Person("Steve", "Gates");

app.add(p1);
app.add(p2);
app.run();