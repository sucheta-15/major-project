const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:"https://unsplash.com/s/photos/nature-background",
        set: (v) => v === "" ? 
        "https://unsplash.com/s/photos/nature-background" 
        : v,
    },
    price: {
    type: Number,
    required: true,
    min: 0,
    default: 0
    },

    location:String,
    country:String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;