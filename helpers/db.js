import mongoose, { model, models, Schema } from 'mongoose';
import crypto from 'crypto';

const URI = `mongodb+srv://justify:${process.env.MONGODB_PASSWORD}@cluster0.3peu2.mongodb.net/badJokes?retryWrites=true&w=majority`;

const jokeSchema = new Schema({
  id: String,
  text: String,
  author: String,
  categories: [String],
});

const Joke = models.Joke || model('Joke', jokeSchema);

async function connectDatabase() {
  await mongoose.connect(URI);
}

async function getAllJokes() {
  await connectDatabase();

  const jokes = await Joke.find({}, { _id: false, __v: false });
  return jokes;
}

async function createJoke(joke) {
  await connectDatabase();
  const createdJoke = await Joke.create({
    ...joke,
    id: crypto.randomUUID(), // facade pattern
  });

  return {
    ...createdJoke.toObject(),
    _id: undefined,
    __v_: undefined,
  };
}

async function getJokeById(id) {
  await connectDatabase();

  const joke = await Joke.findOne({ id }, { _id: false, __v: false });
  return joke;
}

async function updateJokeById(id, joke) {
  await connectDatabase();

  await Joke.updateOne({ id }, joke);
  const updatedJoke = await getJokeById(id);
  return updatedJoke;
}

async function deleteJokeById(id) {
  await connectDatabase();

  const joke = await getJokeById(id);
  await Joke.deleteOne({ id });
  return joke;
}

export { getAllJokes, createJoke, getJokeById, updateJokeById, deleteJokeById };
