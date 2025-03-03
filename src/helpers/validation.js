export const charactersLength = (str) => {
  const result = str.length;
  return result;
};

export const validatePostText = (text) => {
  let errors = false;

  if (text.length > 100) {
    errors = true;
  }
  return errors;
};

export const validateCommentText = (text) => {
  let errors = false;

  if (text.length >40) {
    errors = true;
  }
  return errors;
};
