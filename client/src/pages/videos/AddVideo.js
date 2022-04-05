import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Input } from '../../components';

const StyledInput = styled(Input)`
  margin-right: 10px;
`;

const FormControl = styled.div`
  display: flex;
`;

const ErrorControl = styled.div`
  text-align: left;
  color: red;
`;

const validationSchema = Yup.object().shape({
  videoId: Yup.string()
    .min(11, 'Video id must be 11 characters.')
    .max(11, 'Video id must be 11 characters.')
    .required('Video id is required.'),
});

const AddVideo = ({ addVideoHandler }) => {
  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      videoId: '',
    },
    validationSchema,
    onSubmit: (values, actions) => {
      addVideoHandler(values.videoId);
      actions.resetForm();
    },
  });

  return (
    <form noValidate onSubmit={handleSubmit}>
      <FormControl>
        <label htmlFor="videoId" />
        <StyledInput
          id="videoId" 
          name="videoId"
          type="text"
          onChange={handleChange}
          value={values.videoId}
          placeholder="Enter Video ID"
          required
        />
        <button type="submit">Add</button>
      </FormControl>
      {errors && errors.videoId && <ErrorControl>{errors.videoId}</ErrorControl>}
    </form>
  )
};

export default AddVideo;
