import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
}

const peristedReducer = persistReducer(persistConfig, rootReducer);

export const configurePersistedStore = () => {
    let store = createStore(peristedReducer, applyMiddleware(thunk));
    let persistor = persistStore(store);
    return {
        store,
        persistor
    }
}


