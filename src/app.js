if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors')

const theatersRouter = require('./theaters-route/theaters.router')
const reviewsRouter = require('./reviews-route/reviews.router')
const moviesRouter = require('./movies-route/movies.router')
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

app.use(express.json());

app.use(cors());

app.use("/theaters", theatersRouter);
app.use("/reviews", reviewsRouter)
app.use("/movies", moviesRouter)


app.use(notFound);
app.use(errorHandler);

module.exports = app;
