export const AppActionTypes = {
  SELECT_LOCALE: 'SELECT_LOCALE',
};

const selectLocale = locale => ({
  type: AppActionTypes.SELECT_LOCALE,
  payload: locale,
});

export const AppActions = { selectLocale };
