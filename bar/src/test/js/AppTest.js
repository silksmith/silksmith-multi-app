goog.require("sample.App");


describe("sample.App", function(){

  describe("getName", function(){

    it("should return the name given via the constructor", function(){
      var app = new sample.App("foo");

      chai.expect(app.getName()).to.equal("foo");
    });
  });
});