import { SELECT_TAB, CHANGE_LANGUAGE } from "./actions";

export const lang = (state = 'pt-br', action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return action.language
        default:
            return state;
    }
};

export const selectedTab = (state = null, action) => {
    switch (action.type) {
        case SELECT_TAB:
            return action.tab
        default:
            return state
    }
};
