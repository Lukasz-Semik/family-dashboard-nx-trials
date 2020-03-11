export const setLocalStorageValue = (key: string, value: any) => {
  if (!localStorage) return null;

  return localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageValue = (key: string) => {
  if (!localStorage) return null;

  const value = localStorage.getItem(key);

  return value ? JSON.parse(value) : null;
};
