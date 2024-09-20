export const useLocalStorage = () => {
  const setLocalStorageValue = (key: string, value: string) => {
    localStorage.setItem(key, value);
    return value;
  };

  const getLocalStorageValue = (key: string) => {
    return localStorage.getItem(key);
  };

  const deleteLocalStorageValue = (key: string) => {
    localStorage.removeItem(key);
  };

  return {
    setLocalStorageValue,
    getLocalStorageValue,
    deleteLocalStorageValue
  };
};
