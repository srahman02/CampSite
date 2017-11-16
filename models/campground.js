var mongoose = require("mongoose");
var comment = require("./comment");



var campgroundSchema = new mongoose.Schema({
	name: String,
    image: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

//var campground = mongoose.model("Campground",campgroundSchema);
module.exports = mongoose.model("campground",campgroundSchema);