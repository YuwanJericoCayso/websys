const express = require('express');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'files/')
  },
  filename: function (req, file, cb) {
  cb(null, file.originalname)
  }
  });
  
const uploadToDisk = multer({ storage: storage });



const app = express();



app.use(cors());
app.use(express.json());

app.use(session({
  secret: 'supersecretkey',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy((username, password, done) => {
  const users = [
    { id: 1, username: 'usernem', password: 'pasward', role:'admin'},
    { id: 2, username: 'dead', password: 'pool', role:'student'}
  ];
  
  const user = users.find(u => u.username === username);
  
  if (!user) {
    return done(null, false, { message: 'Incorrect username.' });
  }
  
  if (user.password !== password) {
    return done(null, false, { message: 'Incorrect password.' });
  }
  
  return done(null, user);
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const users = [
    { id: 1, username: 'usernem', password: 'pasward' , role:'admin'},
    { id: 2, username: 'dead', password: 'pool' , role:'student'}
  ];
  
  const user = users.find(u => u.id === id);
  done(null, user);
});

// Authorization middleware for admin only
function requireAdmin(req, res, next) {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).send('you are not admin');
  }
}

// Authorization middleware for admin or student
function requireAdminOrStudent(req, res, next) {
  if (req.user && (req.user.role === 'admin' || req.user.role === 'student')) {
    next();
  } else {
    res.status(403).send('you are not authorized');
  }
}

app.post('/upload', requireAdmin, uploadToDisk.single('files'),(req, res) => {
    console.log(req.file);
    res.send({
      message: 'File uploaded successfully',
      filename: req.file.filename,
      size: req.file.size
    });

  });

app.get('/download',requireAdminOrStudent, function(req, res){
    const file = `${__dirname}/files/${req.query.filename}`;
    res.download(file);
  
  });

app.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Login successful!', user: req.user });
});



app.listen(3000, () => {
  console.log(`Server has started at http://localhost:3000`);
});