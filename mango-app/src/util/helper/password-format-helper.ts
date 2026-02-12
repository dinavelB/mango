export const validatePassword = (password: string) => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("Must be at least 8 characters");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Must contain at least one capital letter");
  }

  if (!/\d/.test(password)) {
    errors.push("Must contain at least one number");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
