const mongoose = require('mongoose');

const URI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const init = async () => {
    try {
        await mongoose.connect(URI, {
            authSource: 'admin',
            user: process.env.DB_USERNAME,
            pass: process.env.DB_PASSWORD,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Db si connected...');
    } catch (error) {
        console.log('Error connection DB : ', error);
    }
};

module.exports = { init };
