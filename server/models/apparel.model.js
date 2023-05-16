const mongoose = require('mongoose');

const ApparelSchema = new mongoose.Schema({
    apparelName: {
        type:String,
        required:[true, 'Apparel Name is required'],
        minLength:[3, 'The Apparel Name must be 3 or more characters'],
        maxLength:[50, 'The Apparel Name is too long']
    },
    img:{ type:String,
    required:[true, 'Apparel Name is required']
    },
    size:{
        type:String,
        required:[true, 'Size is required'],
    },
    type: {
        type: String,
        required:[true, 'Type is required'],
        min:[1920, 'No apparels before 1920 allowed']
    },
    rating:{
        type: String,
        maxLength:[6, 'The rating is too long']
    },
    price:{
        type:Number,
        required:[true, 'You must fill this out'],
        min:[4, 'The price must be above 4$']
    },
    user_id: {
        type:mongoose.Types.ObjectId
    }
}, {timestamps:true})

const Apparel = mongoose.model('Apparel', ApparelSchema)
module.exports = Apparel