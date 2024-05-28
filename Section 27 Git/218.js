// Git Ignore:-

// When you don't want some secrets / files / OS generated files (ds store,spotlight thumbs) to be committed onto your remote repository
// So create a hidden file using: git .gitignore
// Here we should add your files which need not be committed
// First initilaize git and add all the files to staging area, check the status, now undo this step by using command: git rm --cached -r .
// Now write the name of the file on each line which should not be committed
// And using *.txt ==> all files with .txt extension will be ignored
// Now you can commit the files only which you want

// Task:-
// Now open the folder you have extracted on vs code, then create a gitignore file and add node modules to it
// then add the remaining files to staging area and then commit 