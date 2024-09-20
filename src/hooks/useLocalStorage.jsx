export const useLocalStorage = () => {
  const setLocalStorageValue = (key, value) => {
    localStorage.setItem(key, value);
    return value;
  };

  const getLocalStorageValue = (key) => {
    return localStorage.getItem(key);
  };

  const deleteLocalStorageValue = (key) => {
    localStorage.removeItem(key);
  };


  return {
    setLocalStorageValue,
    getLocalStorageValue,
    deleteLocalStorageValue
  };
};
