import { toast } from "react-toastify";

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
  if (storedAppData.includes(id)) {
    if (storedAppData) {
      toast("This app has been added in intallation page");
    } else {
      toast("This data is exist ");
    }
  } else {
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("installation", data);
  }
};
