const express = require('express');
const app = express();
const port = 3002;
const methodOverride = require('method-override');

// CONTROLLER VARIABLES
const dogsController = require('./controllers/pawsanddogs');

// MIDDLEWARE
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// MONGO/MONGOOSE CONFIG.
const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/dogs';
const db = mongoose.connection;

mongoose.connect(mongoURI, {
	useFindAndModify:false,
	useNewUrlParser:true,
	useUnifiedTopology: true
}, ()=>{
	console.log("database connection checked");
})

// ERROR / SUCCESS MESSAGES
db.on('error', (err)=>{console.log('ERROR: ', err.message)})
db.on('connected', (err)=>{console.log('mongo connected')})
db.on('disconnected', (err)=>{console.log('mongo disconnected')})



// CONTROLLERS
app.use('/pawsanddogs', dogsController);

// HOMEPAGE ROUTE
app.get('/', (req, res) => {
    res.render('home.ejs')
})


// LISTENER
app.listen(port, () => {
    console.log('Server is listening at port: ', port)
});