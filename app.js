require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { errorHandling } = require('./middlewares/error-hanlder');
const { init } = require('./helpers/db');

const PORT = process.env.NODE_PORT || 3000;

init();
const app = express();

app.use(express.json());
app.use(cors());

app.use('*', () => {
    throw new Error('Route not found...');
});

app.use(errorHandling);

app.listen(PORT, () => {
    console.log(`Server listenig on port::${PORT}`);
});
