import table from 'modules/table/reducers';
import { reducer as notifications } from 'react-notification-system-redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    table,
    notifications,
});

export default rootReducer;
