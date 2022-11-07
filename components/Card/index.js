import Link from 'next/link';
import styled from 'styled-components';
import CategoriesList from '../CategoriesList';

export default function Card({ content }) {
  const { id, text, author, categories } = content;
  return (
    <StyledCardWrapper>
      <p>{text}</p>
      <CategoriesList categories={categories} />
      <Link href={`/jokes/${id}`}>Show Details</Link>
    </StyledCardWrapper>
  );
}

const StyledCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f7fafc;
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px,
    rgb(0 0 0 / 12%) 0px 1px 18px 0px;
  min-height: 150px;
  padding: 0 0.8rem;
`;
