import { StyledCategorie, StyledCategories } from './CategoriesList.styled';

export default function CategoriesList({ categories }) {
  return (
    <>
      <StyledCategories>
        {categories.map((categorie, index) => (
          <StyledCategorie key={index}>{categorie}</StyledCategorie>
        ))}
      </StyledCategories>
    </>
  );
}
