const express = require('express'),
      app = express(),
      session = require('express-session'),
      passport = require('passport'),
      config = require('./config/config'),
      checkLogedIn = require('./config/checkLogedIn'),
      dotenv = require('dotenv').config(),
      mongoose = require('mongoose'),
      quensCon = require('./controllers/Questions'),
      URI = process.env.MONGOOS_URI,
      PORT = process.env.PORT || 2000;

      // initialize facebook passport middleare
      require('./config/facebook-auth')(passport);

      // establish mongodb connections
      mongoose.connect(URI,{
        useNewUrlParser:true
      }).then(()=>{
        console.log("mongodb is successfully connected");
      }).catch((err)=>{
        console.log(err)
      })

      // implement session storeage
     app.use(session({
       resave:false,
       saveUninitialized:true,
       secret: "SECRET"
     }))

     app.use(passport.initialize())
     app.use(passport.session())

     // body parser
     app.use(express.urlencoded({extended:false}));
     
     // main entry route for testing purpose
      app.get('/', (req,res)=>{
          res.send("hey your are an awsome dev any thing is working perfectly");
      })

      //establish facebook login system
      app.get('/auth/user/facebook', passport.authenticate('facebook',{
        scope:['public_profile', 'email']
      }))

      // route to be redirected when facebook succeeded
      app.get('/auth/facebook/callback',(req,res)=>{
        res.send('authentication done succefully')
      })

      // a protected route to check for authorization
      app.get('/user/courses', checkLogedIn, (req,res)=>{
        res.send("welcome to the quiz palace")
      } )

      app.post('/question/add', quensCon.addQuestion);

      app.get('/test/start/:category', quensCon.testQuest)

      app.listen(PORT, console.log('server is running on port'+ PORT));
