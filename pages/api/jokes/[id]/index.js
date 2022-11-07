import { getJokeById, updateJokeById, deleteJokeById } from '../../../../helpers/db';

async function handler(request, response) {
  console.log(1, request.query);
  const { id } = request.query;
  if (request.method === 'GET') {
    const joke = await getJokeById(id);
    response.status(200).json(joke);
  } else if (request.method === 'PATCH') {
    const joke = JSON.parse(request.body);
    const updatedJoke = await updateJokeById(id, joke);
    response.status(200).json(updatedJoke);
  } else if (request.method === 'DELETE') {
    const joke = await deleteJokeById(id);
    response.status(200).json(joke);
  } else {
    response.status(405).setHeader('Allow', ['GET', 'PATCH', 'DELETE']).send();
  }
}

export default handler;
