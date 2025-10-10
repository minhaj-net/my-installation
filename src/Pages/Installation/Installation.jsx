import React, { useEffect, useState } from "react";
import useApp from "../../Hooks/useCard";
import { getStoredData } from "../../Utility/addToDB";
import InstallationCard from "../../Component/InstallationCard/InstallationCard";
import LoadingSpinner from "../../Component/LoadingSpiner/LoadingSpiner";
import { toast } from "react-toastify";

const Installation = () => {
  const data = useApp();
  const cardData = data.apps;

  const [sort, setSort] = useState("none");
  const [appList, setAppList] = useState([]);
  useEffect(() => {
    const storedAppData = getStoredData();
    const convartedStoredApp = storedAppData.map((id) => parseInt(id));
    const myAppList = cardData.filter((app) =>
      convartedStoredApp.includes(app.id)
    );
    setAppList(myAppList);
  }, [cardData]);

  const handleRemove = (id) => {
    handleToast();
    const existingList = JSON.parse(localStorage.getItem("installation"));
    const updatedList = existingList.filter((p) => Number(p) !== Number(id));
    localStorage.setItem("installation", JSON.stringify(updatedList));

    const updatedAppList = appList.filter((p) => Number(p.id) !== Number(id));
    setAppList(updatedAppList);
  };
  const handleToast = () => {
    toast(`App Uninstall Successfully`);
  };

  const sortedIteam = (() => {
    if (sort === "size-asc") {
      return [...appList].sort((a, b) => a.downloads - b.downloads);
    } else if (sort === "size-dsc") {
      return [...appList].sort((a, b) => b.downloads - a.downloads);
    } else {
      return appList;
    }
  })();

  const { loading, error } = useApp();
  if (loading) {
    return (
      <div className="full-page-center">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  if (error) {
    return <div>This iteam will not Fount</div>;
  }
  return (
    <div className="mt-4">
      <div className="text-center space-y-2 mb-8">
        <h3 className="text-[#001931] font-bold text-4xl">
          Your Installed Apps
        </h3>
        <p className="text-[#627382] text-[20px]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center ">
        <h3>{appList.length} Apps Found</h3>
        <div>
          <label className="from-control  w-full  max-w-xs">
            <select
              className="select  border-violet-500 pr-32"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="none">Sort By downloads</option>
              <option value="size-dsc">High-low</option>
              <option value="size-asc">Low-high</option>
            </select>
          </label>
        </div>
      </div>
      <div>
        {sortedIteam.map((app) => (
          <InstallationCard
            key={app.id}
            handleRemove={handleRemove}
            app={app}
          ></InstallationCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;
