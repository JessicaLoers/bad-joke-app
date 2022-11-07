import Head from 'next/head';
import useSWR from 'swr';
import Router from 'next/router';
import Link from 'next/link';
import { fetcher } from '../helpers/api';
import styled from 'styled-components';
import Card from '../components/Card';

export default function Home() {
  const { data, error } = useSWR('/api/jokes', fetcher);

  if (error) {
    console.log(error);
    return (
      <>
        <p>There is something wrong</p>
      </>
    );
  }

  if (!data) {
    return (
      <>
        <p>Loading... </p>
      </>
    );
  }

  async function deleteJoke() {
    await fetch(`/api/jokes/${id}`, {
      method: 'DELETE',
    });
    Router.push('/');
  }

  return (
    <div>
      <Head>
        <title>Bad Jokes</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Bad Jokes</h1>
        <Link href={'/jokes/new'}>Add new Joke</Link>
        <StyledCardList>
          {data?.map((card) => (
            <Card key={card.id} content={card} />
          ))}
        </StyledCardList>
      </main>
    </div>
  );
}

const StyledCardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
`;