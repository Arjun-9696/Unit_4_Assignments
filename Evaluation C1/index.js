const express=require("express");
const app=express();
app.use(logger);
app.get("/books",(req,res)=>{
    res.send({ route: '/books' });
})

app.get('/libraries', checkPermission("librarian"), (req, res) => {
  res.send({ route: '/libraries', permission: true });
});

app.get('/authors',checkPermission("authors"), (req, res) => {
     res.send({ route: '/authors', permission: true });
});
function checkPermission(role) {
    return function logger(req, res, next) {
    if (role === 'authors') {
      return next();
    }
    if (role === 'librarian') {
      return next();
    }
    return res.send("Not allowed");
  };
    
  }


function logger(req,res,next){
    console.log("before routhandle");
    next();
    console.log("after handling");
}

app.listen(5005,(req,res)=>{
    console.log("Listing port 5005");
})