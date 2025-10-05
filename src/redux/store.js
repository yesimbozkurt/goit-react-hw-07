
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import filtersReducer from './filtersSlice'
import contactsReducer from './contactsSlice'

const contactsPersistConfig = {
    key: "contacts",
    storage,
    whitelist: ["items"],
};

// const rootReducer = combineReducers({
//     contacts: contactReducer,
//     filters: filterReducer,
// });
const rootReducer = combineReducers({
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
    filters: filtersReducer,
});

// const persistedReducer = persistReducer(contactsPersistConfig, rootReducer)

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
export default store;
