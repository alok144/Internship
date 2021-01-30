

var express = require("express"),
    app = express(),
    mongoose= require("mongoose"),
    bodyParser= require("body-parser"),
    passport= require("passport");    
    
var db="mongodb://localhost/ITHtest2";

var port=process.env.PORT||8080;    

mongoose
    .connect(db,{ useNewUrlParser: true, useFindAndModify: false})
    .then(() => console.log("database connected"))
    .catch(err => console.log(err));



    var Schema= mongoose.Schema;  

    var userSchema= new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });
    var User= mongoose.model("User", userSchema);


 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json());

app.get("/", (req, res) => res.json({msg: "App Works"}));
//app.get("/", (req, res) => console.log("hello"));

app.post("/register", (req, res) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if(user){
            errors = "email already exists";
            return res.status(400).json(errors);
        } else {

            var newUser= new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
            
        }
    });
});
app.get("/users", (req, res) => {
    
    User.find()
    .then(users => {
        res.json(users);
    })
    .catch(err => res.status(404).json({nousers: "No users found.... "}));
    
});



app.delete("/:id" , (req, res) => {
    
    User.findById(req.params.id)
    .then((user) => {
        user.remove()
        .then(() => res.json({success: true}))
        .catch(err => res.status(404).json(err));
    })
    .catch(err => res.status(404).json(err));
});

// app.put("/:id", (req, res) => {
//     User.findById(req.params.id)
//     .then(user => {
//         if(user){

//             var newUser= new User({
//                 name: req.body.name,
//                 email: req.body.email,
//                 password: req.body.password
//             });
//             newUser.save()
//             .then(user => res.json(user))
//             .catch(err => console.log(err))
   

//         } else {

//             errors = "user not found";
//             return res.status(400).json(errors);
            
//         }
//     });
// });


app.put("/:id" , (req, res) => {
    
        User.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
            .then(user => res.json(user))
            .catch(err => res.status(404).json(err));
        
});


//app.post("/login", (req, res) => res.json({msg: "post Works"}));



app.listen(port, () => console.log(`App started!! on port ${port}`));



 