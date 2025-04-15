# EJS
EJS stands for embeded javascript and is the most commonly used templating language in Express and Node.

Eg: When filling a input textbox and clicking submit in a form, calls the post handler and will render the HTML page. We can access the value in form through req.body.value.
When there is a need to display the values obtained inside the handler functions, like when a user enters name and clicks submit, displaying a h1 with the users name in the next page.

The way of sending something from the server to get rendered in the frontend is called templating.

Separation of concerns - the structure and style of the website is separated from the functionality. Thus separating frontend and backend. 

Example of EJS: The embedded javascript files will have .ejs extension
```
<body>
    <ul>
        <%for(let i=0; i<items.length; i++){%>
        <li>
            <%items[i]%>
        </li>
        <%}%>
    </ul>
</body>
```

To use ejs we have to render it from the server side and use ejs to acces it from the client side.

## EJS tags:
    An EJS start always starts with "<%" and ends with "%>". The commonly used EJS tags are,
<% %> - The content inside are treated as executable javascript code. These contents wont give an output unless the js code used inside gives output.
<%= %> - The content inside the ejs tag will be treated as a javascript variable and can be rendered in HTML or ejs file. The content inside will evaluate to a output.
<%- %> - the content inside are treated as HTML and can be used to render html in a ejs file.
<%% %%> - it is used to display ejs tags in browser.
<%# %> - EJS comments
<%- include('File_name') %> - insert another ejs file into the current ejs file.

When there is no data passed to the client side from the server the side and we try to access a undefined/undeclared variable then the application will crash.

The images, svg's, styles and iconpacks etc., which donot change throughout the whole web site are considered as static files.

To include all these files into the webapp, we need to add all these files under a directory named 'public'.

These static files can be accessed using middleware. 'app.use(express.static('public'));

So when these css files are linked to html the href attribute of the link tag should point the location of that specific css file relative to the public directory(relative path of the file).

In a multi page website, if there are a lot of common elements where only the content inside the body of the html changes, we use partials. Partials are .ejs files with the repeated code, these can be reused in other .ejs files.

```<%- include('filename')%>```
