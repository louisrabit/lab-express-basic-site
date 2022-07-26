const express = require('express');

const app = express();

app.use(express.static('public'));

//GET Route - expecting GET request
app.get('/home', (req, res, next) => {
    console.log(req);
    res.sendFile(__dirname + '/public/views/home.html');
  });
  
  app.get('/about', (req, res, next) => {
    console.log(req);
res.sendFile(__dirname + '/public/views/bruno.html');
  });
  
  app.get('/works', (req, res, next) => {
    console.log(req);
    res.sendFile(__dirname + '/public/views/work.html');
  }); 

  app.get('/gallery', (req, res, next) => {
    console.log(req);
    res.sendFile(__dirname + '/public/views/gallery.html');
    
  });  
/* 
  app.get('/images', (req, res, next) => {
    console.log(req);
    res.sendFile(__dirname + '/public/views/images/image2.jpg');
  }); 

 */


  app.listen(3000, () => {
    console.log('Running on port 3000');
  });