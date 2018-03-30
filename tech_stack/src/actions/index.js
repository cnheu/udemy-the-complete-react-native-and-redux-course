
// action creators return an action
// an action is just an object with a type

export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId,
  };
};
