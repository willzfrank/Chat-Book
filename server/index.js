const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const UserRoute = require('./routes/users.js');
const AuthRoute = require('./routes/auth.js');
const PostsRoute = require('./routes/posts');

// initialize dotenv
dotenv.config();

// initialize mongoose
mongoose.connect(
  'process.env.MONGO_URL',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to MongoDB');
  }
);

// MIDDLEWARES

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use('/api/users', UserRoute);
app.use('/api/auth', AuthRoute);
app.use('/api/posts', PostsRoute);

app.listen(process.env.PORT, () => {
  console.log(`server is running at ${process.env.PORT}`);
});
