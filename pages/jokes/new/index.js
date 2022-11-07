import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import JokeForm from '../../../components/JokeForm';

export default function NewJokePage() {
  const [error, setError] = useState(false);

  async function sendJokeToDatabase(joke) {
    const response = await fetch('/api/jokes', {
      method: 'POST',
      body: JSON.stringify(joke),
    });
    if (response.status !== 201) {
      setError(true);
    }
    Router.push('/');
  }

  return (
    <main>
      <h1>Add new bad Joke</h1>
      <JokeForm onSubmit={sendJokeToDatabase} />
      <hr />
      <button onClick={() => Router.push('/')}>cancel</button>
    </main>
  );
}
