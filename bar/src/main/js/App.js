goog.provide("sample.App");

goog.require("foo.Person");
/**
 *
 * @constructor
 * @param {string} name
 */
sample.App = function (name) {
    /**
     *
     * @type {string}
     */
    this.name = name;
    /**
     *
     * @type {Array.<foo.Person>}
     */
    this.people = [];
};
/**
 *
 * @param {foo.Person} p
 */
sample.App.prototype.add = function (p) {
    this.people.push(p);
};
sample.App.prototype.run = function () {

    jQuery(function ($) {
        $("<h1>").text(this.name).appendTo(document.body);
    }.bind(this));

    jQuery(function ($) {
        /** @type {jQuery} */
        var list = $("<ul>").appendTo(document.body);
        /**
         *
         * @param {foo.Person} p
         */
        var renderPerson = function (p) {

            /** @type {jQuery} */
            var li = $("<li>");


            /** @type {jQuery} */
            var person = $("<div>", {
                "class": "person-vip"
            }).append(
              $("<span>", {"class": "first-name"}).text(p.firstName)
            ).append(
              $("<span>", {"class": "last-name"}).text(p.lastName)
            ).appendTo(li);

            /** @type {jQuery} */
            var button = $("<button>", {type: "button"})
              .text("Say Hi")
              .click(function () {
                  p.sayHi();
              }).appendTo(li);

            li.appendTo(list);

        };
        this.people.forEach(renderPerson)

    }.bind(this));

};
sample.App.prototype.getName = function () {
    return this.name;
};