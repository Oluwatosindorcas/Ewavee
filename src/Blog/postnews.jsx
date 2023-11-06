import React from "react";
import { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./postnews.css";

const PostNews = () => {
  const initialValues = {
    author: "",
    date: new Date().toISOString().split("T")[0],
    title: "",
    content: "",
    category: "", // Initialize category as an empty string
  };

  const validationSchema = Yup.object().shape({
    author: Yup.string().required("Author is required"),
    date: Yup.string().required("Date is required"),
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
    category: Yup.string().required("Category is required"),
  });

  const today = new Date().toISOString().split("T")[0]; // Get today's date in the required format

  useEffect(() => {
    initialValues.date = today;
  });

  const onSubmit = (values, { resetForm }) => {
    // Implement code to post the news to your backend or storage service.
    // After a successful post, reset the form with resetForm().
  };

  // Define an array of available categories
  const categories = [
    "Technology",
    "Business",
    "Sports",
    "Entertainment",
    "Health",
    "Science",
  ];

  return (
    <div className="container">
      <h2>Post News</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <Field type="text" id="author" name="author" />
            <ErrorMessage name="author" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <Field type="date" id="date" name="date" className="date-input" />
            <ErrorMessage name="date" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="title">News Title</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="content">News Content</label>
            <Field as="textarea" id="content" name="content" rows="1" />
            <ErrorMessage name="content" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="category">News Category</label>
            <Field
              as="select"
              id="category"
              name="category"
              className="select-category"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Field>
            <ErrorMessage name="category" component="div" className="error" />
          </div>
          <button type="submit" className="post-button">
            Post News
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default PostNews;
