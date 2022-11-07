import { useState } from 'react';

import styled from 'styled-components';

export default function JokeForm({ onSubmit, content = {} }) {
  const { text, author, categories } = content;

  const [categorieCounter, setCategorieCounter] = useState(0);

  function handleButtonClick() {
    setCategorieCounter(categorieCounter + 1);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const categoriesArray = formData.getAll('categories');
    const data = Object.fromEntries(formData);

    onSubmit({ ...data, categories: categoriesArray });
    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor='joke-input'>Joke:</label>
      <textarea id='joke-input' type='text' name='text' required defaultValue={text} />
      <label htmlFor='author-input'>Author:</label>
      <input id='author-input' type='text' name='author' required defaultValue={author} />
      <div>
        <label htmlFor='first-category-input'>Category:</label>
        <input id='first-category-input' type='text' name='categories' required />
      </div>
      {[...Array(categorieCounter)].map((_, index) => (
        <div key={index}>
          <label htmlFor='second-category-input'>Category:</label>
          <input id='second-category-input' type='text' name='categories' />
        </div>
      ))}
      <button type='button' onClick={handleButtonClick}>
        one more categorie
      </button>
      <button type='submit'>save joke</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 80%;
`;
