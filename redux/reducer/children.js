const setChild = (state, action) => {
  return {
    ...state,
    children: {
      ...state.children,
      [action.id]: action.child,
    },
  };
};

const removeChild = (state, action) => {
  const deletedC = { ...state.children };
  delete deletedC[action.id];
  return {
    ...state,
    children: { ...deletedC },
  };
};

export { setChild, removeChild };
