export const addCart = (product) => {
  return {
    type: "ADD",
    payload: product,
  };
};
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
