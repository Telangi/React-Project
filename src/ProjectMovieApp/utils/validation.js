export const validateSignup = ({
  name,
  email,
  password,
}) => {

  const errors = {};

  if (!name.trim()) {
    errors.name = 'Name is required';
  }

  if (!email.trim()) {
    errors.email = 'Email is required';
  } else if (
    !/\S+@\S+\.\S+/.test(email)
  ) {
    errors.email = 'Invalid email';
  }

  if (!password.trim()) {
    errors.password =
      'Password is required';
  } else if (password.length < 6) {
    errors.password =
      'Password must be 6 characters';
  }

  return errors;
};