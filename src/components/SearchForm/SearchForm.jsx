import { useLocation, useNavigate } from 'react-router-dom';
import { Input, Form, SearchButton, Icon } from './SearchForm.styled';

export function SearchForm() {
  const location = useLocation();
  const navigate = useNavigate();

  function onSubmitForm(e) {
    e.preventDefault();
    const value = e.target.elements.query.value;

    navigate({
      ...location,
      search: `query=${value}`,
    });
  }

  return (
    <Form onSubmit={onSubmitForm}>
      <Input name="query" type="text" placeholder="SearchMovies" />
      <SearchButton type="submit">
        <Icon />
      </SearchButton>
    </Form>
  );
}
