import React from "react";

//Css
import "./Header-styles.css";

//React icons
import { HiSearch } from "react-icons/hi";

//React router dom
import { Link } from "react-router-dom";

//Formik
import { Formik, Field, ErrorMessage, Form } from "formik";

//Yup
import * as Yup from "yup";

//Material UI
import SearchIcon from "@mui/icons-material/Search";

//Validation Schema

const validationSchema = Yup.object().shape({
  searchWord: Yup.string()
    .min(3, "*Debe tener mas de 3 caracteres")
    .max(20, "*Debe tener menos de 20 caracteres"),
});

const handleSubmitSearch = (searchTerm) => {
  const { searchWord } = searchTerm;

  if (searchWord == "") {
    return;
  }

  console.log(searchWord);
};

const SearchBar = () => {
  return (
    <>
      <div className="search">
        <Formik
          initialValues={{ searchWord: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            let searchTerm = {};

            searchTerm = {
              searchWord: values.searchWord,
            };

            handleSubmitSearch(searchTerm);
          }}
        >
          {({ errors }) => (
            <Form>
              <button className="search-button" type="submit">
                <SearchIcon />
              </button>
              <Field type="text" name="searchWord" placeholder="Search" />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SearchBar;
