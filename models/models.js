const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schemas

//---User

// const userSchema = new Schema ({
//     username: {type: String, required: true, unique: true },
//     password: {type: String, required: true}, 
//     email: {type: String, required: true, unique: true},
//     type: Company or End user / Volunteer?
//     listings: [listingSchema]
//     reviews: [reviewSchema]
//     //
// },{
//     timestamps: true,
//     toJSON: {
//         virtuals: true,
//         transform: (_doc, ret) => {
//             delete ret.password
//             return ret
//         }
//     }
// })

//---Food Drive listing

const listingSchema = new Schema ({
    //User: {type: mongoose.Types.ObjectId, ref: 'User', default: null}
    title: {type: String, required: true, unique: true}, 
    description: {type: String, required: true},
    volunteers: {type: Number, required: true, default: 0},
    //location_data: {}*
    address: {type: String, required: true, unique: true},
    contact_info: {
        type: Object, required: true, default: null
    }, // doublecheck syntax
    //rating
    reveiws: [{type: mongoose.Types.ObjectId, ref: 'Review', default: null},]
    // reveiws2: [reviewSchema]
    
})

// {
//     address: String
//     phone_number: String
// } 

const reviewSchema = new Schema ({
    title: {type: String, required: true},
    reviewBody: {type: String, required: true},
    rating: {type: Number, required: true, }
    // userRef: {type: mongoose.Types.ObjectId, required: true, ref: 'User'},
})

//Exports-------

// const User = mongoose.model("User", userSchema)
const Listing = mongoose.model("Listing", listingSchema)
const Review = mongoose.model("Review", reviewSchema)

module.exports = {
    // User,
    Listing,
    Review,
}