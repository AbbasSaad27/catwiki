export const makeUrlParam = (name) => {
  return name.toLowerCase().replaceAll(" ", "-");
};
