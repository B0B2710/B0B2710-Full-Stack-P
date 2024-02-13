const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const loginRouter = require('./routes/login'); 
const signupRouter = require('./routes/signup');
const logoutRouter = require('./routes/logout');
const isTokenValidrouter = require('./routes/isTokenValid')
const app = express();
const connectDB = require('./db/dbConnect');
var corsOptions = {
  origin: ["http://localhost:8081", "http://localhost:3000"]
};

app.use(cors(corsOptions));



connectDB()
    .then(() => {
        console.log('Connected to the database successfully');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error.message);
    });



// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "cookie-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true
  })
);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

// Mount the login and signup routers
app.use("/auth/api/login", loginRouter);
app.use("/auth/api/signup", signupRouter);
app.use('/auth/api/logout', logoutRouter);
app.use('/checkToken', isTokenValidrouter);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
