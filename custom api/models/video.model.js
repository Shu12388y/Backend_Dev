const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");




// video schema
const videoSchema = new mongoose.Schema(
    {
        videoFile:{
            type:String,
            required:true,
        },
        thumbnail:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        duration:{
            type:Number,
            required:true,

        },
        views:{
            type:Number,
            required:true,
        },
        isPublished:{
            type:Boolean,
            required:true,
            default:true,
        },
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
        

    },
    {
        timestamps:true,
    }
)



videoSchema.plugin(aggregatePaginate);



// video model
const Video = mongoose.model("Video",videoSchema);




module.exports = Video;