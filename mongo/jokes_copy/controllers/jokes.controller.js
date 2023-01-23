const { Joke } = require("../models/jokes.model");
const { createJoke,
    getAllJokes,
    getJokeById,
    deleteJokeById,
    getJokeByIdAndUpdate
} = require("../service/jokes.services");

const handleCreateJoke = async (req, res) => {
    console.log("controller: handleCreateJoke req.body: ", req.body);
    try {
        const Joke = await createJoke(req.body);
        return res.json(Joke);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllJokes = async (req, res) => {
    console.log("controller: handleGetAllJokes");
    try {
        const Jokes = await getAllJokes();
        return res.json(Jokes);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetJokeById = async (req, res) => {
    console.log("controller: handleGetJokeById req.params: ", req.params.id);
    try {
        const Joke = await getJokeById(req.params.id);
        return res.json(Joke);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteJokeById = async (req, res) => {
    console.log("controller: handleDeleteJokeById req.params: ", req.params.id);
    try {
        const Joke = await deleteJokeById(req.params.id);
        return res.json(Joke);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateJokeById = async (req, res) => {
    console.log("controller: handleUpdateJokeById req.params: ", req.params.id, "\n req.body: ", req.body);
    try {
        const Joke = await getJokeByIdAndUpdate(req.params.id, req.body);
        return res.json(Joke);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetRandomJoke = async () => {
    console.log("service: getRandomJoke");
    const allJokes = await Joke.find();
    const randomIndex = Math.floor(Math.random() * allJokes.length);
    console.log(allJokes[randomIndex]);
    return allJokes[randomIndex];
}

module.exports = {
    handleCreateJoke,
    handleGetAllJokes,
    handleGetJokeById,
    handleDeleteJokeById,
    handleUpdateJokeById,
    handleGetRandomJoke
}