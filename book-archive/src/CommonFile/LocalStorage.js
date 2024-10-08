export const saveToLS = (what, e) => {
    if (e.length !== 0) {
      const jsonValue = JSON.stringify(e);
      localStorage.setItem(what, jsonValue);
    }
  };
  
  export const takeFromLS = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  };
  