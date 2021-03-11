export const PTBR = 'pt-br';
export const ENUS = 'en-us';

export const getLanguageFromQueryString = () => {
  const value = new URLSearchParams(window.location.search).get('lang');

  return value;
};

export const getLanguageFromDocument = () => {
  const containerElement = document.getElementById('root');
  const value = containerElement.getAttribute('lang');

  return value;
};

export const getLanguage = () => {
  const queryLanguage = getLanguageFromQueryString();
  const bodyLanguage = getLanguageFromDocument();
  const lang = queryLanguage || bodyLanguage;

  return lang === PTBR || lang === ENUS ? lang : PTBR;
};
