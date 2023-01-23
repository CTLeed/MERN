const express = require("express");

const {
    handleCreateJoke,
    handleGetAllJokes,
    handleGetJokeById,
    handleDeleteJokeById,
    handleUpdateJokeById,
    handleGetRandomJoke
} = require("../controllers/jokes.controller")

const router = express.Router();

router.get("/", handleGetAllJokes);
router.get("/:id", handleGetJokeById);
router.get("/random", handleGetRandomJoke)
router.post("/new", handleCreateJoke);
router.put("/update/:id", handleUpdateJokeById);
router.delete("/delete/:id", handleDeleteJokeById);


module.exports = { JokeRouter: router }