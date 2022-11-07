import useSWR from 'swr';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import JokeForm from '../../../../components/JokeForm';
import { fetcher } from '../../../../helpers/api';

export default function EditJokeDetailsPage() {
  const { query } = useRouter();
  const { id } = query;

  const { data, mutate } = useSWR(`/api/jokes/${id}`, fetcher);

  if (!data) return 'loading';

  async function handleSubmit(joke) {
    await fetch(`/api/jokes/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(joke),
    });
    mutate();
    Router.push(`/jokes/${id}`);
  }

  return (
    <main>
      <Link href={'/'}>go back</Link>
      <h1>Edit Joke</h1>
      <JokeForm onSubmit={handleSubmit} content={data} />
    </main>
  );
}
