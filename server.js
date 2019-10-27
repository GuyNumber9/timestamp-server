let express = require('express');
let timestampRoutes = require('./routes/timestamp');

let app = express();

app.use('/api/timestamp/', timestampRoutes);

app.listen(3000);