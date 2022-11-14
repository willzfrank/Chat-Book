const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const UserRoute = require("./routes/users.js");
const AuthRoute = require("./routes/auth.js");
const PostsRoute = require("./routes/posts");

// initialize dotenv
dotenv.config();

// initialize mongoose
var url = process.env.MONGO_URL;
// mongoose.connect(url, (err)=>{
//   if(err){throw err} else {console.log('connected to MongoDB')};
//   var status = mongoose.connection;
//   status.on('error', console.error.bind(console, 'Mongoose connection error'))
// }

//   ,

//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log('connected to MongoDB');
//   }
// );

mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
      w: "majority",
      j: true,
      wtimeout: 1000,
    },
  },

  () => {
    console.log("mongodb connected");
  }
);

// MIDDLEWARES

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", UserRoute);
app.use("/api/auth", AuthRoute);
app.use("/api/posts", PostsRoute);

app.listen(process.env.PORT, () => {
  console.log(`server is running at ${process.env.PORT}`);
});
