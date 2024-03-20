const express = require('express')
const app = express();
const shelterRoutes = require('./routes/shelter')
const dogRoutes = require('./routes/dogs')
const adminRoutes = require('./routes/admin')

app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes);


app.listen('2300', () => {
    console.log('Serving app on local host 2300');
})