// console.log("starting new project");


const express = require("express");
const app = express();

// using multiple routes 
app.use("/user", (req, res,next) => {
    console.log("Handling route user 1");
    // res.send("Response1");
    //  by using next function here will make server to run Response2 only
    next();
},
    (req, res, next) => {
        console.log("Handling route user 2");
        // res.send("Response2");
        next();
    },
     (req, res,next) => {
        console.log("Handling route user 3");
        //  res.send("Response3");
        //  next();  NOW here this next will give error because express is expecting next route.
    }
);
// app.get("/user/:userId/:password", (req, res) => {
//     console.log(req.params);
//     res.send({ firstName: "Zishan", lastName: "Ahmad" });
// });

// //  After using this whenever at postman we try to send /user we get HAHAHAHA because order of ROUTE matters.
// app.use("/user", (req, res) => {
//     res.send("HAHAHAHA");
// });
// // This only handle GET call to /user
// app.get("/user", (req, res)=>{
//     res.send({ firstName: "Zishan", lastName: "Ahmad" })
// });
// app.post("/user", (req, res) => {
//     res.send("data successfully saved to database");
// });
// app.delete("/user", (req, res) => {
//     res.send("Deleted successfully")
// })
// app.use("/hello", (req, res)=> {
//     res.send("Hello hello hello");
// });
// app.use("/test", (req, res)=> {
//     res.send("Hello from the server!");
// });
// app.use("/", (req, res)=> {
//     res.send("Hello from  the dashboard!");
// });

app.listen(7777, () => {
    console.log("Server is successfull listening on port 7777...");
});
