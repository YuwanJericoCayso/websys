const express = require('express');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');

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
    { id: 1, username: 'usernem', password: 'pasward' },
    { id: 2, username: 'dead', password: 'pool' }
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
    { id: 1, username: 'usernem', password: 'pasward' },
    { id: 2, username: 'dead', password: 'pool' }
  ];
  
  const user = users.find(u => u.id === id);
  done(null, user);
});

app.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Login successful!', user: req.user });
});

app.listen(3000, () => {
  console.log(`Server has started at http://localhost:3000`);
});