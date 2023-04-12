import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import Reducer from "./reducer";
import Saga from "./saga";

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: Reducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            // Need more research
            serializableCheck: false,
        }),
        sagaMiddleware,
    ],
});

sagaMiddleware.run(Saga);

export default store;
