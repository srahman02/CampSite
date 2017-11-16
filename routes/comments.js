var express       = require("express"),
    router        = express.Router({mergeParams: true}),
    campground    = require("../models/campground"),
    Comment       = require("../models/comment");

// show create comment form
router.get("/new",isLoggedIn, function(req, res){
    
        campground.findById(req.params.id, function(err, campground){
            if(err){
                console.log(err);
            } else{
                res.render("comments/new",{campground:campground});
            }
        });		
    });
    
// add comment to the campground
router.post("/", isLoggedIn, function(req, res){
        campground.findById(req.params.id, function(err, campground){
            if(err){
                console.log(err);
                res.redirect("/campgrounds");
            } else{
                Comment.create(req.body.comment, function(err, comment){
                    if(err){
                        console.log(err);
                    }else{
                        campground.comments.push(comment);
                        campground.save();
                        res.redirect('/campgrounds/'+ campground._id);
                    }
                });
            }
        });	
    });

    function isLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect("/login");
    }
module.exports = router;  