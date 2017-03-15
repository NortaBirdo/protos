# Protos
This is light-weight html-css framework for quick prototyping UI by analysts

# How To Install
## Prerequirements
You need the NodeJS for work with templates. You can download it from [official webpage](https://nodejs.org/en/)

## Recomendations
For achievement test result of work I highly recommend to use Git.

## Steps
1. To be sure what you have NodeJS
1. Download this repository
1. Type in command line: ```npm install```
1. Delete folder "examples" or add one to .gitignore file

## How To Create The Mockup
1. Type into command line: ```npm run gulp```
1. Type into command line: ```npm run new filename``` Where the filename is a name of your file with mockup (name is typed without ```.html```)
1. Change ``` name_of_mockup``` variable in ```data``` json to name of your mockup
1. Change ``` comment``` variable in ```data``` structure to real comment or stay empty
1. Make mockup use HTML and CSS. The gulp automatically rebuild files for each saves and put in in build folder under the same name.

# Changes
13/03/2017
1. Rigger was replaced by ejs

# Plans
I'm working on template of components and their CSS. Also I will make more details about structure of project and I will create special script for making new file for template
