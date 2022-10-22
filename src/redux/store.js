import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

// reducers
import contactsReducer from './contacts/contacts-reducer';

const contactsPersistConfig = {
        key: 'root',
        storage,
    }


const persistedConatctsReducer = persistReducer(contactsPersistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        books: persistedConatctsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);