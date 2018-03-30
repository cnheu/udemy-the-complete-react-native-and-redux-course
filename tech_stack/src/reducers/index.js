import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  libraries: LibraryReducer,
});

// Example of how the combinedReducers allows us to call the keys in state
//  console.log(store.getState());
//  ==> { libraries: [] }
