// NPM package manager:-
// It's basically a place which collects modules that people have built for node, it contains all the utilities, tools created by people
// So if we think native node modules as toolbox, then the npm is just like a tool library insde the toolbox
// So we don't have to duplicate the work and write everything from scartch

// To initialize npm: npm init
// Answer the questions accordingly, it will help you in creating .json (configuartion file for our project) file
// It's a way of representing our data, the javaScript object notation

// To install npm packages: npm install <something> or for multiple: npm i <something> <something> 
// After installing if we check the package.json, we have a newly inserted section called dependencies, which gives the info about the packages we have installed, in addition we got a folder called node modules which contains all the code of the imported module

// So let's begin:
// var generateName = require('sillyname');
// var sillyName = generateName();
// console.log(`My name is ${sillyName}.`);

// CJs - commonJavaScript --> this uses the method require which was used to get hold on native node modules or even npm 
// After updating the version, node used ECMAscript which uses the import keyword
// Inorder to use that, we need to go to package.json, and somewhere below 'main', add type : module, so that we can import these modules
// Example:
// import xxxx from "sillyName"; ---> this is the format of importing, where xxx is the object you want
// => import generateName from "sillyName";
// var sillyName = generateName();
// console.log(`My name is ${sillyName}.`);


//TASK:- Install the pacakge called superheroes and console log "I am <SuperHeroName> !";
// import superheroes from "superheroes";
// const name=superheroes.random();
// console.log(`I am ${name}!.`);

