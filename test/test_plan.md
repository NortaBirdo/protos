# Checking gulp setting
## Prerequirements
1. Execute: ```npm run gulp```. We expect no errors in console.
1. The ```build``` and ```build-examples``` folder isn't exist.

## Tests
### Checking protos
#### Steps
1. To type  ```/**/``` in any place of ```protos.css``` file

#### Result
See ```/**/``` in:
1. ```src/css/protos.css```
1. ```example/css/protos.css```
1. ```build/css/protos.css```
1. ```build-example/css/protos.css```


### Checking make_new.js
#### Steps
1. To run in console ```npm run new test```
#### Result
1. See new file ```test.html``` in ```src``` with template of mockups (see source of ```make_new.js```)


### Checking html
#### Steps
1. To type ```<!-- -->``` in any place of ```examples/dialog_example.html```
1. To run in console ```npm gulp new test```
#### Result
1. To see built ```build/test.html```
1. To see ```<!-- -->``` in ```build-examples/dialog_example.html```


### Checking css
#### Steps
1. To put in ```src/css``` a new file ```test.css``` with comment ```/**/```
1. To put in ```examples/css``` a new file ```test.css``` with comment ```/**/```
#### Result
1. To see ```build/css/test.css``` with comment ```/**/```
1. To see ```build-examples/css/test.css``` with comment ```/**/```


### Checking image
#### Steps
1. To put in ```src/img``` a new file ```test.txt```
1. To put in ```examples/img``` a new file ```test.txt```
#### Result
1. To see ```build/img/test.css```
1. To see ```build-examples/img/test.css```

### Checking js
#### Steps
1. To put in ```src/js``` a new file ```test.js```  with comment ```/**/```
1. To put in ```examples/js``` a new file ```test.js``` with comment ```/**/```
#### Result
1. To see ```build/js/test.js``` with comment ```/**/```
1. To see ```build-examples/js/test.js``` with comment ```/**/```
