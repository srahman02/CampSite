var mongoose = require("mongoose");
var campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [
    {
        name:"Tommy Lisbin",
        image:"https://images.unsplash.com/photo-1487730116645-74489c95b41b?dpr=2&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name:"Joshua Gresham",
        image:"https://images.unsplash.com/photo-1432817495152-77aa949fb1e2?dpr=2&auto=compress,format&fit=crop&w=767&h=512&q=80&cs=tinysrgb&crop=",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name:"Pablo Garcia",
        image:"https://images.unsplash.com/photo-1496425745709-5f9297566b46?dpr=2&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name:"Glen Jackson",
        image:"https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?dpr=2&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name:"Julian Bialowas",
        image:"https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?dpr=2&auto=compress,format&fit=crop&w=767&h=512&q=80&cs=tinysrgb&crop=",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name:"Wilson Ye",
        image:"https://images.unsplash.com/photo-1486082570281-d942af5c39b7?dpr=2&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name:"Dan Edwards",
        image:"https://images.unsplash.com/photo-1444228250525-3d441b642d12?dpr=2&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name:"Chris Schog",
        image:"https://images.unsplash.com/photo-1496080174650-637e3f22fa03?dpr=2&auto=compress,format&fit=crop&w=767&h=543&q=80&cs=tinysrgb&crop=",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name:"Mike Erskine",
        image:"https://images.unsplash.com/photo-1475483768296-6163e08872a1?dpr=2&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name:"Scott Goodwill",
        image:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?dpr=2&auto=compress,format&fit=crop&w=767&h=512&q=80&cs=tinysrgb&crop=",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]


function seedDB(){
    // Remove all Campground
    campground.remove({},function(err){
        if(err){
            console.log(err);
        }
        console.log("Campground removed");
        //add few campground
        data.forEach(function(seed){
            campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }else{
                    console.log("Data Added Succesfully!!!");
                    Comment.create({
                        text: "This place is great, but I wish there was internet!!!",
                        author: "Rahman"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        }else{
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Comment Added");
                        }
                    });
                }
            });
        });
    });
    
   

}
module.exports = seedDB;
