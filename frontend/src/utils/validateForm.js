const validateFormValues = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'You must enter your name';
  }

  if (values.name.length < 3) {
    errors.name = 'Name should be at least 3 characters long!';
  }

  if (!values.email) {
    errors.email = 'You must provide an email address';
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Please provide a valid email address';
  }

  if (values.message.length < 20) {
    errors.message = 'Message should be at least 20 characters long!';
  }

  return errors;
};

export default validateFormValues;
