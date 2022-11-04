<h2>This is a blog post API</h2>

You can access all posts written by following
/post  with a get request

You can query the posts by 
/post and sending a query parameter
eg. <h3> /post?state=published  ,   
    /post?readCount=0  </h3>

You can get post by id by
/post/(id of the post)

To create a new post, you have to be register
go to /register
- send in a post request with a body form encode with 
[
    fistname
    lastname
    email
    password
    userType (defaults to user, but to be able to make changes as blog owner userType should be set to admin)
]

Then go to /login
- send in a get request with a body form encode with
[
    email
    password
] 

you get a token.

Then send in a post request with a json body data
 <h3>/post?secret_token=<"whatever token you recieve from login"> </h3>
eg. {
        "title": "i love jees",
        "description": "a memior",
        "author": "lake benny",
        "tags": ["cats", "dogs"],
        "body": "vbhhbsyuavyvulsvlvylvlvylvylvuvlvjhvlvlyuvyuvlyuvvjhbjhvyilvylvylvuyvhljvlyuv;uyvxyulxvx,vvyvzyvyvydlyvsydbdugxgxjk;ixbxxbxixbxixiixilxbxbxilxlbl"
    }
Together with the token in the query with query_name secret_token


To update the post as an admin 
send a patch /post request together with the Id of the post and the token recieved from login
eg <h3>/post/<"idofthePost">?secret_token=<"token recieved from login"></h3>
and a json body data
eg. {
    "state": "published"
    "title": "dont hate me"
} 


to delete a post

send a delete /post request together with the id of the post and the token recieved
eg. <h3> /post/<"idofthePost">?secret_token=<"token recieved from login"> </h3>


<h2>Note: to be able to update and delete post you must be registered and logged in as admin</h2>