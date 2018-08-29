import { createStore, combineReducers } from 'redux';
import { lang, selectedTab } from "./reducers";

const reducers = combineReducers({
    lang,
    selectedTab
});

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState == null){
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) {
        console.log(error)
    }
};

const store = createStore(
    reducers,
    loadState()
);

export default store;
