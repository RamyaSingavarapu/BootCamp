const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo').then(() => {
    console.log("MONGO CONNECTION OPEN");
}).catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR");
    console.log(err);
})
const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    tweet: String,
    like: Number,
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

const User = new mongoose.model('User', userSchema);
const Tweet = new mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//     // const user1 = new User({ username: 'Chickenfan99', age: 25 })
//     const user1 = await User.findOne({ username: 'Chickenfan99' })
//     const tweet2 = new Tweet({ tweet: 'BECK BECK BECK', like: 3546 })
//     tweet2.user.push(user1);
//     // await user1.save();
//     await tweet2.save();
//     console.log(tweet2);


// }
// makeTweets();

const findTweet = async () => {
    const t = await Tweet.find({}).populate('user')
    console.log(t)
}
findTweet();





