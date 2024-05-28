// Partials and Layouts:-

// In order to use the static folders like folders containing images, style sheeets we use:
// app.use(express.static("public")); --> this indicates the top most directory
// The dynamic parts of the websites are routed and their locations are generated dynamically, where the static parts of the websites such as images or wehere our css lives, doesn't need to be generated dynamically, so we can specify them in a static folder

// In the process of making a multi-page website, we are passing multiple ejs files with a lot of repeated code bcz the header and footer is gonna be the same, so the dynamic part is the content, inorder to overcome this:
// <%- include("header.ejs") %>
