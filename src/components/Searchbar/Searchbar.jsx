import { Btn, Head, Query, SearchForm } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { Formik } from 'formik';

export const Searchbar = ({searchQuery}) => {
    return (
      <Head>
        <Formik
          initialValues={{ query: '' }}
          onSubmit={val => {
            searchQuery(val)
          }}
        >
          <SearchForm>
            <Btn type="submit">
              <BsSearch />
            </Btn>

            <Query
              name="query"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        </Formik>
      </Head>
    );
}
