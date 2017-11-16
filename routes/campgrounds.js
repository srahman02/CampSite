var express = require("express");
var router  = express.Router();
var campground    = require("../models/campground");


//View All CAMPGROUND
router.get('/', function (req, res) {
	campground.find({
	},function(err, allCampground){
		if(err){
			console.log(err);
		}else{
			res.render("campgrounds/index",{campgrounds:allCampground});
		}
	});
  	
});

//CREATE NEW CAMPGROUND
router.get('/new', function (req, res) {
  res.render("campgrounds/new");
});

// Show Particular item
router.get("/:id",function(req,res){
	campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err){
			console.log(err);
		}else{
			console.log(foundCampground);
			res.render("campgrounds/show",{campground:foundCampground});
		}
	});
});

// Add to Campground
router.post('/',function(req,res){
	//get data from form add to array and redirect
	
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCamp = {
		name:name,
		image:image,
		description: desc

	}
	campground.create(newCamp,function(err, newcampground){
		if(err){
			console.log(err);
		}else{
			res.redirect("/campgrounds");
		}

	});

});

module.exports = router;