// Using native node modules

// Node already has a bunch of built in features, so that it easier for making applications, Egs of built-in applictaions : minesweeper, solitaire, pinball
// with native javascript we can't read and write our local file system, but with node we can overcome that

// Understanding about native modules with FILE SYSTEM:-

// File system is a native module that allows us to access local storage
// Inorder to do that we need to import or we require some bits of code from this module
// const fs = require("fs");
// Using fwrite, we can take input from the user and store that input into a file
// It takes inputs: filename, data, callback to handle errors
// fs.write("message.txt","Hello from Krishna!",(err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });
// To run this, go to the particular directory and run

// Task 1: Add some content to the message.txt file, now read the contents of that file and console.log it in the terminal
// fs.readFile("./message.txt","utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });

