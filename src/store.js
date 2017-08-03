import { createStore } from 'redux';

export const changeLanguage = (language) => ({
    type: 'CHANGE_LANGUAGE',
    language
});

export const lang = (state = 'pt-br', action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return action.language
        default:
            return state;
    }
};

let store = createStore(lang);

export default store;