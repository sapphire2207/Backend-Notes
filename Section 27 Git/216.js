// Version Control using Git and the Command Line:- 

// Here in the desktop initially create a folder called Story, then create a file called chapter1.txt, open it with vs code and write some text in it
// Then initialize git using:- git init
// Inorder to track the changes of file, it needs to be added to staging area => it's an intermediate place where you can can pick and choose which files inside your directory that you want to commit
// So to do that use: git add <filename>
// To add everything in directory: git add .
// To check status: git status 
// To commit to version control: git commit -m " " (-m will be the commit message --> it helps you keep in track of what changes you have made in each commit, when you create a new save point, you want to be as explicit as possible about what changes were made bw last save point and current ==> Use present tense)
// To see what commits you have made: git log
// Now create two more files chapter2,3 and some text to it and similar add to staging area and commit
// Now if we had done anything wrong in chapter 3,i.e made any changes in that we can actually revert the changes by using the command: git checkout <filename>
// Inorder to check the difference between current and previous ones : git diff <filename>

