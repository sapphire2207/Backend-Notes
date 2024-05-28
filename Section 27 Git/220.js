// Branching and Merging:-

// say if we had Version 1 and 2,so two commits that were made to our local repository, and at this point, we realize that we want to maybe try out something different, maybe build a new feature, or just to mess around with a new idea or concept. What we can do is instead of continuing to commit to the main branch that you see here, we can also create a side branch. After the second commit,
// we create a new branch and we start committing to this new branch or this experimental branch. We add some features and we write some code. Simultaneously, we can continue working on the main branch, putting out all those essential updates or bits of code that are maintaining our main project, but at the same time we can continue to update and work on this experimental branch trying things out and committing our experiments to this experimental branch.
// So now we have two branches that are parallel to each other and they can be developed simultaneously. If at some point in the future that we decide that that experiment was really fruitful, and the feature that we built in it was really, really great and we'd like to merge it back to the main branch or to the main project, then that can be done really easily as well by simply placing a merge request in. And we can bring all of those changes that we experimented with, that we messed around with, back to the main project and check to see if there's any conflict with the main branch code and if not, or if after a little bit of editing, then we can bring all of those changes into the main working branch. And then we can continue working from here onto to the next commit or we can make more branches.

// If you want to create a new branch: git branch <branchname>
// To check what branches you are having: git branch
// To switch into particular branch: git checkout <branch>

// Here we are creating a new branch called alien-plot and changing some content in chapters, then we are again redirecting to main branch, and create file called chapter4.txt and add some content into it and also add it into staging area and commit it
// Now to merge the alien-plot with the main branch: git merge <branchName>
// Refer the network graph for better understanding
