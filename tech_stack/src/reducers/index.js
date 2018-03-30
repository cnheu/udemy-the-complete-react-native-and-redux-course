import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer,
});

// Example of how the combinedReducers allows us to call the keys in state
//  console.log(store.getState());
//  ==> { libraries: [] }
