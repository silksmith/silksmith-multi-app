# silksmith-multi-app

This sample app show how to setup a multiproject app.

The *foo-lib* project contains some JavaScript and some SCSS mixins.

The *bar* project depends on this project via:
```
dependencies {
  web project(":foo-lib")
}
```

and uses them provided elements in its own source see e.g. App.js: 
```
goog.require("foo.Person");
```

if you run
```
./gradlew bar:server
```
and open http://localhost:10101
you see that the files from the foo-lib project are also included
