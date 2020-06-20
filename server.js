const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var port = process.env.PORT || 5000;

const app = express();

//Static folder
app.use(express.static(__dirname + '/public'));

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
