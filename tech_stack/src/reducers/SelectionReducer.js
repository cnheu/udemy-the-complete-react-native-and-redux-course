export default (state = null, action) => {
  // console.log(state);
  // switch statement informs us of what the reducer does
  switch (action.type) {
    case 'select_library':
      // return the libraryId
      return action.payload;
    default:
      // return existing state
      return state;
  }
};
