const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const cloudinary = require('cloudinary');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// app.use(express.static(__dirname+'/../build'));

// controllers
const authControllers = require('./controllers/auth-controllers');
const postControllers = require('./controllers/post-controllers');
const userControllers = require('./controllers/users-controllers');
const careControllers = require('./controllers/care-controllers');
const messageControllers = require('./controllers/message-controllers.js');

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, REACT_APP_CLOUD_NAME, CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET } = process.env;

app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
  }));

cloudinary.config({ 
  cloud_name: REACT_APP_CLOUD_NAME, 
  api_key: CLOUDINARY_API_KEY, 
  api_secret: CLOUDINARY_API_SECRET 
});

massive(CONNECTION_STRING).then(function(db) {
    app.set("db", db);
    console.log("db is connected");
}).catch(err => {
    console.log(err);
})

// auth controllers
app.post('/api/logout', authControllers.logout);
app.get('/api/user-data', authControllers.userData);
app.get('/api/secure-data', authControllers.checkLoggedIn, authControllers.secureUserData);

// post controllers
app.get('/api/posts', postControllers.getPosts);
app.get('/api/liked/:postid', postControllers.getLikedPosts);
app.get('/api/filter/:filter', postControllers.filter);
app.put('/api/like/:postid', postControllers.likePost);
app.put('/api/love/:postid', postControllers.lovePost);
app.post('/api/newlike/:postid', postControllers.likeNewPost);
app.get('/api/comments/:postid', postControllers.getComments);
app.post('/api/comment/:postid', postControllers.leaveComment);
app.post('/api/newpost', postControllers.newPost);
app.get('/api/reported', postControllers.reported);
app.delete('/api/deletepost/:id', postControllers.deletePost);
app.put('/api/report', postControllers.report);


// care providers 
app.get('/api/addresses', careControllers.getAddresses);
app.post('/api/newcareprovider', careControllers.newCareProvider);
app.post('/api/newaddress', careControllers.newAddress);

// messages
app.get('/api/thread/:id', messageControllers.getConvo);
app.get('/api/messages', messageControllers.getMessages);
app.post('/api/newconvo', messageControllers.newConvo);
app.post('/api/newmessage', messageControllers.newMessage);
app.get('/api/last/:id', messageControllers.getLastMessage);

// users
app.get('/api/getuserinfo', userControllers.getUserInfo);
app.get('/api/familyInfo', userControllers.getFamilyInfo);
app.put('/api/parentinfo', userControllers.updateParentInfo);
app.put('/api/userinfo', userControllers.updateUserInfo);
app.put('/api/updatefamily', userControllers.updateFamilyMember);
app.post('/api/addfamily', userControllers.addFamilyMember);
app.post('/api/newparent', userControllers.createParentInfo);

server.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port: ${SERVER_PORT}`);
})