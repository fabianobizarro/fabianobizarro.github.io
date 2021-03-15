export const SELECT_TAB = 'SELECT_TAB';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const selectTab = tab => ({
  type: SELECT_TAB,
  tab,
});

export const changeLanguage = language => ({
  type: CHANGE_LANGUAGE,
  language,
});
