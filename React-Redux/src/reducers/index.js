import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';
import { formReducer } from './formReducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    form: formReducer,
    auth: authReducer,
    // ... tambahkan reducer lain jika ada
});

export default rootReducer;