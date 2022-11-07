import styled from 'styled-components';

const StyledCategorie = styled.li`
  color: var(--font-color-second);
  font-size: 0.8rem;
  background-color: var(--highlight-color);
  padding: 0.4rem 0.8rem;
  border-radius: 16px;
`;

const StyledCategories = styled.ul`
  display: flex;
  gap: 0.8rem;
`;

export { StyledCategorie, StyledCategories };
