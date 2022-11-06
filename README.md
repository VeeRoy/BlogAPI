<h2>This is a blog post API</h2>

You can get all posts by <br>
/post/all

You can query the posts by <br>
/post and sending a query parameter
eg. <h3> /post?state=published  ,   
    /post?readCount=0  </h3>

You can get post by id by <br>
/post/(id of the post)

To create a new post, you have to be register
go to /register
- send in a post request with a body form encode with <br>
[ <br>
    fistname <br>
    lastname <br>
    email <br>
    password <br>
    userType (defaults to user, but to be able to make changes as blog owner userType should be set to admin) <br>
]

<br>

Then go to /login
- send in a get request with a body form encode with
[ <br>
    email <br>
    password <br>
] 

you get a token.

Then send in a post request with a json body data
 <h3>/post?secret_token=<"whatever token you recieve from login"> </h3> <br>
eg. {  <br>
        "title": "i love jees", <br>
        "description": "a memior",  <br>
        "author": "lake benny",  <br>
        "tags": ["cats", "dogs"],  <br>
        "body": "vbhhbsyuavyvulsvlvylvlvylvylvuvlvjhvlvlyuvyuvlyuvvj <br> hbjhvyilvylvylvuyvhljvlyuv;uyvxyulxvx,vvyvzyvyvy  <br> dlyvsydbdugxgxjk;ixbxxbxixbxixiixilxbxbxilxlbl"  <br>
    } <br>
Together with the token in the query with query_name secret_token


To update the post as an admin 
send a patch <br> /post <br> request together with the Id of the post and the token recieved from login <br>
eg <h3>/post/<"idofthePost">?secret_token=<"token recieved from login"></h3> <br>
and a json body data
eg. {  <br>
    "state": "published"  <br>
    "title": "dont hate me"  <br>
} 


to delete a post

send a delete <br> /post <br> request together with the id of the post and the token recieved <br>
eg. <h3> /post/<"idofthePost">?secret_token=<"token recieved from login"> </h3> <br>


<h2>Note: to be able to update and delete post you must be registered and logged in as admin</h2>
