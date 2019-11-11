import * as React from 'react';
import { InjectedFormikProps, withFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../controls/Input';
import Button from '../../controls/Button';
import { SearchInput } from './types';

interface FormProps {
  handleSearch(searchInput: SearchInput): void;
}

interface FormValues {
  characters: string;
}

const InnerForm: React.SFC<InjectedFormikProps<FormProps, FormValues>> = (
  props,
) => (
  <form onSubmit={props.handleSubmit}>
    <div className="search-bar">
      <Input
        id="characters"
        name="characters"
        type="text"
        placeholder="Search character"
        data-testid="character-input"
        className="input search-bar-input is-large"
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.characters}
      />
      <Button
        label="Search"
        type="submit"
        data-testid="submit-search"
        className="button search-bar-button is-info is-large"
        disabled={props.isSubmitting}
      />
    </div>
        {/* <div className="column is-half">
          {props.touched.characters && props.errors.characters &&
          <span data-testid="error-title" className="has-text-danger">{props.errors.characters}</span>}
        </div> */}
  </form>
);

export const Search = withFormik<FormProps, FormValues>({
  mapPropsToValues: () => ({ characters: '' }),
  validationSchema: Yup.object().shape({
    characters: Yup.string()
      .min(1, 'Please input 1 characters or less')
      .required('Please input location'),
    },
  ),
  handleSubmit: (values, { props, setSubmitting, resetForm } ) => {
    const searchInput: SearchInput = { searchText: values.characters };
    props.handleSearch(searchInput);
    setSubmitting(false);
  },
})(InnerForm);

export default Search;