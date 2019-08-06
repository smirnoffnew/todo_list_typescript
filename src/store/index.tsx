import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { taskReducer } from "./tasks/reducers";

function saveToLocalStorage(state:any) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

const persistedState = loadFromLocalStorage();

const rootReducer = combineReducers({
    tasks: taskReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const middlewares = [thunkMiddleware];
const middleWareEnhancer = applyMiddleware(...middlewares);
const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(middleWareEnhancer)
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;





// export default function configureStore() {
//     const middlewares = [thunkMiddleware];
//     const middleWareEnhancer = applyMiddleware(...middlewares);

//     const store = createStore(
//         rootReducer,
//         composeWithDevTools(middleWareEnhancer)
//     );

//     return store;
// }