# Protos
This is light-weight html-css framework for quick prototyping UI by analysts

# How To Install
## Prerequirements
You need the NodeJS for work with templates. You can download it from [official webpage](https://nodejs.org/en/)

## Recomendations
For achievement the best result of work I highly recommend to use Git.

## Steps
1. To be sure what you have NodeJS
1. Download this repository
1. Type in command line: ```npm install```
1. Delete folder "examples" or add one to .gitignore file

## How To Create The Mockup
1. Type into command line: ```npm run gulp```
1. Type into command line: ```npm run new filename``` Where the filename is a name of your file with mockup (name is typed without ```.html```)
1. Change empty parameter of  ```set_mockup_name``` function to name of your mockup
1. Change empty parameter of ``` set_mockup_comment``` function to text of your comment of sty one empty
1. Make mockup use HTML and CSS. The gulp automatically rebuild files for each saves and put in in build folder under the same name.
1. If you need to link custom CSS you have to use ```link_css(path)``` function. There is ```path``` it is path to CSS file.
1. Your can use unique source of fake data. Link it if it is necessary (see instruction below).


See examples for more details.

## How to Use Fake Data
1. Create js file in ```src/js``` folder.
1. Create object with your fake data. Object must be flat (doesn't contain subobject). Name of object must be unique
1. In your mockup create id for dives (or other object where you want to put your data). Id must be unique for this page and their must be the same like object properties from step 1.
1. To link file with fake data, which you have created on step 1. For example: ```<script type="text/javascript" src="./js/patient.js"></script>``` where ```src=``` contains path to your file.
1. Add in existing script call ```load_data(object_name)``` function. ```object_name``` is name of object with fake data from linked file. The place is marked by commet ```// if your want to link fake data put call of load_data(object_name) here.```

Your can see example in ```dialog_example.html``` in ```example``` folder

# Plans
I'm working on template of components and their CSS. Also I will make more details about structure of project
