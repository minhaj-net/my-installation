export const getStoredData = () => {
  const storedAppSTR = localStorage.getItem("installation");
  if (storedAppSTR) {
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  } else {
    return [];
  }
};

export const addToStoredDB = (id) => {
  const storedAppData = getStoredData();
  storedAppData.push(id);
  const data = JSON.stringify(storedAppData);
  localStorage.setItem("installation", data);
};
