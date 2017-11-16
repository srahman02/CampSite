var express       = require("express"),
 	bodyParser    = require("body-parser"),
 	mongoose      = require("mongoose"),
	app           = express(),
	campground    = require("./models/campground"),
	Comment    = require("./models/comment"),
	seedDB        = require("./seeds"),
	passport   	  = require("passport"),
	LocalStrategy = require("passport-local"),
	User          = require("./models/user");

var commentRoutes    = require("./routes/comments");
var	campgroundRoutes = require("./routes/campgrounds");
var	indexRoutes = require("./routes/index");


mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

//Passport Configuration
app.use(require("express-session")({
	secret: "Once Again Rusty Wins Dumbest Gog!",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();

});
app.use("/",indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


app.listen(3000,function(){
	console.log("Express Started at port 3000s");
});