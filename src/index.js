const express = require('express');
const cors = require('cors');
const app = express();
const upload_routes = require('./routes/upload_routes');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.use('/api', upload_routes);

const listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
