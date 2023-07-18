const express = require('express')
const app = express()   //method
const port = 3000 
const web = require('./routes/web')
const connectdb=require('./DB/connectdb')
const fileUpload = require('express-fileupload')

//temp file uploader
app.use(fileUpload({useTempFiles: true})) 
//to encode
app.use(express.urlencoded({ extended:true}));
//connect db
connectdb()
//connect flash and sessions
const session = require('express-session')
const flash = require('connect-flash');
//cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser())
//message
app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000},
  resave: false,
  saveUninitialized: false,
}));
//flash message 
app.use(flash());
//static files
app.use(express.static('public'))
// ejs set for html
app.set('view engine', 'ejs')
//router load
app.use('/',web)
//server start
app.listen(port, () => {
  console.log(`Server start on port localhost: ${port}`)  //template string
})