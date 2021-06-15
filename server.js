require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const session = require('express-session');
const methodOverride = require('method-override');

// CONTROLLER VARIABLES
const dogsController = require('./controllers/pawsanddogs');
const usersControllers = require('./controllers/users');
const sessionsControllers = require('./controllers/sessions');

// MIDDLEWARE
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use((req, res, next) => {
	  next() 
	});

app.use(session({
      secret: process.env.SECRET, 
      resave: false, 
      saveUninitialized: false 
    })
  );

// MONGO/MONGOOSE CONFIG.
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODBURI;
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
app.use('/users', usersControllers);
app.use('/sessions', sessionsControllers);

// HOMEPAGE ROUTE
app.get('/', (req, res) => {
    res.render('home.ejs', {
		currentUser: req.session.currentUser
	})
})


// LISTENER
app.listen(port, () => {
    console.log('Server is listening at port: ', port)
});