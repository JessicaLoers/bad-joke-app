import useSWR from 'swr';
import Router, { useRouter } from 'next/router';
import { fetcher } from '../../../helpers/api';
import styled from 'styled-components';
import Link from 'next/link';
import CategoriesList from '../../../components/CategoriesList';
import Svg from '../../../components/Svg';

export default function JokeDetailsPage() {
  const { query } = useRouter();
  const { id } = query;
  const { data, error } = useSWR(`/api/jokes/${id}`, fetcher);

  async function deleteJoke() {
    await fetch(`/api/jokes/${id}`, {
      method: 'DELETE',
    });
    Router.push('/');
  }

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

  return (
    <main>
      <Link href={'/'}>go back</Link>
      <StyledJokeWrapper>
        <StyledActionsWrapper>
          <h1>Joke Details</h1>
          <Link href={`/jokes/${id}/edit`}>
            <Svg variant='edit' color='#2D3748' />
          </Link>
          <StyledDeleteButton onClick={deleteJoke}>
            <Svg variant='delete' color='#2D3748' />
          </StyledDeleteButton>
        </StyledActionsWrapper>
        <p>{data.text}</p>
        <span>
          Author:{' '}
          <em>
            <strong>{data.author}</strong>
          </em>
        </span>
        <CategoriesList categories={data.categories} />
      </StyledJokeWrapper>
    </main>
  );
}

const StyledJokeWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  margin: 1rem auto;
`;

const StyledActionsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  align-items: flex-end;
`;

const StyledDeleteButton = styled.button`
  background-color: transparent;
  border: none;
`;
