import { combineReducers } from 'redux';

import settingsReducer from './settingsReducer';
import operationsReducer from './operationsReducer';

const rootReducer = combineReducers({
  settingsState: settingsReducer,
  operationsState: operationsReducer,
});

export default rootReducer;
