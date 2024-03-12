const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/relationshipDemo').then(() => {
    console.log("MONGO CONNECTION OPEN");
}).catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR");
    console.log(err);
})

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [{
        _id: false,
        street: String,
        city: String,
        state: String,
        country: {
            type: String,
            required: true
        }
    }]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '12 Spree',
        city: 'Berlin',
        state: 'Los Angels',
        country: 'Germany'
    })
    const res = await u.save();
    console.log(res)
}
makeUser()

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street: 'Paderborner',
            city: 'Berlin',
            state: 'Berlin',
            country: 'Germany'
        }
    )
    const res = await user.save();
    console.log(res);
}
addAddress('65f034a53592382b2557a88d');